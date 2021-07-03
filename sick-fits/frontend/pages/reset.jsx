import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

/* eslint-disable react/prop-types */
export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry. You must request a token!</p>;
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      <Reset token={query.token} />
    </div>
  );
}
