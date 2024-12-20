import React, { ReactNode } from "react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center pt-40">
      {children}
    </div>
  );
};

export default AuthLayout;
