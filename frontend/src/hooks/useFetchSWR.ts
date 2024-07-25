import { useEffect, useState } from "react";

import { AxiosResponse } from "axios";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

import { Key } from "swr/_internal";

type Fetcher<T> = (key: Key) => Promise<AxiosResponse<T>>;

interface UseFetchSWRResponse<T>
  extends Omit<SWRResponse<T, Key>, "data" | "mutate"> {
  data: T;
}

const useFetchSWR = <T>(
  key: Key,
  fetcher: Fetcher<T>,
  initialData: T,
  config?: SWRConfiguration<AxiosResponse<T>>
): UseFetchSWRResponse<T> => {
  const { data, ...rest } = useSWR<AxiosResponse<T>>(key, fetcher, config);
  const [axiosData, setAxiosData] = useState<T>(initialData);

  useEffect(() => {
    if (data) {
      setAxiosData(data.data);
    }
  }, [data]);

  return {
    data: axiosData,
    ...rest,
  };
};

export default useFetchSWR;
