import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import Loading from "../../molecules/Loading";

const HomeTrailer = () => {
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: "",
    height: "",
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.6,
    });

    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="title">Trailer</h2>
      <div className="flex fcenter">
        <iframe
          width={windowSize.width}
          height={windowSize.height}
          src="https://www.youtube.com/embed/_uUcMwsR5hg"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeTrailer;
