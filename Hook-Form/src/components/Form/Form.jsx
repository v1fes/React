import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FavoriteTech from '../FavoriteTech/FavoriteTech';
import LearnTechCheckboxes from '../LearnTechCheckboxes/LearnTechCheckboxes';
import TechLevelMatrix from '../TechLevelMatrix/TechLevelMatrix';
import AdditionalCheckboxes from '../AdditionalCheckboxes/AdditionalCheckboxes';
import './Form.module.css';

// Схема валідації
const schema = yup.object().shape({
  nameSurname: yup.string().required('Name, Surname is required'),
  team: yup.string().required('Your team is required'),
  favoriteTech: yup.string().required('Please select your favorite tech'),
otherTech: yup.string().when('favoriteTech', {
  is: 'Other',
  then: yup.string().required('Please specify your tech'),
}),
  learnTech: yup.array().min(1, 'Please select at least one tech'),
  learnTechOther: yup.string().when('learnTech', {
    is: (val) => val?.includes('Other'),
    then: yup.string().required('Please specify your tech'),
  }),
  techLevels: yup.object().test(
    'one-answer-per-row',
    'Please select one level per technology',
    (obj) => obj && Object.keys(obj).every((key) => !!obj[key])
  ),
  additionalOptions: yup.array().min(1, 'Please select at least one option'),
  
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

        {/* Компонент для чекбоксів */}
        <LearnTechCheckboxes
          name="learnTech"
          options={[
            { value: 'JS', label: 'JS' },
            { value: 'TS', label: 'TS' },
            { value: 'React', label: 'React' },
            { value: 'Vue', label: 'Vue' },
            { value: 'Angular', label: 'Angular' },
            { value: 'NodeJS', label: 'NodeJS' },
            { value: 'SAP Fiori', label: 'SAP Fiori' },
            { value: 'React Native', label: 'React Native' },
            { value: 'Flutter', label: 'Flutter' },
          ]}
        />

        {/* Матриця рівнів */}
        <TechLevelMatrix
          name="techLevels"
          techOptions={[
            'JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS',
            'GraphQL', 'Wordpress', 'Drupal', 'Python', 'REST',
            'React Native', 'Flutter',
          ]}
          levels={[
            'Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert',
          ]}
        />

        {/* Додатковий блок з чекбоксами */}
        <AdditionalCheckboxes
          name="additionalOptions"
          options={[
            { value: 'Option1', label: 'develop presentations' },
            { value: 'Option2', label: 'develop DX8' },
            { value: 'Option3', label: 'develop complex app' },
            { value: 'Option4', label: 'develop hybrid react-native' },
            { value: 'Option5', label: 'develop internal small project' },
            { value: 'Option6', label: 'develop pet-projects' },
            { value: 'Option7', label: 'research for frontend competence center' },
        
       
          ]}
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
