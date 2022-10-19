import React, { FC, ReactNode } from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { useRouter } from 'next/router';
import { NoData } from 'components/common/display/noData';
import { Col, Row, Tooltip } from 'antd';
import Image from 'next/image';
import MovieIcon from 'public/movie.svg';
import TVIcon from 'public/tv.svg';
import GameIcon from 'public/game.svg';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import { GET_MOVIES } from 'graphql/movie';

interface MediaTypeProps {
  type: string;
}

interface IconProps {
  title: ReactNode;
  alt: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

interface MediaItemProps {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
}

const MediaType: FC<MediaTypeProps> = ({ type }) => {
  let icon;

  const IconContent: FC<IconProps> = ({ title, alt, image }) => (
    <Tooltip title={title} mouseEnterDelay={0.75}>
      <Image src={image} height={25} width={25} alt={alt} />
    </Tooltip>
  );

  switch (type) {
    case 'game':
      icon = <IconContent title='Video Game' alt='Video Game' image={GameIcon} />;
      break;
    case 'series':
      icon = <IconContent title='TV Series' alt='TV Series' image={TVIcon} />;
      break;
    default:
      icon = <IconContent title='Movie' alt='Movie' image={MovieIcon} />;
      break;
  }

  return icon;
};

export const Media = () => {
  const router = useRouter();
  const search = router?.query?.q as string;

  const { data, error } = useSWR(useSWRReady(exists(search), GET_MOVIES, { search }));

  const media = data && data.movies && data.movies.Search;

  const initialState = (!data && !error) || !search;

  if (initialState) {
    return (
      <Page title={TITLES.media} route={ROUTES.mediaSearch}>
        <NoData />
      </Page>
    );
  }

  const onSelectMedia = (searchString: string, imdbID: string) => {
    router.push({
      pathname: ROUTES.mediaDetail,
      query: { q: searchString, id: imdbID },
    });
  };

  const mediaListContent = !initialState && (
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
            <Row
              key={item.imdbID}
              className='media-item hover:bg-primaryLight'
              align='middle'
              onClick={() => onSelectMedia(search, item.imdbID)}>
              <Col span={16}>{item.Title}</Col>
              <Col span={4} className='pl-1'>
                {item.Year}
              </Col>
              <Col span={4}>
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

  return (
    <Page title={TITLES.media} route={ROUTES.mediaSearch}>
      {mediaListContent}
    </Page>
  );
};
