import Stats from "../../components/home-c/Stats";
import Table from "../../components/ui/table";
import { shiftTableDataSource } from "../../constants/data";

export const HomePage = () => {
  const shiftSummaryColumns = [
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
        <span className="bg-blue-100 text-[#3354F4] text-xs font-medium me-2 px-2.5 py-1.5 rounded">
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
      render: (value) => (
        <span className="bg-blue-100 text-[#3354F4] text-xs font-medium me-2 px-2.5 py-1.5 rounded">
          {value}
        </span>
      ),
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
  return (
    <div className="w-full flex flex-col gap-3">
      <Stats />
      <div className="rounded-3xl bg-cardbg">
        <div className="text-[17px] font-semibold px-3 py-2 bg-cardbg border-b rounded-tl-3xl rounded-tr-3xl">
          Shift Summary
        </div>
        <Table
          columns={shiftSummaryColumns}
          dataSource={shiftTableDataSource}
        />
      </div>
    </div>
  );
};
