type UpdateStatusCallback = (status: TaskStatus) => void;

export default abstract class TaskStatus {
    abstract value: string;

    constructor(protected readonly updateStatusCallback: UpdateStatusCallback) {
    }

    abstract todo(): void;

    abstract started(): void;

    abstract paused(): void;

    abstract overdue(): void;

    abstract done(): void;

    abstract cancelled(): void;
}

export class TodoStatus extends TaskStatus {
    value = "todo";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        throw new Error("Task already todo");
    }

    started(): void {
        this.updateStatusCallback(new StartedStatus(this.updateStatusCallback));
    }

    paused(): void {
        throw new Error("Task is not started");
    }

    overdue(): void {
        throw new Error("Task is not started");
    }

    done(): void {
        throw new Error("Task is not started");
    }

    cancelled(): void {
        this.updateStatusCallback(new CancelledStatus(this.updateStatusCallback));
    }
}

export class StartedStatus extends TaskStatus {
    value = "started";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        this.updateStatusCallback(new TodoStatus(this.updateStatusCallback));
    }

    started(): void {
        throw new Error("Task already started");
    }

    paused(): void {
        this.updateStatusCallback(new PausedStatus(this.updateStatusCallback));
    }

    overdue(): void {
        this.updateStatusCallback(new OverdueStatus(this.updateStatusCallback));
    }

    done(): void {
        this.updateStatusCallback(new DoneStatus(this.updateStatusCallback));
    }

    cancelled(): void {
        this.updateStatusCallback(new CancelledStatus(this.updateStatusCallback));
    }
}

export class PausedStatus extends TaskStatus {
    value = "paused";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        throw new Error("Task is not started");
    }

    started(): void {
        this.updateStatusCallback(new StartedStatus(this.updateStatusCallback));
    }

    paused(): void {
        throw new Error("Task already paused");
    }

    overdue(): void {
        throw new Error("Task is not started");
    }

    done(): void {
        throw new Error("Task is not started");
    }

    cancelled(): void {
        throw new Error("Task is not started");
    }
}

export class OverdueStatus extends TaskStatus {
    value = "overdue";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        throw new Error("Task is not started");
    }

    started(): void {
        this.updateStatusCallback(new StartedStatus(this.updateStatusCallback));
    }

    paused(): void {
        throw new Error("Task is not started");
    }

    overdue(): void {
        throw new Error("Task already overdue");
    }

    done(): void {
        throw new Error("Task is not started");
    }

    cancelled(): void {
        throw new Error("Task is not started");
    }
}

export class DoneStatus extends TaskStatus {
    value = "done";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        throw new Error("Task is not started");
    }

    started(): void {
        throw new Error("Task is not started");
    }

    paused(): void {
        throw new Error("Task is not started");
    }

    overdue(): void {
        throw new Error("Task is not started");
    }

    done(): void {
        throw new Error("Task already done");
    }

    cancelled(): void {
        throw new Error("Task is not started");
    }
}

export class CancelledStatus extends TaskStatus {
    value = "cancelled";

    constructor(updateStatusCallback: UpdateStatusCallback) {
        super(updateStatusCallback);
    }

    todo(): void {
        throw new Error("Task is not started");
    }

    started(): void {
        throw new Error("Task is not started");
    }

    paused(): void {
        throw new Error("Task is not started");
    }

    overdue(): void {
        throw new Error("Task is not started");
    }

    done(): void {
        throw new Error("Task is not started");
    }

    cancelled(): void {
        throw new Error("Task already cancelled");
    }
}

export class TaskStatusFactory {
    static create(status: string, updateStatusCallback: UpdateStatusCallback): TaskStatus {
        if (status === "todo") return new TodoStatus(updateStatusCallback);
        if (status === "started") return new StartedStatus(updateStatusCallback);
        if (status === "paused") return new PausedStatus(updateStatusCallback);
        if (status === "overdue") return new OverdueStatus(updateStatusCallback);
        if (status === "done") return new DoneStatus(updateStatusCallback);
        if (status === "cancelled") return new CancelledStatus(updateStatusCallback);
        throw new Error("Invalid task status");
    }
}
