"use client";
import React from "react";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";

const Dashboard: React.FC = () => {
  return <div>Load whatever here</div>;
};

export default Dashboard;
