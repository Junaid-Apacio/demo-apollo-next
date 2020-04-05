import styled from 'styled-components'

const H1 = styled.h1.attrs(props => ({
  className: 'title'
}))`
color: ${props => props.white ? 'white' : props.theme.primaryColor};
text-align: center;
`

export default H1
