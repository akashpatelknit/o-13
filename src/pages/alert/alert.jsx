import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { alert, area, danger, msg, msg_blue, plus } from "../../assets";

const Alert = () => {
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
          <div className="min-h-[30px] border-l"></div>
          <button className="btn bg-[#0043FF] border-none text-white px-5 h-14 rounded-2xl font-semibold">
            Alert History Log
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5 w-full">
        <div className="w-[40%] bg-cardbg  rounded-3xl py-5 pl-7">
          <div className="customscrollbar max-h-[800px]  overflow-y-scroll">
            <div className="flex items-center gap-3 text-[#0043FF] font-semibold text-[16px]">
              <img src={alert} alt="" /> Alert
            </div>
            <p className="w-full flex items-start justify-between whitespace-nowrap text-gray-400 my-5 pr-2 text-xs">
              <span>Recent</span>
              <span>View All</span>
            </p>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pr-2"
                >
                  <div className="">
                    <p className="text-sm">Woker collapsed in Sector B3</p>
                    <span className="text-muted text-xs">Just now</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-[#0043FF] text-xs">Mark as Read</span>
                    <button className="btn bg-[#0043FF] border-none text-white px-5 h-9 rounded-lg text-xs">
                      View Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="w-full flex items-start justify-between whitespace-nowrap text-gray-400 my-5 mt-10 pr-2 text-xs">
              <span>Normal</span>
              <span>View All</span>
            </p>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pr-2"
                >
                  <div>
                    <p className="text-sm">Woker collapsed in Sector B3</p>
                    <span className="text-muted text-xs">Just now</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-[#0043FF] text-xs">Mark as Read</span>
                    <button className="btn bg-[#0043FF] border-none text-white px-5 h-9 rounded-lg text-xs">
                      View Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[30%] bg-cardbg  rounded-3xl py-5 pl-7">
          <div className="customscrollbarRed max-h-[800px]  overflow-y-scroll">
            <div className="flex items-center gap-3 text-[#FF1919] font-semibold text-[16px]">
              <img src={danger} alt="" /> Emergency Alerts
            </div>
            <p className="w-full flex items-start justify-between whitespace-nowrap text-gray-400 my-5 pr-2 text-xs">
              <span>Recent</span>
              <span>View All</span>
            </p>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pr-2 gap-5"
                >
                  <div className="">
                    <p className="text-sm">Woker collapsed in Sector B3</p>
                    <span className="text-muted text-xs">Just now</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={msg} alt="" />
                    <button className="btn bg-transparent text-[#FF1919] border-[#FF1919] px-5 h-9 rounded-[4px] text-xs border-[1px]">
                      View Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="w-full flex items-start justify-between whitespace-nowrap text-gray-400 my-5 mt-10 pr-2 text-xs">
              <span>Normal</span>
              <span>View All</span>
            </p>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pr-2 gap-5"
                >
                  <div>
                    <p className="text-sm">Woker collapsed in Sector B3</p>
                    <span className="text-muted text-xs">Just now</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={msg} alt="" />
                    <button className="btn bg-transparent text-[#FF1919] border-[#FF1919] px-5 h-9 rounded-[4px] text-xs border-[1px]">
                      View Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="w-full flex flex-col justify-between">
            <div className="rounded-3xl py-5 pl-7 bg-cardbg">
              <div className="customscrollbar max-h-[370px] overflow-y-scroll ">
                <div className="flex items-center gap-3 text-[#0043FF] font-semibold text-[16px]">
                  <img src={area} alt="" /> Air Quality Alerts
                </div>
                <div className="space-y-6 mt-5">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pr-2"
                    >
                      <div className="">
                        <p className="text-sm">Woker collapsed in Sector B3</p>
                        <span className="text-muted text-xs">Just now</span>
                      </div>
                      <div className="flex items-center gap-5">
                        <img src={msg_blue} alt="" />
                        <button className="btn bg-transparent border border-[#0043FF] text-[#0043FF] px-5 h-9 rounded-lg text-xs">
                          View Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl py-5 pl-7 bg-cardbg mt-5">
              <div className="customscrollbar max-h-[370px] overflow-y-scroll">
                <div className="flex items-center gap-3 text-[#0043FF] font-semibold text-[16px]">
                  <img src={plus} alt="" /> Custom Alerts
                </div>
                <p className="w-full flex items-start justify-between whitespace-nowrap text-gray-400 my-5 pr-2 text-xs">
                  <span>Recent</span>
                  <span>View All</span>
                </p>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pr-2"
                    >
                      <div className="">
                        <p className="text-sm">Woker collapsed in Sector B3</p>
                        <span className="text-muted text-xs">Just now</span>
                      </div>
                      <div className="flex items-center gap-5">
                        <img src={msg_blue} alt="" />
                        <button className="btn bg-transparent border border-[#0043FF] text-[#0043FF] px-5 h-9 rounded-lg text-xs">
                          View Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
