import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, MenuButton } from '../../types/types'

type DrawerProps = {
    menuItems: MenuItem[]
    menuButtons: MenuButton[]
}

const Drawer = ({ menuItems, menuButtons }: DrawerProps) => {
  const [drawerStatus, setDrawerStatus] = useState<boolean>(false)
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerStatus(open);
    };

  const list = () => (
    <Box
      sx={{ width: '250px', padding: '0 20px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ width: '100%', position: 'absolute', bottom: '20px', left: '50%', transform: 'translate(-50%, 0)'}}>
        {menuButtons.map(button => <button key={button.id} className={button.className}>{button.text}</button>)}
      </List>
    </Box>
  );

  return (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2, ...(drawerStatus && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor='right'
            open={drawerStatus}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </>
  );
}

export default Drawer;