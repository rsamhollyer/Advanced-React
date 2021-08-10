import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import SickButton from './styles/SickButton';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Checkout() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Elements stripe={stripeLib}>
      <CheckoutFormStyles onSubmit={handleSubmit}>
        <CardElement />
        <SickButton>Checkout Now</SickButton>
      </CheckoutFormStyles>
    </Elements>
  );
}

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1 px sold rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
`;
