# $bog_kit_pager

Полоса уровня вложенности: сегмент на экран, шириной с этот экран, метка на текущем.

```
$my_wizard $mol_view
	sub /
		<= Pager $bog_kit_pager
			count <= steps_count 0
			current <= step 0
```

| | | |
| --- | --- | --- |
| `count` | `number` | сколько экранов, обязателен |
| `current` | `number` | индекс текущего, обязателен |
| `spans` | `readonly number[]` | ширины экранов в пикселях |
| `span_total` | `number` | ширина всего вместе |

Без `spans` и `span_total` растянется на всю ширину и поделится поровну.

Нужен подключённый `$bog_kit_shell` — цвета берутся из его токенов.

Как это заведено на книжке — `$bog_kit_book.Pager()`, замеры там же рядом.
