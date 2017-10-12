import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Badge} from 'reactstrap';
import * as Model from '../../model';
export default class Header extends React.Component<{appState:Model.AppState}, any>
{
    render()
    {
        return (
            <div>
                <h3>Projy</h3>
            </div>
        )
    }
}