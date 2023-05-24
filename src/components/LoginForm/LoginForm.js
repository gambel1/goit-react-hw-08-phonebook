import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).max(70).required(),
  number: yup.number().min(4).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div>
            <label>Email</label>
            <input name="email" type="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label>Password</label>
            <input name="password" type="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}
