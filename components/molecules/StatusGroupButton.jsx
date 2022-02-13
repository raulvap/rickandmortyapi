import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const StatusGroupButton = ({ value, handleSearch }) => {
  return (
    <div style={{ padding: "5px" }}>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          variant={value === "alive" ? "contained" : "outlined"}
          onClick={() => handleSearch("status", "alive")}
        >
          Alive
        </Button>
        <Button
          variant={value === "dead" ? "contained" : "outlined"}
          onClick={() => handleSearch("status", "dead")}
        >
          Dead
        </Button>
        <Button
          variant={value === "unknow" ? "contained" : "outlined"}
          onClick={() => handleSearch("status", "unknow")}
        >
          Unknow
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default StatusGroupButton;
