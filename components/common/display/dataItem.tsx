import { FC, ReactNode } from 'react';
import { Row } from 'antd';

interface DataItemProps {
  label: string;
  children: ReactNode;
  labelClasses?: string;
  childrenClasses?: string;
}

export const DataItem: FC<DataItemProps> = ({ label, children, labelClasses = '', childrenClasses = '' }) => {
  let childrenContent = children;

  if ((Array.isArray(childrenContent) && !childrenContent.length) || !childrenContent) childrenContent = 'N/A';

  return (
    <>
      <Row className={labelClasses}>
        <b className='text-[16px]'>{label}</b>
      </Row>
      <Row className={`text-grayScale05 pt-1 ${childrenClasses}`}>{childrenContent}</Row>
    </>
  );
};
