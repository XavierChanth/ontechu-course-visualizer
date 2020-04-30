import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const Navigation = (props) => {
  return <div>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/tree">Prereq. Tree</NavLink>
      <NavLink href="mailto:xavier.chanthavong@gmail.com">Contact Me</NavLink>
    </Nav>
  </div>
}

export default Navigation;
