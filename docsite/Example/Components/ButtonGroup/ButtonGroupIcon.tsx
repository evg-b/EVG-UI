import { Button, ButtonGroup, Icon } from '@evg-b/evg-ui'

const ButtonGroupIcon = () => {
  return (
    <ButtonGroup>
      <Button>
        <Icon name="Menu" />
      </Button>
      <Button>
        <Icon name="Close" />
      </Button>
      <Button>
        <Icon name="Notifications" />
      </Button>
    </ButtonGroup>
  )
}

ButtonGroupIcon.displayName = 'ButtonGroupIcon'

export default ButtonGroupIcon
