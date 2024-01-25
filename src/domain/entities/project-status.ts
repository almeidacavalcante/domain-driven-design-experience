import Project from "./project.entity";


type UpdateStatusCallback = { (newStatus: ProjectStatus): void };

export default abstract class ProjectStatus {
    abstract value: string;

    constructor(protected readonly updateStatusCallback: UpdateStatusCallback) {
    }

    abstract start(): void;
    abstract overdue(): void;
    abstract complete(): void;
    abstract cancel(): void;
}

export class StartedStatus extends ProjectStatus {
    value = "started";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    start(): void {
        throw new Error("Project already started");
    }

    overdue(): void {
        this.updateStatusCallback(new OverdueStatus(this.updateStatusCallback));
    }

    complete(): void {
        this.updateStatusCallback(new CompletedStatus(this.updateStatusCallback));
    }

    cancel(): void {
        this.updateStatusCallback(new CancelledStatus(this.updateStatusCallback));
    }
}

export class OverdueStatus extends ProjectStatus {
    value = "overdue";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    start(): void {
        throw new Error("Project already started");
    }

    overdue(): void {
        throw new Error("Project already overdue");
    }

    complete(): void {
        this.updateStatusCallback(new CompletedStatus(this.updateStatusCallback));
    }

    cancel(): void {
        this.updateStatusCallback(new CancelledStatus(this.updateStatusCallback));
    }
}

export class CompletedStatus extends ProjectStatus {
    value = "completed";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    start(): void {
        throw new Error("Project already completed");
    }

    overdue(): void {
        throw new Error("Project already completed");
    }

    complete(): void {
        throw new Error("Project already completed");
    }

    cancel(): void {
        throw new Error("Project already completed");
    }
}

export class CancelledStatus extends ProjectStatus {
    value = "cancelled";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    start(): void {
        throw new Error("Project already cancelled");
    }

    overdue(): void {
        throw new Error("Project already cancelled");
    }

    complete(): void {
        throw new Error("Project already cancelled");
    }

    cancel(): void {
        throw new Error("Project already cancelled");
    }
}

export class ProjectStatusFactory {
    static create(type: string, updateStatusCallback: UpdateStatusCallback): ProjectStatus {
        if (type === "started") return new StartedStatus(updateStatusCallback);
        if (type === "overdue") return new OverdueStatus(updateStatusCallback);
        if (type === "completed") return new CompletedStatus(updateStatusCallback);
        if (type === "cancelled") return new CancelledStatus(updateStatusCallback);
        throw new Error("Invalid project status");
    }
}
