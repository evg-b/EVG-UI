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
const ListColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List color='primary' style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i} button>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListColor)