const tasks = (arr) => arr.join(' && ');

const yellow = '\033[1;33m'
const green = '\033[0;32m'
const nc = '\033[0m'

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'yarn lint-staged'
    ]),
    'commit-msg': tasks([
      'commitlint -E HUSKY_GIT_PARAMS'
    ]),
  }
};
