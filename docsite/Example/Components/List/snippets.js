export default {
'ListActions' : `import React from 'react';
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

export default withStyles(styles)(ListAction)`,'ListAvatar' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@evg-b/evg-ui';

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

export default withStyles(styles)(ListAvatar)`,'ListBase' : `import React from 'react';
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
const ListBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
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

export default withStyles(styles)(ListBase)`,'ListColor' : `import React from 'react';
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
const ListColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List color='--ifm-color-primary' style={{ width: '300px' }}>
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

export default withStyles(styles)(ListColor)`,'ListHeight' : `import React from 'react';
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

export default withStyles(styles)(ListHeight)`,'ListMeta' : `import React from 'react';
import { withStyles } from 'react-jss';
import { Avatar, Badge, List, ListItem, ListItemText, ListItemAvatar } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const ListMeta = (props) => {
    const { classes } = props
    const Users = [
        {
            avatar: '/source/Avatar/11.jpg',
            name: 'not_yet_King',
            text: 'food!! food!! food!! food!! food!! food!! food!! food!!',
            time: '12:35',
            count: 10,
        },
        {
            avatar: '/source/Avatar/2.jpg',
            name: 'Umaru-chan',
            text: 'go ps4?',
            time: '00:11',
            count: 1,
        },
        {
            avatar: '/source/Avatar/10.jpg',
            name: 'Rick',
            text: 'oops it seems we have a problem',
            time: '20:01',
            count: 1,
        },
        {
            avatar: '/source/Avatar/12.jpg',
            name: 'skrip skrip',
            text: 'me32#hr 23oi_e!! r\$3;oq',
            time: '20:00?',
            count: 0,
        },
    ]
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    Users.map((user, i) =>
                        <ListItem key={i} button>
                            <ListItemAvatar><Avatar src={user.avatar} /></ListItemAvatar>
                            <ListItemText
                                secondaryText={user.text}
                                meta={user.time}
                                secondaryMeta={<Badge ripe count={user.count} />}
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

export default withStyles(styles)(ListMeta)`,'ListSecondaryText' : `import React from 'react';
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
const ListSecondaryText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    [...Array(5)].map((n, i) =>
                        <ListItem key={i} button>
                            <ListItemText secondaryText={'secondaryText'} >ListItem - {i + 1}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListSecondaryText)`,
}