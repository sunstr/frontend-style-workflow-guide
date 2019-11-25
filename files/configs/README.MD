# Configurations

Если используете сборку для проектов без фреймворков, делать ничего не нужно.

------------------------------------------

## .editorconfig

Настройка основных правил форматирования.

* Кладем [конфиг](../src/.editorconfig) в корень проекта.

------------------------------------------

[Здесь](https://editorconfig.org/#download) собраны возможные варианты установки плагина для вашего редактора.

------------------------------------------

## stylelint.config.js

В нем задается определенный порядок свойств и сущностей, описанный в [SCSS | Style & Workflow Guide](../../scss).

1. При инициализации проекта через CLI добавляем stylelint.
2. Заменяем [stylelint.config.js](../src/stylelint.config.js) в корне проекта.

------------------------------------------

## .eslintrc.js

1. При инициализации проекта через CLI добавляем eslint (должен быть `plugin:nuxt/recommended`).
2. Добавляем некоторые исключения:

```js
module.exports = {
  // ...
  rules: {
    'indent': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 'off',
    'space-before-function-paren': 'off'
  }
}
```
