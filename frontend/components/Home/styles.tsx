import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex: 1;
  height: ${props =>
    props?.orientation === 'Portrait' && props?.height
      ? `${props.height}px`
      : 'auto'};
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
`;