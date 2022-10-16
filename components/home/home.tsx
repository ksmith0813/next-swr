import React, { FC } from 'react';
import { Page } from 'components/__common__/layout/page/page';
import Image from 'next/image';
import GraphQLIcon from 'public/graphql.svg';
import SWRIcon from 'public/swr.svg';
import TailwindIcon from 'public/tailwind.svg';
import VercelIcon from 'public/vercel.svg';

interface ExternalLinkProps {
  title: string;
  handler: () => void;
  icon: string;
  className: string;
  size?: number;
  top?: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({ title, handler, icon, className, size = 90, top = '' }) => (
  <div className={`external-link cursor-pointer ${className} ${top}`} onClick={handler} aria-hidden='true'>
    <Image src={icon} alt={className} height={size} width={size} priority />
    <div className={top}>{title}</div>
  </div>
);

export const Home = () => {
  const goToNextJs = () => window.open('https://nextjs.org/', '_blank');

  const goToSWR = () => window.open('https://swr.vercel.app/', '_blank');

  const goToGraphQL = () => window.open('https://graphql.org/', '_blank');

  const goToTailwind = () => window.open('https://tailwindcss.com/', '_blank');

  return (
    <Page title='React is pretty cool' showHero>
      <div className='home-container'>
        <div className='w-[700px] text-grayScale06'>
          I have recently started using Next.js and SWR for React projects. Vercel did a great job making things a
          little easier to implement React Apps. Some things I really like about the Next.js framework is that it
          handles routing and code splitting out of the box. Also, the Image component is really useful for displaying
          assets like SVGs on a page. Goodbye webpack.config.js. Click the links below to learn more about Next.js, SWR,
          GraphQL, and Tailwind.
        </div>
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
