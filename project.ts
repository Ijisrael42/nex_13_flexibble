import { graph, config } from '@grafbase/sdk'
import User from './user';

const g = graph.Standalone()

const Project = g.type('Project', {
    title: g.string(),//.length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteUrl: g.url(),
    githubUrl: g.url(),
    category: g.string(),//.search(),
    createdBy: g.ref(User)
})

export default Project;