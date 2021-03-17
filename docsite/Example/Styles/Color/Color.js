import React from 'react';
import { Color, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tone: {
        height: '50px',
        width: '200px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const MapContrast = [
    'purple100',
    '#CE93D8',
    '#BA68C8',
    'purple400',
]

const Color = (props) => {
    const { classes } = props

    return (
        <div className={classes.base}>
            {
                MapContrast.map((color, id) => {
                    return (
                        <div
                            key={id}
                            className={classes.tone}
                            style={{
                                backgroundColor: Color(color).Base(),
                                color: Color(color).Contrast(),
                            }}
                        >
                            {color}
                        </div>
                    )
                })
            }
        </div >
    )
}

export default withStyles(styles)(Color)