const redirectJobs = [
  {
    source: '/team/Senior-Engineer-Embedded-Rust/31b8be44-ca35-5e12-8777-ab16d7b08033',
    destination: '/team/Senior-Engineer-Rust/c537a230-2168-40b9-9331-91f29f88b5ce',
    permanent: true,
  },
  {
    source: '/team/Senior-Support-Engineer/62c64585-8db0-44dc-bfaa-f699233c22fa',
    destination: '/team/Senior-Support-Engineer/914dd8e6-e94a-4a23-90db-d92d271d41e',
    permanent: true,
  },
  {
    source: '/team/Senior-Support-Engineer/914dd8e6-e94a-4a23-90db-d92d271d41e2',
    destination: '/jobs-410',
    permanent: true,
  },
  {
    source: '/team/Head-of-Developer-Relations/1e365b6a-9df0-5eec-9762-a4b25f913d23',
    destination: '/jobs-410',
    permanent: true,
  },
  {
    source: '/team/Head-of-Engineering/6976dbe1-4155-5560-8c1b-16c894141956',
    destination: '/jobs-410',
    permanent: true,
  },
];

const redirectDocs = [
  {
    source: '/learn/:slug*',
    destination: '/docs-410',
    permanent: true,
  },
  {
    source: '/posts/:slug*',
    destination: '/docs-410',
    permanent: true,
  },
  {
    source: '/product/:slug*',
    destination: '/docs-410',
    permanent: true,
  },
];

module.exports = { redirectDocs, redirectJobs };
