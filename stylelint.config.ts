import { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard', 'stylelint-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-deprecated': true,
    'declaration-property-value-keyword-no-deprecated': true,
    'no-descending-specificity': true,
    'declaration-block-no-duplicate-properties': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'no-duplicate-selectors': true,
    'at-rule-no-vendor-prefix': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-no-vendor-prefix': true,
    'declaration-no-important': true,
    'unit-no-unknown': true,
    'function-name-case': ['lower', { ignoreFunctions: [/^--/] }],
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',
    'max-nesting-depth': 3,
    'number-max-precision': 2,
    'declaration-block-single-line-max-declarations': 1,
    'color-hex-length': 'short',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always'
  }
};

export default config;
