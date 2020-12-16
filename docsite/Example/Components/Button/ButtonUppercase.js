import React from 'react';
import { Button } from '@evg-b/evg-ui';

const ButtonUppercase = () => {
    return (
        <Button
            variant='contained'
            color='--ifm-color-primary'
            uppercase={false}
        >
            Uppercase
        </Button>
    )
}

export default ButtonUppercase