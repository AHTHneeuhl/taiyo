import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactPage, DashboardPage } from "./pages";
import { DashboardProvider } from "./context";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardProvider>
              <DashboardPage />
            </DashboardProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
