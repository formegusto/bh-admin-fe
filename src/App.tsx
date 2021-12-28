import { Route, Routes } from "react-router-dom";
import AppMgmtPage from "./pages/AppMgmtPage";
import DataMgmtPage from "./pages/DataMgmtPage";
import UserMgmtPage from "./pages/UserMgmtPage";
import BaseTemplate from "./templates/BaseTemplate";

function App() {
  return (
    <Routes>
      {/*
      https://stackoverflow.com/questions/69868011/react-router-v6-routing
      */}
      <Route path="/" element={<BaseTemplate />}>
        <Route path="user-mgmt" element={<UserMgmtPage />} />
        <Route path="app-mgmt" element={<AppMgmtPage />} />
        <Route path="data-mgmt" element={<DataMgmtPage />} />
      </Route>
    </Routes>
  );
}

export default App;
