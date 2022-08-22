import Button from '../Button/Button';
import * as C from './Confirm.styles';

export interface ConfirmProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Confirm({ title, onCancel, onConfirm }: ConfirmProps) {
  return (
    <C.Wrapper>
      <C.ConfirmTitle>{title}</C.ConfirmTitle>
      <C.ConfirmButtonDisplay>
        <Button label='Não' variant='danger' onClick={onCancel}></Button>
        <Button label='Sim' variant='primary' onClick={onConfirm}></Button>
      </C.ConfirmButtonDisplay>
    </C.Wrapper>
  );
}
