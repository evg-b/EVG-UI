import type { ListAvatarProps } from './ListAvatar.types'

import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  withStyles
} from '@evg-b/evg-ui'

const styles = {
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      margin: '5px'
    }
  }
}

const Items = [
  'Captain Shepard',
  'Garrus Vakarian',
  'Tali’Zorah nar Rayya',
  'Liara T’Soni',
  'Ashley Williams',
  'Urdnot Wrex'
]

const ListAvatar = (props: ListAvatarProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <List style={{ width: '300px' }}>
        {Items.map((item, i) => (
          <ListItem key={i} button>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

ListAvatar.displayName = 'ListAvatar'

export default withStyles(styles)(ListAvatar)
