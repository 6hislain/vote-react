import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
