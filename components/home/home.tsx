import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { Button } from 'antd';

export const Home = () => {
  const goToNextJs = () => window.open('https://nextjs.org/', '_blank');

  const goToSWR = () => window.open('https://swr.vercel.app/', '_blank');

  const goToGraphQL = () => window.open('https://graphql.org/', '_blank');

  const goToTailwind = () => window.open('https://tailwindcss.com/', '_blank');

  return (
    <Page title='React is pretty cool' showHero>
      <div className='home-container'>
        <div className='w-[700px]'>
          I have recently started using Next.js and SWR for React projects. Vercel did a great job making things a
          little easier to implement React Apps. Some things I really like about the Next.js framework is that it
          handles routing and code splitting out of the box. Also, the Image component is really useful for displaying
          assets like SVGs on a page. Goodbye webpack.config.js. Click the buttons below to learn more about using
          Next.js, SWR, GraphQL, and tailwind.
        </div>
        <div className='mt-14'>
          <div className='flex flex-row space-x-10'>
            <Button type='primary' size='large' onClick={goToNextJs}>
              Next.js
            </Button>
            <Button type='primary' size='large' onClick={goToSWR}>
              SWR
            </Button>
            <Button type='primary' size='large' onClick={goToGraphQL}>
              GraphQL
            </Button>
            <Button type='primary' size='large' onClick={goToTailwind}>
              Tailwind
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};
