import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { LockOutlined } from '@ant-design/icons';
import ReactInputMask from 'react-input-mask';
import { FormFloatLabel } from './formFloatLabel';

interface FormItemInputProps {
  name: string;
  label: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  rules?: Rule[];
  mask?: string;
}

export const FormItemInput: FC<FormItemInputProps> = ({ name, label, value, required, disabled, rules, mask }) => (
  <Form.Item noStyle shouldUpdate={(prev, current) => prev[name] !== current[name]}>
    {({ getFieldValue }) => (
      <FormFloatLabel value={getFieldValue(name) || value} label={label} required={required}>
        {mask && (
          <Form.Item name={name} rules={rules}>
            <ReactInputMask className='input-mask' value={value} disabled={disabled} mask={mask} />
          </Form.Item>
        )}
        {!mask && (
          <Form.Item name={name} rules={rules}>
            <Input value={value} disabled={disabled} suffix={disabled && <LockOutlined />} />
          </Form.Item>
        )}
      </FormFloatLabel>
    )}
  </Form.Item>
);
