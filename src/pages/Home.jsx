import { Container, Text, Title } from "./Home.styled";
//import FormikField from "components/FormikField";
import * as React from "react";
//import Button from '@mui/material/Button';
import { Box, Button} from "@mui/material";
export const Home = () => {
    return (
        <Container>
            <Box>
                {/* <Button variant="contained" type="submit">
                    Text</Button> */}
                </Box>
            <Title>
                Welcome to PhoneBook App
                <span>&#9742;&#65039;</span>
            </Title>
            <Text>
                Please, register or login to collect your contacts easily
            </Text>
        </Container>
    )
};

//export default Home;

