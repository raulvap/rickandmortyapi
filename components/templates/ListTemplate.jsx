import { Pagination } from "@mui/material";
import BasicLayout from "../../layouts/BasicLayout";
import LocationTable from "../organisms/LocationTable";
import SearchOrganism from "../organisms/SearchOrganism";
import Characteristics from "../molecules/Characteristics";
import Loading from "../molecules/Loading";
import EpisodeTable from "../organisms/EpisodeTable";

const ListTemplate = (props) => {
  const {
    category,
    currentPage,
    isLoading,
    listInfo,
    loadInfo,
    searchParams,
    setSearchParams,
    totalCount,
    totalPages,
  } = props;

  const handlePaginationChange = (e, value) => {
    loadInfo(value);
    // window.scrollTo(0, 0);
  };

  return (
    <>
      <SearchOrganism
        category={category}
        loadInfo={loadInfo}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <div style={{ height: "20px" }} />

      {isLoading ? (
        <Loading text={category} />
      ) : (
        <>
          <Characteristics
            icon="travel_explore"
            characteristic={`Total ${category}s`}
            value={totalCount}
          />
          <div className="list">
            {category === "location" ? (
              <LocationTable listInfo={listInfo} />
            ) : (
              <EpisodeTable listInfo={listInfo} />
            )}
          </div>
        </>
      )}

      <Pagination
        count={totalPages}
        page={currentPage}
        showFirstButton
        showLastButton
        onChange={handlePaginationChange}
      />
      <div style={{ height: "60px" }} />
    </>
  );
};

export default ListTemplate;
