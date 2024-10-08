export const shiftSummaryColumns = [
  {
    title: "User Id",
    dataIndex: "userId",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
  {
    title: "Device Status",
    dataIndex: "deviceStatus",
    render: (value) => (
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {value}
      </span>
    ),
  },
  {
    title: "Health Status",
    dataIndex: "healthStatus",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Shift in or Shift out",
    dataIndex: "shiftInOrShiftOut",
  },
  {
    title: "Shift Duration",
    dataIndex: "shiftDuration",
  },
  {
    title: "Emergency Alert",
    dataIndex: "alert",
  },
];

export const userColumns = [
  {
    title: "User Id",
  },
  {
    title: "First Name",
  },
  {
    title: "Last Name",
  },
  {
    title: "Department",
  },
  {
    title: "Device Status",
  },
  {
    title: "Health Status",
  },
  {
    title: "Location",
  },
  {
    title: "Shift in or Shift out",
  },
  {
    title: "Shift Duration",
  },
  {
    title: "Emergency Alert",
  },
];

export const deviceColumns = [
  { titel: "Device ID" },
  {
    title: "Device Type",
  },
  {
    title: "Assigned User",
  },
  {
    title: "Status",
  },
  {
    title: "Battery Status",
  },
  {
    title: "Connectivity",
  },
  {
    title: "Sensor Reading",
  },
  {
    title: "Device's Performance",
  },
];
