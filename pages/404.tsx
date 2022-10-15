import { Button, Result } from 'antd';
import { ROUTES } from 'constants/global';
import Link from 'next/link';

const Custom404 = () => (
  <div className='content-center h-full'>
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Link href={ROUTES.home} id='home-link'>
          <Button>Go To Home</Button>
        </Link>
      }
    />
  </div>
);

export default Custom404;
