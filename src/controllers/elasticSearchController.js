const api = require("../services/api");

exports.index = async function (req, res) {
  try {
    // 0: GetCpuUsageData
    // 1: GetMemoryUsageData
    // 2: GetClusterStatusInfo
    const allData = [];

    const response = await Promise.all([
      api.get("b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f"), // GetCpuUsageData
      api.get("d23c3262-967e-4567-b7f6-2fd263748811"), // GetMemoryUsageData
      api.get("cab2791c-7c85-4461-b95c-86bc1a12dc72"), // GetClusterStatusInfo
    ]);

    for (const res of response) {
      const { data } = res;

      allData.push(data);
    }

    res.json(allData);
  } catch (err) {
    console.log(`Hearth Check Error: ${err.status} -> ${err.message}`);
  }
};
