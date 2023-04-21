import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from "./components/NavBar";
import { getUser } from "./utils/user-services";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        // these truthy values display only when there is a logged in user
      ) : (
        <AuthPage setUser={setUser}/>
        // user is not logged in
      )}
    </main>
  );
}

export default App;

{
  /* curly brackets for JSX and if user is true we will render NewOrderPage if user is false then AuthPage */
}
