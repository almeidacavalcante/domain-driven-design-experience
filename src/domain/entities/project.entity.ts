import Entity from "./entity";
import Task from "./task.entity";
import Tag from "./tag.entity";
import ProjectStatus, {
  StartedStatus
} from "./project-status";
import UniqueEntityID from "@/domain/entities/unique-entity-id";

interface Props {
  title: string;
  description: string;
  status?: ProjectStatus;
  userId: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date;
  deadline: Date;
  tasks: Task[];
  tags: Tag[];
}

export default class Project extends Entity<Props> {
  constructor(props: Props, id?: string) {
    super(props, id);
    if (!props.status) {
      // TODO: I'm going to write about this and why I did it this way tomorrow 24/01/2024
      this.props.status = new StartedStatus(this.updateStatus.bind(this));
    }
  }

  protected updateStatus(newStatus: ProjectStatus): void {
    this.props.status = newStatus;
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get status(): string {
    if (!this.props.status) {
      throw new Error("Project status is not defined");
    }
    return this.props.status.value;
  }

  public finish() {
    this.props.status?.complete();
    this.props.updatedAt = new Date();
  }

  public overdue() {
    this.props.status?.overdue();
    this.props.updatedAt = new Date();
  }
}
