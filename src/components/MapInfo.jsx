import React, { Component } from "react";
import medicalData from "@/data/medicalData.json";
import "remixicon/fonts/remixicon.css";

class MapInfoSelect extends Component {
  render() {
    return (
      <div className="flex justify-end space-x-3 my-4">
        <button className="px-4 py-2 text-sm bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-all duration-200">
          国内版
        </button>
        <button className="px-4 py-2 text-sm bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200">
          儿童版
        </button>
        <button className="px-4 py-2 text-sm bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200">
          国际版
        </button>
      </div>
    );
  }
}

class MapInfoNav extends Component {
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
    const containerClass = `${isSticky ? "sticky" : ""} top-0 py-4 z-50 bg-white/80 backdrop-blur-lg shadow-sm rounded-lg mt-8`;

    return (
      <div className={containerClass}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex flex-wrap gap-2">
            {medicalData.medicalData.map((area, index) => (
              <a
                key={index}
                href={`#${area.area}`}
                className="px-6 py-2.5 text-sm bg-white rounded-full shadow hover:shadow-md hover:bg-primary hover:text-white transition-all duration-200 font-medium"
              >
                {area.area}
              </a>
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
  render() {
    return (
      <div className="space-y-12">
        {medicalData.medicalData.map((areaData, areaIndex) => (
          <div
            key={areaIndex}
            id={areaData.area}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary-light/50">
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
                      {hospital.notes}
                    </p>
                  )}

                  <div className="space-y-4">
                    {hospital.doctors.map((doctor, doctorIndex) => (
                      <div key={doctorIndex} className="space-y-3">
                        {(doctor.name || doctor.capacity) && (
                          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-primary-light/50 transition-all duration-200">
                            <span className="text-gray-800 font-medium">
                              {doctor.name}
                            </span>
                            <span className="text-sm text-primary bg-primary-light px-3 py-1 rounded-full">
                              {doctor.capacity.join(", ")}
                            </span>
                          </div>
                        )}

                        {/* 医生备注 和 分享 */}
                        {(doctor.notes || doctor.shares.length > 0) && (
                          <div className="space-y-3 ml-4">
                            {doctor.notes && (
                              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                {doctor.notes}
                              </p>
                            )}
                            {doctor.shares.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {doctor.shares.map((share, shareIndex) => (
                                  <a
                                    key={shareIndex}
                                    href={share.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-primary-light hover:bg-green-200 rounded-lg text-primary hover:text-green-600 transition-colors duration-200"
                                  >
                                    <i className="ri-link text-lg"></i>
                                    <span className="text-sm font-medium">
                                      {share.name}
                                    </span>
                                  </a>
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
