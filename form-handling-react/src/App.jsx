<<<<<<< HEAD
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Search />
=======
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div>
      <h1>Controlled Form</h1>
      <RegistrationForm />
      
      <h1>Formik Form</h1>
      <FormikForm />
>>>>>>> cad5ce1 (Add controlled and Formik user registration forms with validation)
    </div>
  );
}

export default App;
