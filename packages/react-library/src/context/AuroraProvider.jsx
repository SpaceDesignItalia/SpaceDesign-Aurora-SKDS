import React, { createContext, useContext } from "react";

const AuroraContext = createContext(null);

export const AuroraProvider = ({ children, licenseKey, projectToken }) => {
  const value = {
    licenseKey,
    projectToken,
  };

  return (
    <AuroraContext.Provider value={value}>{children}</AuroraContext.Provider>
  );
};

export const useAurora = () => {
  const context = useContext(AuroraContext);
  if (!context) {
    throw new Error("useAurora must be used within an AuroraProvider");
  }
  return context;
};
