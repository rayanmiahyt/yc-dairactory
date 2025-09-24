import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

function layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default layout;
