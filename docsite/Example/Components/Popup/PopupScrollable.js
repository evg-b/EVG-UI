import React, { useRef } from 'react';
import { withStyles } from 'react-jss';
import { Button, Popup, Scroll } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const TooltipBase = (props) => {
    const { classes } = props
    const btn_ref = useRef()
    return (
        // <>
        //     <Button ref={btn_ref} variant='outlined' >Popup</Button>
        //     <Popup target={btn_ref}>
        //         Popup
        //     </Popup>
        // </>
        <Scroll
            autoHide={false}
            style={{ width: 200, maxHeight: 200, backgroundColor: 'rgba(0,0,0,.1)' }}
        >
            {
                // [...Array(25)].map((n, i) =>
                //     blockScroll(i + 1)
                // )

            }
            <div style={{ height: 600, width: 600 }}>
                <Button ref={btn_ref} variant='outlined' style={{ margin: '75px 0 0 60px' }}>Popup</Button>
                <Popup open target={btn_ref}>
                    Popup
                </Popup>

            </div>
        </Scroll>
    )
}

export default withStyles(styles)(TooltipBase)