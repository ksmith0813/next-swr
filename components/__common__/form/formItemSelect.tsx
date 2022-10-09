import React, { FC } from 'react';
import { Form, Select } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { FormFloatLabel } from './formFloatLabel';

const { Option } = Select;

interface FormItemSelectProps {
  name: string;
  label: string;
  value?: string;
  required?: boolean;
  options: string[];
  disabled?: boolean;
}

export const FormItemSelect: FC<FormItemSelectProps> = ({ name, label, value, required, options, disabled }) => (
  <Form.Item noStyle shouldUpdate={(prev, current) => prev[name] !== current[name]}>
    {({ getFieldValue }) => (
      <FormFloatLabel value={getFieldValue(name) || value} label={label} required={required}>
        <Form.Item name={name}>
          <Select defaultValue={value} suffixIcon={disabled && <LockOutlined />} disabled={disabled}>
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </FormFloatLabel>
    )}
  </Form.Item>
);
