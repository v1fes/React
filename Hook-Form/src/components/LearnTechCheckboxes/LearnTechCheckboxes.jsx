import React from 'react';
import { useFormContext } from 'react-hook-form';

const LearnTechCheckboxes = ({ name, options }) => {
  const { register, watch, formState: { errors } } = useFormContext();
  const watchOptions = watch(name, []); // Дефолтне значення

  return (
    <div>
      <label>I want to learn tech *</label>
      <div>
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                {...register(name)}
              />
              {option.label}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input
              type="checkbox"
              value="Other"
              {...register(name)}
            />
            Other
          </label>
          {Array.isArray(watchOptions) && watchOptions.includes('Other') && (
            <input
              type="text"
              placeholder="Specify your tech"
              {...register(`${name}Other`, { required: 'Please specify your tech' })}
            />
          )}
        </div>
      </div>
      {errors[name] && <p>{errors[name].message}</p>}
      {Array.isArray(watchOptions) && watchOptions.includes('Other') && errors[`${name}Other`] && (
        <p>{errors[`${name}Other`].message}</p>
      )}
    </div>
  );
};

export default LearnTechCheckboxes;
