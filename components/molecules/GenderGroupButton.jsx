import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import useWindowSize from "../../hooks/useWindowSize";

const GenderGroupButton = ({ value, handleSearch }) => {
  const { width } = useWindowSize();

  return (
    <div style={{ padding: "5px" }}>
      <ButtonGroup
        orientation={width > 515 ? "horizontal" : "vertical"}
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          variant={value === "female" ? "contained" : "outlined"}
          onClick={() => handleSearch("gender", "female")}
        >
          Female
        </Button>
        <Button
          variant={value === "male" ? "contained" : "outlined"}
          onClick={() => handleSearch("gender", "male")}
        >
          Male
        </Button>
        <Button
          variant={value === "genderless" ? "contained" : "outlined"}
          onClick={() => handleSearch("gender", "genderless")}
        >
          Genderless
        </Button>
        <Button
          variant={value === "unknow" ? "contained" : "outlined"}
          onClick={() => handleSearch("gender", "unknow")}
        >
          Unknow
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GenderGroupButton;
