import Image from "next/image";
import { IMAGE_BASE_URL } from "../../api/tmbdApi";

const PersonCard = ({ personName, info, profile_path }) => {
  let image = `${IMAGE_BASE_URL}${profile_path}`;

  return (
    <div className="info-card card">
      <Image src={image} width={220} height={330} alt={personName} />

      <div className="info-card__info">
        <h3>{personName}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default PersonCard;
