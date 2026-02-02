import React, { Component, useContext } from "react";
import Link from "next/link";
import { MedicalDataContext } from "@/context/MedicalDataContext";
import { FormattedMessage } from "react-intl";
import "remixicon/fonts/remixicon.css";

const MapInfoSelect = () => {
  const { dataType, switchData } = useContext(MedicalDataContext);

  return (
    <div className="flex justify-end mt-4">
      <div className="inline-flex bg-gray-50 rounded-xl space-x-3 p-2 shadow-lg border border-gray-200">
        <button
          onClick={() => switchData("domestic")}
          className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
            dataType === "domestic"
              ? "bg-primary text-white shadow-sm"
              : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm"
          }`}
        >
          <FormattedMessage id="MedicalMap.MapInfoSelect.adult" />
        </button>
        <button
          onClick={() => switchData("child")}
          className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
            dataType === "child"
              ? "bg-primary text-white shadow-sm"
              : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm"
          }`}
        >
          <FormattedMessage id="MedicalMap.MapInfoSelect.child" />
        </button>
        <button
          onClick={() => switchData("abroad")}
          className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
            dataType === "abroad"
              ? "bg-primary text-white shadow-sm"
              : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm"
          }`}
        >
          <FormattedMessage id="MedicalMap.MapInfoSelect.international" />
        </button>
      </div>
    </div>
  );
};

class MapInfoNav extends Component {
  static contextType = MedicalDataContext;

  state = {
    isSticky: false,
  };

  toggleSticky = () => {
    this.setState((prevState) => ({
      isSticky: !prevState.isSticky,
    }));
  };

  render() {
    const { isSticky } = this.state;
    const { currentData } = this.context;
    const containerClass = `${isSticky ? "sticky" : ""} top-0 py-4 z-50 bg-white/80 backdrop-blur-lg shadow-sm rounded-lg mt-8`;

    return (
      <div className={containerClass}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex flex-wrap gap-2">
            {currentData.medicalData.map((area, index) => (
              <Link
                key={index}
                href={`#${area.area}`}
                className="px-6 py-2.5 text-sm bg-white rounded-full shadow hover:shadow-md hover:bg-primary hover:text-white transition-all duration-200 font-medium"
              >
                {area.area}
              </Link>
            ))}
          </div>

          <button
            onClick={this.toggleSticky}
            className="shrink-0 ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            title={isSticky ? "取消固定" : "固定导航"}
          >
            <i
              className={`ri-pushpin-fill w-5 h-5 ${isSticky ? "text-primary" : "text-gray-400"}`}
            ></i>
          </button>
        </div>
      </div>
    );
  }
}

class MapInfo extends Component {
  static contextType = MedicalDataContext;

  render() {
    const { currentData } = this.context;
    return (
      <div className="space-y-12">
        {currentData.medicalData.map((areaData, areaIndex) => (
          <div
            key={areaIndex}
            id={areaData.area}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-secondary/50">
              {areaData.area}
            </h2>

            <div className="space-y-10">
              {areaData.hospitals.map((hospital, hospitalIndex) => (
                <div key={hospitalIndex} className="group">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-200">
                    {hospital.name}
                  </h3>

                  {/* 医院备注 */}
                  {hospital.notes && (
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-6">
                      注：{hospital.notes}
                    </p>
                  )}

                  <div className="space-y-4">
                    {hospital.doctors.map((doctor, doctorIndex) => (
                      <div key={doctorIndex} className="space-y-3">
                        {doctor.name && (
                          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-secondary/50 transition-all duration-200">
                            <h4 className="text-gray-800 font-medium">
                              {doctor.name} 医生
                            </h4>
                            <span className="text-sm text-primary bg-secondary px-3 py-1 rounded-full">
                              {doctor.capacity.join(", ")}
                            </span>
                          </div>
                        )}

                        {/* 医生备注 和 分享 */}
                        {(doctor.notes || doctor.shares.length > 0) && (
                          <div className="space-y-3 ml-4">
                            {doctor.notes && (
                              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                注：{doctor.notes}
                              </p>
                            )}
                            {doctor.shares.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {doctor.shares.map((share, shareIndex) => (
                                  <Link
                                    key={shareIndex}
                                    href={share.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-green-200 rounded-lg text-primary hover:text-green-600 transition-colors duration-200"
                                  >
                                    <i className="ri-link text-lg"></i>
                                    <span className="text-sm font-medium">
                                      {share.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MapInfo;
export { MapInfoNav, MapInfoSelect };
