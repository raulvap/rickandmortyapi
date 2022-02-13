import { useState } from "react";
import { rickAndMortyApi, BASE_URL } from "../api/rickandmortyapi";

export const useGetCharactersPaginated = (category) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [listInfo, setListInfo] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useState({
    name: "",
    status: "",
    gender: "",
  });

  const loadInfo = async (page = 1) => {
    setIsLoading(true);

    let url = `${BASE_URL}/${category}/?page=${page}&name=${searchParams.name}&status=${searchParams.status}&gender=${searchParams.gender}`;

    try {
      const resp = await rickAndMortyApi.get(url);
      setCurrentPage(page);
      setTotalCount(resp.data.info.count);
      setTotalPages(resp.data.info.pages);
      setListInfo(resp.data.results);
    } catch (error) {
      console.log(error);
      setCurrentPage(1);
      setTotalCount(0);
      setTotalPages(1);
      setListInfo([]);
    }

    setIsLoading(false);
  };

  return {
    currentPage,
    isLoading,
    listInfo,
    loadInfo,
    searchParams,
    setSearchParams,
    totalCount,
    totalPages,
  };
};

export default useGetCharactersPaginated;
