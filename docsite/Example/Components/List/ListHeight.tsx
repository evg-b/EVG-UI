import { List, ListItem, ListItemText } from '@evg-b/evg-ui'

import * as Styled from './List.styled'

const Items = [
  'Captain Shepard',
  'Garrus Vakarian',
  'Tali’Zorah nar Rayya',
  'Liara T’Soni',
  'Ashley Williams',
  'Urdnot Wrex',
  'Jacob Taylor',
  'Jack',
  'Legion',
  'Miranda Lawson',
  'Mordin Solus',
  'Morinth',
  'Samara',
  'Thane Krios',
  'EDI',
  'Javik',
  'Joker',
  'The Illusive Man',
  'David Edvard Anderson'
]

const ListHeight = () => {
  return (
    <Styled.Row>
      <Styled.ScrollableItems as={List} autoHide={false} color="primary">
        {Items.map((item) => (
          <ListItem key={item} button>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Styled.ScrollableItems>
    </Styled.Row>
  )
}

ListHeight.displayName = 'ListHeight'

export default ListHeight
