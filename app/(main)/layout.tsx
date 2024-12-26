import React, { ReactNode } from "react";
interface props {
  children: ReactNode;
}
const MainLayout: React.FC<props> = ({ children }) => {
  return <div className="container mx-auto my-32">{children}</div>;
};

export default MainLayout;
