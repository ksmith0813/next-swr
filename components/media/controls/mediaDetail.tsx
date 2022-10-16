import { Col, Row, Progress, Button, Tag } from 'antd';
import moment from 'moment';
import { DataItem } from 'components/__common__/display/dataItem';
import { NoData } from 'components/__common__/display/noData';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import { GET_MOVIE } from 'graphql/movie';
import { useRouter } from 'next/router';

interface RatingsProps {
  Source: string;
  Value: string;
}

interface MediaDetailProps {
  Title: string;
  Poster?: string;
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

  const { data } = useSWR(useSWRReady(exists(search), GET_MOVIE, { search }));

  const backToAll = () => {
    // TODO
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

  const selectedMedia: MediaDetailProps = data;
  const hasRatings = selectedMedia.Ratings.length > 0;

  return (
    <div className='media-detail'>
      <Row className='border-bottom-light pb-150'>
        <Col className='fs-150' flex={1}>
          {selectedMedia.Title}
        </Col>
        <Col>
          <Button type='primary' onClick={() => backToAll()}>
            Back to All
          </Button>
        </Col>
      </Row>
      <Row className='pt-200'>
        <Col>
          {selectedMedia.Poster !== 'N/A' && <img src={selectedMedia.Poster} className='media-poster' alt='' />}
          {selectedMedia.Poster === 'N/A' && <NoData message='Poster not available' />}
        </Col>
        <Col span={9} className='pl-200'>
          <DataItem label='Plot'>{selectedMedia.Plot}</DataItem>
          <DataItem label='Release Year' labelClasses='pt-100'>
            {moment(selectedMedia.Released).format('MM/DD/YYYY')}
          </DataItem>
          <DataItem label='Director' labelClasses='pt-100'>
            {selectedMedia.Director}{' '}
          </DataItem>
          <DataItem label='Actors' labelClasses='pt-100'>
            {selectedMedia.Actors}
          </DataItem>
          <DataItem label='Writers' labelClasses='pt-100'>
            {selectedMedia.Writer}
          </DataItem>
          <DataItem label='Genre' labelClasses='pt-100'>
            {selectedMedia?.Genre?.split(',').map((g) => (
              <Tag key={g}>{g}</Tag>
            ))}
          </DataItem>
          <DataItem label='Rated' labelClasses='pt-100'>
            {selectedMedia.Rated}
          </DataItem>
        </Col>
        <Col span={8} className='pl-200'>
          {hasRatings && (
            <>
              <b>Ratings</b>
              {selectedMedia.Ratings.map((r: RatingsProps) => (
                <DataItem
                  key={r.Source}
                  label={r.Source === 'Internet Movie Database' ? 'IMDB' : r.Source}
                  labelClasses='pt-150 light-text'>
                  <Progress percent={getRating(r.Value)} />
                </DataItem>
              ))}
            </>
          )}
          <DataItem label='Box Office' labelClasses={hasRatings ? 'pt-200' : ''} childrenClasses='fs-150'>
            {selectedMedia.BoxOffice}
          </DataItem>
          <DataItem label='Awards' labelClasses='pt-100'>
            {selectedMedia.Awards}
          </DataItem>
          <DataItem label='Runtime' labelClasses='pt-100'>
            {selectedMedia.Runtime}
          </DataItem>
        </Col>
      </Row>
    </div>
  );
};
