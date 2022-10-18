import React, { FC } from 'react';
import { Page } from 'components/common/display/layout/page';
import Image from 'next/image';
import GraphQLIcon from 'public/graphql.svg';
import ReactIcon from 'public/react.svg';
import SWRIcon from 'public/swr.svg';
import TailwindIcon from 'public/tailwind.svg';
import VercelIcon from 'public/vercel.svg';
import { Row } from 'antd';

interface ExternalLinkProps {
  title: string;
  handler: () => void;
  icon: string;
  className: string;
  size?: number;
  top?: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({ title, handler, icon, className, size = 90, top = '' }) => (
  <div className={`external-link cursor-pointer pb-10 ${className} ${top}`} onClick={handler} aria-hidden='true'>
    <Image src={icon} alt={className} height={size} width={size} priority id={`external-link-${className}-id`} />
    <div className={top}>{title}</div>
  </div>
);

export const Home = () => {
  const goToNextJs = () => window.open('https://nextjs.org/', '_blank');

  const goToSWR = () => window.open('https://swr.vercel.app/', '_blank');

  const goToGraphQL = () => window.open('https://graphql.org/', '_blank');

  const goToTailwind = () => window.open('https://tailwindcss.com/', '_blank');

  const titleContent = (
    <Row>
      <Image src={ReactIcon} height={40} width={40} priority />
      <span className='text-4xl pl-2'>React is pretty cool</span>
    </Row>
  );

  return (
    <Page title={titleContent} showHero>
      <div className='home-container'>
        <div className='w-[800px] text-grayScale06'>
          I recently got the opportunity to use Next.js and SWR for a few of my React projects. The Vercel team did a
          great job making things a little easier to implement React Apps. Some things I really like about the Next.js
          framework is that it handles routing and code splitting out of the box. Also, the Image component is really
          useful and simplified the implementation required to display images like SVGs. This app also includes a UI/BFF
          architecture pattern, with node running on the backend. GraphQL is used for querying data. In addition, I used
          tailwind to help make styling easier for the application. All around, some really good stuff.
        </div>
        <div className='content-center pt-10 text-grayScale07'>Click the links below to learn more</div>
        <div className='mt-14'>
          <div className='flex flex-row space-x-20 text-center'>
            <ExternalLink title='Next.js' handler={goToNextJs} icon={VercelIcon} className='next' />
            <ExternalLink title='SWR' handler={goToSWR} icon={SWRIcon} className='swr' />
            <ExternalLink
              title='GraphQL'
              handler={goToGraphQL}
              icon={GraphQLIcon}
              className='graphql'
              size={70}
              top='pt-[10px]'
            />
            <ExternalLink title='Tailwind' handler={goToTailwind} icon={TailwindIcon} className='tailwind' />
          </div>
        </div>
      </div>
    </Page>
  );
};
