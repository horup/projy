
declare namespace Projy.Model {
	interface Event {
		description: string;
		id: number;
		name: string;
		project: Projy.Model.Project;
		timestamp: Date;
	}
	interface Project {
		color: string;
		events: Projy.Model.Event[];
		id: number;
		name: string;
	}
}
