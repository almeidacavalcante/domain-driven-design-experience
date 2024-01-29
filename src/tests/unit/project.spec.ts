import UniqueEntityID from "@/domain/entities/unique-entity-id";
import Project from "@/domain/entities/project.entity";
import {expect} from "vitest";

describe('Project tests', function () {
    it('should create a Project successfully', function () {
        const project = new Project({
            title: 'Test Project',
            description: 'Test Project Description',
            userId: new UniqueEntityID(),
            createdAt: new Date(),
            deadline: new Date(),
            tasks: [],
            tags: []
        });
        expect(project.updatedAt).toBeUndefined();
        expect(project).toBeInstanceOf(Project);
        expect(project.status).toBe('started');
    });

    it('should create a Project successfully and finish it', function () {
        const project = new Project({
            title: 'Test Project',
            description: 'Test Project Description',
            userId: new UniqueEntityID(),
            createdAt: new Date(),
            deadline: new Date(),
            tasks: [],
            tags: []
        });
        project.finish();
        expect(project.updatedAt).toBeInstanceOf(Date);
        expect(project).toBeInstanceOf(Project);
        expect(project.status).toBe('completed');
    });
});
