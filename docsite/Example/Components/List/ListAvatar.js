import React from 'react';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ListAvatar = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i} button>
                            <ListItemAvatar><Avatar /></ListItemAvatar>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListAvatar)