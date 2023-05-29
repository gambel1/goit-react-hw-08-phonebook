import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input } from 'antd';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  // Ant Design library
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        className='container'
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>

      {/* <Formik
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

          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Form>
      </Formik> */}
    </>
  );
}
