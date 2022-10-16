import { FC, ReactNode } from 'react';
import Image from 'next/image';
import MovieIcon from 'public/movie-default.svg';
import TVIcon from 'public/tv-default.svg';
import GameIcon from 'public/game-default.svg';
import { Tooltip } from 'antd';

interface MediaTypeProps {
  type: string;
}

interface IconProps {
  title: ReactNode;
  alt: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export const MediaType: FC<MediaTypeProps> = ({ type }) => {
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
