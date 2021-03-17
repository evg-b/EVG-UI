import React from 'react';
import { Elevation, Color, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        marginTop: 35,
        marginBottom: 60,
    },
    tone: {
        ...Elevation(1),
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    textColor: {
        color: Color('green600').Base()
    }
}


const ColorInfo = (props) => {
    const {
        classes,
        colors = ['red700', 'red300'], // [color,color,...]
        full = false,
    } = props

    const ColorBase = (color) => <span>Color(<span className={classes.textColor}>{color}</span>).Base()</span>

    return (
        <div className={classes.base}>
            {
                colors.map((color, index) => {
                    let colorFix = color === 'primary' ? 'blue600' : color
                    let colorObject = Color(colorFix).Base()
                    return (
                        <ListItem key={index} button={false}>
                            <ListItemAvatar>
                                <span className={classes.tone} style={{ backgroundColor: colorObject }}></span>
                            </ListItemAvatar>
                            <ListItemText secondaryText={colorObject} style={{ fontWeight: 500 }}>
                                {full ? ColorBase(color) : color}
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
        </div>
    )
}

export default withStyles(styles)(ColorInfo)