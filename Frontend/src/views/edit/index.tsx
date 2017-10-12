import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Badge, Row, Col} from 'reactstrap';
import * as Model from '../../model';
import {Filter} from '../../components/filter';
import {Markdown} from '../../components/markdown';
import {Timeline} from '../../components/timeline';

export class EditView extends React.Component<{app:Model.AppState}, {}>
{
    render()
    {
        return (
            <div>
                <Row>
                    <Col>
                        <Filter appState={this.props.app}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                    <h6>Edit Project</h6>
                    <Markdown app={this.props.app}/>
                    </Col>
                    <Col>
                    <h6>Timeline of all projects</h6>
                    <Timeline app={this.props.app}/>
                    </Col>
                </Row>
            </div>
        )
    }
}