import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/editContact/:id" element={<EditContact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
