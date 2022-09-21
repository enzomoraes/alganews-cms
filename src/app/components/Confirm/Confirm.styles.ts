import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  color: #274060;
  background-color: #f3f8fa;
  width: 230px;
`;

export const ConfirmTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;

export const ConfirmButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
