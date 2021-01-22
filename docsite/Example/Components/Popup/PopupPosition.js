import React, { useRef } from 'react';
import { Button, Popup } from '@evg-b/evg-ui';

const PopupPosition = () => {
    const btn_ref = useRef()
    return (
        <>
            <Button ref={btn_ref} variant='outlined' style={{ width: 250, margin: 30 }} >Position</Button>
            <Popup open position='top' target={btn_ref}>
                top
            </Popup>
            <Popup open position='top-left' target={btn_ref}>
                top-left
            </Popup>
            <Popup open position='top-right' target={btn_ref}>
                top-right
            </Popup>
        </>
    )
}

export default PopupPosition