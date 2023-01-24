import { ReactNode } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full w-full bg-base-300 bg-center bg-cover bg-no-repeat flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
