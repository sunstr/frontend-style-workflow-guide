module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order/borderInBoxModel'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true
      }
    ],
    'order/order': [
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        parameter: 'media',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'media',
        hasBlock: true
      },
      {
        type: 'rule',
        selector: '^&::\\w'
      },
      {
        type: 'rule',
        selector: '^&:\\w+$'
      },
      {
        type: 'rule',
        selector: '^&--\\w+\\s(?!.)'
      },
      {
        type: 'rule',
        selector: '^&__'
      }
    ]
  }
}
