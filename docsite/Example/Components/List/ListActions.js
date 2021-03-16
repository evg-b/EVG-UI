import React from 'react';
import { Checkbox, List, ListItem, ListItemText, ListItemAction, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ListAction = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i}>
                            <ListItemAction position='start'>
                                <Checkbox defaultChecked />
                            </ListItemAction>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
            <List style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i}>
                            <ListItemAction>
                                <Checkbox defaultChecked />
                            </ListItemAction>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListAction)