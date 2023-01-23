import { useEffect, useState } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
}

export function useFetchGet(url: string) {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
}
