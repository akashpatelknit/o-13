import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUserGroup } from "react-icons/fa6";
import { TiWatch } from "react-icons/ti";
import { TbAlertSquareRoundedOff } from "react-icons/tb";
import { FaWatchmanMonitoring } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { MdFilterTiltShift } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";

const navItems = [
  {
    id: 1,
    to: "/",
    title: "Home",
    icon: <RxDashboard />,
  },
  {
    id: 2,
    to: "/users",
    title: "Users",
    icon: <FaUserGroup />,
  },
  {
    id: 3,
    to: "/devices",
    title: "Devices",
    icon: <TiWatch />,
  },
  {
    id: 4,
    to: "/alerts",
    title: "Alerts",
    icon: <TbAlertSquareRoundedOff />,
  },
  {
    id: 5,
    to: "/real-time-monitoring",
    title: "Real Time Monitoring",
    icon: <FaWatchmanMonitoring />,
  },
  {
    id: 6,
    to: "/reports",
    title: "Reports",
    icon: <TbReport />,
  },
  {
    id: 7,
    to: "/shifts",
    title: "Shifts",
    icon: <MdFilterTiltShift />,
  },
];
const Sidebar = () => {
  return (
    <div className="fixed w-20 min-h-screen bg-[#f9f9f9] border-r">
      <div className="flex h-full w-full items-center justify-center min-h-screen">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <CustomLink
              key={item.id}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// eslint-disable-next-line react/prop-types
function CustomLink({ to, icon, title }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className="text-center">
      <Link
        to={to}
        className="w-full flex justify-center flex-col items-center"
      >
        <span
          className="h-12 w-12 flex items-center justify-center rounded-lg font-bold"
          style={{
            backgroundColor: isActive ? "#3354F4" : "transparent",
            color: isActive ? "white" : "#A7A7AC",
            fontSize: isActive ? 22 : 18,
          }}
        >
          {icon}
        </span>
        <span
          className="text-xs font-medium"
          style={{
            color: isActive ? "#3354F4" : "#A7A7AC",
          }}
        >
          {title}
        </span>
      </Link>
    </div>
  );
}
