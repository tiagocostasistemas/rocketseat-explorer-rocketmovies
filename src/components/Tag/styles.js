import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: 'Roboto';
  font-size: 16px;

  width: fit-content;
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 8px;
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`