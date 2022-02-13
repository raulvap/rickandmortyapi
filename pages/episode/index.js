import { useRef } from "react";
import useGetInfoPaginated from "../../hooks/useGetInfoPaginated";
import BasicLayout from "../../layouts/BasicLayout";
import ListTemplate from "../../components/templates/ListTemplate";

const Index = () => {
  const category = useRef("episode");

  const {
    currentPage,
    isLoading,
    listInfo,
    loadInfo,
    totalCount,
    totalPages,
    searchParams,
    setSearchParams,
  } = useGetInfoPaginated(category.current);

  return (
    <BasicLayout>
      <div className="page">
        <h1>{category.current.toUpperCase() + "S"}</h1>
        <ListTemplate
          category={category.current}
          currentPage={currentPage}
          isLoading={isLoading}
          listInfo={listInfo}
          loadInfo={loadInfo}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          totalCount={totalCount}
          totalPages={totalPages}
        />
      </div>
    </BasicLayout>
  );
};

export default Index;
