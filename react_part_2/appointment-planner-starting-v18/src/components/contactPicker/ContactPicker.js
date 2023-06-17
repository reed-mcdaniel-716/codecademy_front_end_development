import React from "react";

export const ContactPicker = ({
  contacts,
  handleContactSelect,
  selectedContact,
}) => {
  const selectOptions = contacts.map((contact) => {
    return (
      <option key={contact.name} name={contact.name} value={contact.name}>
        {contact.name}
      </option>
    );
  });
  return (
    <>
      <select
        id='contact'
        value={selectedContact ? selectedContact.name : ""}
        onChange={handleContactSelect}
      >
        <option key='default' name='default' value='default'>
          Select a contact...
        </option>
        {selectOptions}
      </select>
    </>
  );
};
