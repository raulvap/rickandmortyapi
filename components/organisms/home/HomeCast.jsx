import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import Loading from "../../molecules/Loading";
import PersonCard from "../PersonCard";

const HomeCast = () => {
  const { isLoadingCtx, seriesMainCharacters } = useContext(InfoContext);

  if (isLoadingCtx) return <Loading />;

  return (
    <>
      <h2 className="title">Main Cast</h2>

      <div className="flex fcenter frow">
        {seriesMainCharacters.cast.map((item) => {
          return (
            <PersonCard
              key={item.id}
              personName={item.name}
              profile_path={item.profile_path}
              info={item.character}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomeCast;
