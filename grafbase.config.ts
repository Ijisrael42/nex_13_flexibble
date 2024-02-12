import { graph, config, auth } from '@grafbase/sdk'

const g = graph.Standalone()
const userArgs = {
  name: g.string(),//.length({ min: 2, max: 20 }),
  email: g.string(),//.unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedUrl: g.url().optional(),
};

const projectArgs = {
  title: g.string(),//.length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string()//.search(),
  // createdBy: g.ref(User)
};

const project = g.type('Project', projectArgs);
const user = g.type('User', userArgs);

g.query('User', {
  args: userArgs,
  returns: g.string(),
  resolver: 'hello'
})

g.query('Project', {
  args: projectArgs,
  returns: g.string(),
  resolver: 'hello'
})

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public()
    }
  },
})
