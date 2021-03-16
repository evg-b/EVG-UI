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

export default withStyles(styles)(ListHeight)