import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

export default Page;

const GlobalStyles = createGlobalStyle`
@font-face {
font-family: 'radnika_next';
src:url("/.static/radnikanext-medium-webfont.woff2")
  format('woff2');
  font-weight:normal;
  font-style:normal
}
:root{
  --red:#ff0000;
  --black:#393939;
  --grey:#3A3A3;
  --gray: var(--grey);
  --lightgrey:(#e1e1e1);
  --lightgray:var(--lightgrey);
  --offwhite:#ededed;
  --maxWidth  :1000px;
  --bs:0 12px 24px 0 rgba(0, 0, 0, 0.086)
}

*,*::before,*::after{
  box-sizing:inherit;
}

html{
  box-sizing:border-box;
  padding:0;
  margin: 0;
  font-size:62.5%;
  line-height:2;
}

body{
  font-family:'radnika_next',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

a{
  text-decoration:none;
  color:var(--black)
}

a:hover{
  text-decoration:underline;
}

button{
  font-family:'radnika_next',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

Page.propTypes = {
  children: PropTypes.any,
};
