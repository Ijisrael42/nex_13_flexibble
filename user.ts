import { graph, config } from '@grafbase/sdk'
import Project from './project';
// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const User = g.type('User', {
    name: g.string(),//.length({ min: 2, max: 20 }),
    email: g.string(),//.unique(),
    avatarUrl: g.url(),
    description: g.string().optional(),
    githubUrl: g.url().optional(),
    linkedUrl: g.url().optional(),
    projects: g.ref(Project).list().optional(),
})
  
export default User;