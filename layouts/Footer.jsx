import Image from "next/image";
import ShapeDividerWhite from "../components/atoms/ShapeDividerWhite";
import Logo from "../public/rick_and_morty_logo.png";

const Footer = () => {
  return (
    <footer
      style={{ position: "relative", marginTop: "20px", overflow: "hidden" }}
    >
      <ShapeDividerWhite />
      <div className="footer">
        <div>
          <Image src={Logo} width={320} height={110} alt="Logo Rick y Morty" />
        </div>
        <div>
          <h3>About This App</h3>
          <p>
            This app was developed to use the public API of Rick and Morty and
            The Movie Database,
            <br /> for non-profit purposes
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">
            View this Code in GitHub
          </a>
        </div>
        <div>
          <p>Developed by Raul Vap, using:</p>
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Rick and Morty API
          </a>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Movie DataBase
          </a>

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
