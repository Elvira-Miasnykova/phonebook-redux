import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TextField, Button } from '@mui/material';
//import FormikField  from '../FormikField';
import { nanoid } from 'nanoid';
//import { Box } from "../Box";
// import {  ButtonStyled } from "./ContactsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { getContacts } from "redux/contacts/selectors";

export function ContactsForm() { 
    const initialValues = {
        name: "",
        number: "",
    };

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(2, "Too Short!")
            .required("This field is required"),
        number: yup.number()
            .min(8, "The number is invalid")
            .required("This field is required"),

    }
    )
      
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
    const addNewContact = (newContact) => {
    const foundContact = contacts.find(contact => contact.name === newContact.name);
    
    (foundContact)
      ? window.alert(`${newContact.name} is alredy in contacts`)
      : dispatch(addContact(newContact))
    console.log(addContact(newContact));
  };
    
    const handleSubmit = (values, {resetForm}) => {
        const newContact = {
            ...values,
            id: nanoid(),
        };
        addNewContact(newContact);
        console.log(newContact);
        resetForm();
        

    };

    
    
    return ( 
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({dirty, isValid}) => {
                return (
                <Form>
                <Field
                as={ TextField}
                    type="text"
                    name="name"
                    placeholder="Enter contacts name"
                    variant="standard"
                />
                <p>
                    <ErrorMessage name="name"/>
                </p>
                {/* <FormikField/> */}
                <Field
                as={ TextField}
                    type="tel"
                    name="number"
                    placeholder="Enter contacts number"
                    variant="standard"
                />
                <p>
                    <ErrorMessage name="number"/>
                </p>
                <Button disabled={!dirty || !isValid} type="submit">Add contact</Button>
            </Form>
            )
            }}
                     
            </Formik>
            
        );
 
}