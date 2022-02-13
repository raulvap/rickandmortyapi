import { Pagination } from "@mui/material";
import Characteristics from "../molecules/Characteristics";
import CharacterCard from "../organisms/CharacterCard";

const CharacterList = ({
  listInfo,
  totalPages,
  currentPage,
  loadInfo,
  totalCount,
}) => {
  const handleChange = (e, value) => {
    loadInfo(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Characteristics
        icon="people_alt"
        characteristic="Total Characters"
        value={totalCount}
      />

      <div className="list">
        {listInfo.map((item) => {
          return <CharacterCard key={item.id} character={item} info />;
        })}
      </div>

      <Pagination
        count={totalPages}
        page={currentPage}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </>
  );
};

export default CharacterList;
