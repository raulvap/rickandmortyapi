import { InfoProvider } from "../context/InfoContext";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <InfoProvider>
      <Component {...pageProps} />
    </InfoProvider>
  );
}

export default MyApp;
