import * as Model from './model';
import * as React from 'react';
import { Container} from 'reactstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import { EditView } from './views/edit';
import Header from './components/header';
import * as rest from 'rest';

export default class App extends React.Component<any, Model.AppState>
{
    constructor(props:any)
    {
        super(props);
        this.state = {projects:[], activeProject:null, setActiveProject:(p)=>this.setActiveProject(p)};
    }

    setActiveProject(project:Model.Project)
    {
        this.setState({activeProject:project});
    }

    componentDidMount()
    {
        rest('/api/projects').then((resp) => {
            let data = JSON.parse(resp.entity) as Array<any>;
            this.setState({projects:data});
        });
    }

    render() {
        return (
            <Container fluid={true}>
                <Header appState={this.state}/>
                <Route exact path="/" render={()=> <EditView app = {this.state}/>}/>
            </Container>
        )
    }
}