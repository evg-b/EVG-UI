export default {
'ScrollAutoHide' : `import React from 'react';
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
    const blockScroll = (props) => {
        return <div key={props} style={styles}>{props}</div>
    }
    return (
        <Scroll
            autoHide={false}
            width={200}
            height={400}
        >
            {
                [...Array(25)].map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollAutoHide`,'ScrollBase' : `import React from 'react';
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
    const blockScroll = (props) => {
        return <div key={props} style={styles}>{props}</div>
    }
    return (
        <Scroll
            width={200}
            height={400}
        >
            {
                [...Array(25)].map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollBase`,'ScrollTrackSizeAndColor' : `import React from 'react';
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
    const blockScroll = (props) => {
        return <div key={props} style={styles}>{props}</div>
    }
    return (
        <Scroll
            autoHide={false}
            trackSize={20}
            color="purple700"
            width={300}
            height={400}
        >
            {
                [...Array(25)].map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollTrackSizeAndColor`,'ScrollVerticalAndHorizontal' : `import React from 'react';
import { Scroll } from '@evg-b/evg-ui';

const styles = {
    width: '150%',
    height: '100px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
}
const ScrollVerticalAndHorizontal = () => {
    const blockScroll = (props) => {
        return <div key={props} style={styles}>{props}</div>
    }
    return (
        <Scroll
            color="#FFFFFF"
            width={400}
            height={400}
        >
            {
                [...Array(25)].map((n, i) =>
                    blockScroll(i + 1)
                )
            }
        </Scroll>
    )
}

export default ScrollVerticalAndHorizontal`,
}