import { List, ListItem, ListItemText } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']

const ListSecondaryText = () => {
  return (
    <Styled.Row>
      <Styled.Items as={List}>
        {Items.map((item) => (
          <ListItem key={item} button>
            <ListItemText secondaryText={'secondaryText'}>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListSecondaryText.displayName = 'ListSecondaryText'

export default ListSecondaryText
