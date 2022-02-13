import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import GenderGroupButton from "../molecules/GenderGroupButton";
import SearchInput from "../atoms/SearchInput";
import StatusGroupButton from "../molecules/StatusGroupButton";

const SearchCharacter = ({ searchParams, setSearchParams, loadInfo }) => {
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadInfo();
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchParams]);

  const handleSearch = (key, value) => {
    setShowClearButton(true);
    setSearchParams({
      ...searchParams,
      [key]: value,
    });
  };

  const clearFilter = () => {
    setSearchParams({
      name: "",
      status: "",
      gender: "",
    });
    setShowClearButton(false);
  };

  return (
    <div className="search-section card">
      <SearchInput
        inputKey="name"
        value={searchParams.name}
        handleSearch={handleSearch}
        placeholder="Search Character"
      />

      <div className="search-section__buttons">
        <StatusGroupButton
          value={searchParams.status}
          handleSearch={handleSearch}
        />

        <GenderGroupButton
          value={searchParams.gender}
          handleSearch={handleSearch}
        />
      </div>
      <div className="search-section__clear">
        {showClearButton && (
          <Button
            fullWidth
            color="error"
            variant="outlined"
            startIcon={<ClearIcon />}
            onClick={clearFilter}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchCharacter;
