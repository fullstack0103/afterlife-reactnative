
import * as React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View``

const SImage = styled.Image`
  tint-color: ${props => props.theme.colors.primary};
`
const AIcon = (props) => {
  return (
    <Wrapper style={{ borderRadius: props.style?.borderRadius, overflow: 'hidden', marginHorizontal: props.style?.marginHorizontal }}>
      <SImage
        source={props.src ? props.src : { uri: props.url }}
        style={{
          tintColor: props.color,
          flex: props.isWrap ? 1 : 0,
          width: props.width,
          height: props.height,
          marginHorizontal: 0,
          borderRadius: props.borderRadius,
          ...props.style,
        }}
        resizeMode={props.cover ? 'cover' : 'contain'}
      >
        {props.children}
      </SImage>
    </Wrapper>
  )
}

AIcon.defaultProps = {
  width: 26,
  height: 26
}

export default AIcon;
