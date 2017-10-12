/// <reference path="../../../Projy/Model/index.d.ts" />

export interface Project extends Projy.Model.Project
{

}

export interface Event extends Projy.Model.Event
{
    
}

export interface AppState
{
    projects:Project[];
    activeProject:Project;

    setActiveProject:(project:Project)=>any;
}
