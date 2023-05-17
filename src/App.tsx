import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
