import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Badge, ButtonGroup, Button, FormGroup} from 'reactstrap';
import * as Model from '../../model';
export class Filter extends React.Component<{appState:Model.AppState}, any>
{
    render()
    {
        return (
            <div>
                <FormGroup>
                    <ButtonGroup>
                        {this.props.appState.projects.map((p, i) =>
                        {
                            return (
                                <Button key={i} color="primary" onClick={() => this.props.appState.setActiveProject(p)} active={this.props.appState.activeProject == p}>{p.name}</Button>
                            )
                        })}
                    </ButtonGroup>
                </FormGroup>
            </div>
        )
    }
}