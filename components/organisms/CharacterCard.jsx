import { useRouter } from "next/router";
import Image from "next/image";

import ButtonSimple from "../atoms/ButtonSimple";
import Status from "../atoms/Status";

const CharacterCard = ({ character, info }) => {
  const { id, image, name, origin = { name: "" }, species, status } = character;
  const router = useRouter();

  return (
    <div
      className="info-card card pointer"
      onClick={() => router.push(`/character/${id}`)}
    >
      <Image src={image} width={220} height={220} alt={name} />

      <div className="info-card__info">
        <div>
          <h3>{name}</h3>
          <p>Origin</p>
          <h4>{origin.name}</h4>
          {info ? (
            <ul>
              <li>Character ID: {id} </li>
              <li>Species: {species} </li>
            </ul>
          ) : null}
          <Status status={status} />
        </div>
        {info && <ButtonSimple text="See more details" />}
      </div>
    </div>
  );
};

export default CharacterCard;
