import { useRouter } from "next/router";
import Link from "next/link";

import moment from "moment";

import CharacterCard from "../organisms/CharacterCard";
import EpisodeTable from "../organisms/EpisodeTable";
import Characteristics from "../molecules/Characteristics";
import ButtonPrimary from "../atoms/ButtonPrimary";
import useGetMultipleInfo from "../../hooks/useGetMultipleInfo";
import Loading from "../molecules/Loading";

const CharacterInfo = ({ item }) => {
  const { created, episode, gender, location, name, species, status } = item;
  const { isLoading, multipleArray } = useGetMultipleInfo("episode", episode);
  const router = useRouter();

  let locationId = location.url.split("/").pop();

  return (
    <>
      <div className="div-space" />
      <h1>{name}</h1>
      <div className="item-info">
        <CharacterCard character={item} button={false} />
        <div className="item-info-table card">
          <Characteristics icon="wc" characteristic="Gender" value={gender} />
          <Characteristics
            icon="category"
            characteristic="Species"
            value={species}
          />
          <Characteristics
            icon="accessibility"
            characteristic="Status"
            value={status}
          />

          <Link href={`/location/${locationId}`}>
            <div style={{ cursor: "pointer" }}>
              <Characteristics
                icon="place"
                characteristic="Location"
                value={location.name}
              />
            </div>
          </Link>
          <Characteristics
            icon="event_available"
            characteristic="Created"
            value={moment(created).format("LL")}
          />
        </div>
      </div>

      {isLoading ? (
        <Loading text="episodes" />
      ) : (
        <div className="item-info-table card">
          <Characteristics
            icon="ondemand_video"
            characteristic="Total Episodes"
            value={multipleArray.length}
          />
          <EpisodeTable listInfo={multipleArray} />
        </div>
      )}

      <div className="floting-up-left">
        <ButtonPrimary
          text="Go back"
          action={() => router.back()}
          icon="arrow_back"
        />
      </div>
    </>
  );
};

export default CharacterInfo;
