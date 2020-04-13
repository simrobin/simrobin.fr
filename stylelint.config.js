module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'scss/selector-no-redundant-nesting-selector': null,
    'max-nesting-depth': 2,
    'selector-class-pattern': [
      '^[a-z0-9\\-\\_]+$',
      {
        message:
          'Selector should be written in lowercase with hyphens and/or underscores (selector-class-pattern)',
      },
    ],
  },
};
