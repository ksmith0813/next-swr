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
        <b>{label}</b>
      </Row>
      <Row className={`light-text ${childrenClasses}`}>{childrenContent}</Row>
    </>
  );
};
