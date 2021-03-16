import React from 'react';
import { List, ListItem, ListItemText, withStyles } from '@evg-b/evg-ui';

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
    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'
]

const ListBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    Items.map((item, i) =>
                        <ListItem key={i} button>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListBase)