import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';


const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(4).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
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
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage name="password" />
          </div>

          {/* <button type="submit">Log In</button> */}
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Form>
      </Formik>
    </>
  );
}
