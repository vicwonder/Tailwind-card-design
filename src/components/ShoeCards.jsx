import React from "react";

const ShoeCards = ({ images, icon, name, num }) => {
  return (
    <div>
      <img
        className="w-[350px] h-[300px] rounded-xl shadow-md"
        src={images}
        alt="sneakers"
      />
      <div className="flex justify-between mt-2 px-3">
        <p className="text-[20px] font-medium">{name}</p>
        <div className="flex items-center gap-2">
          {icon && icon()}
          <p className="font-medium">{num}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeCards;
