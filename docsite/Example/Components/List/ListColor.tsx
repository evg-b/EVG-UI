import { List, ListItem, ListItemText } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']

const ListColor = () => {
  return (
    <Styled.Row>
      <Styled.Items as={List} color="primary">
        {Items.map((item) => (
          <ListItem key={item} button>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListColor.displayName = 'ListColor'

export default ListColor
