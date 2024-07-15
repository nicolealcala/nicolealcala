"use client";
import { useContext } from "react";
import Navbar from "../navigation";
import Footer from "../ui/footer";
import { GlobalContext } from "../context-providers/global-context-provider";

const ClientLayout: React.FC<any> = ({ children }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={theme.toString()}>
      <Navbar />
      <div className="!z-10">
        {children} <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
