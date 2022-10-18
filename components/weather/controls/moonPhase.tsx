import React, { FC } from 'react';
import FirstQuarter from 'public/moon/moon-first-quarter.svg';
import FullMoon from 'public/moon/moon-full.svg';
import LastQuarter from 'public/moon/moon-last-quarter.svg';
import NewMoon from 'public/moon/moon-new.svg';
import WaningCrescent from 'public/moon/moon-waning-crescent.svg';
import WaningGibbous from 'public/moon/moon-waning-gibbous.svg';
import WaxingCrescent from 'public/moon/moon-waxing-crescent.svg';
import WaxingGibbous from 'public/moon/moon-waxing-gibbous.svg';
import Image from 'next/image';

interface MoonPhaseProps {
  phase: string;
}

const getImage = (image: string) => {
  return <Image src={image} height={50} width={50} className='moon-phase-icon' alt='Moon Phse' priority />;
};

export const MoonPhase: FC<MoonPhaseProps> = ({ phase }) => {
  switch (phase) {
    case 'Waxing Crescent':
      return getImage(WaxingCrescent);
    case 'First Quarter':
      return getImage(FirstQuarter);
    case 'Waxing Gibbous':
      return getImage(WaxingGibbous);
    case 'Full Moon':
      return getImage(FullMoon);
    case 'Waning Gibbous':
      return getImage(WaningGibbous);
    case 'Last Quarter':
      return getImage(LastQuarter);
    case 'Waning Crescent':
      return getImage(WaningCrescent);
    default:
      return getImage(NewMoon);
  }
};
