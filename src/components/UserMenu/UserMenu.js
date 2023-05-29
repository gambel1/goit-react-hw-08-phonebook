import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { UserMenuDiv, UserMenuP, UserMenuButton } from './UserMenu.styled';
import { useDispatch } from 'react-redux';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuDiv>
      <UserMenuP>Welcome, {user.name}</UserMenuP>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuDiv>
  );
}
