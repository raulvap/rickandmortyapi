import { useRouter } from "next/router";
import useIsMounted from "../../hooks/useIsMounted";
import useGetSingleInfo from "../../hooks/useGetSingleInfo";

import BasicLayout from "../../layouts/BasicLayout";
import LocationInfo from "../../components/templates/LocationInfo";
import Loading from "../../components/molecules/Loading";

const LocationPage = () => {
  const { query } = useRouter();
  const isMounted = useIsMounted();

  const { isLoading, itemInfo } = useGetSingleInfo(
    isMounted,
    "location",
    query.location
  );

  return (
    <BasicLayout>
      <div className="page">
        {isLoading ? (
          <Loading text="location" />
        ) : (
          <LocationInfo item={itemInfo.data} />
        )}
      </div>
    </BasicLayout>
  );
};

export default LocationPage;
