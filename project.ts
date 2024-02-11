import { graph, config } from '@grafbase/sdk'
import { User } from './user';

const g = graph.Standalone()

export const ProjectSchema = {
    title: g.string(),//.length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteUrl: g.url(),
    githubUrl: g.url(),
    category: g.string(),//.search(),
    createdBy: g.ref(User)
};

export const Project = g.type('Project', ProjectSchema)
