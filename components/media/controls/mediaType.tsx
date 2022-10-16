import { FC } from 'react';
import Image from 'next/image';
import MovieIcon from 'public/movie-default.svg';
import TVIcon from 'public/tv-default.svg';
import GameIcon from 'public/game-default.svg';
import { Tooltip } from 'antd';

interface MediaTypeProps {
  type: string;
}

export const MediaType: FC<MediaTypeProps> = ({ type }) => {
  let icon;

  switch (type) {
    case 'game':
      icon = (
        <Tooltip title='Video Game' mouseEnterDelay={0.75}>
          <Image src={GameIcon} height={25} width={25} alt='Video Game' />
        </Tooltip>
      );
      break;
    case 'series':
      icon = (
        <Tooltip title='TV Series' mouseEnterDelay={0.75}>
          <Image src={TVIcon} height={25} width={25} alt='TV Series' />
        </Tooltip>
      );
      break;
    default:
      icon = (
        <Tooltip title='Movie' mouseEnterDelay={0.75}>
          <Image src={MovieIcon} height={25} width={25} alt='Movie' />
        </Tooltip>
      );
      break;
  }

  return icon;
};
