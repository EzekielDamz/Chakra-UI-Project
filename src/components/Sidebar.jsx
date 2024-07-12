import { List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        {/* <Link as={ReactRouterLink} to="/"> */}
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        {/* </Link> */}
      </ListItem>
      <ListItem>
        {/* <Link as={ReactRouterLink} to="/create"> */}
          <ListIcon as={EditIcon} color="white" />
          New Task
        {/* </Link> */}
      </ListItem>
      <ListItem>
        {/* <Link as={ReactRouterLink} to="/profile"> */}
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        {/* </Link> */}
      </ListItem>
    </List>
  );
};

export default Sidebar;
