import { useEffect, useState } from "react";
import { rickAndMortyApi, BASE_URL } from "../api/rickandmortyapi";

export const useGetMultipleInfo = (category, arrayReceived) => {
  const [isLoading, setIsLoading] = useState(true);
  const [multipleArray, setMultipleArray] = useState([]);

  useEffect(() => {
    const temporalArray = [];
    arrayReceived.map((item) => {
      const urlParts = item.split("/").pop();
      temporalArray.push(urlParts);
    });
    searchEpisodes(temporalArray);
    setIsLoading(false);
  }, [arrayReceived]);

  const searchEpisodes = async (temporalArray) => {
    const url = `${BASE_URL}/${category}/${temporalArray}`;

    const resp = await rickAndMortyApi.get(url);

    if (resp.data.length !== undefined) {
      setMultipleArray(resp.data);
    } else {
      const arrayRespTemporal = [];
      arrayRespTemporal.push(resp.data);
      setMultipleArray(arrayRespTemporal);
    }
  };

  return {
    isLoading,
    multipleArray,
  };
};

export default useGetMultipleInfo;
