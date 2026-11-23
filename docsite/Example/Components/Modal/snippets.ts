const sources = {
  "ModalBase.tsx": "import { useState } from 'react'\nimport { Modal, Button, IconButton, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from './Modal.styled'\n\nconst ModalBase = () => {\n  const [open, setOpen] = useState(false)\n  const handleOpen = () => {\n    setOpen(true)\n  }\n  const handleClose = () => {\n    setOpen(false)\n  }\n  const ModalBlock = (\n    <Styled.Dialog>\n      <Styled.CloseButton as={IconButton} onClick={handleClose}>\n        <Icon name=\"Close\" />\n      </Styled.CloseButton>\n      modal\n    </Styled.Dialog>\n  )\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={handleOpen}>\n        Open Modal\n      </Button>\n      <Styled.Backdrop\n        as={Modal}\n        open={open}\n        onClose={handleClose}>\n        {ModalBlock}\n      </Styled.Backdrop>\n    </div>\n  )\n}\n\nModalBase.displayName = 'ModalBase'\n\nexport default ModalBase\n",
  "Modal.styled.ts": "import styled from 'styled-components'\n\nexport const Backdrop = styled.div`\n  background-color: rgba(0, 0, 0, 0.6);\n`\n\nexport const Dialog = styled.div`\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n  border-radius: 20px;\n  background-color: ${({ theme }) => theme.surface};\n  color: ${({ theme }) => theme.onSurface};\n`\n\nexport const CloseButton = styled.button`\n  position: absolute;\n  top: 0;\n  right: 0;\n`\n\nexport const Option = styled.div`\n  display: flex;\n  align-items: center;\n`\n",
  "ModalEsc.tsx": "import type { ChangeEvent } from 'react'\n\nimport { useState } from 'react'\nimport { Modal, Button, IconButton, Switch, Icon } from '@evg-b/evg-ui'\n\nimport * as Styled from './Modal.styled'\n\nconst ModalEsc = () => {\n  const [open, setOpen] = useState(false)\n  const [isEsc, setIsEsc] = useState(false)\n\n  const handleOpen = () => {\n    setOpen(true)\n  }\n  const handleClose = () => {\n    setOpen(false)\n  }\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setIsEsc(e.target.checked)\n  }\n  const ModalBlock = (\n    <Styled.Dialog>\n      <Styled.CloseButton as={IconButton} onClick={handleClose}>\n        <Icon name=\"Close\" />\n      </Styled.CloseButton>\n      modal\n    </Styled.Dialog>\n  )\n  return (\n    <div>\n      <Styled.Option>\n        <label htmlFor=\"labelIsEsc\">isEsc</label>\n        <Switch onChange={handleChange} id=\"labelIsEsc\" color=\"primary\" />\n      </Styled.Option>\n      <Button variant=\"contained\" onClick={handleOpen}>\n        Open Modal\n      </Button>\n      <Styled.Backdrop\n        as={Modal}\n        open={open}\n        onClose={handleClose}\n        isEsc={isEsc}>\n        {ModalBlock}\n      </Styled.Backdrop>\n    </div>\n  )\n}\n\nModalEsc.displayName = 'ModalEsc'\n\nexport default ModalEsc\n"
}

const snippets = {
  ModalBase: {
    "ModalBase.tsx": sources["ModalBase.tsx"],
    "Modal.styled.ts": sources["Modal.styled.ts"]
  },
  ModalEsc: {
    "ModalEsc.tsx": sources["ModalEsc.tsx"],
    "Modal.styled.ts": sources["Modal.styled.ts"]
  }
}

export default snippets
