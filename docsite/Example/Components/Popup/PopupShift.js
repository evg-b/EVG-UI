import React, { useRef } from 'react';
import { Button, Popup } from '@evg-b/evg-ui';

const sPop = {
    backgroundColor: 'rgba(211,211,211,0.7)',
    borderRadius: 6,
    padding: 10
}

const PopupShift = () => {
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' style={{ width: 250, margin: 30 }} >Position</Button>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='top'
            >
                0
            </Popup>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='left'
                shift={10}
            >
                10
            </Popup>
            <Popup
                open
                target={btn_ref}
                style={sPop}
                position='right'
                shift={-15}
            >
                -15
            </Popup>
        </>
    )
}

export default PopupShift