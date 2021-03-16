import React from 'react';
import { Scroll } from '@evg-b/evg-ui';

const styles = {
    width: '100px',
    height: '100px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
}

const ScrollBase = () => {
    const blockScroll = (key) => <div key={key} style={styles}>{key}</div>
    return (
        <Scroll
            autoHide={false}
            style={{ width: 200, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}
        >
            {
                Array.from(new Array(5)).map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollBase