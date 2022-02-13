import HomeCast from "../components/organisms/home/HomeCast";
import HomeCover from "../components/organisms/home/HomeCover";
import HomeCreator from "../components/organisms/home/HomeCreator";
import HomeInfo from "../components/organisms/home/HomeInfo";
import HomeTrailer from "../components/organisms/home/HomeTrailer";

import BasicLayout from "../layouts/BasicLayout";

export default function Home() {
  return (
    <BasicLayout>
      <HomeCover />
      <HomeCreator />
      <HomeInfo />
      <HomeCast />
      <HomeTrailer />
    </BasicLayout>
  );
}
