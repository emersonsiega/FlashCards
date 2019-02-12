import styled from 'styled-components'

import Text from './Text'

const SubTitle = styled(Text)`
  font-size: 20px;
  color: ${props => props.theme.subText};
`

export default SubTitle
