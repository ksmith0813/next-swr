import { Col, Row } from 'antd';
import { NoData } from 'components/__common__/display/noData';
import { useRouter } from 'next/router';
import { MediaProps, useMediaContext } from '../context/mediaContext';
import { MediaType } from './mediaType';

export interface MediaItemProps {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
}

export const MediaList = () => {
  const router = useRouter();
  const { loading, media, onSelectMedia } = useMediaContext() as MediaProps;

  const search = router?.query?.q as string;

  if ((!loading && !media) || search === 'search') return <NoData />;

  return (
    <div className='pt-4'>
      {media && (
        <>
          <Row className='media-header'>
            <Col span={16}>
              <b>Title</b>
            </Col>
            <Col span={4}>
              <b>Year</b>
            </Col>
            <Col span={4}>
              <b>Type</b>
            </Col>
          </Row>
          {media?.map((item: MediaItemProps) => (
            <Row key={item.imdbID} className='media-item' align='middle' onClick={() => onSelectMedia(item.imdbID)}>
              <Col span={16}>{item.Title}</Col>
              <Col span={4} className='pl-1'>
                {item.Year}
              </Col>
              <Col span={4} className='pl-050 capitalize'>
                <MediaType type={item.Type} />
              </Col>
            </Row>
          ))}
          <Row justify='center' className='pt-10 text-2xl text-grayScale06'>
            {media.length} Result{media.length > 0 ? 's' : ''} Found
          </Row>
        </>
      )}
    </div>
  );
};
