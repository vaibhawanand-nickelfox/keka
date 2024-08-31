## :InputForm

#### Core components of the FormInput Component

- Core
  - [InputForm](/Source/Components/InputForm/index.tsx)

### Basic Setup

You can directly call the component with some necessary props

For InputForm we can use below snippet

```jsx
<InputForm
  formHeading={<TitleOne title="Log in Here" />}
  formSubHeading={<TitleOne subTitle title="Please add your credential to continue" />}
  inputMode={"outlined"}
  inputStyle={styles.fieldContainer}
  fields={Lc.fields}
  onSubmit={(val) => Lc.handleLogin(val)}
  validationSchema={Lc.validationSchema}
/>
```

```js
const fields: FieldConfig[] = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      returnKeyType: 'next',
    },
    {
      name: 'password',
      label: 'Password',
      secureTextEntry: true,
      returnKeyType: 'done',
    },
  ];
const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required')
      .test('emailFormat', 'Invalid email', value => {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/.test(
          value || '',
        );
      }),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
```

#### **_Basic Props_**

_*Mandetory Props*_

- fields:- it is list of input fields that needs to be rendered in the Form
- onSubmit:- it is action that needs to be called when form is submitted
- validationSchema:- the validation schema of the form

_*Optional Props*_

- formHeading:- It is a component for rendering in header section.
- formSubHeading:- It is a component for rendering in sub header section.
- inputMode:- style of the input field 'flat' or 'outlined'.
- inputStyle:- container style of the input field.
