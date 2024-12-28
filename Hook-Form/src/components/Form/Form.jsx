import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FavoriteTech from '../FavoriteTech/FavoriteTech';
import TechLevelMatrix from '../TechLevelMatrix/TechLevelMatrix';
import TextAreaBlock from '../TextAreaBlock/TextAreaBlock';
import YesNoQuestion from '../YesNoQuestion/YesNoQuestion';
import UniversalCheckboxes from '../UniversalCheckboxes/UniversalCheckboxes';
import './Form.module.css';

// Схема валідації
const schema = yup.object().shape({
  nameSurname: yup.string().required('Name, Surname is required'),
  team: yup.string().required('Your team is required'),
  favoriteTech: yup.string().required('Please select your favorite tech'),
  question1: yup.string().required('This field is required'),
  question2: yup.string().required('This field is required'),
  question3: yup.string().required('This field is required'),
otherTech: yup.string().when('favoriteTech', {
  is: 'Other',
  then: yup.string().required('Please specify your tech'),
}),
  learnTech: yup.array().min(1, 'Please select at least one tech'),
  learnTechOther: yup.string().when('learnTech', {
    is: (val) => Array.isArray(val) && val.includes('Other'),
    then: yup.string().required('Please specify your tech'),
  }),
  techLevels: yup.object().test(
    'one-answer-per-row',
    'Please select one level per technology',
    (obj) => obj && Object.keys(obj).every((key) => !!obj[key])
  ),
 additionalOptions: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one additional option'),  
 additionalOptions2: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one additional option'),  

});

const Form = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      learnTech: [],
      additionalOptions: [],
      additionalOptions2: [],
      question1: '',
      question2: '',
      question3: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  console.log('Errors:', methods.formState.errors);
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
       <UniversalCheckboxes
          name="learnTech"
          label="I want to learn tech"
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
          placeholder="Specify your tech"
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
        <UniversalCheckboxes
          name="additionalOptions"
          label="I'm interested to"
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
          {/* Поля тексту */}
          <TextAreaBlock
            name="goal1"
            label="#1 My goals on next time"
            placeholder="Your answer"
          />
          <TextAreaBlock
            name="goal2"
            label="#2 My goals on next time"
            placeholder="Your answer"
          />
          <TextAreaBlock
            name="goal3"
            label="#3 My goals on next time"
            placeholder="Your answer"
          />
            {/* Інші поля форми */}
          <YesNoQuestion
            name="question1"
            label="I want to work on new PreSales. MVP, POC or new projects "
            register={methods.register}
            error={methods.formState.errors.question1}
          />
          <YesNoQuestion
            name="question2"
            label="I want to speak on FCC meetup or other meetups "
            register={methods.register}
            error={methods.formState.errors.question2}
        />
          <UniversalCheckboxes
          name="additionalOptions"
          label="My topic in FCC"
          options={[
            { value: 'Option11', label: 'Global technology overview' },
            { value: 'Option12', label: 'Analytic and architecture topics' },
            { value: 'Option13', label: 'Technology battle' },
            { value: 'Option14', label: 'Anthill edetailer (internal stuff)' },
            { value: 'Option15', label: 'Anthill DX8 (internal stuff)' },
            { value: 'Option16', label: 'Pet projects discussions and showing' }, 
          ]}
        />
        <YesNoQuestion
            name="question3"
            label="I want to visit FCC meetup"
            register={methods.register}
          error={methods.formState.errors.question3}
        />
        <TextAreaBlock
            name="goal4"
            label="My idea of how to improve our work"
            placeholder="Your answer"
          />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
