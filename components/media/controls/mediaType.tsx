import { FC } from 'react';
import Image from 'next/image';
import MovieIcon from 'public/movie-default.svg';
import TVIcon from 'public/tv-default.svg';
import GameIcon from 'public/game-default.svg';

interface MediaTypeProps {
  type: string;
}

export const MediaType: FC<MediaTypeProps> = ({ type }) => {
  let icon;

  switch (type) {
    case 'game':
      icon = (
        <>
          <Image src={GameIcon} height={25} width={25} alt='Game' />
          <span className='media-type-text'>Game</span>
        </>
      );
      break;
    case 'series':
      icon = (
        <>
          <Image src={TVIcon} height={25} width={25} alt='TV' />
          <span className='media-type-text'>TV</span>
        </>
      );
      break;
    default:
      icon = (
        <>
          <Image src={MovieIcon} height={25} width={25} alt='Movie' />
          <span className='media-type-text'>Movie</span>
        </>
      );
      break;
  }

  return icon;
};
