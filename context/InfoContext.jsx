import { createContext, useEffect, useState } from "react";
import {
  CREDITS_URL,
  INFO_URL,
  MAINCHARACTERS_URL,
  tmbdApi,
} from "../api/tmbdApi";

export const InfoContext = createContext({
  seriesCredits: undefined,
  seriesInfo: undefined,
  seriesMainCharacters: undefined,
  isLoadingCtx: true,
});

export const InfoProvider = ({ children }) => {
  const [seriesCredits, setSeriesCredits] = useState(undefined);
  const [seriesInfo, setSeriesInfo] = useState(undefined);
  const [seriesMainCharacters, setSeriesMainCharacters] = useState(undefined);
  const [isLoadingCtx, setIsLoadingCtx] = useState(true);

  useEffect(() => {
    (async () => {
      const infoResp = await tmbdApi.get(INFO_URL);
      setSeriesInfo(infoResp.data);

      const creditsResp = await tmbdApi.get(CREDITS_URL);
      setSeriesCredits(creditsResp.data);

      const mainCharactersResp = await tmbdApi.get(MAINCHARACTERS_URL);
      setSeriesMainCharacters(mainCharactersResp.data);
      setIsLoadingCtx(false);
    })();
  }, []);

  return (
    <InfoContext.Provider
      value={{
        seriesCredits,
        seriesInfo,
        seriesMainCharacters,
        isLoadingCtx,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
