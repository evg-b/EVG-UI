const sources = {
  "ListActions.tsx": "import { Checkbox, List, ListItem, ListItemText, ListItemAction } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']\n\nconst ListAction = () => {\n  return (\n    <Styled.Row>\n      <Styled.Items as={List}>\n        {Items.map((item) => (\n          <ListItem key={item}>\n            <ListItemAction position=\"start\">\n              <Checkbox defaultChecked />\n            </ListItemAction>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n      <Styled.Items as={List}>\n        {Items.map((item) => (\n          <ListItem key={item}>\n            <ListItemAction>\n              <Checkbox defaultChecked />\n            </ListItemAction>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListAction.displayName = 'ListAction'\n\nexport default ListAction\n",
  "List.styled.ts": "import styled from 'styled-components'\n\nexport { Row } from '../../ExampleLayout.styled'\n\nexport const Items = styled.div`\n  width: 300px;\n  max-width: 100%;\n`\n\nexport const ScrollableItems = styled(Items)`\n  height: 400px;\n`\n",
  "../../ExampleLayout.styled.ts": "import styled from 'styled-components'\n\nexport const Wrap = styled.div`\n  display: flex;\n  flex-wrap: wrap;\n`\n\nexport const Row = styled(Wrap)`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const SpaciousRow = styled(Wrap)`\n  & > * {\n    margin: 10px;\n  }\n`\n\nexport const InlineGroup = styled.div`\n  & > * {\n    margin: 5px;\n  }\n`\n\nexport const Column = styled(InlineGroup)`\n  display: flex;\n  flex-direction: column;\n`\n\nexport const CenteredColumn = styled(Column)`\n  align-items: center;\n`\n\nexport const AppBarColumn = styled.div`\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  align-items: center;\n`\n\nexport const FieldGroups = styled(Wrap)`\n  & > *,\n  & > div > * {\n    margin: 10px;\n  }\n`\n",
  "ListAvatar.tsx": "import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = [\n  'Captain Shepard',\n  'Garrus Vakarian',\n  'Tali’Zorah nar Rayya',\n  'Liara T’Soni',\n  'Ashley Williams',\n  'Urdnot Wrex'\n]\n\nconst ListAvatar = () => {\n  return (\n    <Styled.Row>\n      <Styled.Items as={List}>\n        {Items.map((item) => (\n          <ListItem key={item} button>\n            <ListItemAvatar>\n              <Avatar />\n            </ListItemAvatar>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListAvatar.displayName = 'ListAvatar'\n\nexport default ListAvatar\n",
  "ListBase.tsx": "import { List, ListItem, ListItemText } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']\n\nconst ListBase = () => {\n  return (\n    <Styled.Row>\n      <Styled.Items as={List}>\n        {Items.map((item) => (\n          <ListItem key={item} button>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListBase.displayName = 'ListBase'\n\nexport default ListBase\n",
  "ListColor.tsx": "import { List, ListItem, ListItemText } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']\n\nconst ListColor = () => {\n  return (\n    <Styled.Row>\n      <Styled.Items as={List} color=\"primary\">\n        {Items.map((item) => (\n          <ListItem key={item} button>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListColor.displayName = 'ListColor'\n\nexport default ListColor\n",
  "ListHeight.tsx": "import { List, ListItem, ListItemText } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = [\n  'Captain Shepard',\n  'Garrus Vakarian',\n  'Tali’Zorah nar Rayya',\n  'Liara T’Soni',\n  'Ashley Williams',\n  'Urdnot Wrex',\n  'Jacob Taylor',\n  'Jack',\n  'Legion',\n  'Miranda Lawson',\n  'Mordin Solus',\n  'Morinth',\n  'Samara',\n  'Thane Krios',\n  'EDI',\n  'Javik',\n  'Joker',\n  'The Illusive Man',\n  'David Edvard Anderson'\n]\n\nconst ListHeight = () => {\n  return (\n    <Styled.Row>\n      <Styled.ScrollableItems as={List} autoHide={false} color=\"primary\">\n        {Items.map((item) => (\n          <ListItem key={item} button>\n            <ListItemText>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.ScrollableItems>\n    </Styled.Row>\n  )\n}\n\nListHeight.displayName = 'ListHeight'\n\nexport default ListHeight\n",
  "ListMeta.tsx": "import {\n  Avatar,\n  Badge,\n  List,\n  ListItem,\n  ListItemText,\n  ListItemAvatar\n} from '@evg-b/evg-ui'\nimport useBaseUrl from '@docusaurus/useBaseUrl'\n\nimport * as Styled from './List.styled'\n\nconst ListMeta = () => {\n  const Users = [\n    {\n      avatar: useBaseUrl('/source/Avatar/11.jpg'),\n      name: 'not_yet_King',\n      text: 'food!! food!! food!! food!! food!! food!! food!! food!!',\n      time: '12:35',\n      count: 10\n    },\n    {\n      avatar: useBaseUrl('/source/Avatar/2.jpg'),\n      name: 'Umaru-chan',\n      text: 'go ps4?',\n      time: '00:11',\n      count: 1\n    },\n    {\n      avatar: useBaseUrl('/source/Avatar/10.jpg'),\n      name: 'Rick',\n      text: 'oops it seems we have a problem',\n      time: '20:01',\n      count: 123\n    },\n    {\n      avatar: useBaseUrl('/source/Avatar/12.jpg'),\n      name: 'skrip skrip',\n      text: 'me32#hr 23oi_e!! r$3;oq',\n      time: '20:00?',\n      count: 0\n    }\n  ]\n  return (\n    <Styled.Row>\n      <Styled.Items as={List}>\n        {Users.map((user) => (\n          <ListItem key={user.name} button>\n            <ListItemAvatar>\n              <Avatar src={user.avatar} />\n            </ListItemAvatar>\n            <ListItemText\n              secondaryText={user.text}\n              meta={user.time}\n              secondaryMeta={<Badge ripe count={user.count} />}>\n              {user.name}\n            </ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListMeta.displayName = 'ListMeta'\n\nexport default ListMeta\n",
  "ListSecondaryText.tsx": "import { List, ListItem, ListItemText } from '@evg-b/evg-ui'\n\nimport * as Styled from './List.styled'\n\nconst Items = ['Notifications', 'Security', 'Storage', 'Settings', 'Folders']\n\nconst ListSecondaryText = () => {\n  return (\n    <Styled.Row>\n      <Styled.Items as={List}>\n        {Items.map((item) => (\n          <ListItem key={item} button>\n            <ListItemText secondaryText={'secondaryText'}>{item}</ListItemText>\n          </ListItem>\n        ))}\n      </Styled.Items>\n    </Styled.Row>\n  )\n}\n\nListSecondaryText.displayName = 'ListSecondaryText'\n\nexport default ListSecondaryText\n"
}

const snippets = {
  ListActions: {
    "ListActions.tsx": sources["ListActions.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListAvatar: {
    "ListAvatar.tsx": sources["ListAvatar.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListBase: {
    "ListBase.tsx": sources["ListBase.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListColor: {
    "ListColor.tsx": sources["ListColor.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListHeight: {
    "ListHeight.tsx": sources["ListHeight.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListMeta: {
    "ListMeta.tsx": sources["ListMeta.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  },
  ListSecondaryText: {
    "ListSecondaryText.tsx": sources["ListSecondaryText.tsx"],
    "List.styled.ts": sources["List.styled.ts"],
    "../../ExampleLayout.styled.ts": sources["../../ExampleLayout.styled.ts"]
  }
}

export default snippets
