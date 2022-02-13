import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import Loading from "../../molecules/Loading";
import PersonCard from "../PersonCard";

const HomeCreator = () => {
  const { isLoadingCtx, seriesInfo } = useContext(InfoContext);

  if (isLoadingCtx) return <Loading />;

  return (
    <div>
      <h2 className="title">Creators</h2>
      <div className="flex fcenter frow">
        {seriesInfo.created_by.map((item) => {
          return (
            <PersonCard
              key={item.id}
              personName={item.name}
              profile_path={item.profile_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeCreator;
