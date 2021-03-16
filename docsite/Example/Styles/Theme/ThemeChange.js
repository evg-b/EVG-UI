import React from 'react';
import { Elevation, setTheme, Avatar, Badge, List, ListItem, ListItemText, ListItemAvatar, Button, ButtonGroup, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
const ListMeta = (props) => {
    const { classes } = props
    const Users = [
        {
            name: 'Albus Dumbledore',
            text: 'Gryffindor',
            time: '12:35',
            count: 10,
        },
        {
            name: 'Hermione Granger',
            text: 'Gryffindor',
            time: '00:11',
            count: 1,
        },
        {
            name: 'Ronald Weasley',
            text: 'Gryffindor',
            time: '20:01',
            count: 1,
        },
        {
            name: 'Rubeus Hagrid',
            text: 'Gryffindor',
            time: '20:00',
            count: 0,
        },
        {
            name: 'Draco Lucius Malfoy',
            text: 'Slytherin',
            time: '20:00',
            count: 0,
        },
        {
            name: 'Minerva McGonagall',
            text: 'Gryffindor',
            time: '20:00',
            count: 0,
        },
        {
            name: 'Harry Potter',
            text: 'Gryffindor',
            time: '15:15',
            count: 110,
        },
        {
            name: 'Luna Lovegood',
            text: 'Ravenclaw',
            time: '20:00',
            count: 0,
        },
        {
            name: 'Voldemort',
            text: 'Slytherin',
            time: '13:13',
            count: 100,
        },
    ]
    return (
        <div className={classes.base}>
            <div>
                <ButtonGroup variant='outlined'>
                    <Button onClick={() => setTheme()}>light</Button>
                    <Button onClick={() => setTheme('dark')}>dark</Button>
                </ButtonGroup>
            </div>
            <List color='primary' autoHide={false} style={{ margin: 40, width: 400, maxHeight: 300, ...Elevation(2), }}>
                {
                    Users.map((user, i) =>
                        <ListItem key={i} button>
                            <ListItemAvatar><Avatar alt={user.name} color='primary' /></ListItemAvatar>
                            <ListItemText
                                secondaryText={user.text}
                                meta={user.time}
                                secondaryMeta={<Badge color='primary' ripe count={user.count} />}
                            >
                                {user.name}
                            </ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}


export default withStyles(styles)(ListMeta)