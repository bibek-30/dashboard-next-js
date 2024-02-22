import React from "react";
import Sidebar from "./components/sidebar";

const page = () => {
  return (
    <div className="container">
      <aside className="sidebar-wrap">
       <Sidebar/>
      </aside>
      <div className="content">
        <h1>Main Content</h1>
        <p>This is the main content of your page.</p>
      </div>
    </div>
  );
};

export default page;
