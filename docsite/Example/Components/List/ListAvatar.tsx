import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = [
  'Captain Shepard',
  'Garrus Vakarian',
  'Tali’Zorah nar Rayya',
  'Liara T’Soni',
  'Ashley Williams',
  'Urdnot Wrex'
]

const ListAvatar = () => {
  return (
    <Styled.Row>
      <Styled.Items as={List}>
        {Items.map((item) => (
          <ListItem key={item} button>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListAvatar.displayName = 'ListAvatar'

export default ListAvatar
