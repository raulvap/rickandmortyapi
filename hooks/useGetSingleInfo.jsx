import { useEffect, useState } from "react";
import { rickAndMortyApi, BASE_URL } from "../api/rickandmortyapi";

export const useGetSingleInfo = (isMounted, category, id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    if (isMounted) {
      loadItem();
    }
  }, [isMounted]);

  const loadItem = async () => {
    setIsLoading(true);

    const url = `${BASE_URL}/${category}/${id}`;
    const resp = await rickAndMortyApi.get(url);
    setItemInfo(resp);
    setIsLoading(false);
  };

  return {
    isLoading,
    itemInfo,
  };
};

export default useGetSingleInfo;
