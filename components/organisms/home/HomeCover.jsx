import { useContext } from "react";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";

import { InfoContext } from "../../../context/InfoContext";
import Poster from "../../../public/poster.jpeg";

const HomeCover = () => {
  const { isLoadingCtx, seriesInfo } = useContext(InfoContext);

  return (
    <div className="home-cover">
      <div className="home-cover__image" />
      <div className="home-cover__overlay" />
      <div className="home-cover__content">
        <div className="poster card">
          <Image
            src={Poster}
            width={300}
            height={500}
            alt="Rick and Morty Poster"
          />
        </div>
        <div className="home-cover-info">
          {!isLoadingCtx && (
            <>
              <h2>
                <strong>{seriesInfo.name} </strong> (2013)
              </h2>

              <div className="list-info">
                {seriesInfo.genres.map((item) => {
                  return <p key={item.id}> {item.name} |</p>;
                })}
              </div>

              <span>
                <GradeIcon /> {seriesInfo.vote_average}
              </span>
              <h4>Resume</h4>
              <p>{seriesInfo.overview}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
