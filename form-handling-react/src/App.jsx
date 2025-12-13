import React from "react";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}
