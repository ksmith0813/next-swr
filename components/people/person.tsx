import { ArrowLeftOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { IconLinkButton } from 'components/common/controls/iconLinkButton';
import { Page } from 'components/common/display/layout/page';
import { ROUTES } from 'constants/global';
import { useRouter } from 'next/router';

export const Person = () => {
  const router = useRouter();

  const detailId = router?.query?.q as string;

  // TODO: add dataRow columns component, create a form to edit some data with a modal.

  const backToAll = () => router.push({ pathname: ROUTES.people });

  const headerContent = (
    <Row className='border-b border-grayScale03 p-4 pl-6' align='middle'>
      <Col className='text-xl'>{detailId}</Col>
      <Col>
        <IconLinkButton
          title='Back to Results'
          icon={<ArrowLeftOutlined />}
          onClick={backToAll}
          testId='back-to-people-results'
        />
      </Col>
    </Row>
  );
  return <Page title='Personal Info'>{headerContent}</Page>;
};
