export default {ScrollAutoHide: `import React from 'react';
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

const ScrollAutoHide = () => {
    const blockScroll = (key) => <div key={key} style={styles}>{key}</div>
    return (
        <Scroll
            autoHide={true}
            style={{ width: 200, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}
        >
            {
                Array.from(new Array(25)).map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollAutoHide`,
ScrollBase: `import React from 'react';
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

export default ScrollBase`,
ScrollMaxHeight: `import React, { useState } from 'react';
import { Scroll, Button } from '@evg-b/evg-ui';

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
    const blockScroll = (key) => <div key={key} style={styles}>{key}</div>
    const handleClick = (mod) => {
        mod ? setCount(count + 1) : setCount(count - 1 < 0 ? 0 : count - 1)
    }
    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <Button color="primary" onClick={() => handleClick(true)}>+</Button>
                <Button color="primary" onClick={() => handleClick(false)}>-</Button>
            </div>
            <Scroll
                autoHide={false}
                style={{ width: 200, maxHeight: 400, backgroundColor: 'rgba(0,0,0,.1)' }}
            >
                {
                    Array.from(new Array(count)).map((n, i) =>
                        blockScroll(i + 1)
                    )
                }
            </Scroll>
        </div>
    )
}

export default ScrollBase`,
ScrollTrackSizeAndColor: `import React from 'react';
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

const ScrollTrackSizeAndColor = () => {
    const blockScroll = (key) => <div key={key} style={styles}>{key}</div>
    return (
        <Scroll
            autoHide={false}
            trackSize={20}
            color="purple700"
            style={{ width: 300, height: 400, backgroundColor: 'rgba(0,0,0,.1)' }}
        >
            {
                Array.from(new Array(25)).map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollTrackSizeAndColor`,
ScrollVerticalAndHorizontal: `import React from 'react';
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
                Array.from(new Array(25)).map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollVerticalAndHorizontal`,
}