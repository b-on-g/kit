# $bog_kit_shell

Тема кита. Без неё китовые компоненты остаются без палитры.

```
$my_app $mol_view
	plugins /
		<= Theme $bog_kit_shell
```

Если наследуетесь от вида, где `$mol_theme_auto` уже в плагинах, хватит переобъявить:

```
$my_app2 $my_app
	Theme $bog_kit_shell
```

Ставит на узел `bog_kit_platform` (`ios` / `md`, форсится `#!platform=ios`) и даёт
токены. В своих листах читаются из `$bog_kit`:

```ts
$mol_style_define( $my_card, {
	background: { color: $bog_kit.raise },
	borderRadius: $bog_kit.round_panel,
	color: $bog_kit.ink,
} )
```

| | |
| --- | --- |
| `case` `panel` `raise` | корпус, панель страницы, приподнятое |
| `ink` `ink_soft` | текст, второстепенный текст |
| `key` `key_ink` | акцент и текст на нём |
| `round_panel` `round_field` `round_pill` | углы |
| `font_text` `font_code` | гарнитуры |

Светлая и тёмная переключаются `$mol_lights` как обычно. Стоковые компоненты
подхватывают палитру сами: `--mol_theme_*` замаплены на токены.
