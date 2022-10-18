import { FC, ReactNode, useState } from 'react';

interface FormFloatLabelProps {
  children: ReactNode;
  value?: string;
  label: string;
  required?: boolean;
}

export const FormFloatLabel: FC<FormFloatLabelProps> = ({ children, label, value, required }) => {
  const [active, setActive] = useState(false);

  const labelClass = `label ${active || value ? 'float' : 'default'}`;

  return (
    <div className='flex flex-col-reverse' onBlur={() => setActive(false)} onFocus={() => setActive(true)}>
      {children}
      <span className={labelClass}>
        {label}
        {required && <span className='required'>*</span>}
      </span>
    </div>
  );
};
