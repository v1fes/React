import React from 'react';
import { useFormContext } from 'react-hook-form';

const TechLevelMatrix = ({ name, techOptions, levels }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label>My current level on tech *</label>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            {levels.map((level) => (
              <th key={level}>{level}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {techOptions.map((tech) => (
            <tr key={tech}>
              <td>{tech}</td>
              {levels.map((level) => (
                <td key={level}>
                  <input
                    type="radio"
                    value={level}
                    {...register(`${name}.${tech}`, { required: 'Select a level for all techs' })}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default TechLevelMatrix;