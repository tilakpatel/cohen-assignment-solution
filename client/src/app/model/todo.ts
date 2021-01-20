export class Todo {
    constructor(
        public id: number,
        public description: string,
        public dueDate: string,
        public priority: number,
        public done?: boolean,
    ) { }
}
