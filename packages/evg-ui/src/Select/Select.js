import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import TextField from '../TextField'
import List from '../List'
import SelectOption from '../SelectOption'
import Elevation from '../utils/Elevation'
import Popup from '../Popup'
import { ExpandMore } from '../internal/icons/Select';

const styles = {
    base: {
        position: 'relative',
        tapHighlightColor: 'rgba(0,0,0,0)',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    },
    selectIcon: {
        position: 'absolute',
        top: '18px',
        right: '16px',
        transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        '&:disabled,&[disabled]': {
            cursor: 'default',
            pointerEvents: ' none',
            color: '#b4b4b4',
        }
    },
    selectIconOpen: {
        transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'rotate(180deg)',
    },
    selectList: {
        ...Elevation(8),
    },

};
const Select = React.forwardRef(function Select(props, ref) {
    const {
        classes,
        className,
        children,
        value,
        emptyOption,
        onChange,
        color,
        disabled,
        ...otherProps
    } = props

    let Select_ref = useRef()
    Select_ref = ref || Select_ref

    const [open, setOpen] = useState(false)
    const [minWidth, setMminWidth] = useState(0)

    const optionMap = new Map()
    React.Children.forEach(children, child => {
        let value = child.props.value
        let children = child.props.children
        if (value && children) {
            optionMap.set(value, children)
        }
    })
    const [valueSelect, setValueSelect] = useState(optionMap.get(value))
    const handelClick = (newValue) => {
        setValueSelect(optionMap.get(newValue))
        onChange && onChange(newValue)
        handleCloseSelectList()
    }
    const emptySelectOption = () => <SelectOption onClick={handelClick} />

    const handleOpenSelectList = () => {
        setOpen(true)
    }
    const handleCloseSelectList = () => {
        Select_ref.current.blur()
        setOpen(false)
    }

    useEffect(() => {
        // TODO: оптимизировать и закешировать, чтобы срабатывала только два раза
        // в первый render ширина может учитываться margin и clientWidth почему то не помогает(а должен)
        // он помогает при первом показе, вот тогда нужно зафиксировать новое значение(правильное) и больше не менять
        setMminWidth(Select_ref.current.clientWidth)
    }, [])
    return (
        <div className={classNames(classes.base, className)}>
            <TextField
                ref={Select_ref}
                readOnly
                value={valueSelect}
                onClick={handleOpenSelectList}
                style={{ cursor: 'pointer' }}
                color={color}
                disabled={disabled}
                {...otherProps}
            />
            <ExpandMore color={open ? color : ''} disabled={disabled} className={classNames(classes.selectIcon, {
                [classes.selectIconOpen]: open,
            })} />
            <Popup
                target={Select_ref}
                open={open}
                mode='click'
                onClose={handleCloseSelectList}
                style={{ minWidth }}
            >
                <List
                    color={color}
                    className={classNames(classes.selectList, {
                    })}
                >
                    {emptyOption && emptySelectOption()}
                    {
                        React.Children.map(children, child => {
                            if (child.props.value && child.props.children) {
                                return child && React.cloneElement(child, {
                                    onClick: handelClick,
                                    active: child.props.children === valueSelect
                                })
                            } else {
                                console.error(
                                    `[evg-ui] <Select/>: <SelectOption/> empty 'value' or 'children'`
                                )
                            }
                        })
                    }
                </List>
            </Popup>
        </div>
    )
})
Select.propTypes = {
    /**
    * Это контент между открывающим и закрывающим тегом компонента.
    */
    children: PropTypes.node,

    /**
     * Объект содержит jss стили компонента.
    */
    classes: PropTypes.object,

    /**
     * Чтобы указать CSS классы, используйте этот атрибут.
    */
    className: PropTypes.string,

    /**
     * Название цвета в разных форматах.
    */
    color: PropTypes.string,

    /**
     * Если true, в список добавиться пустой SelectOption.
    */
    emptyOption: PropTypes.bool,

    /**
     * Вызывается при изменении состояния.
    */
    onChange: PropTypes.func,

    /**
     * Value - number или string.
    */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Если true, принимает состоянии disabled.
    */
    disabled: PropTypes.bool,
}
Select.defaultProps = {
    emptyOption: false,
    disabled: false,
}
Select.displayName = 'SelectEVG'
export default withStyles(styles)(Select)