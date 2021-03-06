import React from 'react';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
} from '@evg-b/evg-ui/dist/colors';
import Color from '@evg-b/evg-ui/dist/utils/Color'
const MapColor = {
    'red': red,
    'pink': pink,
    'purple': purple,
    'deepPurple': deepPurple,
    'indigo': indigo,
    'blue': blue,
    'lightBlue': lightBlue,
    'cyan': cyan,
    'teal': teal,
    'green': green,
    'lightGreen': lightGreen,
    'lime': lime,
    'yellow': yellow,
    'amber': amber,
    'orange': orange,
    'deepOrange': deepOrange,
    'brown': brown,
    'gray': gray,
    'blueGray': blueGray,
}

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    palette: {
        display: 'inline-block',
        margin: '10px 0',
    },
    tone: {
        height: '50px',
        width: '250px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
    }
}

const Palettes = (props) => {
    const {
        classes,
    } = props

    return (
        <div
            className={classNames(
                classes.base,
            )}
        >
            {
                Object.keys(MapColor).map((key, index) => {
                    return (
                        <div key={index} className={classes.palette}>
                            {
                                Object.entries(MapColor[key]).map((color, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={classes.tone}
                                            style={{
                                                backgroundColor: Color(color[1]).Color,
                                                color: Color(color[1]).Contrast,
                                            }}
                                        >
                                            <span>{i === 0 ? `${key} ` : null}{color[0]}</span>
                                            <span>{color[1]}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withStyles(styles)(Palettes)