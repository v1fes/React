import React from 'react';
import { useFormContext } from 'react-hook-form';

const AdditionalCheckboxes2 = ({ name, options }) => {
  const { register, watch, formState: { errors } } = useFormContext();
  const selectedOptions2 = watch(name, []); // Дефолтне значення

  return (
    <div>
      <label> My topic in FCC*</label>
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
          {Array.isArray(selectedOptions2) && selectedOptions2.includes('Other') && (
            <input
              type="text"
              placeholder="Specify your option"
              {...register(`${name}Other`, { required: 'Please specify your option' })}
            />
          )}
        </div>
      </div>
      {errors[name] && <p>{errors[name].message}</p>}
      {Array.isArray(selectedOptions2) && selectedOptions2.includes('Other') && errors[`${name}Other`] && (
        <p>{errors[`${name}Other`].message}</p>
      )}
    </div>
  );
};

export default AdditionalCheckboxes2;