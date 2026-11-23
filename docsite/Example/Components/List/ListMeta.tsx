import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@evg-b/evg-ui'
import useBaseUrl from '@docusaurus/useBaseUrl'

import * as Styled from './List.styled'

const ListMeta = () => {
  const Users = [
    {
      avatar: useBaseUrl('/source/Avatar/11.jpg'),
      name: 'not_yet_King',
      text: 'food!! food!! food!! food!! food!! food!! food!! food!!',
      time: '12:35',
      count: 10
    },
    {
      avatar: useBaseUrl('/source/Avatar/2.jpg'),
      name: 'Umaru-chan',
      text: 'go ps4?',
      time: '00:11',
      count: 1
    },
    {
      avatar: useBaseUrl('/source/Avatar/10.jpg'),
      name: 'Rick',
      text: 'oops it seems we have a problem',
      time: '20:01',
      count: 123
    },
    {
      avatar: useBaseUrl('/source/Avatar/12.jpg'),
      name: 'skrip skrip',
      text: 'me32#hr 23oi_e!! r$3;oq',
      time: '20:00?',
      count: 0
    }
  ]
  return (
    <Styled.Row>
      <Styled.Items as={List}>
        {Users.map((user) => (
          <ListItem key={user.name} button>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              secondaryText={user.text}
              meta={user.time}
              secondaryMeta={<Badge ripe count={user.count} />}>
              {user.name}
            </ListItemText>
          </ListItem>
        ))}
      </Styled.Items>
    </Styled.Row>
  )
}

ListMeta.displayName = 'ListMeta'

export default ListMeta
