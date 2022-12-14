import React, { FC } from 'react';
import { Page } from 'components/common/display/layout/page';
import Image from 'next/image';
import AntDesignIcon from 'public/antd.svg';
import GraphQLIcon from 'public/graphql.svg';
import ReactIcon from 'public/react.svg';
import ReduxIcon from 'public/redux.svg';
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

const ExternalLink: FC<ExternalLinkProps> = ({ title, handler, icon, className, size = 70, top = '' }) => (
  <div className={`external-link cursor-pointer pb-10 ${className} ${top}`} onClick={handler} aria-hidden='true'>
    <Image src={icon} alt={className} height={size} width={size} priority id={`external-link-${className}-id`} />
    <div className={top}>{title}</div>
  </div>
);

export const Home = () => {
  const goToNextJs = () => window.open('https://nextjs.org/', '_blank');

  const goToSWR = () => window.open('https://swr.vercel.app/', '_blank');

  const goToRedux = () => window.open('https://redux-toolkit.js.org/', '_blank');

  const goToGraphQL = () => window.open('https://graphql.org/', '_blank');

  const goToAntD = () => window.open('https://ant.design/', '_blank');

  const goToTailwind = () => window.open('https://tailwindcss.com/', '_blank');

  const titleContent = (
    <Row>
      <Image src={ReactIcon} height={40} width={40} priority />
      <span className='text-4xl pl-2'>React is pretty cool</span>
    </Row>
  );

  const descriptionContent = (
    <div className='w-[900px] text-grayScale06'>
      I recently got the opportunity to use Next.js and SWR for a few of my React projects. The Vercel team did a great
      job making things a little easier to implement React Apps. Some things I really like about the Next.js framework
      is that it handles routing and code splitting out of the box. Also, the Image component is really useful and
      simplified the implementation required to display images like an SVG. This app also includes a UI/BFF architecture
      pattern, with node running on the backend. GraphQL is used for querying data on the backend. For a few global
      state items, the Redux Toolkit was implemented. In addition, I used the Ant Design library and tailwind.css to
      help build out components for the application.
    </div>
  );

  const externalLinksContent = (
    <>
      <div className='content-center pt-12 text-grayScale07'>Click the links below to learn more</div>
      <div className='mt-14'>
        <div className='flex flex-row space-x-20 text-center'>
          <ExternalLink title='Next.js' handler={goToNextJs} icon={VercelIcon} className='next' />
          <ExternalLink title='SWR' handler={goToSWR} icon={SWRIcon} className='swr' />
          <ExternalLink title='Redux' handler={goToRedux} icon={ReduxIcon} className='redux' />
          <ExternalLink
            title='GraphQL'
            handler={goToGraphQL}
            icon={GraphQLIcon}
            className='graphql'
            size={50}
            top='pt-[10px]'
          />
          <ExternalLink
            title='Ant Design'
            handler={goToAntD}
            icon={AntDesignIcon}
            className='antd'
            size={50}
            top='pt-[10px]'
          />
          <ExternalLink title='Tailwind' handler={goToTailwind} icon={TailwindIcon} className='tailwind' />
        </div>
      </div>
    </>
  );

  return (
    <Page title={titleContent} showHero>
      <div className='home-container'>
        {descriptionContent}
        {externalLinksContent}
      </div>
    </Page>
  );
};
