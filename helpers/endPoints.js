// Fetch the database URL
import fetch from "node-fetch";

export const fetchAllData = async (endPoints) => {

  const allEndpoints = endPoints.map(endPoint => fetch(endPoint));
  return Promise.all(allEndpoints);

};