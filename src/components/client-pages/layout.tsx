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
    <div className={`relative ${theme.toString()}`}>
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      <div className="mt-0 !z-10">
        {children}
        {pathname === "/magic-shop" ? null : <Footer />}
      </div>
    </div>
  );
};

export default ClientLayout;
