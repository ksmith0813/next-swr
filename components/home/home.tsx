import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { Button } from 'antd';

export const Home = () => {
  return (
    <Page title='React is pretty cool' showHero>
      <div className='home-container'>
        <div className='w-[700px]'>
          I have recently started using Next.js and SWR for React projects. Vercel did a great job making things a
          little easier to implement React Apps. Some things I really like about the Next.js framework is that it
          handles routing and code splitting out of the box. Also, the Image component is really useful for displaying
          assets like SVGs on a page. Goodbye webpack.config.js. Click below to see some example implementions using
          Next.js, SWR, tailwind.css, and GraphQL.
        </div>
        <div className='mt-14'>
          <Button type='primary' size='large'>
            Explore
          </Button>
        </div>
      </div>
    </Page>
  );
};
