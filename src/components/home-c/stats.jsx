import { FiUsers } from "react-icons/fi";

const Stats = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-6 h-full">
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
      <div className="flex flex-wrap gap-3 items-center">
        <StatCard />
        <StatCard />
        <StatCard />
        <div className="min-h-[50px] h-full border-l"></div>
        <StatCard />
        <StatCard />
        <StatCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Stats;

const StatCard = () => {
  return (
    <div className="min-w-[218px] min-h-[90px] flex items-center gap-5 border-[1px] px-4 py-2 border-[#EFEFF4] rounded-md bg-[#F9F9F9]">
      <div className="text-[#252C58] font-lexend">
        <p className="text-[38px]">350</p>
        <p>Total Employee</p>
      </div>
      <div className="h-8 w-8 rounded-full bg-[#3354F4] flex items-center justify-center text-white">
        <FiUsers />
      </div>
    </div>
  );
};
