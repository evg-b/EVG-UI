import React from 'react';
import { withStyles } from 'react-jss';
import { Checkbox, List, ListItem, ListItemText, ListitemAction } from '@evg-b/evg-ui';
// import {
//     Checkbox,
//     MoreVert,
// } from '@evg-b/evg-icons';

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
                            <ListitemAction position='start'>
                                {/* <IconButton><MoreVert /></IconButton> */}
                                <Checkbox defaultChecked />
                            </ListitemAction>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
            <List style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i}>
                            <ListitemAction>
                                {/* <IconButton><MoreVert /></IconButton> */}
                                <Checkbox defaultChecked />
                            </ListitemAction>
                            <ListItemText>ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListAction)