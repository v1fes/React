import React from 'react';
import { useFormContext } from 'react-hook-form';

const TextAreaBlock = ({ name, label, placeholder }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label} *</label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: 'This field is required',
          minLength: { value: 10, message: 'Minimum 10 characters required' },
        })}
      />
      {errors[name] && (
        <p className="error-message">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaBlock;

