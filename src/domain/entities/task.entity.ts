import Entity from "./entity";
import TaskStatus, {TodoStatus} from "@/domain/entities/task-status";
import UniqueEntityID from "@/domain/entities/unique-entity-id";

interface Props {
    name: string;
    description: string;
    status?: TaskStatus;
    userId: UniqueEntityID;
    projectId: UniqueEntityID;
}

export default class Task extends Entity<Props> {
    constructor(props: Props, id?: string) {
        super(props, id);
        if (!props.status) {
            this.props.status = new TodoStatus(this.updateStatus.bind(this));
        }
    }

    public start() {
        if (!this.props.status) {
            throw new Error("Task status is not defined");
        }
        this.props.status?.started();
    }

    public pause() {
        if (!this.props.status) {
            throw new Error("Task status is not defined");
        }
        this.props.status?.paused();
    }

    public done() {
        if (!this.props.status) {
            throw new Error("Task status is not defined");
        }
        this.props.status?.done();
    }

    public cancel() {
        if (!this.props.status) {
            throw new Error("Task status is not defined");
        }
        this.props.status?.cancelled();
    }

    public overdue() {
        if (!this.props.status) {
            throw new Error("Task status is not defined");
        }
        this.props.status?.overdue();
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    get status(): string | undefined {
        return this.props.status?.value;
    }

    protected updateStatus(newStatus: TaskStatus): void {
        this.props.status = newStatus;
    }

}
