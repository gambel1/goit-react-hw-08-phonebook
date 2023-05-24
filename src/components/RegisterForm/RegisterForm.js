import { register } from 'redux/auth/operations';
import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).max(70).required(),
  number: yup.number().min(4).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Form>
        <div>
          <label>Username</label>
          <input type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
