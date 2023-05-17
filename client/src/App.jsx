import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/AddContact/AddContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/add" element={<AddContact />} />
    </Routes>
  );
};

export default App;
