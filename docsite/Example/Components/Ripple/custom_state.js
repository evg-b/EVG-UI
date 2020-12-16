import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from 'react-jss';
import classNames from 'classnames'
import Color from '@evg-b/evg-ui/src/utils/Color'
import hexToRGBA from '@evg-b/evg-ui/src/utils/hexToRGBA'

const styles = {
    base: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    stateStand: {
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
    },
    state: {
        margin: '15px',
        padding: '10px',
        width: '80%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '4px',
    }
}
const StatesColor = {
    'White': '#FFFFFF',
    'Contrast': 'purple600',
    'Color': 'purple600',
}
const ArrayStates = {
    'White': {
        'Enabled': 0,
        'Hover': 0.04,
        'Focus': 0.12,
        // 'Selected': 0.08,
        'Activated': 0.12,
        'Pressed': 0.12,
        // 'Dragged': 0.08,
    },
    'Contrast': {
        'Enabled': 0,
        'Hover': 0.12,
        'Focus': 0.36,
        // 'Selected': 0.24,
        'Activated': 0.36,
        'Pressed': 0.48,
        // 'Dragged': 0.32,
    },
    'Color': {
        'Enabled': 0,
        'Hover': 0.08,
        'Focus': 0.24,
        // 'Selected': 0.16,
        'Activated': 0.24,
        'Pressed': 0.32,
        // 'Dragged': 0.16,
    },
}
const StatesRipple = (props) => {
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
                Object.keys(ArrayStates).map((state, index) => {
                    let colorState = index !== 2 ? Color(StatesColor[state]).Color : Color(StatesColor[state]).Contrast
                    return (
                        <div
                            key={index}
                            className={classes.stateStand}
                            style={{
                                backgroundColor: colorState,
                            }}
                        >
                            <div style={{
                                padding: '10px',
                                color: Color(colorState).Contrast
                            }}>{state}</div>
                            {
                                Object.entries(ArrayStates[state]).map((config, i) => {
                                    let colorRipple = index === 2 ? Color(StatesColor[state]).Color : Color(StatesColor[state]).Contrast
                                    let colorRippleState = hexToRGBA(colorRipple, config[1])
                                    return (
                                        <div
                                            key={i}
                                            className={classes.state}
                                            style={{
                                                backgroundColor: colorRippleState,
                                                color: Color(colorRippleState).Contrast,
                                            }}
                                        >
                                            <span>{config[0]}</span>
                                            <span>{config[1] * 100}%</span>
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

export default withStyles(styles)(StatesRipple)