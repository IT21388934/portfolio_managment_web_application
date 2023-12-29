// import { useState } from "react";
import AdminProjects from "../components/adminProjects/adminProjects";
import AdminHeader from "../components/common/AdminHeder";
import UserManagement from "../components/userManagement/UserManagement";
import Orders from "../components/orders/Orders";
import ProfileManagement from "../components/ProfileManagement/ProfileManagement";
import Messages from "../components/messages/Messages";
import "./AdminDashboard.css";

import { useSelector } from "react-redux";

export default function AdminDashboard() {
  // const [tab, setTab] = useState("Projects");
  // console.log(tab);
  const tab = useSelector((state) => state.adminTab.currentTab);
  console.log({ "tab form redux": tab });

  const renderTab = () => {
    switch (tab) {
      case "Projects":
        return <AdminProjects />;
      case "Users":
        return <UserManagement />;
      case "Orders":
        return <Orders />;
      case "Profile":
        return <ProfileManagement />;
      case "Messages":
        return <Messages />;
      default:
        return <AdminProjects />;
    }
  };
  return (
    <>
      <AdminHeader
      // setTab={setTab}
      />
      <div className="dashboardContainer">{renderTab()}</div>
    </>
  );
}
