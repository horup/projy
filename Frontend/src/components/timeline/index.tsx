import * as Model from '../../model';
import * as React from 'react';
import * as rest from 'rest';
import * as VIS from 'vis';
import {Button, ButtonGroup, Form, FormGroup, Input, Label} from 'reactstrap';


export class Timeline extends React.Component<{app:Model.AppState}, {}>
{
    timeline:VIS.Timeline;
    ref:HTMLElement = null;
    constructor(props:any)
    {
        super(props);
        this.state = {projects:[], markdown:""};
    }

    componentDidMount()
    {
        this.timeline = new VIS.Timeline(this.ref, [], {});
        this.refresh();
    }

    componentDidUpdate()
    {
        this.refresh();
    }

    refresh()
    {
        let data = [];
        for (let project of this.props.app.projects)
        {
            for (let ev of project.events)
            {
                let content = "<b>" + ev.name + "</b>" + "<br/>";
                content += "<b>" + project.name + "</b><br/>";
                content += ev.description.replace(/\n/g, "<br/>");
                let current = {id:data.length, content:content, start:ev.timestamp, style:"text-align: left"}
                data.push(current);
            }
        }

        this.timeline.setItems(data);
        this.timeline.fit();
        this.timeline.redraw();
    }

    render()
    {
        let test = "!234"
        return (
            <div>
                <div>
                    <div ref={(ref)=>this.ref = ref}/>
                </div>
            </div>
        )
    }
}
