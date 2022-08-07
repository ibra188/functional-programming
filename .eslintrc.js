
 module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    Plugin: [
      'immutable'
    ],
    "rules": {
      'immutable/no-mutation': 2 
    }
}
