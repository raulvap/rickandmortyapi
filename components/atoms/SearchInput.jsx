import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";

const SearchInput = (props) => {
  const { value, inputKey, handleSearch, placeholder = "Search" } = props;

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label={placeholder}
          variant="standard"
          fullWidth
          value={value}
          onChange={(e) => handleSearch(inputKey, e.target.value.toLowerCase())}
        />
      </Box>
    </div>
  );
};

export default SearchInput;
