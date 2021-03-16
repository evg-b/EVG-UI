export default {ListActions: `import React from 'react';
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

const Items = [
    'Notifications', 'Security', 'Storage', 'Settings', 'Folders'
]

const ListAction = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    Items.map((item, i) =>
                        <ListItem key={i}>
                            <ListItemAction position='start'>
                                <Checkbox defaultChecked />
                            </ListItemAction>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
            <List style={{ width: '300px' }}>
                {
                    Items.map((item, i) =>
                        <ListItem key={i}>
                            <ListItemAction>
                                <Checkbox defaultChecked />
                            </ListItemAction>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListAction)`,
ListAvatar: `import React from 'react';
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

const Items = [
    'Captain Shepard', 'Garrus Vakarian', 'Tali’Zorah nar Rayya', 'Liara T’Soni', 'Ashley Williams', 'Urdnot Wrex'
]

const ListAvatar = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    Items.map((item, i) =>
                        <ListItem key={i} button>
                            <ListItemAvatar><Avatar /></ListItemAvatar>
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListAvatar)`,
ListBase: `import React from 'react';
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

export default withStyles(styles)(ListBase)`,
ListColor: `import React from 'react';
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

const ListColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List color='primary' style={{ width: '300px' }}>
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

export default withStyles(styles)(ListColor)`,
ListHeight: `import React from 'react';
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
    'Captain Shepard',
    'Garrus Vakarian',
    'Tali’Zorah nar Rayya',
    'Liara T’Soni',
    'Ashley Williams',
    'Urdnot Wrex',
    'Jacob Taylor',
    'Jack',
    'Legion',
    'Miranda Lawson',
    'Mordin Solus',
    'Morinth',
    'Samara',
    'Thane Krios',
    'EDI',
    'Javik',
    'Joker',
    'The Illusive Man',
    'David Edvard Anderson'
]

const ListHeight = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List autoHide={false} color='primary' style={{ width: 300, height: 400 }}>
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

export default withStyles(styles)(ListHeight)`,
ListMeta: `import React from 'react';
import { Avatar, Badge, List, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
            avatar: useBaseUrl('/source/Avatar/11.jpg'),
            name: 'not_yet_King',
            text: 'food!! food!! food!! food!! food!! food!! food!! food!!',
            time: '12:35',
            count: 10,
        },
        {
            avatar: useBaseUrl('/source/Avatar/2.jpg'),
            name: 'Umaru-chan',
            text: 'go ps4?',
            time: '00:11',
            count: 1,
        },
        {
            avatar: useBaseUrl('/source/Avatar/10.jpg'),
            name: 'Rick',
            text: 'oops it seems we have a problem',
            time: '20:01',
            count: 123,
        },
        {
            avatar: useBaseUrl('/source/Avatar/12.jpg'),
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

export default withStyles(styles)(ListMeta)`,
ListSecondaryText: `import React from 'react';
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

const ListSecondaryText = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <List style={{ width: '300px' }}>
                {
                    Items.map((item, i) =>
                        <ListItem key={i} button>
                            <ListItemText secondaryText={'secondaryText'} >{item}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(ListSecondaryText)`,
}