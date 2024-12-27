import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css'; 

//валідація
const schema = yup.object().shape({
  name: yup.string().required('Name, Surname is required'),
  team: yup.string().required('Your team is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name, Surname</label>
        <input
          id="name"
          type="text"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="team">Your team</label>
        <input
          id="team"
          type="text"
          {...register('team')}
        />
        {errors.team && <p>{errors.team.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
