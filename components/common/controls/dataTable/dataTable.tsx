import React, { FC } from 'react';
import { Table } from 'antd';

interface DataTableProps {
  id?: string;
  testId: string;
  columns: any;
  data: Record<string, unknown>[];
  loading?: boolean;
  onClick?: any;
}

export const DataTable: FC<DataTableProps> = ({ id = 'id', testId, columns, data = [], loading, onClick }) => (
  <Table
    rowKey={id}
    columns={columns}
    dataSource={data}
    loading={loading}
    showSorterTooltip={false}
    onRow={(row) => {
      return {
        onClick: () => onClick && onClick(row),
      };
    }}
    pagination={{
      position: ['bottomCenter'],
      showSizeChanger: true,
      showTotal: (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total} Results`,
    }}
    id={testId}
  />
);

export const sortAlphebetically = (a: any, b: any, property: string) => {
  if (a[property] < b[property]) {
    return -1;
  }
  if (a[property] > b[property]) {
    return 1;
  }
  return 0;
};
