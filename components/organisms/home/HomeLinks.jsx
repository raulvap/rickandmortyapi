import Link from "next/link";
import Characteristics from "../../molecules/Characteristics";

const HomeLinks = () => {
  return (
    <>
      <div style={{ height: "60px" }} />
      <div className="flex fcenter frow">
        <div className="card mg-10 pointer">
          <Link href="/character">
            <Characteristics
              icon="people"
              characteristic="Browse"
              value="Characters"
            />
          </Link>
        </div>
        <div className="card mg-10 pointer">
          <Link href="/episode">
            <Characteristics
              icon="live_tv"
              characteristic="Browse"
              value="Episodes"
            />
          </Link>
        </div>
        <div className="card mg-10 pointer">
          <Link href="/location">
            <Characteristics
              icon="place"
              characteristic="Browse"
              value="Locations"
            />
          </Link>
        </div>
      </div>
      <div style={{ height: "60px" }} />
    </>
  );
};

export default HomeLinks;
