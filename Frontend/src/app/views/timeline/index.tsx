import * as React from 'react';
import * as rest from 'rest';
import * as VIS from 'vis';

export class TimelineView extends React.Component<any, {projects:any[]}>
{
    timeline:VIS.Timeline;
    ref:HTMLElement = null;
    constructor(props:any)
    {
        super(props);
        this.state = {projects:[]};
    }

    componentDidMount()
    {
        this.timeline = new VIS.Timeline(this.ref, [], {});
        this.refresh();
        rest('/api/projects').then((resp) => {
            let data = JSON.parse(resp.entity) as Array<any>;
            this.setState({projects:data});
            this.refresh();
        });
    }

    componentDidUpdate()
    {
        this.refresh();
    }

    refresh()
    {
        let data = [];
        for (let project of this.state.projects)
        {
            for (let ev of project.events)
            {
                let content = "<b>" + ev.name + "</b>";
                content += "<br/>";
                content += ev.description;
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
        return (
            <div>
                <div>
                    {this.state.projects.map((v, i)=>
                    {
                        return <span key={i}>{v.name} </span>
                    })}
                </div>
                <div ref={(ref)=>this.ref = ref}/>
            </div>
        )
    }
}
