import React from 'react';
import { useFormContext } from 'react-hook-form';

const UniversalCheckboxes = ({ name, label, options, placeholder }) => {
  const { register, watch, formState: { errors } } = useFormContext();
  const selectedOptions = watch(name, []); // Default value

  return (
    <div className="checkbox-group">
      <label className="checkbox-label">{label} *</label>
      <div className="checkbox-options">
        {options.map((option) => (
          <div key={option.value} className="checkbox-item">
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
        <div className="checkbox-other">
          <label>
            <input
              type="checkbox"
              value="Other"
              {...register(name)}
            />
            Other
          </label>
          {Array.isArray(selectedOptions) && selectedOptions.includes('Other') && (
            <input
              type="text"
              className="checkbox-other-input"
              placeholder={placeholder || "Specify your option"}
              {...register(`${name}Other`, { required: 'Please specify your option' })}
            />
          )}
        </div>
      </div>
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
      {Array.isArray(selectedOptions) && selectedOptions.includes('Other') && errors[`${name}Other`] && (
        <p className="error-message">{errors[`${name}Other`].message}</p>
      )}
    </div>
  );
};

export default UniversalCheckboxes;
