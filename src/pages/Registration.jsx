import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box';


const Registration = () => {
  return (
    <Box as="div" display="flex" justifyContent="center">
      <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      </HelmetProvider>
      <RegisterForm />
    </Box>
    
  )
};

export default Registration;


