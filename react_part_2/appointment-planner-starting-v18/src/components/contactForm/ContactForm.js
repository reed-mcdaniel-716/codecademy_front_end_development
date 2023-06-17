import React from "react";

export const ContactForm = ({
  contactFormState,
  handleFormUpdates,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          alt='contact name'
          value={contactFormState.name}
          onChange={(e) => handleFormUpdates(e)}
        />
        <label htmlFor='phoneNumber'>Phone number: </label>
        <input
          id='phoneNumber'
          type='tel'
          alt='contact phone number'
          pattern='^[0-9]*$'
          value={contactFormState.phoneNumber}
          onChange={(e) => handleFormUpdates(e)}
        />
        <label htmlFor='emailAddress'>E-mail address: </label>
        <input
          id='emailAddress'
          type='email'
          alt='contact email address'
          value={contactFormState.emailAddress}
          onChange={(e) => handleFormUpdates(e)}
        />
        <button type='submit'>Add Contact</button>
      </form>
    </>
  );
};
