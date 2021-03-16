import React from 'react';
import { Select, SelectOption, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const SelectBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Select labelText='Select'>
                <SelectOption value={10} >Item - 1</SelectOption>
                <SelectOption value={20} >Item - 2</SelectOption>
                <SelectOption value={30} >Item - 3</SelectOption>
            </Select>
            <Select labelText='Select' value={20}>
                <SelectOption value={10} >Item - 1</SelectOption>
                <SelectOption value={20} >Item - 2</SelectOption>
                <SelectOption value={30} >Item - 3</SelectOption>
            </Select>
            <Select disabled labelText='Select'>
                <SelectOption value={10} >Item - 1</SelectOption>
                <SelectOption value={20} >Item - 2</SelectOption>
                <SelectOption value={30} >Item - 3</SelectOption>
            </Select>
        </div>
    )
}

export default withStyles(styles)(SelectBase)