import styled from 'styled-components';

const COLORS = {
  primary: '#0099ff',
  default: '#274060',
};

export const Wrapper = styled.div<{ color: 'primary' | 'default' }>`
  display: flex;

  flex-direction: column;

  color: #274060;

  span.Description {
    font-size: 12px;
    text-transform: lowercase;
  }

  span.Currency {
    color: ${p => COLORS[p.color]};
  }

  span.Value {
    font-weight: 800;
    font-size: 18px;
    color: ${p => COLORS[p.color]};
  }
`;
