import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleAddContact }) => {
  const defaultContactFormState = () => ({
    name: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [contactFormState, setContactFormState] = useState(
    defaultContactFormState()
  );

  const checkForContactDupes = (newContact) => {
    const dupeFound = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    return dupeFound;
  };

  const handleFormUpdates = (e) => {
    setContactFormState({ ...contactFormState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDupe = checkForContactDupes(contactFormState);
    if (isDupe) {
      alert("This contact is a duplicate, please try again");
    } else {
      handleAddContact(contactFormState);
      setContactFormState(defaultContactFormState());
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          contactFormState={contactFormState}
          handleFormUpdates={handleFormUpdates}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList inputArray={contacts} />
      </section>
    </div>
  );
};
