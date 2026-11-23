import { Checkbox, List, ListItem, ListItemText, ListItemAction } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']

const ListAction = () => {
  return (
    <Styled.Row>
      <Styled.Items as={List}>
        {Items.map((item) => (
          <ListItem key={item}>
            <ListItemAction position="start">
              <Checkbox defaultChecked />
            </ListItemAction>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
      <Styled.Items as={List}>
        {Items.map((item) => (
          <ListItem key={item}>
            <ListItemAction>
              <Checkbox defaultChecked />
            </ListItemAction>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListAction.displayName = 'ListAction'

export default ListAction
