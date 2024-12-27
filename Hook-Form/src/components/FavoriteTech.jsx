import React from 'react';
import { useFormContext } from 'react-hook-form';

const FavoriteTech = ({ name }) => {
  const { register, watch, formState: { errors } } = useFormContext();

  const watchFavoriteTech = watch(name);

  return (
    <div>
      <label>My favorite tech (best) *</label>
      <div>
        <label>
          <input type="radio" value="Vue" {...register(name)} />
          Vue
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="React" {...register(name)} />
          React
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="Angular" {...register(name)} />
          Angular
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="NodeJS" {...register(name)} />
          NodeJS
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="SAP Fiori" {...register(name)} />
          SAP Fiori
        </label>
      </div>
      <div>
        <label>
          <input type="radio" value="Other" {...register(name)} />
          Інше
        </label>
        {watchFavoriteTech === 'Other' && (
          <input
            type="text"
            placeholder="Specify your tech"
            {...register('otherTech')}
          />
        )}
      </div>
      {errors[name] && <p>{errors[name].message}</p>}
      {errors.otherTech && <p>{errors.otherTech.message}</p>}
    </div>
  );
};

export default FavoriteTech;
