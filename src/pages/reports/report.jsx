import React from "react";
import Table from "../../components/ui/table";
import {
  shiftTableDataSource,
  sortTableDataSource,
} from "../../constants/data";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

const Reports = () => {
  const dataSouce = sortTableDataSource;
  const shiftSummaryColumns = [
    {
      title: "Worker Name",
      dataIndex: "userId",
    },
    {
      title: "Activity",
      dataIndex: "firstName",
    },
    {
      title: "Health Trends",
      dataIndex: "department",
    },
    {
      title: "Overall Performance",
      dataIndex: "deviceStatus",
    },
  ];
  const deviceColumns = [
    {
      title: "Device ID",
      dataIndex: "userId",
    },
    {
      title: "Device Status",
      dataIndex: "firstName",
      render: (value) => (
        <span className="bg-blue-100 text-[#3354F4] text-xs font-medium me-2 px-2.5 py-1.5 rounded">
          {value}
        </span>
      ),
    },
    {
      title: "Uptime",
      dataIndex: "department",
    },
    {
      title: "Low Alert",
      dataIndex: "department",
    },
    {
      title: "Location",
      dataIndex: "deviceStatus",
    },
  ];
  const envColumns = [
    {
      title: "Zones",
      dataIndex: "userId",
    },
    {
      title: "Over Time",
      dataIndex: "firstName",
    },
    {
      title: "Air Quality",
      dataIndex: "department",
    },
    {
      title: "Water Quality",
      dataIndex: "department",
    },
    {
      title: "Efficiency",
      dataIndex: "deviceStatus",
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
      </div>
      <div className="grid grid-cols-2 gap-3 gap-x-5">
        <div className="rounded-3xl bg-cardbg">
          <div className="flex items-center justify-between px-3 pr-5 py-3 border-b rounded-tl-3xl rounded-tr-3xl">
            <div className="text-[17px] text-[#1C1C1C] font-semibold bg-cardbg ">
              User Report
            </div>
            <div className="flex items-center gap-3">
              <FaFilter size={20} />
              <button className="bg-[#0043FF] text-white px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlineFileDownload size={18} /> Export
              </button>
            </div>
          </div>
          <Table
            columns={shiftSummaryColumns}
            dataSource={sortTableDataSource}
          />
        </div>
        <div className="rounded-3xl bg-cardbg">
          <div className="flex items-center justify-between px-3 pr-5 py-3 border-b rounded-tl-3xl rounded-tr-3xl">
            <div className="text-[17px] text-[#1C1C1C] font-semibold bg-cardbg ">
              Device Report
            </div>
            <div className="flex items-center gap-3">
              <FaFilter size={20} />
              <button className="bg-[#0043FF] text-white px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlineFileDownload size={18} /> Export
              </button>
            </div>
          </div>
          <Table columns={deviceColumns} dataSource={sortTableDataSource} />
        </div>
        <div className="rounded-3xl bg-cardbg">
          <div className="flex items-center justify-between px-3 pr-5 py-3 border-b rounded-tl-3xl rounded-tr-3xl">
            <div className="text-[17px] text-[#1C1C1C] font-semibold bg-cardbg ">
              Environmental Report
            </div>
            <div className="flex items-center gap-3">
              <FaFilter size={20} />
              <button className="bg-[#0043FF] text-white px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlineFileDownload size={18} /> Export
              </button>
            </div>
          </div>
          <Table columns={envColumns} dataSource={sortTableDataSource} />
        </div>
        <div className="rounded-3xl bg-cardbg">
          <div className="flex items-center justify-between px-3 pr-5 py-3 border-b rounded-tl-3xl rounded-tr-3xl">
            <div className="text-[17px] text-[#1C1C1C] font-semibold bg-cardbg ">
              Custom Report
            </div>
            <div className="flex items-center gap-3">
              <FaFilter size={20} />
              <button className="bg-[#0043FF] text-white px-3 py-1 rounded-md flex items-center gap-1">
                <MdOutlineFileDownload size={18} /> Export
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 px-5 py-2 border-b">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Water Quality
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Uptime
              </label>
            </div>
            <div className="grid grid-cols-2 px-5 py-2 border-b">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Air Quality
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Battery Health
              </label>
            </div>
            <div className="grid grid-cols-2 px-5 py-2 border-b">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Body Temperature
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Connectivity Status
              </label>
            </div>
            <div className="grid grid-cols-2 px-5 py-2 border-b">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Fatigue Level
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Sensor Readings
              </label>
            </div>
            <div className="grid grid-cols-2 px-5 py-2 border-b">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Active Time
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Maintenance Device
              </label>
            </div>
            <div className="grid grid-cols-2 px-5 py-2">
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Alerts Generated
              </label>
              <label className="flex items-center gap-3 text-[#5E5E5E] font-medium">
                <input
                  type="checkbox"
                  className="accent-[#0043FF] w-5 h-5 text-[#777777] border-2 border-gray-300"
                />
                Device Alerts
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
