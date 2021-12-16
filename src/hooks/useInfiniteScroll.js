import { useEffect, useRef, useState, useCallback } from "react";

const options = {
  threshold: 0.25,
};
export default function useInfiniteScroll(fetchData, initialData) {
  const [lastElement, setLastElement] = useState(null);
  const [incomingLoading, setIncomingLoading] = useState(false);
  const [animeData, setAnimeData] = useState(null);

  const pageNum = useRef(1);
  const waitObserve = useRef(false);
  const hasNextPage = useRef(true);

  const fetchingMoreData = useCallback(async () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animeData]);

  const observer = useRef();

  useEffect(() => {
    waitObserve.current = incomingLoading;
  }, [incomingLoading]);

  useEffect(() => {
    if (initialData) {
      setAnimeData(initialData.Page);
    }
  }, [initialData]);

  useEffect(() => {
    const currentElement = lastElement;
    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && !waitObserve.current && hasNextPage.current) {
        console.log("Fetch");
        fetchingMoreData();
      }
    }, options);

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
