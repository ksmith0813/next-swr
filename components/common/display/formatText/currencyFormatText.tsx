import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

interface CurrencyFormatTextProps {
  value: string;
}

export const CurrencyFormatText: FC<CurrencyFormatTextProps> = ({ value }) => (
  <NumberFormat displayType='text' value={value} thousandSeparator prefix='$' decimalScale={2} fixedDecimalScale />
);
