import React, { FC } from 'react';
import { Button, Col, Row } from 'antd';
import { PROPS } from 'constants/global';

export interface SectionTitleProps {
  prop: string;
  title: string;
  actionText?: string;
  onClick?: () => void;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, prop, actionText = 'Edit', onClick }) => {
  const titleContent = title && (
    <h4 className='title-header mt-6' id={`${prop}-${PROPS.title}`}>
      {title}
    </h4>
  );

  let actionContent;

  if (onClick) {
    actionContent = (
      <Button onClick={onClick} className='mt-3' size='small' type='primary' ghost id={`${prop}-${PROPS.button}`}>
        {actionText}
      </Button>
    );
  }

  return (
    <Row align='middle' justify='space-between' className='border-b border-grayScale03'>
      <Col>{titleContent}</Col>
      <Col>{actionContent}</Col>
    </Row>
  );
};
