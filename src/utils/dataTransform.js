/**
 * 转换医疗数据为地图可用的格式
 * @param {Array} medicalData - 原始医疗数据数组
 * @returns {Array} 转换后的数据数组，每个元素包含：
 *   - name {string} 地区名称
 *   - hospitals {number} 医院数量
 *   - doctors {number} 医生总数
 *   - type {number} 诊断类型映射 (1-ADHD&ASD, 2-仅ADHD, 3-仅ASD, 0-无)
 */
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
