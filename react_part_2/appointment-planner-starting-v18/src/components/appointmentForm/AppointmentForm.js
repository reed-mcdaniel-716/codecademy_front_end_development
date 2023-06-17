import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  appointmentFormState,
  handleInputFormUpdates,
  handleSelectFormUpdates,
  handleSubmit,
}) => {
  const handleContactSelect = (e) => {
    const choosenContact = contacts.find(
      (contact) => contact.name.toLowerCase() === e.target.value.toLowerCase()
    );
    handleSelectFormUpdates(choosenContact);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          alt='appointment name'
          value={appointmentFormState.name}
          onChange={(e) => handleInputFormUpdates(e)}
        />
        <label htmlFor='contact'>Contact: </label>
        <ContactPicker
          id='contact'
          alt='contact selector'
          contacts={contacts}
          handleContactSelect={handleContactSelect}
          selectedContact={appointmentFormState.contact}
        />
        <label htmlFor='date'>Date: </label>
        <input
          id='date'
          type='date'
          alt='appointment date'
          value={appointmentFormState.date}
          min={getTodayString()}
          onChange={(e) => handleInputFormUpdates(e)}
        />
        <label htmlFor='time'>Time: </label>
        <input
          id='time'
          type='text'
          alt='appointment time'
          value={appointmentFormState.time}
          onChange={(e) => handleInputFormUpdates(e)}
        />
        <button type='submit'>Add Appointment</button>
      </form>
    </>
  );
};
