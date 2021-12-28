import { Route, Routes } from "react-router-dom";
import AppMgmtPage from "./pages/AppMgmtPage";
import UserMgmtPage from "./pages/UserMgmtPage";
import BaseTemplate from "./templates/BaseTemplate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseTemplate />}>
        <Route path="user-mgmt" element={<UserMgmtPage />} />
        <Route path="app-mgmt" element={<AppMgmtPage />} />
      </Route>
    </Routes>
  );
}

export default App;
