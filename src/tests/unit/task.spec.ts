import {describe} from "vitest";
import UniqueEntityID from "@/domain/entities/unique-entity-id";
import Task from "@/domain/entities/task.entity";

describe('Task tests', function () {
    it('should create a Task successfully', function () {
        const task = new Task({
            name: 'Test Task',
            description: 'Test Task Description',
            userId: new UniqueEntityID(),
            projectId: new UniqueEntityID(),
        });

        expect(task).toBeInstanceOf(Task);
        expect(task.status).toBe('todo');
    });

    it('should create a Task successfully and start it', function () {
        const task = new Task({
            name: 'Test Task',
            description: 'Test Task Description',
            userId: new UniqueEntityID(),
            projectId: new UniqueEntityID(),
        });
        task.start();
        expect(task).toBeInstanceOf(Task);
        expect(task.status).toBe('started');
    });

    it('should create a Task successfully and pause it', function () {
        const task = new Task({
            name: 'Test Task',
            description: 'Test Task Description',
            userId: new UniqueEntityID(),
            projectId: new UniqueEntityID(),
        });
        task.start();
        task.pause();
        expect(task).toBeInstanceOf(Task);
        expect(task.status).toBe('paused');
    });

    it('should create a Task successfully and done it', function () {
        const task = new Task({
            name: 'Test Task',
            description: 'Test Task Description',
            userId: new UniqueEntityID(),
            projectId: new UniqueEntityID(),
        });
        task.start();
        task.done();
        expect(task).toBeInstanceOf(Task);
        expect(task.status).toBe('done');
    });

    it('should create a Task successfully and cancel it', function () {
        const task = new Task({
            name: 'Test Task',
            description: 'Test Task Description',
            userId: new UniqueEntityID(),
            projectId: new UniqueEntityID(),
        });
        task.cancel();
        expect(task).toBeInstanceOf(Task);
        expect(task.status).toBe('cancelled');
    });
});
