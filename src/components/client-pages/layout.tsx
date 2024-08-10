"use client";
import { useContext } from "react";
import Navbar from "../navigation";
import Footer from "../ui/footer";
import { GlobalContext } from "../context-providers/global-context-provider";
import { usePathname } from "next/navigation";

const ClientLayout: React.FC<any> = ({ children }) => {
  const { theme } = useContext(GlobalContext);
  const pathname = usePathname();
  return (
    <div className={theme.toString()}>
      <Navbar />
      <div className="!z-10">
        {children}
        {pathname === "/magic-shop" ? null : <Footer />}
      </div>
    </div>
  );
};

export default ClientLayout;
