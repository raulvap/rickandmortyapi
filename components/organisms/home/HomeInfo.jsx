import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import Characteristics from "../../molecules/Characteristics";
import Loading from "../../molecules/Loading";

const HomeInfo = () => {
  const { isLoadingCtx, seriesInfo } = useContext(InfoContext);

  if (isLoadingCtx) return <Loading />;

  return (
    <div className="home-info flex fcenter frow">
      <div className="card mg-10 ">
        <Characteristics
          icon="live_tv"
          characteristic="Episodes"
          value={seriesInfo.number_of_episodes}
        />
      </div>
      <div className="card mg-10">
        <Characteristics
          icon="theaters"
          characteristic="Seasons"
          value={seriesInfo.number_of_seasons}
        />
      </div>
      <div className="card mg-10">
        <Characteristics
          icon="theaters"
          characteristic="First Episode"
          value={seriesInfo.first_air_date}
        />
      </div>
      <div className="card mg-10">
        <Characteristics
          icon="theaters"
          characteristic="Last Episode"
          value={seriesInfo.last_air_date}
        />
      </div>
    </div>
  );
};

export default HomeInfo;
