export function transformMedicalData(medicalData) {
  return medicalData.map((areaData) => {
    // 统计支持的诊断类型
    const supportTypes = new Set();
    areaData.hospitals.forEach((hospital) => {
      hospital.doctors.forEach((doctor) => {
        doctor.capacity.forEach((cap) => {
          if (cap === "ADHD") supportTypes.add(2);
          if (cap === "ASD") supportTypes.add(3);
        });
      });
    });

    // tpye字段记录地图着色映射 1-ADHD&ASD 2-ADHD 3-ASD
    let type = 0;
    if (supportTypes.has(2) && supportTypes.has(3)) {
      type = 1;
    } else if (supportTypes.has(2)) {
      type = 2;
    } else if (supportTypes.has(3)) {
      type = 3;
    }

    return {
      name: areaData.area,
      hospitals: areaData.hospitals.length,
      doctors: areaData.hospitals.reduce(
        (sum, hospital) => sum + hospital.doctors.length,
        0,
      ),
      type: type,
    };
  });
}
