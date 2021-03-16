import React, { useState } from 'react';
import { Radio, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const RadioColor = (props) => {
    const { classes } = props
    const [checkName, setCheckName] = useState('radio1')

    const handleChange = (e) => {
        setCheckName(e.target.name)
    }

    return (
        <div className={classes.base}>
            <Radio onChange={handleChange} checked={checkName === 'radio1'} name="radio1" color="default" />
            <Radio onChange={handleChange} checked={checkName === 'radio2'} name="radio2" color="primary" />
            <Radio onChange={handleChange} checked={checkName === 'radio3'} name="radio3" color="warn" />
            <Radio onChange={handleChange} checked={checkName === 'radio4'} name="radio4" color="success" />
            <Radio onChange={handleChange} checked={checkName === 'radio5'} name="radio5" color="fail" />
        </div>
    )
}

export default withStyles(styles)(RadioColor)