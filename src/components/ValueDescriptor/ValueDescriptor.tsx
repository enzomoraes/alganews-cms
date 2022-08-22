import * as VD from './ValueDescriptor.styles';

export interface ValueDescriptorProps {
  description: string;
  value: number;
  color: 'primary' | 'default';
  isCurrency?: boolean;
}

export default function ValueDescriptor({
  value,
  description,
  isCurrency,
  color,
}: ValueDescriptorProps) {
  return (
    <VD.Wrapper color={color}>
      <span className='Description'>{description}:</span>
      <div>
        {isCurrency && <span className='Currency'>{'R$'}</span>}

        <span className='Value'>{value.toLocaleString('pt-BR')}</span>
      </div>
    </VD.Wrapper>
  );
}
