import React, { FC } from "react";
interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome: FC<LayoutHomeProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#fcfcfc] flex flex-col overflow-auto">
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

export default LayoutHome;
