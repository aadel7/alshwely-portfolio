import React from "react"
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { CardColumns, Card } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { propTypes } from "react-bootstrap/esm/Image";

export const ContactForm = (props) => {
  const { register, handleSubmit, getValues, watch, errors } = useForm();
  const onSubmit = data => alert(data);

  this.state = {
    finalValues: {
      firstName: '',
      lastName: '',
      age: '',
    }
  }

  console.log(watch("age")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <button
        type="button"
        onClick={() => {
          const multipleValues = getValues(["firstName", "lastName", "age"]);
          console.log(multipleValues);
          this.state.finalValues.firstName = multipleValues.firstName;
          this.state.finalValues.lastName = multipleValues.lastName;
          this.state.finalValues.age = multipleValues.age;

        }}
      >
        Submit
      </button>
    </form>
  )
}

ContactForm.propTypes = propTypes;

export default ContactForm;