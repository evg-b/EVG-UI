import React from 'react';
import { Color, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        margin: '10px 0',
    },
    tone: {
        height: '60px',
        width: '60px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
}

const brightChange = (props) => {
    const { classes } = props

    return (
        <div>
            <div className={classes.base}>
                {
                    Array.from(new Array(13)).map((n, index) => {
                        let ColorEVG = Color('orange').Bright('hex', index * 5)
                        return (
                            <div
                                key={index}
                                className={classes.tone}
                                style={{
                                    backgroundColor: ColorEVG,
                                    color: Color(ColorEVG).Contrast(),
                                }}
                            >
                                {index * 5}
                            </div>
                        )
                    })
                }
            </div>
            <div className={classes.base}>
                {
                    Array.from(new Array(13)).map((n, index) => {
                        let ColorEVG = Color('orange').Bright('hex', -index * 5)
                        return (
                            <div
                                key={index}
                                className={classes.tone}
                                style={{
                                    backgroundColor: ColorEVG,
                                    color: Color(ColorEVG).Contrast(),
                                }}
                            >
                                {-index * 5}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withStyles(styles)(brightChange)