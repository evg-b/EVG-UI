import React from 'react';
import { Button, ButtonGroup } from '@evg-b/evg-ui';

const ButtonGroupUppercase = () => {
    return (
        <ButtonGroup uppercase={false}>
            <Button>Text 1</Button>
            <Button>Text 2</Button>
            <Button>Text 3</Button>
        </ButtonGroup>
    )
}

export default ButtonGroupUppercase