import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import NavBar from "./components/NavBar";
import { getUser } from "./utils/user-services";
import styles from "./App.module.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      {user ? (
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser}/>} />
            <Route path="/*" element={<Navigate to="/order/new" />} />
          </Routes>
        </>
      ) : (
        // these truthy values display only when there is a logged in user
        <AuthPage setUser={setUser} />
        // user is not logged in
      )}
    </main>
  );
}

export default App;

{
  /* curly brackets for JSX and if user is true we will render NewOrderPage if user is false then AuthPage */
}
