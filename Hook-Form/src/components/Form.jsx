import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FavoriteTech from './FavoriteTech';
import './Form.css'; // Підключаємо стилі

// Схема валідації
const schema = yup.object().shape({
  nameSurname: yup.string().required('Name, Surname is required'),
  team: yup.string().required('Your team is required'),
  favoriteTech: yup.string().required('Please select your favorite tech'),
  otherTech: yup.string().when('favoriteTech', {
    is: 'Other',
    then: yup.string().required('Please specify your tech'),
  }),
});

const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Поле вводу для Name, Surname */}
        <div>
          <label htmlFor="nameSurname">Name, Surname *</label>
          <input
            id="nameSurname"
            type="text"
            {...methods.register('nameSurname')}
          />
          {methods.formState.errors.nameSurname && (
            <p>{methods.formState.errors.nameSurname.message}</p>
          )}
        </div>

        {/* Поле вводу для Your team */}
        <div>
          <label htmlFor="team">Your team *</label>
          <input
            id="team"
            type="text"
            {...methods.register('team')}
          />
          {methods.formState.errors.team && (
            <p>{methods.formState.errors.team.message}</p>
          )}
        </div>

        {/* Компонент для перемикачів */}
        <FavoriteTech name="favoriteTech" />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
