import moment from "moment";
import { useRouter } from "next/router";
import useGetMultipleInfo from "../../hooks/useGetMultipleInfo";
import Characteristics from "../molecules/Characteristics";
import Loading from "../molecules/Loading";
import ButtonPrimary from "../atoms/ButtonPrimary";
import CharacterCard from "../organisms/CharacterCard";

const EpisodeInfo = ({ item }) => {
  const { air_date, characters, episode, id, name } = item;
  const { isLoading, multipleArray } = useGetMultipleInfo(
    "character",
    characters
  );

  const router = useRouter();

  return (
    <>
      <div className="div-space" />
      <h1>{name}</h1>

      <div className="item-info">
        <div className="item-info-table card">
          <Characteristics icon="tag" characteristic="Episode ID" value={id} />
          <Characteristics
            icon="theaters"
            characteristic="Episode"
            value={episode}
          />

          <Characteristics
            icon="connected_tv"
            characteristic="Air Date"
            value={air_date}
          />
        </div>
      </div>

      {isLoading ? (
        <Loading text="characters" />
      ) : (
        <div className="item-info-table card">
          <Characteristics
            icon="people"
            characteristic="Total Characters"
            value={multipleArray.length}
          />
          <div className="list">
            {multipleArray.map((item) => {
              return <CharacterCard key={item.id} character={item} info />;
            })}
          </div>
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

export default EpisodeInfo;
