import { Col, Row, Progress, Tag } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import { DataItem } from 'components/common/display/dataItem';
import useSWR from 'swr';
import { GET_MOVIE } from 'graphql/movie';
import { useRouter } from 'next/router';
import { DATE_FORMAT, ROUTES, TITLES } from 'constants/global';
import { Page } from 'components/common/display/layout/page';
import { IconLinkButton } from 'components/common/controls/iconLinkButton';

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

  const { data } = useSWR(id && [GET_MOVIE, { imdbId: id }]);

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
    <Row className='border-b border-grayScale03 p-4 pl-6' align='middle'>
      <Col className='text-xl'>{selectedMedia.Title}</Col>
      <Col>
        <IconLinkButton
          title='Back to Results'
          icon={<ArrowLeftOutlined />}
          onClick={backToAll}
          testId='back-to-media-results'
        />
      </Col>
    </Row>
  );

  const hasPoster = selectedMedia.Poster !== 'N/A';
  const detailColSpan = hasPoster ? 10 : 12;

  const posterContent = hasPoster && (
    <Col span={4}>
      <div className='media-postor'>
        <img src={selectedMedia.Poster} alt='movie-poster' />
      </div>
    </Col>
  );

  const detailContent = (
    <Col span={detailColSpan} className='pl-6'>
      <DataItem label='Plot'>{selectedMedia.Plot}</DataItem>
      <DataItem label='Release Year' labelClasses='pt-6'>
        {moment(selectedMedia.Released, DATE_FORMAT.date).format(DATE_FORMAT.date)}
      </DataItem>
      <DataItem label='Director' labelClasses='pt-6'>
        {selectedMedia.Director}{' '}
      </DataItem>
      <DataItem label='Actors' labelClasses='pt-6'>
        {selectedMedia.Actors}
      </DataItem>
      <DataItem label='Writers' labelClasses='pt-6'>
        {selectedMedia.Writer}
      </DataItem>
      <DataItem label='Genre' labelClasses='pt-6'>
        {selectedMedia?.Genre?.split(',').map((g) => (
          <Tag key={g}>{g}</Tag>
        ))}
      </DataItem>
      <DataItem label='Rated' labelClasses='pt-6'>
        {selectedMedia.Rated}
      </DataItem>
    </Col>
  );

  const ratingsContent = (
    <Col span={detailColSpan} className='pl-6'>
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
      <DataItem label='Box Office' labelClasses={hasRatings ? 'pt-6' : ''} childrenClasses='text-xl'>
        {selectedMedia.BoxOffice}
      </DataItem>
      <DataItem label='Awards' labelClasses='pt-6'>
        {selectedMedia.Awards}
      </DataItem>
      <DataItem label='Runtime' labelClasses='pt-6'>
        {selectedMedia.Runtime}
      </DataItem>
    </Col>
  );

  return (
    <Page title={TITLES.media}>
      <div className='bg-white text-[16px] border border-grayScale03'>
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
