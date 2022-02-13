import { useRouter } from "next/router";
import useIsMounted from "../../hooks/useIsMounted";
import useGetSingleInfo from "../../hooks/useGetSingleInfo";

import BasicLayout from "../../layouts/BasicLayout";
import Loading from "../../components/molecules/Loading";
import EpisodeInfo from "../../components/templates/EpisodeInfo";

const EpisodePage = () => {
  const { query } = useRouter();
  const isMounted = useIsMounted();

  const { isLoading, itemInfo } = useGetSingleInfo(
    isMounted,
    "episode",
    query.episode
  );

  return (
    <BasicLayout>
      <div className="page">
        {isLoading ? (
          <Loading text="episode" />
        ) : (
          <EpisodeInfo item={itemInfo.data} />
        )}
      </div>
    </BasicLayout>
  );
};

export default EpisodePage;
