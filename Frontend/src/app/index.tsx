import * as React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DatetimePicker } from '../extensions';
import { HashRouter, Route, Link } from 'react-router-dom';
import { TimelineView, FormsView, ChartsView } from './views';
import Header from './header';

export default class App extends React.Component<any, any>
{
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={TimelineView} />
            </div>
        )
    }
}