import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink} from 'reactstrap';
export default class Header extends React.Component<any, any>
{
    render()
    {
        return (
            <Nav>
                <NavItem>
                    <NavLink href="#/">Timeline</NavLink>
                </NavItem>
            </Nav>
        )
    }
}