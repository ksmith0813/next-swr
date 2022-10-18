import React, { FC } from 'react';
import { PaginationProps, Table } from 'antd';

interface DataTableProps {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  data: Record<string, unknown>[];
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

const paginationItemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') return <span>Prev</span>;
  if (type === 'next') return <span>Next</span>;
  return originalElement;
};

const generateUniqueIds = (data: Record<string, unknown>[]) => {
  let counter = 1;
  return data.map((item) => ({ ...item, id: counter++ }));
};

export const DataTable: FC<DataTableProps> = ({ id, columns, data, loading, onClick }) => (
  <Table
    rowKey='id'
    columns={columns}
    dataSource={generateUniqueIds(data || [])}
    loading={loading}
    showSorterTooltip={false}
    onRow={(row) => {
      return {
        onClick: () => onClick && onClick(row),
      };
    }}
    pagination={{
      position: ['bottomLeft'],
      itemRender: paginationItemRender,
      showSizeChanger: true,
      showTotal: (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total} Results`,
    }}
    id={id}
  />
);
