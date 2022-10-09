import React, { FC } from 'react';
import NumberFormat from 'react-number-format';

interface PhoneNumberFormatTextProps {
  value: string;
}

export const PhoneNumberFormatText: FC<PhoneNumberFormatTextProps> = ({ value }) => (
  <NumberFormat displayType='text' format='###-###-####' value={value} />
);
