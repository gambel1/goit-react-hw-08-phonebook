import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Main } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Main className="container">
        <ContactForm />
        <Filter />
        {isError && <p>{isError}</p>}
        {isLoading && <Loader />}

        <ContactList />
      </Main>
    </>
  );
}
