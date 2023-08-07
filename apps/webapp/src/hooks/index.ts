import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { useEffect, useState } from 'react';

type GetTimeReponse = {
  epoch: number;
};

const refreshInterval = 30000;

export const useGetTime = () => {
  const { data, error, isLoading } = useSWR<GetTimeReponse>(`/time`, fetcher, {
    refreshInterval,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useGetMetrics = () => {
  const { data, error, isLoading } = useSWR<string>(`/metrics`, fetcher, {
    refreshInterval,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useTimeDifference = (epochStamp?: number) => {
  const [timeDifference, setTimeDifference] = useState<string | null>(null);

  useEffect(() => {
    if (!epochStamp) return;

    const timeout = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const diffSeconds = currentTime - epochStamp;

      const hours = Math.floor(diffSeconds / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      setTimeDifference(
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
      );
    }, 1000);

    return () => clearInterval(timeout);
  }, [epochStamp, setTimeDifference]);

  return timeDifference;
};
