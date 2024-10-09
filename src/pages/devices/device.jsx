import React from "react";
import Table from "../../components/ui/table";
import { shiftTableDataSource } from "../../constants/data";

const Devices = () => {
  const shiftSummaryColumns = [
    {
      title: "Device ID",
      dataIndex: "userId",
    },
    {
      title: "Device Type",
      dataIndex: "firstName",
    },
    {
      title: "Assigned User",
      dataIndex: "department",
    },
    {
      title: "Status",
      dataIndex: "deviceStatus",
      render: (value) => (
        <span className="bg-blue-100 text-[#3354F4] text-xs font-medium me-2 px-2.5 py-1.5 rounded">
          {value}
        </span>
      ),
    },
    {
      title: "Battery Status",
      dataIndex: "healthStatus",
    },
    {
      title: "Connectivity",
      dataIndex: "location",
    },
    {
      title: "Sensor Reading",
      dataIndex: "shiftDuration",
    },
    {
      title: "Device's Performance",
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
          <button className="btn bg-[#0043FF] border-none text-white px-5  h-14 rounded-xl">
            Assign Device
          </button>
          <div className="min-h-[30px] border-l mb-2"></div>
          <button className="btn bg-[#0043FF] border-none text-white px-5 h-14 rounded-xl">
            Add Users
          </button>
          <div className="min-h-[30px] border-l mb-2"></div>
          <button className="btn bg-[#0043FF] border-none text-white px-5 h-14 rounded-xl">
            Schedule Maintenance
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

export default Devices;
