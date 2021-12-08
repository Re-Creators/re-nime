import { useEffect, useRef, useState } from "react";

export default function useInfiniteScroll(fetchData, initialData) {
  const [lastElement, setLastElement] = useState(null);
  const [incomingLoading, setIncomingLoading] = useState(false);
  const [animeData, setAnimeData] = useState(null);

  const pageNum = useRef(1);
  const waitObserve = useRef(false);
  const hasNextPage = useRef(true);

  const fetchingMoreData = async () => {
    console.log("Fetcing...");
    setIncomingLoading(true);
    pageNum.current++;
    const { data } = await fetchData(pageNum.current);

    if (!data.Page.pageInfo.hasNextPage) {
      hasNextPage.current = false;
    }

    const newMedia = [...animeData.media, ...data.Page.media];
    data.Page.media = newMedia;

    setAnimeData(data.Page);
    setIncomingLoading(false);
  };

  const observer = useRef();

  useEffect(() => {
    waitObserve.current = incomingLoading;
  }, [incomingLoading]);

  useEffect(() => {
    console.log("Initial");
    if (initialData) {
      setAnimeData(initialData.Page);
    }
  }, [initialData]);

  useEffect(() => {
    const currentElement = lastElement;
    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && !waitObserve.current && hasNextPage.current) {
        fetchingMoreData();
      }
    });

    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.current.unobserve(currentElement);
      }
    };
  }, [lastElement, fetchingMoreData]);

  return { setLastElement, incomingLoading, animeData };
}
