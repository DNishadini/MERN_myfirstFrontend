import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <BrowserRouter>
      <div
        className="w-full h-[100vh] 
      "
      >
        <Routes path="/">
          <Route path="/*" element={<HomePage />} />
          <Route path="/register" element={<h1>Register Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
