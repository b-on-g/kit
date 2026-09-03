# $bog_kit

Каталог стоковых компонентов $mol. Корень — `$mol_book2_catalog`, каждый раздел
меню это вложенный `$mol_book2_catalog`, каждая страница внутри раздела —
`$mol_page`. Своих стилей нет ни одного файла: всё рисуют сами компоненты и
дефолтная тема.

## Модули

| Модуль | Класс | Что показывает |
| --- | --- | --- |
| `app` | `$bog_kit_app` | корневой каталог и стартовая страница |
| `controls` | `$bog_kit_controls` | `$mol_button`, `$mol_check`, `$mol_switch`, `$mol_link` |
| `fields` | `$bog_kit_fields` | `$mol_string`, `$mol_number`, `$mol_textarea`, `$mol_select`, `$mol_date`, `$mol_form` |
| `layout` | `$bog_kit_layout` | `$mol_row`, `$mol_list`, `$mol_deck`, `$mol_expander`, `$mol_section`, `$mol_scroll` |
| `data` | `$bog_kit_data` | `$mol_card`, `$mol_labeler`, `$mol_grid`, `$mol_text`, `$mol_avatar`, `$mol_chip` |
| `feedback` | `$bog_kit_feedback` | `$mol_status`, `$mol_speck`, `$mol_pop`, `$mol_pick` |

## Запуск

```
npx mam
```

и открыть `http://localhost:9080/bog/kit/app/-/`.

Адрес страницы держится в аргументах: `#!section=controls/control=button`.
