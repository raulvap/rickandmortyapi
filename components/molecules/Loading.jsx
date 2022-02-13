import { CircularProgress } from "@mui/material";

const Loading = ({ text = "" }) => {
  return (
    <div className="loading">
      <CircularProgress />
      <p>Loading {text}...</p>
    </div>
  );
};

export default Loading;
