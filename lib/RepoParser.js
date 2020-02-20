class RepoParser {
  constructor(csvEntryObject) {
    this.organization = csvEntryObject['0'];
    this.name = csvEntryObject['1'];
    this.commit = csvEntryObject['2'];
    this.srcDir = csvEntryObject['3'];
    this.urlSlug = csvEntryObject['4'];
  }

  getGithubUrl() {
    return `https://github.com/${this.organization}/${this.name}/tree/${this.commit}${this.srcDir}`;
  }

  getUrlSlug() {
    return this.urlSlug;
  }
}

module.exports = RepoParser;
