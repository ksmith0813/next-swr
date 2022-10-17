import { Col, Row, Progress, Button, Tag } from 'antd';
import moment from 'moment';
import { DataItem } from 'components/__common__/display/dataItem';
import { NoData } from 'components/__common__/display/noData';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import { GET_MOVIE } from 'graphql/movie';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ROUTES, TITLES } from 'constants/global';
import { Page } from 'components/__common__/layout/page/page';

interface RatingsProps {
  Source: string;
  Value: string;
}

interface MediaDetailProps {
  Title: string;
  Poster: string;
  Plot?: string;
  Genre?: string;
  Released?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Rated?: string;
  BoxOffice?: string;
  Awards?: string;
  Runtime?: string;
  Ratings: RatingsProps[];
}

export const MediaDetail = () => {
  const router = useRouter();
  const search = router?.query?.q as string;
  const id = router?.query?.id as string;

  const { data } = useSWR(useSWRReady(exists(id), GET_MOVIE, { imdbId: id }));

  const backToAll = () => {
    router.push({
      pathname: ROUTES.mediaSearch,
      query: { q: search },
    });
  };

  const getRating = (rating: string) => {
    let value;
    if (rating.includes('/')) {
      const values = rating.split('/');
      const scale = parseInt(values[1], 10);
      value = parseFloat(values[0]) * (scale === 10 ? 10 : 1);
    } else if (rating.includes('%')) {
      value = parseFloat(rating.split('%')[0]);
    }

    return value;
  };

  if (!data) return null;

  const { movie } = data;

  const selectedMedia: MediaDetailProps = movie;

  const hasRatings = selectedMedia?.Ratings?.length > 0;

  const headerContent = (
    <Row className='border-b border-grayScale03 p-4' align='middle'>
      <Col className='text-2xl' flex={1}>
        {selectedMedia.Title}
      </Col>
      <Col>
        <Button type='primary' onClick={() => backToAll()}>
          Back to All
        </Button>
      </Col>
    </Row>
  );

  const posterContent = (
    <Col>
      {selectedMedia.Poster !== 'N/A' && <Image src={selectedMedia.Poster} height={450} width={300} alt='' priority />}
      {selectedMedia.Poster === 'N/A' && <NoData message='Poster not available' />}
    </Col>
  );

  const detailContent = (
    <Col span={9} className='pl-6'>
      <DataItem label='Plot'>{selectedMedia.Plot}</DataItem>
      <DataItem label='Release Year' labelClasses='pt-4'>
        {moment(selectedMedia.Released).format('MM/DD/YYYY')}
      </DataItem>
      <DataItem label='Director' labelClasses='pt-4'>
        {selectedMedia.Director}{' '}
      </DataItem>
      <DataItem label='Actors' labelClasses='pt-4'>
        {selectedMedia.Actors}
      </DataItem>
      <DataItem label='Writers' labelClasses='pt-4'>
        {selectedMedia.Writer}
      </DataItem>
      <DataItem label='Genre' labelClasses='pt-4'>
        {selectedMedia?.Genre?.split(',').map((g) => (
          <Tag key={g}>{g}</Tag>
        ))}
      </DataItem>
      <DataItem label='Rated' labelClasses='pt-4'>
        {selectedMedia.Rated}
      </DataItem>
    </Col>
  );

  const ratingsContent = (
    <Col span={8} className='pl-6'>
      {hasRatings && (
        <>
          <b>Ratings</b>
          {selectedMedia.Ratings.map((r: RatingsProps) => (
            <DataItem
              key={r.Source}
              label={r.Source === 'Internet Movie Database' ? 'IMDB' : r.Source}
              labelClasses='pt-2 text-grayScale06'>
              <Progress percent={getRating(r.Value)} />
            </DataItem>
          ))}
        </>
      )}
      <DataItem label='Box Office' labelClasses={hasRatings ? 'pt-2' : ''} childrenClasses='text-xl'>
        {selectedMedia.BoxOffice}
      </DataItem>
      <DataItem label='Awards' labelClasses='pt-4'>
        {selectedMedia.Awards}
      </DataItem>
      <DataItem label='Runtime' labelClasses='pt-4'>
        {selectedMedia.Runtime}
      </DataItem>
    </Col>
  );

  return (
    <Page title={TITLES.media} route={ROUTES.mediaDetail}>
      <div className='bg-white'>
        {headerContent}
        <Row className='p-6'>
          {posterContent}
          {detailContent}
          {ratingsContent}
        </Row>
      </div>
    </Page>
  );
};
