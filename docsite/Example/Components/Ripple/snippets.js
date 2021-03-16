export default {custom_state: `import React from 'react';
import { Elevation, Color, withStyles } from '@evg-b/evg-ui';
import classNames from 'classnames'

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
        ...Elevation(1)
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
    const { classes } = props

    return (
        <div className={classNames(classes.base)}>
            {
                Object.keys(ArrayStates).map((state, index) => {
                    let colorState = index !== 2 ? Color(StatesColor[state]).Base() : Color(StatesColor[state]).Contrast()
                    return (
                        <div
                            key={index}
                            className={classes.stateStand}
                            style={{
                                backgroundColor: colorState,
                                color: Color(colorState).Contrast()
                            }}
                        >
                            <div style={{
                                padding: '10px',
                            }}>{state}</div>
                            {
                                Object.entries(ArrayStates[state]).map((config, i) => {
                                    let colorRipple = index === 2 ? Color(StatesColor[state]).Base() : Color(StatesColor[state]).Contrast()
                                    let colorRippleState = Color(colorRipple).Base('rgba', config[1])
                                    return (
                                        <div
                                            key={i}
                                            className={classes.state}
                                            style={{
                                                backgroundColor: colorRippleState,
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

export default withStyles(styles)(StatesRipple)`,
RippleBase: `import React from 'react';
import { Elevation, Ripple, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        ...Elevation(2),
        width: '300px',
        height: '300px',
        position: 'relative',
    },
}

const RippleBase = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Ripple />
        </div>
    )
}

export default withStyles(styles)(RippleBase)

`,
RippleColor: `import React from 'react';
import { Elevation, Color, Ripple, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
    },
    stand: {
        ...Elevation(2),
        width: '150px',
        height: '150px',
        position: 'relative',
        margin: '5px',
    }
}

const RippleColor = (props) => {
    const {
        classes,
    } = props

    const gray400 = Color('gray400').Base()
    const purple600 = Color('purple600').Base()

    return (
        <div className={classes.base}>
            <span className={classes.stand}>
                <Ripple />
            </span>
            <span className={classes.stand} style={{ backgroundColor: gray400 }} >
                <Ripple color={gray400} />
            </span>
            <span className={classes.stand} style={{ backgroundColor: purple600 }} >
                <Ripple color={purple600} />
            </span>
        </div>
    )
}

export default withStyles(styles)(RippleColor)`,
RippleContrast: `import React from 'react';
import { Ripple, Elevation, Color, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
    },
    stand: {
        ...Elevation(2),
        width: '150px',
        height: '150px',
        position: 'relative',
        margin: '5px',
    }
}

const RippleContrast = (props) => {
    const {
        classes,
    } = props

    const purple600 = Color('purple600').Base()

    return (
        <div className={classes.base}>
            <span className={classes.stand} style={{ backgroundColor: purple600 }}>
                <Ripple color={purple600} />
            </span>
            <span className={classes.stand} >
                <Ripple color={purple600} contrast={false} />
            </span>
        </div>
    )
}

export default withStyles(styles)(RippleContrast)`,
RippleExample: `import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import RippleBase from './RippleBase'
import RippleColor from './RippleColor'
import RippleContrast from './RippleContrast'
import Snippets from './snippets'

const RippleExampleBase = () => {
    return (
        <CodeExample
            title='base'
            demo={<RippleBase />}
            snippet={Snippets.RippleBase}
        />
    )
}
const RippleExampleColor = () => {
    return (
        <CodeExample
            title='Color'
            demo={<RippleColor />}
            snippet={Snippets.RippleColor}
        />
    )
}
const RippleExampleContrast = () => {
    return (
        <CodeExample
            title='Contrast'
            demo={<RippleContrast />}
            snippet={Snippets.RippleContrast}
        />
    )
}

export { RippleExampleBase, RippleExampleColor, RippleExampleContrast }`,
}