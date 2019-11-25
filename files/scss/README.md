# SCSS | Scaffolding Files

Описание организации SCSS файлов и работы с ними.

Стартовый набор файлов находится [здесь](../src/scss).

------------------------------------------

## Структура

* Стартовые стили держим в `scaffolding.scss`.
* Глобальные БЭМ-блоки держим в `blocks` и покдлючаем в `blocks.scss`.
* Шрифты подключаем в `fonts.scss`.
* Выносим глобальные значения в `variables.scss`.
* Миксины держим в папке `mixins` и подключаем в `mixins.scss`.
* Все перечисленное группируется в `style.scss`.

------------------------------------------

## Mixins

Назначения основных миксинов.

------------------------------------------

### media.scss

Данный миксин взаимодействует с переменными группы `// breakpoints`.

Возможные варианты использования:
```scss
/* от sm */
@include media(sm) {}

/* от 500px */
@include media(500) {}

/* до md */
@include media(sm-max) {}

/* от sm до md */
@include media(sm, sm-max) {}

/* от sm до 500px */
@include media(sm, 499.9px) {}

/* от 300px до sm */
@include media(300, sm) {}

/* от 500px до 700px */
@include media(500, 699.9px) {}

/* единственный необрабатываемый случай */
@media (max-width: 700px) {}

```
------------------------------------------

### container.scss

Миксин вызывается единожды в `scaffolding.scss`.

```scss
/* создает класс .container  */
/* sm-max - padding-left: 20px; padding-right: 20px;
/* md - $md-c */
/* lg - $lg-c */
/* xl - $xl-c */ 

@include container(md);
```
------------------------------------------

### helpers.scss

Используется для точечного сброса стилей.

```scss
.list {
  @include ulres;
}

.input {
  @include inpres;
}
```
