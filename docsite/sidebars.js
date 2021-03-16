let APIdocs = require('./APIdocs')
module.exports = {
  someSidebar: {
    'Getting Started': [
      'GettingStarted/Installation',
      'GettingStarted/quick_start'
    ],
    Styles: [
      'Styles/Theme',
      'Styles/Color',
      'Styles/Palettes',
      'Styles/Elevation',
    ],
    Components: [
      'Components/All',
      'Components/AppBar',
      'Components/Avatar',
      'Components/Badge',
      'Components/Button',
      'Components/ButtonGroup',
      'Components/Carousel',
      'Components/Checkbox',
      'Components/Icon',
      'Components/Image',
      'Components/Lightbox',
      'Components/List',
      'Components/Loader',
      {
        type: 'category',
        label: 'LiveBackground',
        items: ['Components/Cubes'],
      },
      'Components/Modal',
      'Components/Popup',
      'Components/Radio',
      'Components/Ripple',
      'Components/Scroll',
      'Components/Skeleton',
      'Components/Select',
      'Components/Switch',
      'Components/TextField',
      'Components/Tooltip',
      'Components/TouchDriver',
    ],
    API: APIdocs
  },
};
