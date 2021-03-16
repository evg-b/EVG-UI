import React from 'react';
import { Scroll } from '@evg-b/evg-ui';

const styles = {
    width: '800px',
    height: '100px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
}

const ScrollVerticalAndHorizontal = () => {
    const blockScroll = (key) => <div key={key} style={styles}>{key}</div>
    return (
        <Scroll
            color='#FFFFFF'
            style={{ width: 400, height: 400 }}
            autoHide={false}
        >
            {
                [...Array(25)].map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollVerticalAndHorizontal