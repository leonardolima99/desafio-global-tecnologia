const api = require("../services/api");

function getData() {
  // 0: GetCpuUsageData
  // 1: GetMemoryUsageData
  // 2: GetClusterStatusInfo
  const allData = [];

  Promise.all([
    api.get("b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f"), // GetCpuUsageData
    api.get("d23c3262-967e-4567-b7f6-2fd263748811"), // GetMemoryUsageData
    api.get("cab2791c-7c85-4461-b95c-86bc1a12dc72"), // GetClusterStatusInfo
  ]).then((response) => {
    for (const res of response) {
      const { data } = res;

      allData.push(data);
    }
    console.log(allData);
  });
}

module.exports = getData;

/* 
  https://run.mocky.io/v3/d23c3262-967e-4567-b7f6-2fd263748811 // GetCpuUsageData
  https://run.mocky.io/v3/cab2791c-7c85-4461-b95c-86bc1a12dc72 // GetMemoryUsageData
  https://run.mocky.io/v3/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f // GetClusterStatusInfo
*/

/* async function GetCpuUsageData() {
  const response = await api.get("b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f");

  console.log(response.data);
}

async function GetMemoryUsageData() {
  const response = await api.get("d23c3262-967e-4567-b7f6-2fd263748811");

  console.log(response.data);
}

async function GetClusterStatusInfo() {
  const response = await api.get("cab2791c-7c85-4461-b95c-86bc1a12dc72");

  console.log(response.data);
} */

/* 
const cpuUsageData = await getCpuUsageData();
const memoryUsageData = await getMemoryUsageData();
const clusterStatusInfo = await getClusterStatusInfo();
console.timeEnd("resposta");
return {
  cpu: cpuUsageData,
  memory: memoryUsageData,
  cluster: clusterStatusInfo,
}; */
