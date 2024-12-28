import React from 'react';
import { useFormContext } from 'react-hook-form';

const FavoriteTech = ({ name }) => {
  const { register, watch, formState: { errors } } = useFormContext();
  const watchFavoriteTech = watch(name);

  return (
    <div>
      <label>My favorite tech (best) *</label>
      <div>
        {['Vue', 'React', 'Angular', 'NodeJS', 'SAP Fiori', 'Other'].map((tech) => (
          <div key={tech}>
            <label>
              <input
                type="radio"
                value={tech}
                {...register(name, { required: 'Please select your favorite tech' })}
              />
              {tech}
            </label>
            {tech === 'Other' && watchFavoriteTech === 'Other' && (
              <input
                type="text"
                placeholder="Specify your tech"
                {...register('otherTech', { required: 'Please specify your tech' })}
              />
            )}
          </div>
        ))}
      </div>
      {errors[name] && <p>{errors[name].message}</p>}
      {errors.otherTech && <p>{errors.otherTech.message}</p>}
    </div>
  );
};

export default FavoriteTech;
