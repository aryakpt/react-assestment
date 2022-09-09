import React from 'react';
import { Button, Menu as M, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const Menu = ({ label, menus, type = 'links' }) => {
  return (
    <M>
      <MenuButton
        background='transparent'
        color='#E9AF53'
        fontSize='14px'
        as={Button}
        rightIcon={<img src='/icons/ic_chevron-down.svg' alt='chevron down' />}
      >
        {label}
      </MenuButton>
      <MenuList zIndex='3'>
        {menus.map((menu) => (
          <MenuItem key={menu.id}>
            {type === 'links' ? (
              <a href={menu?.href} style={{ fontSize: '14px' }}>
                {menu.label}
              </a>
            ) : (
              <button onClick={menu?.onClick} style={{ fontSize: '14px' }}>
                {menu.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </M>
  );
};

export default Menu;
