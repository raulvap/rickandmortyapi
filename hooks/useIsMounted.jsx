import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useIsMounted = () => {
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  return isReady;
};

export default useIsMounted;
