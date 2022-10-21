import { ArrowLeftOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { IconLinkButton } from 'components/common/controls/iconLinkButton';
import { Page } from 'components/common/display/layout/page';
import { ROUTES } from 'constants/global';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getPeopleState } from 'store/slices/peopleSlice';

export const Person = () => {
  const router = useRouter();
  const state = useSelector(getPeopleState);

  const detailId = router?.query?.q as string;

  if (!detailId) return null;

  const person = state.people.users.find((item: any) => item.id === parseInt(detailId, 10));

  // TODO: add dataRow columns component, create a form to edit some data with a modal.

  const backToAll = () => router.push({ pathname: ROUTES.people });

  const headerContent = (
    <Row className='pb-6' align='middle'>
      <Col className='text-xl'>{`${person.name.first} ${person.name.last}`}</Col>
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
  return (
    <Page title='Personal Info'>
      {headerContent}
      <div className='page-container p-6'>TODO</div>
    </Page>
  );
};
