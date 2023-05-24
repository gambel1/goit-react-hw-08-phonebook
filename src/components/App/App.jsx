// import ContactForm from '../ContactForm/ContactForm';
// import ContactsList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
// import Loader from '../Loader/Loader';
// import { AppContainer, AppTitle } from './App.styled';
import Layout from 'components/Layout/Layout';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  // const isError = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const { isRefreshing } = useAuth;

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
      </Route>
    </Routes>
  );
  // <AppContainer>
  //   <div>
  //     <AppTitle>Phonebook</AppTitle>
  //     <ContactForm />
  //   </div>
  //   <div>
  //     <AppTitle>Contacts</AppTitle>
  //     <Filter />
  //     {isError && <p>{isError}</p>}
  //     {isLoading && <Loader />}
  //     {!isLoading && <ContactsList />}
  //   </div>
  // </AppContainer>
}
