import React from 'react';
import { Elevation, Color, ListItem, ListItemText, ListItemAvatar, withStyles } from '@evg-b/evg-ui';
import classNames from 'classnames'

const styles = {
    base: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
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


const ColorInfo = React.forwardRef(function ColorInfo(props, ref) {
    const {
        classes,
        className,
        children,
        component: Component = 'div',
        colors = ['red700', 'red300'], // [color,color]
        ...otherProps
    } = props

    return (
        <Component
            className={classNames(
                classes.base,
            )}
            ref={ref}
            {...otherProps}
        >
            {
                colors.map((color, index) => {
                    let colorFix = color === 'primary' ? 'blue600' : color
                    let colorObject = Color(colorFix).Base()
                    return (
                        <ListItem key={index} button={false}>
                            <ListItemAvatar>
                                <span className={classes.tone} style={{ backgroundColor: colorObject }}></span>
                            </ListItemAvatar>
                            <ListItemText secondaryText={colorObject} style={{ fontWeight: 500 }}>Color(<span className={classes.textColor}>'{color}'</span>).Base()</ListItemText>
                        </ListItem>
                    )
                })
            }

        </Component >
    )
})

export default withStyles(styles)(ColorInfo)