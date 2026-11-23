import { List, ListItem, ListItemText } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']

const ListBase = () => {
  return (
    <Styled.Row>
      <Styled.Items as={List}>
        {Items.map((item) => (
          <ListItem key={item} button>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListBase.displayName = 'ListBase'

export default ListBase
