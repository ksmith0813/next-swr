import { ReactNode } from 'react';
import { DataRow } from 'components/common/display/dataRows';

export const createDataRow = (
  prop: string,
  value: ReactNode,
  label: string,
  config?: {
    hide?: boolean;
    format?: 'currency' | 'percentage' | 'phone' | 'date';
  },
): DataRow => ({
  prop,
  value,
  label,
  hide: config?.hide,
  format: config?.format,
});
