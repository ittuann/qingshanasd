import React, { createContext, useState } from "react";
import medicalData from "@/data/medicalData.json";
import medicalChildData from "@/data/medicalChildData.json";
import medicalAbroadData from "@/data/medicalAbroadData.json";

export const MedicalDataContext = createContext();

export const MedicalDataProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(medicalData);
  const [dataType, setDataType] = useState("domestic");

  const switchData = (type) => {
    switch (type) {
      case "child":
        setCurrentData(medicalChildData);
        setDataType("child");
        break;
      case "abroad":
        setCurrentData(medicalAbroadData);
        setDataType("abroad");
        break;
      default:
        setCurrentData(medicalData);
        setDataType("domestic");
    }
  };

  return (
    <MedicalDataContext.Provider value={{ currentData, dataType, switchData }}>
      {children}
    </MedicalDataContext.Provider>
  );
};
