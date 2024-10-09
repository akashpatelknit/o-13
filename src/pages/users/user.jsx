import React from "react";
import Table from "../../components/ui/table";
import { shiftTableDataSource } from "../../constants/data";

const Users = () => {
  const shiftSummaryColumns = [
    {
      title: "User ID",
      dataIndex: "userId",
    },
    {
      title: "Name",
      dataIndex: "firstName",
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
      <div className="flex w-full">
        <div className="flex items-center gap-6 h-full w-full">
          <div className="w-24 h-24 rounded-full bg-cardbg flex items-center justify-center">
            <span className="text-4xl">9</span>
          </div>
          <div>
            <p className="text-black font-medium">
              Monday, <br /> October 2027
            </p>
          </div>
          <div className="min-h-[50px] h-full border-l"></div>
        </div>
        <div className="flex gap-3 w-full justify-end items-end">
          <button className="btn bg-[#0043FF] border-none px-5 h-14 text-white rounded-xl">
            Add Users
          </button>
          <div className="min-h-[30px] border-l mb-2"></div>
          <button className="btn bg-[#C8C7CC] border-none text-white px-5 h-14 rounded-xl">
            Remove Users
          </button>
        </div>
      </div>

      <Table columns={shiftSummaryColumns} dataSource={shiftTableDataSource} />
    </div>
  );
};

export default Users;
