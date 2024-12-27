import { useState, useEffect } from 'react';

export function useElementSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const updateSize = () => {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    };

    updateSize(); // Ініціалізація

    window.addEventListener('resize', updateSize); // Слідкуємо за змінами розмірів вікна
    return () => window.removeEventListener('resize', updateSize); // Очищення
  }, [ref]);

  return size;
}
