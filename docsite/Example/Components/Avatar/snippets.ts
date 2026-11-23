const sources = {
  "AvatarBase.tsx": "import { Avatar } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarBase = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar src={useBaseUrl('/source/Avatar/1.jpg')} />\n      <Avatar />\n    </Styled.Wrap>\n  )\n}\n\nAvatarBase.displayName = 'AvatarBase'\n\nexport default AvatarBase\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "AvatarColor.tsx": "import { Avatar } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarColor = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar alt=\"evg b\" />\n      <Avatar alt=\"Alira\" color=\"primary\" />\n      <Avatar alt=\"Rick\" color=\"success\" />\n    </Styled.Wrap>\n  )\n}\n\nAvatarColor.displayName = 'AvatarColor'\n\nexport default AvatarColor\n",
  "AvatarGroupAndSize.tsx": "import { Avatar, AvatarGroup } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarGroupAndSize = () => {\n  return (\n    <Styled.SpaciousRow>\n      <AvatarGroup size={25} max={3}>\n        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />\n      </AvatarGroup>\n      <AvatarGroup max={3}>\n        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />\n      </AvatarGroup>\n      <AvatarGroup size={55} max={3}>\n        <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/12.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/10.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} />\n        <Avatar src={useBaseUrl('/source/Avatar/9.jpg')} />\n      </AvatarGroup>\n    </Styled.SpaciousRow>\n  )\n}\n\nAvatarGroupAndSize.displayName = 'AvatarGroupAndSize'\n\nexport default AvatarGroupAndSize\n",
  "AvatarMultiple.tsx": "import { Avatar } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarMultiple = () => {\n  return (\n    <Styled.SpaciousRow>\n      <Avatar\n        size={55}\n        srcs={[\n          useBaseUrl('/source/Avatar/3.jpg'),\n          useBaseUrl('/source/Avatar/12.jpg'),\n          useBaseUrl('/source/Avatar/11.jpg'),\n          useBaseUrl('/source/Avatar/10.jpg')\n        ]}\n      />\n      <Avatar\n        size={55}\n        srcs={[\n          useBaseUrl('/source/Avatar/3.jpg'),\n          useBaseUrl('/source/Avatar/12.jpg'),\n          useBaseUrl('/source/Avatar/11.jpg')\n        ]}\n      />\n      <Avatar\n        size={55}\n        srcs={[\n          useBaseUrl('/source/Avatar/3.jpg'),\n          useBaseUrl('/source/Avatar/12.jpg')\n        ]}\n      />\n      <Avatar size={55} srcs={[useBaseUrl('/source/Avatar/3.jpg')]} />\n    </Styled.SpaciousRow>\n  )\n}\n\nAvatarMultiple.displayName = 'AvatarMultiple'\n\nexport default AvatarMultiple\n",
  "AvatarNotImage.tsx": "import { Avatar } from '@evg-b/evg-ui'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarNotImage = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar alt=\"evg b\" />\n      <Avatar />\n      <Avatar alt=\"Alira\" altMax={2} />\n    </Styled.Wrap>\n  )\n}\n\nAvatarNotImage.displayName = 'AvatarNotImage'\n\nexport default AvatarNotImage\n",
  "AvatarSize.tsx": "import { Avatar } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarSize = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={20} />\n      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={30} />\n      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} />\n      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={50} />\n      <Avatar src={useBaseUrl('/source/Avatar/3.jpg')} size={60} />\n    </Styled.Wrap>\n  )\n}\n\nAvatarSize.displayName = 'AvatarSize'\n\nexport default AvatarSize\n",
  "AvatarStatus.tsx": "import { Avatar } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarStatus = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar src={useBaseUrl('/source/Avatar/7.jpg')} />\n      <Avatar src={useBaseUrl('/source/Avatar/4.jpg')} status />\n    </Styled.Wrap>\n  )\n}\n\nAvatarStatus.displayName = 'AvatarStatus'\n\nexport default AvatarStatus\n",
  "AvatarStatusColor.tsx": "import { Avatar } from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from '../../ExampleLayout.styled'\n\nconst AvatarStatusColor = () => {\n  return (\n    <Styled.Wrap>\n      <Avatar\n        src={useBaseUrl('/source/Avatar/1.jpg')}\n        status\n        statusColor=\"default\"\n      />\n      <Avatar\n        src={useBaseUrl('/source/Avatar/1.jpg')}\n        status\n        statusColor=\"primary\"\n      />\n      <Avatar\n        src={useBaseUrl('/source/Avatar/1.jpg')}\n        status\n        statusColor=\"warn\"\n      />\n      <Avatar\n        src={useBaseUrl('/source/Avatar/1.jpg')}\n        status\n        statusColor=\"success\"\n      />\n      <Avatar\n        src={useBaseUrl('/source/Avatar/1.jpg')}\n        status\n        statusColor=\"fail\"\n      />\n    </Styled.Wrap>\n  )\n}\n\nAvatarStatusColor.displayName = 'AvatarStatusColor'\n\nexport default AvatarStatusColor\n"
}

const snippets = {
  AvatarBase: {
    "AvatarBase.tsx": sources["AvatarBase.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarColor: {
    "AvatarColor.tsx": sources["AvatarColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarGroupAndSize: {
    "AvatarGroupAndSize.tsx": sources["AvatarGroupAndSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarMultiple: {
    "AvatarMultiple.tsx": sources["AvatarMultiple.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarNotImage: {
    "AvatarNotImage.tsx": sources["AvatarNotImage.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarSize: {
    "AvatarSize.tsx": sources["AvatarSize.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarStatus: {
    "AvatarStatus.tsx": sources["AvatarStatus.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  AvatarStatusColor: {
    "AvatarStatusColor.tsx": sources["AvatarStatusColor.tsx"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
