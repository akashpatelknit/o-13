import React from "react";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import Setting from "./pages/setting/setting";
import Users from "./pages/users/user";
import BaseLayout from "./components/layout/base-layout";
import Sidebar from "./components/common/sidebar/sidebar";
import Devices from "./pages/devices/device";
import Reports from "./pages/reports/report";
import Alert from "./pages/alert/alert";
import RealTime from "./pages/realtime/realtime";
import Shift from "./pages/shift/shift";

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/alerts" element={<Alert />} />
          <Route path="/real-time-monitoring" element={<RealTime />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/shifts" element={<Shift />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
