import { AuthNavDiv } from './AuthNav.styled';
import { AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavDiv>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthNavDiv>
  );
}
