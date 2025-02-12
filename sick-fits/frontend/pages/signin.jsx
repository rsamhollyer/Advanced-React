import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function SignInPage() {
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyles>
  );
}

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
export default SignInPage;
