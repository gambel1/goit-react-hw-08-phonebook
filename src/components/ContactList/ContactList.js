import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';

import {
  ContactListUl,
  ContactListLi,
  ContactListSpan,
  ContactListButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactListUl>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListLi key={id}>
              <div className="box" style={{ display: 'flex', gap: '10px' }}>
                <ContactListSpan>{name}</ContactListSpan>
                <ContactListSpan>{number}</ContactListSpan>
              </div>
              <ContactListButton
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Delete
              </ContactListButton>
            </ContactListLi>
          );
        })}
      </ContactListUl>
    </div>
  );
}
