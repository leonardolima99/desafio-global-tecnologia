const api = require("../services/api");

async function getCpuUsageData() {
  const response = await api.get("b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f");

  console.log(response.data);
}

async function getMemoryUsageData() {
  const response = await api.get("d23c3262-967e-4567-b7f6-2fd263748811");

  console.log(response.data);
}

async function getClusterStatusInfo() {
  const response = await api.get("cab2791c-7c85-4461-b95c-86bc1a12dc72");

  console.log(response.data);
}

async function getData() {
  console.time("resposta");
  const cpuUsageData = await getCpuUsageData();
  const memoryUsageData = await getMemoryUsageData();
  const clusterStatusInfo = await getClusterStatusInfo();
  console.timeEnd("resposta");
  return {
    cpu: cpuUsageData,
    memory: memoryUsageData,
    cluster: clusterStatusInfo,
  };
}

console.log(getData());
/* 
  https://run.mocky.io/v3/d23c3262-967e-4567-b7f6-2fd263748811
  https://run.mocky.io/v3/cab2791c-7c85-4461-b95c-86bc1a12dc72
  https://run.mocky.io/v3/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f
*/
