# HTML | Style & Workflow Guide

Правила написания кода **HTML | Vue/Nuxt JS**.

------------------------------------------

## Основные правила
* Табуляция = два пробела.
* Вложенные элементы = одна табуляция.
* Используем двойные кавычки.
------------------------------------------
* Не добавляем закрывающий слэш у одиночных тегов спецификации.
* Опусакем закрывающий тег и добавляем закрывающий слэш в случае отсутствия содержимого внутри тега во фреймворках.
------------------------------------------
А также поддерживаем рекомендованные правила: `plugin:vue/recommended` и `plugin:nuxt/recommended`.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Skillbox Style Guide</title>
  </head>
  <body>
    <header class="header">
      <img 
        class="header__logo" 
        src="img/skillbox.svg" 
        alt="Skillbox"
      >
      <h1 class="header__title h h--1">Пиши красиво!</h1>
    </header>
  </body>
</html>
```

Vue/NuxtJS:
```vue
<svg-icon name="select-arrow" />
```

------------------------------------------

## Атрибуты

* Порядок атрибутов HTML:

  * id
  * class, name
  * data-*
  * src, for, type, href, value
  * title, alt
  * role, aria-*
  * target, rel
  * логические атрибуты (например: checked, selected, required)
  
Во Vue/Nuxt JS принимаем порядок конфига `plugin:vue/recommended`.

* Опускаем значение логических атрибутов.
* Переносим атрибуты на новую строку при условии 3-х и более тегов (либо 2-х длинных).

```html
<label class="form__label" for="login">Логин</label>
<input
  id="login"
  class="form__field"
  name="login"
  type="text"
  required
>
```

Vue/Nuxt JS:
```vue
<!-- пример 2-х атрибутов -->
<img
  :src="require(`@/assets/img/partners/${partner.logo}`)"
  :alt="partner.name"
>
```

------------------------------------------

## Лишние обертки, элементы

* Не создаем дополнительных оберток без необходимости.
```html
<!-- плохо -->
<div class="form">
  <form method="post" action="#">
</div>

<!-- хорошо -->
<form 
  class="form" 
  method="post" 
  action="#"
>
```

* Не создаем дополнительных элементов для декорации.
```html
<!-- плохо -->
<div class="container">
  <div class="container__decoration"></div>
</div>

```
```scss
/* хорошо */
.container {
  &::before {
    content: '';
  } 
}
```
------------------------------------------

## Доступность
* Всегда добавляем `alt` для изображений.

```html
 <img 
   class="logo" 
   src="img/skillbox.svg" 
   alt="Skillbox"
 >
```

* Создаем `aria-label` для тегов без содержимого.
* Скрываем с помощью `aria-hidden` декоративные элементы разметки.

```html
<li>
  <a 
   class="social-icons__item" 
   href="https://www.facebook.com/skillboxru" 
   aria-label="Facebook" 
   target="_blank" 
   rel="noopener"
  >
    <svg class="social-icons__icon" aria-hidden="true">
      <use xlink:href="img/sprite.svg#fb"></use>
    </svg>
  </a>
</li>
```

Vue/Nuxt JS:
```vue
<li 
  v-for="(socialContact, i) in socialContacts" 
  :key="i"
>
  <a
    class="social-contacts__item"
    :href="socialContact.link"
    :aria-label="socialContact.label"
    target="_blank"
  >
    <svg-icon :name="socialContact.icon" aria-hidden="true" />
  </a>
</li>
```

* Всегда добавляем label для полей ввода.

```html
<label class="form__label" for="login">Логин</label>
<input
  id="login"
  class="form__field"
  name="login"
  type="text"
  required
>
<!-- или -->
<label class="form__label">
  Логин
  <input
    class="form__field"
    name="login"
    type="text"
    required
  >
</label>
```
