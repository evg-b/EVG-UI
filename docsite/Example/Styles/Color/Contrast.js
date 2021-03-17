import React from 'react';
import { Color, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridGap: '20px',
    },
    tone: {
        height: '50px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
}

const MapContrast = [
    '#7B1FA2',
    '#CE93D8',
    '#757575',
    '#EEEEEE',
]

const Contrast = (props) => {
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
        </div>
    )
}

export default withStyles(styles)(Contrast)