import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Badge, Form, Input, FormGroup, Button} from 'reactstrap';
import * as Model from '../../model';
export class Markdown extends React.Component<{app:Model.AppState}, {markdown:string}>
{
    textarea:HTMLTextAreaElement;


    componentDidUpdate(prevProps:{app:Model.AppState})
    {
        if (this.props.app.activeProject != prevProps.app.activeProject)
        {
            let markdown = "";
            let project = this.props.app.activeProject;
            if (project != null)
            {
                for (let ev of project.events)
                {
                    markdown += "#" + ev.name + "\r\n";
                    markdown += "##" + ev.timestamp + "\r\n";
                    markdown += ev.description + "\r\n";
                    markdown += "\r\n";
                }
            }

            this.setState({markdown:markdown});
            this.textarea.value = markdown; 
        }
    }

    render()
    {
        return (
            <div>
                <FormGroup>
                    <Input getRef={(ref)=>{this.textarea = ref as any}} style={{height:'512px'}} type="textarea" name="text" id="exampleText"/>
                </FormGroup>
                <Button color="info" onClick={()=>{}}>Save</Button>
            </div>
        )
    }
}