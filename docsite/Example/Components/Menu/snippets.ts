const snippets = {
  "MenuBase": "import type { MenuBaseProps } from './MenuBase.types'\n\nimport { withStyles } from '@evg-b/evg-ui'\n\nconst styles = {\n  base: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    '&>*': {\n      margin: '5px'\n    }\n  }\n}\nconst MenuBase = (props: MenuBaseProps) => {\n  const { classes } = props\n  return <div className={classes.base}>MenuBase</div>\n}\n\nMenuBase.displayName = 'MenuBase'\n\nexport default withStyles(styles)(MenuBase)\n"
}

export default snippets
