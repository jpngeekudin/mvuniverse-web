import React from 'react'
import styled from 'styled-components'

interface InputCardProps {
  title?: string,
  subtitle?: string,
  className?: string,
  trailing?: JSX.Element
}

export default function InputCard({ title, subtitle, className, trailing }: InputCardProps) {
  return (
    <StyledInputCard className={className}>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div>
        {trailing}
      </div>
    </StyledInputCard>
  )
}

const StyledInputCard = styled.div`
  border-radius: .5rem;
  border: solid 2px var(--bs-gray-400);
  background-color: var(--bs-gray-200);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: var(--bs-primary);

  .title {
    font-weight: bold;
  }

  .subtitle {
    font-size: .8rem;
  }
`;