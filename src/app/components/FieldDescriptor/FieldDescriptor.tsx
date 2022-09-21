import styled from 'styled-components';

export interface FieldDescriptorProps {
  label: string;
  value: string;
}

export default function FieldDescriptor({
  label,
  value,
}: FieldDescriptorProps) {
  return (
    <StyledFieldDescriptor>
      <span className='Label'>{label}:</span>
      <span className='Value'>{value}</span>
    </StyledFieldDescriptor>
  );
}

const StyledFieldDescriptor = styled.span`
  height: 35px;

  color: #274060;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span.Label {
    font-size: 12px;
    text-transform: lowercase;
    font-weight: bold;
  }

  span.Value {
    font-size: 14px;
  }
`;
