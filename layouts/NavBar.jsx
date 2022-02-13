import Image from "next/image";
import Link from "next/link";
import Logo from "../public/rick_and_morty_logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={Logo} width={178} height={59} alt="Logo Rick y Morty" />
      </div>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/character">
            <a>Characters</a>
          </Link>
        </li>
        <li>
          <Link href="/location">
            <a>Locations</a>
          </Link>
        </li>
        <li>
          <Link href="/episode">
            <a>Episodes</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
