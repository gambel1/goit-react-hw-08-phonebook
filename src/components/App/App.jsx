import Layout from 'components/Layout/Layout';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
