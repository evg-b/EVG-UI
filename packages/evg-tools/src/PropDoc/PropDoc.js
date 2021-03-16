import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@evg-b/evg-ui'
import classNames from 'classnames'

const styles = {
    base: {
        backgroundColor: '#FFFFFF',
        '-webkit-overflow-scrolling': 'touch',
        display: 'inline-flex',
        width: '100%',
        color: '#1d1d1f',
    },
    table: {
        display: 'table',
        // minWidth: '100%',
        width: '100%',
        // border: 0,
        // whiteSpace: 'nowrap',
        borderCollapse: 'collapse',
        wordBreak: 'normal',
        // tableLayout: 'fixed',
        textAlign: 'left',
        '& td,& th': {
            border: 0,
        },
        '& tr': {
            backgroundColor: '#FFFFFF !important',
        }
    },
    Tr: {
        borderTop: 0,
        borderBottom: '1px solid rgba(0,0,0,.12)',
    },
    TrHeaderTh: {
        color: '#7B1FA2',
        '&>th': {
            height: 56,
            paddingRight: 16,
            paddingLeft: 16,
        }
    },
    TrItemTh: {
        '&>td': {
            height: 52,
            paddingRight: 16,
            paddingLeft: 16,
            '&:nth-child(1)': {
                width: '15%',
            },
            '&:nth-child(2)': {
                // minWidth: '10%',
                maxWidth: '28%',
                // width: '25%',
                color: '#7B1FA2',
                fontWeight: 500,
            },
            '&:nth-child(3)': {
                width: '10%',
            },
            '&:nth-child(4)': {
                // width: '28%',
            },
        }
    }
};
const ValueDetectArr = (value) => {
    if (Array.isArray(value)) {
        return value.reduce((mem, val, index, arr) => {
            if (Array.isArray(val.value)) {
                return mem + `${val.name}[${ValueDetectArr(val.value)}] or `
            } else {
                return mem + `${val.value || val.name}${index === arr.length - 1 ? '' : ', '}`
            }
        }, ``)
    } else {
        return value
    }
}
const PropDoc = React.forwardRef(function PropDoc(props, ref) {
    const {
        classes,
        className,
        children,
        patient,
        full,
        ...otherProps
    } = props

    const prop = ({ name, type, defaultValue, description }) => {
        if (!type) return null // defender wrong JSON

        let values
        if (type.value) {
            if (type.name === 'arrayOf') {
                values = `[${type.value.name}]`
            } else {
                values = ValueDetectArr(type.value)
            }
        } else {
            values = type.name
        }
        return (
            <tr key={name} className={classNames(classes.Tr, classes.TrItemTh)}>
                <td>{name}</td>
                <td>{values}</td>
                <td>{defaultValue ? defaultValue.value : null}</td>
                <td>{description}</td>
            </tr>
        )
    }
    const Description = () => <p style={{ color: '#1d1d1f', fontSize: '20px' }}>{patient.description}</p>
    return (
        <>
            {full && Description()}

            <div className={classes.base} {...otherProps}>
                <table className={classes.table}>
                    <thead>
                        <tr className={classNames(classes.Tr, classes.TrHeaderTh)}>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patient.props && Object.entries(patient.props).map(([name, p]) => prop({ name, ...p }))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
})
PropDoc.propTypes = {
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
     * JSON объект с информацией о props компонента.
    */
    patient: PropTypes.object,
    /**
     * true - показывает description.
    */
    full: PropTypes.bool,
}
PropDoc.defaultProps = {
    patient: {},
    full: false
}
PropDoc.displayName = 'PropDocEVG'
export default withStyles(styles)(PropDoc)