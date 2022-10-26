import React from 'react';

interface InputWrapperProps {
  title?: string,
  subtitle?: string,
  children?: JSX.Element | never[],
}

export default function InputWrapper({ title, subtitle, children }: InputWrapperProps) {
  return (
    <div>
      <div className='mb-1'>
        <div className="fw-bold text-primary">{title}</div>
        <div className='text-primary' style={{ fontSize: '.8rem' }}>{subtitle}</div>
      </div>
      {children}
    </div>
  );
}
