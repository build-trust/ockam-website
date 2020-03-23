const fs = require('fs');

const neatCsv = require('neat-csv');

const RepoParser = require('../lib/RepoParser');

const getDependedRepos = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./dependencies_repos.csv', async (err, data) => {
      if (err) {
        reject(err);
        return
      }
      const csv = await neatCsv(data, { separator: ";", headers: false});
      const repos = csv.map(item => {
        const repo = new RepoParser(item);
        return {
          githubUrl: repo.getGithubUrl(),
          slug: repo.getUrlSlug(),
        }
      });
      resolve(repos);
    })
  })

};
module.exports = getDependedRepos;

