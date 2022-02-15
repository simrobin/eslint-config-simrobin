# Eslint and Prettier config for simrobin projects

For javascript projects, add `.eslintrc.js` add the root of the project containing:

```javascript
module.exports = {
  root: true,
  extends: [
    'eslint-config-simrobin',
  ],
};
```

For typescript projects, add `.eslintrc.js` add the root of the project containing:

```javascript
module.exports = {
  root: true,
  extends: [
    'eslint-config-simrobin/typescript',
  ],
};
```
