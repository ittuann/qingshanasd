import React, { Component, useContext } from "react";
import Link from "next/link";
import { MedicalDataContext } from "@/context/MedicalDataContext";
import { FormattedMessage } from "react-intl";
import "remixicon/fonts/remixicon.css";

const MapInfoSelect = () => {
  const { dataType, switchData } = useContext(MedicalDataContext);

  return (
    <div className="mt-4 flex justify-end">
      <div className="inline-flex space-x-3 rounded-xl border border-gray-200 bg-gray-50 p-2 shadow-lg">
        <button
          onClick={() => switchData("domestic")}
          className={`rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
            dataType === "domestic"
              ? "bg-primary text-white shadow-sm"
              : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm"
          }`}
        >
          <FormattedMessage id="MedicalMap.MapInfoSelect.adult" />
        </button>
        <button
          onClick={() => switchData("child")}
          className={`rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
            dataType === "child"
              ? "bg-primary text-white shadow-sm"
              : "bg-transparent text-gray-700 hover:bg-white hover:shadow-sm"
          }`}
        >
          <FormattedMessage id="MedicalMap.MapInfoSelect.child" />
        </button>
        <button
          onClick={() => switchData("abroad")}
          className={`rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <div className="flex flex-wrap gap-2">
            {currentData.medicalData.map((area, index) => (
              <Link
                key={index}
                href={`#${area.area}`}
                className="hover:bg-primary rounded-full bg-white px-6 py-2.5 text-sm font-medium shadow transition-all duration-200 hover:text-white hover:shadow-md"
              >
                {area.area}
              </Link>
            ))}
          </div>

          <button
            onClick={this.toggleSticky}
            className="ml-4 shrink-0 rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
            title={isSticky ? "取消固定" : "固定导航"}
          >
            <i
              className={`ri-pushpin-fill h-5 w-5 ${isSticky ? "text-primary" : "text-gray-400"}`}
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
            className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <h2 className="border-secondary/50 mb-8 border-b-2 pb-2 text-2xl font-bold text-gray-900">
              {areaData.area}
            </h2>

            <div className="space-y-10">
              {areaData.hospitals.map((hospital, hospitalIndex) => (
                <div key={hospitalIndex} className="group">
                  <h3 className="group-hover:text-primary mb-4 text-xl font-semibold text-gray-900 transition-colors duration-200">
                    {hospital.name}
                  </h3>

                  {/* 医院备注 */}
                  {hospital.notes && (
                    <p className="mb-6 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                      注：{hospital.notes}
                    </p>
                  )}

                  <div className="space-y-4">
                    {hospital.doctors.map((doctor, doctorIndex) => (
                      <div key={doctorIndex} className="space-y-3">
                        {doctor.name && (
                          <div className="hover:bg-secondary/50 flex items-center justify-between rounded-lg bg-gray-50 p-4 transition-all duration-200">
                            <h4 className="font-medium text-gray-800">
                              {doctor.name} 医生
                            </h4>
                            <span className="text-primary bg-secondary rounded-full px-3 py-1 text-sm">
                              {doctor.capacity.join(", ")}
                            </span>
                          </div>
                        )}

                        {/* 医生备注 和 分享 */}
                        {(doctor.notes || doctor.shares.length > 0) && (
                          <div className="ml-4 space-y-3">
                            {doctor.notes && (
                              <p className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                                注：{doctor.notes}
                              </p>
                            )}
                            {doctor.shares.length > 0 && (
                              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                {doctor.shares.map((share, shareIndex) => (
                                  <Link
                                    key={shareIndex}
                                    href={share.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-secondary text-primary flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-green-200 hover:text-green-600"
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
