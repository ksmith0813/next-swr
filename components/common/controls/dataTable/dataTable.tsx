import React, { FC } from 'react';
import { Table } from 'antd';

interface DataTableProps {
  id?: string;
  testId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  data: Record<string, unknown>[];
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
