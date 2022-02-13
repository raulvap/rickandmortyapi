import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SearchInput from "../atoms/SearchInput";
import ClearIcon from "@mui/icons-material/Clear";

const SearchOrganism = (props) => {
  const { category, loadInfo, searchParams, setSearchParams } = props;
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadInfo();
    }, 900);

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
    setSearchParams({ name: "" });
    setShowClearButton(false);
  };

  return (
    <div className="search-section card">
      <SearchInput
        handleSearch={handleSearch}
        inputKey="name"
        value={searchParams.name}
        placeholder={`Search ${category} by name`}
      />
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

export default SearchOrganism;
