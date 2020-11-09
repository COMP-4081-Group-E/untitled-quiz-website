import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand href='/'>Quizzl</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button href='/create/quiz'>Create a Quiz</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;