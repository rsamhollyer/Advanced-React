/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct';

function UpdatePage({ query }) {
  return (
    <div>
      <UpdateProduct id={query.productid} />
    </div>
  );
}
export default UpdatePage;
