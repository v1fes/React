import React from 'react';

const YesNoQuestion = ({ name, label, register, error }) => {
  return (
    <div>
      <label>{label} *</label>
      <div>
        <label>
          <input
            type="radio"
            value="Yes"
            {...register(name)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            {...register(name)}
          />
          No
        </label>
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default YesNoQuestion;
