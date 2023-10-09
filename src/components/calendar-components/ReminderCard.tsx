import React from "react";

const ReminderCard = ({
  title,
  background,
  location,
  time,
}: ReminderCardTypes) => {
  return (
    <div
      className={`bg-${background} py-[15px] px-[17px] lg:mr-[80px] lg:max-w-[100%] lg:rounded-[8px] lg:px-[17px] lg:py-[15px]`}
    >
      <div className="flex flex-row items-center gap-[2px] float-right">
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-gray rounded-full"></div>
      </div>

      <div className="flex flex-row items-center gap-[5px] w-[100%]">
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.89642 3.16486C3.75416 3.16486 2.82486 4.09417 2.82486 5.23642C2.82486 6.37868 3.75417 7.30798 4.89642 7.30798C6.03868 7.30798 6.96798 6.37867 6.96798 5.23642C6.96798 4.09416 6.03867 3.16486 4.89642 3.16486ZM4.89642 0.339996C7.60064 0.339996 9.79284 2.53221 9.79284 5.23642C9.79284 7.94064 7.60063 10.1328 4.89642 10.1328C2.19221 10.1328 0 7.94063 0 5.23642C0 2.53221 2.19221 0.339996 4.89642 0.339996Z"
            fill="#FFC6BC"
          />
        </svg>

        <p className="font-inter font-semibold text-[14px] w-[100%] whitespace-nowrap text-gray">
          {time}
        </p>
      </div>

      <p className="font-inter font-semibold text-[16px] text-black">{title}</p>

      <p className="font-inter font-medium text-[12px] text-gray">{location}</p>
    </div>
  );
};

export default ReminderCard;
