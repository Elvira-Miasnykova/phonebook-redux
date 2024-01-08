//import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  return (
    <HelmetProvider>
    <Box as="div" display="flex" justifyContent="center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
    </HelmetProvider>
  )
};

export default Login;

