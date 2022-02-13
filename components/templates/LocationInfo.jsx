import moment from "moment";
import { useRouter } from "next/router";
import useGetMultipleInfo from "../../hooks/useGetMultipleInfo";
import Characteristics from "../molecules/Characteristics";
import Loading from "../molecules/Loading";
import ButtonPrimary from "../atoms/ButtonPrimary";
import CharacterCard from "../organisms/CharacterCard";

const LocationInfo = ({ item }) => {
  const { created, dimension, id, name, residents, type } = item;
  const { isLoading, multipleArray } = useGetMultipleInfo(
    "character",
    residents
  );

  const router = useRouter();

  return (
    <>
      <div className="div-space" />
      <h1>{name}</h1>

      <div className="item-info">
        <div className="item-info-table card">
          <Characteristics icon="tag" characteristic="Location ID" value={id} />
          <Characteristics
            icon="travel_explore"
            characteristic="Type"
            value={type}
          />
          <Characteristics
            icon="event_available"
            characteristic="Created"
            value={moment(created).format("LL")}
          />

          <Characteristics
            icon="language"
            characteristic="Dimension"
            value={dimension}
          />
        </div>
      </div>

      {isLoading ? (
        <Loading text="residents" />
      ) : (
        <div className="item-info-table card">
          <Characteristics
            icon="people"
            characteristic="Total Residents"
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

export default LocationInfo;
