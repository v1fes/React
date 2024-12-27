import React from 'react';
import { useFormContext } from 'react-hook-form';

const TechLevelMatrix = ({ name, techOptions, levels }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label>My current level on tech *</label>
      <table className="tech-level-matrix">
        <thead>
          <tr>
            <th>Technology</th>
            {levels.map((level, index) => (
              <th key={index}>{level}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {techOptions.map((tech, techIndex) => (
            <tr key={techIndex}>
              <td>{tech}</td>
              {levels.map((level, levelIndex) => (
                <td key={levelIndex}>
                  <input
                    type="radio"
                    value={level}
                    {...register(`${name}.${tech}`)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {errors[name] && (
        <p className="validation-error">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default TechLevelMatrix;
