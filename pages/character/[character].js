import { useRouter } from "next/router";
import useIsMounted from "../../hooks/useIsMounted";
import useGetSingleInfo from "../../hooks/useGetSingleInfo";

import BasicLayout from "../../layouts/BasicLayout";
import Loading from "../../components/molecules/Loading";
import CharacterInfo from "../../components/templates/CharacterInfo";

const CharacterPage = () => {
  const { query } = useRouter();
  const isMounted = useIsMounted();

  const { isLoading, itemInfo } = useGetSingleInfo(
    isMounted,
    "character",
    query.character
  );

  return (
    <BasicLayout>
      <div className="page">
        {isLoading ? (
          <Loading text="character" />
        ) : (
          <CharacterInfo item={itemInfo.data} />
        )}
      </div>
    </BasicLayout>
  );
};

export default CharacterPage;
