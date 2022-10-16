import { createContext, FC, ReactNode, useCallback, useContext, useMemo } from 'react';
import { ROUTES } from 'constants/global';
import { GET_MOVIES } from 'graphql/movie';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import type { MediaItemProps } from '../controls/mediaList';

interface MediaProviderProps {
  children: ReactNode;
}

export interface MediaProps {
  loading: boolean;
  media?: MediaItemProps[];
  onSelectMedia: (imdbID: string) => void;
}

export const MediaContext = createContext<MediaProps | undefined>(undefined);

export const MediaProvider: FC<MediaProviderProps> = ({ children }) => {
  const router = useRouter();
  const search = router?.query?.q as string;

  const { data, error } = useSWR(useSWRReady(exists(search), GET_MOVIES, { search }));

  const onSelectMedia = useCallback(
    (imdbID: string) => {
      router.push({
        pathname: ROUTES.media,
        query: { q: imdbID },
      });
    },
    [router],
  );

  const media = (data && data.movies && data.movies.Search) || undefined;

  const contextValues: MediaProps = useMemo(
    () => ({
      loading: !data && !error,
      media,
      onSelectMedia,
    }),
    [data, error, media, onSelectMedia],
  );

  return <MediaContext.Provider value={contextValues}>{children}</MediaContext.Provider>;
};

export const useMediaContext = () => useContext(MediaContext);
