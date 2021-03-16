import React from 'react';
import { Button, Color, withStyles } from '@evg-b/evg-ui';
import { Check } from '@evg-b/evg-icons'

const styles = {
    base: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '40px 0',
    }
}

const brightChange = React.forwardRef(function brightChange(props, ref) {
    const {
        classes,
        className,
        children,
        ...otherProps
    } = props

    return (
        <div
            className={classes.base}
            ref={ref}
            {...otherProps}
        >
            <Button color='primary' variant='contained'>Button</Button>
            <Button color='primary' variant='contained' startIcon={<Check />}>Button</Button>
            <Button color='primary' variant='contained' loading >Button</Button>

        </div >
    )
})

export default withStyles(styles)(brightChange)