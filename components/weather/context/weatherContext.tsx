import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import { GET_WEATHER } from 'graphql/weather';
import { WeatherProps } from '../types/weather';

interface WeatherProviderProps {
  children: ReactNode;
}

export interface WeatherContextProps {
  weather: WeatherProps;
  tempType: string;
  setTempType: (type: string) => void;
}

export const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const router = useRouter();
  const search = router?.query?.q as string;

  const [tempType, setTempType] = useState('F');

  const { data } = useSWR(useSWRReady(exists(search), GET_WEATHER, { search }));

  const weather = data && data.weather;

  const contextValues: WeatherContextProps = useMemo(
    () => ({
      weather,
      tempType,
      setTempType,
    }),
    [weather, tempType, setTempType],
  );

  return <WeatherContext.Provider value={contextValues}>{children}</WeatherContext.Provider>;
};

export const useWeatherContext = () => useContext(WeatherContext);
