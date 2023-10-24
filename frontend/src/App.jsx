/* eslint-disable import/no-unresolved */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";
import Router from "./routes/Router";
/* eslint-disable import/extensions */
import ChatModal from "./components/ChatModal";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  return (
    <div className="font-noto lg:flex min-h-screen   ">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <Sidebar />
      {sidebar && <SidebarMobile setSidebar={setSidebar} sidebar={sidebar} />}

      <div className=" w-full lg:ml-[17rem] flex justify-center">
        <Router chatModal={chatModal} setChatModal={setChatModal} />
        {chatModal && <ChatModal chatModal={chatModal} />}
      </div>
    </div>
  );
}

export default App;
