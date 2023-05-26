import { register } from 'redux/auth/operations';
// import { ErrorMessage, Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
// import * as yup from 'yup';
import Button from '@mui/material/Button';

// const schema = yup.object().shape({
//   name: yup.string().min(2).max(70).required(),
//   email: yup.string().email('Invalid email address').required('Required'),
//   password: yup.string().min(4).required(),
// });

// const initialValues = {
//   username: '',
//   email: '',
//   password: '',
// };

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

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch(
  //     register({
  //       name: values.username,
  //       email: values.email,
  //       password: values.password,
  //     })
  //   );

  //   resetForm();
  // };

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     validationSchema={schema}
  //     onSubmit={handleSubmit}
  //   >
  //     <Form>
  //       <div>
  //         <label htmlFor="name">Username</label>
  //         <Field type="text" name="name" placeholder="username" />
  //         <ErrorMessage name="name" />
  //       </div>
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <Field type="email" name="email" placeholder="email" />
  //         <ErrorMessage name="email" />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <Field type="password" name="password" placeholder="password" />
  //         <ErrorMessage name="password" />
  //       </div>
  //       {/* <button type="submit">Register</button> */}
  //       <Button type="submit" variant="contained">
  //         Register
  //       </Button>
  //     </Form>
  //   </Formik>
  // );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      {/* <button type="submit">Register</button> */}
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
}
