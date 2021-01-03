import React, { useState } from 'react';
import { Scroll, Button, ButtonGroup, TextField } from '@evg-b/evg-ui';

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
    const [count, setCount] = useState(2)
    const blockScroll = (props) => {
        return <div key={props} style={styles}>{props}</div>
    }
    const handleClick = (mod) => {
        mod ? setCount(count + 1) : setCount(count - 1 < 0 ? 0 : count - 1)
    }

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <Button color="--ifm-color-primary" onClick={() => handleClick(true)}>+</Button>
                <Button color="--ifm-color-primary" onClick={() => handleClick(false)}>-</Button>
            </div>
            <Scroll
                autoHide={false}
                style={{ width: 200, maxHeight: 400, backgroundColor: 'rgba(0,0,0,.1)' }}
            >
                {
                    [...Array(count)].map((n, i) =>
                        blockScroll(i + 1)
                    )
                }
            </Scroll>
        </div>
    )
}

export default ScrollBase