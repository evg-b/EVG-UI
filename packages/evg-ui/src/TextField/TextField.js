
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import classNames from 'classnames';
import Color from '../utils/Color'

const styles = {
    base: {
        display: 'flex',
        flexDirection: 'column',
        '--evg-text-field-color': props => props.color === 'default' ? Color(props.color).Contrast : Color(props.color).Color,
        '&[disabled] > $textField, &[disabled] > $textField > $input': {
            cursor: 'default',
            pointerEvents: ' none',
            color: 'rgba(0, 0, 0, 0.26)',
        }
    },
    textField: {
        position: 'relative',
        minHeight: '56px',
        backgroundColor: '#f5f5f5',
        display: 'inline-flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        color: 'rgba(0,0,0,.6)',
    },
    input: {
        height: '56px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.2',
        textDecoration: 'inherit',
        textTransform: 'inherit',
        alignSelf: 'flex-end',
        boxSizing: 'border-box',
        width: '100%',
        border: 'none',
        background: 'none',
        appearance: 'none',
        caretColor: 'var(--evg-text-field-color)',
        '&::placeholder': {
            transition: 'opacity 100ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '&[data-islabel]::placeholder': {
            opacity: 0,
        },
        '&:focus': {
            border: '0px',
            outline: 0,
            '&::placeholder': {
                opacity: 1,
                color: 'grey'
            },
            '& ~ $line': {
                // активируем красную нижнюю линию
                opacity: 1,
                transform: 'scaleX(1)',
            },
        },
        '&:focus ~ $notched > $notchedNotch > $label': {
            color: 'var(--evg-text-field-color)',
        },
        // textarea
        '&[rows]': {
            height: 'auto',
            resize: 'vertical',
            padding: '0 16px 16px',
            margin: '14px 1px 1px 0',
            lineHeight: '1.75rem',
        },
    },
    label: {
        display: 'inline-block',
        position: 'relative',
        maxWidth: '133%',
        pointerEvents: 'none',
        transformOrigin: 'left top',
        whiteSpace: 'nowrap',
        top: '1.05rem',
        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
        color: 'currentColor',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        cursor: 'text',
        overflow: 'hidden',
    },
    round: {
        '&$filled': {
            borderRadius: '16px 16px 0 0',
        },
        '&$outlined > $input': {
            paddingLeft: '32px',
        },
        '&$outlined > $notched > $notchedLeading': {
            borderRadius: '28px 0 0 28px',
            width: '28px',
        },
        '&$outlined > $notched > $notchedTrailing': {
            borderRadius: '0 28px 28px 0',
        },
        '&$outlined > $notched > $notchedNotch': {
            maxWidth: 'calc(100% - 44px * 2)',
        },
    },
    leadingIcon: {
        color: 'currentColor',
        left: '16px',
        top: '18px',
        position: 'absolute',
        '$textField > & ~ $input': {
            paddingLeft: '48px',
        },
        '& ~ $notched > $notchedLeading': {
            minWidth: '44px',
        },
    },
    trailingIcon: {
        color: 'currentColor',
        right: '16px',
        top: '18px',
        position: 'absolute',
        '$textField > & ~ $input': {
            paddingRight: '48px',
        },
        '& ~ $notched > $notchedTrailing': {
            minWidth: '44px',
        },
    },
    inputFilled: {
        padding: '20px 16px 6px',
        '& ~ $notched > $notchedNotch,& ~ $notched[data-isempty] > $notchedNotch': {
            paddingLeft: '4px',
        },
        '&:focus ~ $notched > $notchedNotch > $label,& ~ $notched[data-isempty] > $notchedNotch > $label': {
            transform: 'translateY(-0.6rem) scale(.75)',
        },
        '& ~ $notched': {
            borderColor: 'transparent',
        },
    },
    inputOutlined: {
        padding: '12px 16px 14px',
        '&[data-islabel] ~ $notched > $notchedNotch,& ~ $notched[data-isempty] > $notchedNotch': {
            paddingLeft: '4px',
        },
        '&:focus ~ $notched > $notchedNotch > $label,& ~ $notched[data-isempty] > $notchedNotch > $label': {
            transform: 'translateY(-1.5rem) scale(.75)',
            fontSize: '1rem',
        },
        '&:focus ~ $notched > $notchedNotch,& ~ $notched[data-isempty] > $notchedNotch': {
            borderTop: 'none',
        },
        '&:focus ~ $notched': {
            borderColor: 'var(--evg-text-field-color)',
        },
        '&:focus ~ $notched > $notchedLeading,&:focus ~ $notched > $notchedNotch,&:focus ~ $notched > $notchedTrailing': {
            borderWidth: '2px',
        }
    },
    line: {
        position: 'absolute',
        pointerEvents: 'none',
        bottom: 0,
        left: 0,
        height: '2px',
        width: '100%',
        transform: 'scaleX(0)',
        opacity: 0,
        backgroundColor: 'var(--evg-text-field-color)',
        transformOrigin: 'center',
        transition: 'transform 100ms cubic-bezier(0.4, 0, 0.2, 1),opacity 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    fullWidth: {
        width: '100%',
    },
    filled: {
        borderBottom: '1px solid',
        overflow: 'hidden',
        borderRadius: '4px 4px 0 0',
        '&:focus-within': {
            borderColor: 'var(--evg-text-field-color)',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',

            backgroundColor: 'rgba(0,0,0,.87)',
        },
        '&:hover:before': {
            opacity: '.04',
        },
        '&:focus-within:before': {
            opacity: '.12',
        },
    },
    outlined: {
        background: 'none',
        borderColor: 'rgba(0,0,0,.38)',
        '&:hover': {
            borderColor: 'rgba(0,0,0,.87)',
        },
    },
    helperLine: {
        color: 'rgba(0,0,0,.6)',
        paddingRight: '16px',
        paddingLeft: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.75rem',
        lineHeight: '1.25rem',
        fontWeight: 400,
        letterSpacing: '.0333333333em',
        textDecoration: 'inherit',
        textTransform: 'inherit',
    },
    notched: {
        display: 'flex',
        position: 'absolute',
        right: 0,
        left: 0,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        borderColor: 'inherit',
    },
    notchedLeading: {
        display: 'flex',
        borderRadius: '4px 0 0 4px',
        boxSizing: 'border-box',
        borderTop: '1px solid',
        borderTopColor: 'inherit',
        borderBottom: '1px solid',
        borderBottomColor: 'inherit',
        borderLeft: '1px solid',
        borderLeftColor: 'inherit',
        borderRight: 'none',
        width: '12px',
    },
    notchedNotch: {
        boxSizing: 'border-box',
        borderTop: '1px solid',
        borderTopColor: 'inherit',
        borderBottom: '1px solid',
        borderBottomColor: 'inherit',
        pointerEvents: 'none',
    },
    notchedTrailing: {
        borderRadius: '0 4px 4px 0',
        boxSizing: 'border-box',
        borderTop: '1px solid',
        borderTopColor: 'inherit',
        borderBottom: '1px solid',
        borderBottomColor: 'inherit',
        borderRight: '1px solid',
        borderRightColor: 'inherit',
        borderLeft: 'none',
        pointerEvents: 'none',
        flexGrow: 1,
    },
}

const TextField = React.forwardRef(function TextField(props, ref) {
    const {
        classes,
        className,
        children,
        component = 'input',
        id = 'nameInputEVG',
        color = 'default',
        placeholder,
        value = '',
        labelText: LabelText = '',
        helperText: HelperText = '',
        outlined = false,
        fullWidth = false,
        round = false, // true - круглые края
        multiline = false,
        rows = 1,
        // rowsMax = 1,
        maxCount = 0,
        leadingIcon: LeadingIcon,
        trailingIcon: TrailingIcon,
        onChange,
        ...otherProps
    } = props
    const Input_ref = ref || useRef()
    const Component = multiline ? 'textarea' : component

    const [inputValue, setInputValue] = useState(value)

    const notchedNotchWidthRef = useRef(null)

    const multilineSettings = multiline ? { rows: rows } : null

    const leadingIcon = LeadingIcon && (
        <span className={classes.leadingIcon}>
            {LeadingIcon}
        </span>
    )
    const trailingIcon = TrailingIcon && (
        <span className={classes.trailingIcon}>
            {TrailingIcon}
        </span>
    )

    const labelText = LabelText && (
        <label
            htmlFor={id}
            className={classes.label}>
            {LabelText}
        </label>
    )

    const helperText = HelperText && (
        <div className={classes.helperLine}>
            <span>
                {HelperText}
            </span>
            {maxCount !== 0 ? <span>{inputValue.length}/{maxCount}</span> : null}
        </div>
    )
    const ActivIndicator = (
        <div className={classes.line}></div>
    )
    const notchedOutlined = (
        <div className={classes.notched} data-isempty={inputValue ? true : null}>
            <div className={classes.notchedLeading}></div>
            <div ref={notchedNotchWidthRef} className={classes.notchedNotch}>{labelText}</div>
            <div className={classes.notchedTrailing}></div>
        </div>
    )
    const handlerChange = (e) => {
        if (maxCount !== 0 && e.target.value.length > maxCount) {
            e.target.value = inputValue
        } else {
            onChange && onChange(e)
            setInputValue(e.target.value)
        }
    }

    const handleFocus = () => {
        const notchedNotchWidthRef_S = notchedNotchWidthRef.current
        const labelWidthNotched = notchedNotchWidthRef_S.getBoundingClientRect().width * 0.75 - 4
        if (notchedNotchWidthRef_S.style.width === '' && LabelText !== '') {
            notchedNotchWidthRef_S.style.width = `${labelWidthNotched + 8}px`
        }
    }
    const handleBlur = (e) => {
        const notchedNotchWidthRef_S = notchedNotchWidthRef.current
        if (e.target.value === '' && LabelText !== '') {
            notchedNotchWidthRef_S.style.cssText = ''
        }
    }
    useEffect(() => {
        Input_ref.current.value = value
        setInputValue(value)
    }, [value])

    return (
        <div
            className={classNames(
                classes.base,
                {
                    [classes.fullWidth]: fullWidth,
                }
            )}
            disabled={otherProps.disabled}
        >
            <div className={classNames(
                classes.textField,
                {
                    [classes.filled]: !outlined,
                    [classes.outlined]: outlined,
                    [classes.round]: round,
                }
            )}>
                {leadingIcon}
                {trailingIcon}
                <Component
                    id={id}
                    name="name"
                    type="input"
                    ref={Input_ref}
                    className={classNames(
                        classes.input,
                        {
                            [classes.inputFilled]: !outlined,
                            [classes.inputOutlined]: outlined,
                        }
                    )}
                    data-islabel={LabelText ? true : null}
                    placeholder={placeholder}
                    onChange={handlerChange}
                    onFocus={outlined ? handleFocus : null}
                    onBlur={outlined ? handleBlur : null}
                    {...multilineSettings}
                    {...otherProps}
                />
                {notchedOutlined}
                {!outlined ? ActivIndicator : null}
            </div>
            {helperText}
        </div>
    )
})
TextField.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    labelText: PropTypes.string,
    helperText: PropTypes.string,
    outlined: PropTypes.bool,
    fullWidth: PropTypes.bool,
    round: PropTypes.bool,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    maxCount: PropTypes.number,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    onChange: PropTypes.func,
}
TextField.defaultProps = {
    id: 'nameInputEVG',
    color: 'default',
    outlined: false,
    fullWidth: false,
    round: false,
    multiline: false,
    rows: 1,
    maxCount: 0,
}
TextField.displayName = 'TextFieldEVG'
export default withStyles(styles)(TextField)