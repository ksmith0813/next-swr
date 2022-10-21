import React, { FC, ReactNode } from 'react';
import { Spin } from 'antd';

interface LoaderProps {
  loading: boolean;
  children: ReactNode;
}

export const loaderTestId = 'loader';

export const Loader: FC<LoaderProps> = ({ loading, children }) => {
  if (loading) {
    return (
      <div className='content-center h-[calc(100vh-500px)] text-6xl' id={loaderTestId}>
        <Spin className='loader' size='large' />
      </div>
    );
  }

  return <>{children}</>;
};
