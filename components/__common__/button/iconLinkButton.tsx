import React, { FC, MouseEvent, ReactNode } from 'react';
import { Button, Row } from 'antd';

export interface IconLinkButtonProps {
  title: string;
  icon?: ReactNode;
  iconFirst?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  testId: string;
}

export const iconLinkButtonTestId = 'link-button-container';

export const IconLinkButton: FC<IconLinkButtonProps> = ({ title, testId, icon, iconFirst = true, onClick }) => (
  <div id={iconLinkButtonTestId}>
    <Button type='link' onClick={onClick} id={testId}>
      <Row align='middle'>
        {iconFirst && icon}
        <b className={`${iconFirst ? 'ml-1.5' : 'mr-1.5'} text-base`}>{title}</b>
        {!iconFirst && icon}
      </Row>
    </Button>
  </div>
);
