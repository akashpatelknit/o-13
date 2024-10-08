import { RxDashboard } from "react-icons/rx";

export const navItems = [
  {
    id: 1,
    to: "/",
    title: "Home",
    icon: () => <RxDashboard />,
  },
  {
    id: 2,
    to: "/users",
    title: "Users",
    icon: () => <RxDashboard />,
  },
  {
    id: 3,
    to: "/devices",
    title: "Devices",
    icon: () => <RxDashboard />,
  },
  {
    id: 4,
    to: "/alerts", // Corrected path
    title: "Alerts",
    icon: () => <RxDashboard />,
  },
  {
    id: 5,
    to: "/real-time-monitoring",
    title: "Real Time Monitoring",
    icon: () => <RxDashboard />,
  },
  {
    id: 6,
    to: "/reports",
    title: "Reports",
    icon: () => <RxDashboard />,
  },
  {
    id: 7,
    to: "/shifts",
    title: "Shifts",
    icon: () => <RxDashboard />,
  },
];
