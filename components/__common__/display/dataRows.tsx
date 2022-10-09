import React, { FC, ReactNode } from 'react';
import { Col, Row } from 'antd';
import moment from 'moment';
import { CurrencyFormatText } from 'components/__common__/display/formatText/currencyFormatText';
import { PercentageFormatText } from 'components/__common__/display/formatText/percentageFormatText';
import { PhoneNumberFormatText } from 'components/__common__/display/formatText/phoneNumberFormatText';
import { DATE_FORMAT } from 'constants/global';

export interface DataRow {
  prop: string;
  label: string;
  value: ReactNode;
  hide?: boolean;
  format?: 'currency' | 'percentage' | 'phone' | 'date';
}

export interface DataRowsProps {
  prop: string;
  data: DataRow[];
}

export const DataRows: FC<DataRowsProps> = ({ prop, data }) => {
  const formatData = (dataRow: DataRow) => {
    const { value, format } = dataRow;

    switch (format) {
      case 'currency':
        return <CurrencyFormatText value={String(value)} />;
      case 'percentage':
        return <PercentageFormatText value={String(value)} />;
      case 'phone':
        return <PhoneNumberFormatText value={String(value)} />;
      case 'date':
        return moment(String(value), DATE_FORMAT.date).format(DATE_FORMAT.date);
      default:
        return value;
    }
  };

  const dataRowItems = data.map((item) => {
    if (item.hide) return null;
    const id = `data-row-${item.prop}${prop ? `-${prop}` : ''}`;

    return (
      <Row key={id} justify='space-between' className='pt-2 pb-1 border-b border-grayScale03 text-base'>
        <Col>
          <span id={`${id}-label`}>{item.label}</span>
        </Col>
        <Col>
          <span id={`${id}-value`}>{formatData(item)}</span>
        </Col>
      </Row>
    );
  });

  return <>{dataRowItems}</>;
};
