# Fitness On Web

http://pavfed.com/fitness/

<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/f349497f-db0c-4bed-a27d-bb0044e2e203" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/d39daa1a-1717-4520-9ee6-a883bb0adec6" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/6bf98d21-c7bf-4db8-a9c8-43e1530bb00d" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/24610afd-7ee8-443c-ac5a-a500ff07313f" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/ee2ddf48-eefd-42fa-98d3-e5c2c7e7b0fe" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/52ea4a38-6749-4c1e-953d-09261cea8f35" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/2292b3b7-2da3-4e89-9ee4-1ae4da44cb33" />
<img src="https://github.com/pavelfedorov2000/fitness/assets/66357864/9a289599-e145-4185-8718-33ef6dadd9b4" />

## Структура папок и файлов
```
├── app/                              # Исходники
│   ├── blocks/                       # Блоки
│   │   ├── block/                    # Блок
│   │   │    ├── block.html           # Разметка блока
│   │   │    ├── block.js             # Скрипт блока
│   │   │    └── block.scss           # Стили блока
│   │   ├── footer/                   # Футер сайта
│   │   │    ├── footer.html          # Начальная разметка футера сайта
│   │   │    └── footer.scss          # Начальные стили футера сайта

│   │   ├── head/                     # Секция head
│   │   │    └── head.html            # Разметка секции head и открывающие тэги документа
│   │   ├── header/                   # Шапка сайта
│   │   │    ├── header.html          # Начальная разметка шапки сайта
│   │   │    └── header.scss          # Начальные стили шапки сайта
│   │   └── link/                     # Подключение скриптов
│   │        └── link.html            # Разметка с подключаемыми скриптами и закрывающе тэги документа
│   ├── data/                         # Данные в формате JSON
│   ├── images/                       # Изображения
│   │   └── sprite-icons /            # SVG иконки для генерации векторного спрайта
│   ├── pages/                        # Страницы
│   │   └── index.html                # Разметка страницы
│   ├── resources/                    # Статические файлы для копирования в dist
│   ├── scripts/                      # Скрипты
│   │   ├── common/                   # Вспомогательные функции проекта
│   │   │   └── addLibs.js            # Файл содержащий методы для динамического добавления библиотек
│   │   ├── app.js                    # Главный скрипт
│   │   └── init.js                   # Подключение модулей проекта
│   └── styles/                       # Стили
│       ├── common/                   # Общие стили
│       │   └── common.scss           # Общие стили сайта
│       ├── helpers/                  # Помощники
│       │   ├── fonts.scss            # Подключение шрифтов
│       │   ├── mixins.scss           # Примеси
│       │   ├── nojs.scss             # Сообщение об отключенном js
│       │   ├── optimize.scss         # Сброс стилей и фиксы
│       │   ├── sprite_template.scss  # Переменные с размерами SVG иконок (автосборка)
│       │   └── variables.scss        # Переменные
│       └── app.scss                  # Главный стилевой файл
├── dist/                             # Сборка (автогенерация)
│   ├── assets/                       # Подключаемые ресурсы
│   │   ├── libs/                     # Файлы сторонних библиотек
│   │   │   ├── js/                   # JS файлы библиотек
│   │   │   └── css/                  # CSS файлы библиотек
│   │   ├── fonts/                    # Шрифты
│   │   ├── images/                   # Изображения
│   │   │   └── sprites/              # Спрайты (автогенерация)
│   │   ├── scripts/                  # Скрипты
│   │   └── styles/                   # Стили
│   └── index.html                    # Страница
├── tasks/                            # Подключаемые скрипты с задачами для gulpfile.babel.js
│   ├── config.js                     # Конфигурация
│   ├── copy.js                       # Копирование
│   ├── images.js                     # Сборка картинок
│   ├── libs.js                       # Сборка сторонних библиотек
│   ├── rename-predist.js             # Переименование dist папки при production-сборке
│   ├── scripts.js                    # Сборка скриптов
│   ├── sprite.js                     # Сборка векторного спрайта
│   ├── styles.js                     # Сборка стилей
│   ├── templates.js                  # Сборка страниц из шаблонов
│   ├── watch.js                      # Отслеживание изменений и запуск задач
│   └── zip.js                        # Архивация папки dist
├── .babelrc                          # Конфигурация babel
├── browserlist                       # Список версий браузеров для задач Gulp
├── .editorconfig                     # Конфигурация настроек редактора кода
├── .eslintignore                     # Список исключений для проверки JavaScript в ESLint
├── .eslintrc                         # Конфигурация проверки JavaScript в ESLint
├── .gitignore                        # Список исключённых файлов из Git
├── .lintstagedrc                     # Конфикугация lint-staged для husky
├── .sass-lint.yml                    # Конфигурация проверки SCSS в StyleLint
├── .stylelintrc                      # Конфигурация проверки SCSS в StyleLint
├── gulpfile.babel.js                 # Файл для запуска Gulp.js
├── make-block.js                     # Утилита создания новых блоков
├── libs-links.js                     # Пути к сторонним библиотекам
├── make-block.js                     # Скрипт создания структурных модулей проекта
├── package.json                      # Список модулей и прочей информации
└── README.md                         # Документация шаблона
```
