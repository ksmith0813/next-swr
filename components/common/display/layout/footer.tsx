import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { GithubFilled } from '@ant-design/icons';

export const Footer = () => (
  <footer className='footer-container' id='footer'>
    <div className='cursor-pointer'>
      <Link href='https://github.com/ksmith0813/next-swr' id='github-link'>
        <Row align='middle'>
          <Col>
            <GithubFilled />
          </Col>
          <Col className='pl-2'>Github</Col>
        </Row>
      </Link>
    </div>
  </footer>
);
