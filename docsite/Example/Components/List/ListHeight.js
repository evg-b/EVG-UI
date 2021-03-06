import React from 'react';
import { withStyles } from 'react-jss';
import { List, ListItem, ListItemText } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ListHeight = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List autoHide={false} color='--ifm-color-primary' style={{ width: 300, height: 400 }}>
                {
                    [...Array(15)].map((n, i) =>
                        <ListItem key={i} button>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListHeight)