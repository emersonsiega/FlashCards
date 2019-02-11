import styled from 'styled-components'

const DeckCard = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-bottom-width: 0.25px;
  border-bottom-color: ${props => props.theme.inactiveBorder};
`

export default DeckCard
