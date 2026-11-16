import type { ListActionProps } from './ListAction.types'

import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemAction,
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

const Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']

const ListAction = (props: ListActionProps) => {
  const { classes } = props
  return (
    <div className={classes.base}>
      <List style={{ width: '300px' }}>
        {Items.map((item, i) => (
          <ListItem key={i}>
            <ListItemAction position="start">
              <Checkbox defaultChecked />
            </ListItemAction>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List style={{ width: '300px' }}>
        {Items.map((item, i) => (
          <ListItem key={i}>
            <ListItemAction>
              <Checkbox defaultChecked />
            </ListItemAction>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

ListAction.displayName = 'ListAction'

export default withStyles(styles)(ListAction)
