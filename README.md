# $bog_kit

Каталог стоковых компонентов $mol и дизайн-система поверх них — на одном и том же
дереве страниц, в двух точках входа, чтобы разницу было видно переключением
вкладки.

| | | |
| --- | --- | --- |
| Сток | [b-on-g.github.io/kit/app/](https://b-on-g.github.io/kit/app/) | голый $mol, ни одного своего стиля |
| Kit | [b-on-g.github.io/kit/app2/](https://b-on-g.github.io/kit/app2/) | компоненты дизайн-системы |

Витрина со ссылками — [b-on-g.github.io/kit/](https://b-on-g.github.io/kit/). Язык
платформы переключается адресом: `#!platform=ios` или `md`. Светлая и тёмная —
переключателем в шапке.

## Каталог

Корень — `$mol_book2_catalog`, каждый раздел меню это вложенный
`$mol_book2_catalog` со своим `param`, каждая страница внутри раздела —
`$mol_page`. Адрес держит всё состояние: `#!section=controls/control=button`.

| Модуль | Класс | Что показывает |
| --- | --- | --- |
| `app` | `$bog_kit_app` | корневой каталог и стартовая страница |
| `controls` | `$bog_kit_controls` | `$mol_button`, `$mol_check`, `$mol_switch`, `$mol_link` |
| `fields` | `$bog_kit_fields` | `$mol_string`, `$mol_number`, `$mol_textarea`, `$mol_select`, `$mol_date`, `$mol_form` |
| `layout` | `$bog_kit_layout` | `$mol_row`, `$mol_list`, `$mol_deck`, `$mol_expander`, `$mol_section`, `$mol_scroll` |
| `data` | `$bog_kit_data` | `$mol_card`, `$mol_labeler`, `$mol_grid`, `$mol_text`, `$mol_avatar`, `$mol_chip` |
| `feedback` | `$bog_kit_feedback` | `$mol_status`, `$mol_speck`, `$mol_pop`, `$mol_pick` |

## Дизайн-система

Тема называется **Canvas**. Слои вместо обводок: корпус, панель страницы,
приподнятое. Ни рамок, ни теней — поверхность отличается от той, что под ней,
тоном, радиусом и воздухом вокруг. Углы щедрые, а всё, что нажимают, имеет форму
клавиши. Ключевой цвет один и тратится скупо: первичное действие, текущий пункт
меню, включённое состояние.

| Модуль | Класс | Наследуется от |
| --- | --- | --- |
| `kit.ts` | `$bog_kit` | `$mol_style_prop` — имена переменных, в корне пака |
| `shell` | `$bog_kit_shell` | `$mol_theme_auto` — плагин темы, значения в `shell.view.css` |
| `platform` | `$bog_kit_platform` | функция: `ios` или `md` по UA, `#!platform=` форсит |
| `book` | `$bog_kit_book` | `$mol_book2_catalog` — хром Kit поверх каталога |
| `pager` | `$bog_kit_pager` | `$mol_view` — полоса уровня вложенности |
| `lights` | `$bog_kit_lights` | функция: `auto` / `light` / `dark` поверх хранилища `$mol_lights` |
| `lights/pick` | `$bog_kit_lights_pick` | `$mol_switch` — переключатель темы |
| `button` | `$bog_kit_button` | `$mol_button_minor` |
| `button/major` | `$bog_kit_button_major` | `$mol_button_major` |
| `button/copy` | `$bog_kit_button_copy` | `$mol_button_copy` |
| `check/box` | `$bog_kit_check_box` | `$mol_check_box` |
| `check/icon` | `$bog_kit_check_icon` | `$mol_check_icon` |
| `check/expand` | `$bog_kit_check_expand` | `$mol_check_expand` |
| `check/list` | `$bog_kit_check_list` | `$mol_check_list` |
| `switch` | `$bog_kit_switch` | `$mol_switch` |
| `select` | `$bog_kit_select` | `$mol_select` |
| `input` | `$bog_kit_input` | `$mol_string` |
| `card` | `$bog_kit_card` | `$mol_card` |
| `page` | `$bog_kit_page` | `$mol_page` |
| `label` | `$bog_kit_label` | `$mol_labeler` |
| `link` | `$bog_kit_link` | `$mol_link` |
| `list` | `$bog_kit_list` | `$mol_list` |
| `text` | `$bog_kit_text` | `$mol_text` |
| `chip` | `$bog_kit_chip` | `$mol_chip` |
| `speck` | `$bog_kit_speck` | `$mol_speck` |
| `status` | `$bog_kit_status` | `$mol_status` |
| `grid` | `$bog_kit_grid` | `$mol_grid` |

## Как подключается

Страницы каталога про Kit ничего не знают. `$bog_kit_app2` наследует весь каталог
от `$bog_kit_app` и подменяет только контекст:

```ts
static override Root( id: number ) {
	const view = new this
	view.$ = this.$.$bog_kit_context()
	return view
}
```

`view.tree` компилирует под-вид в `new this.$.$mol_button_minor()`, поэтому класс
каждого компонента ищется в контексте на рендере. Контекст из `$bog_kit_context`
прототипно наследуется от окружающего и переопределяет дюжину имён — этого хватает,
чтобы перерисовать всё дерево. Инвариант держит `context.test.ts`: каждая замена
обязана быть подклассом того, что заменяет, иначе страницы, не просившие Kit,
сломаются.

Компоненты, которые не подменены, всё равно попадают в палитру: `shell.view.css`
перекладывает токены Kit на `--mol_theme_*` и `--mol_gap_*`.

**Граница подмены.** Контекст ловит только `new this.$.X()`, но не наследование
класса: `$mol_button_copy extends $mol_button_minor`, поэтому стили
`$bog_kit_button` до него не доходят и ему нужен свой подкласс. То же будет с
`$mol_button_download`, `_open`, `_share`, когда они появятся на странице.

## Запуск

```
npx mam
```

и открыть `http://localhost:9080/bog/kit/app/-/` и `.../app2/-/`. С телефона — по
адресу, который mam печатает при старте строкой `network`.

## Деплой

`.github/workflows/deploy.yml`: один прогон `mam_build` собирает обе точки входа
(`modules` бьётся по пробелам), дальше три деплоя — витрина в корень с
`clean-exclude` на папки приложений, и по одному в `app` и `app2` через
`target-folder`. Без `clean-exclude` корневой rsync снёс бы приложения; всё, чего
в этом списке нет, из корня удаляется — так ушла папка `app3`.

Дефолтный `.gitattributes` в репозитории обязателен: иначе `mam_build` создаёт
его сам, коммитит и падает на пуше — токена workflow ему на это не хватает.
