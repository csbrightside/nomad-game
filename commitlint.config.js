module.exports = {
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-min-length': [2, 'always', 5],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'BUILD', // A code change not covered by one of the below
        'CI', // A change to the continuous integration
        'FEATURE', // A new feature
        'FIX', // A bug fix
        'MERGE', // A branch merge
        'REFACTOR', // A code change that neither fixes a bug or adds a feature, or removal
        'RELEASE', // A specific version release
        'REVERT', // A git commit revert
        'STYLE', // A change that does not affect the meaning of the code, or documentation
        'SYNC', // A live sync
        'TEST' // A change to the automated testing
      ]
    ]
  }
};
