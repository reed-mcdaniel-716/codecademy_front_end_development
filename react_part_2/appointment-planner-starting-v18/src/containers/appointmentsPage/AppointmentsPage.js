import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contacts,
  appointments,
  handleAddAppointment,
}) => {
  const defaultAppointmentFormState = () => ({
    name: "",
    contact: null,
    date: "",
    time: "",
  });

  const [appointmentFormState, setAppointmentFormState] = useState(
    defaultAppointmentFormState()
  );

  const handleInputFormUpdates = (e) => {
    setAppointmentFormState({
      ...appointmentFormState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectFormUpdates = (selectedContact) => {
    setAppointmentFormState({
      ...appointmentFormState,
      contact: selectedContact,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("appointment to add: ", appointmentFormState);
    handleAddAppointment(appointmentFormState);
    setAppointmentFormState(defaultAppointmentFormState());
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          appointmentFormState={appointmentFormState}
          handleInputFormUpdates={handleInputFormUpdates}
          handleSelectFormUpdates={handleSelectFormUpdates}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList inputArray={appointments} />
      </section>
    </div>
  );
};
