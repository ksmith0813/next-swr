import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

interface PercentageFormatTextProps {
  value: string;
}

export const PercentageFormatText: FC<PercentageFormatTextProps> = ({ value }) => {
  const parsedValue = value ? parseFloat(value) : 0;
  return <NumberFormat displayType='text' suffix='%' value={parsedValue * 100} decimalScale={6} fixedDecimalScale />;
};
