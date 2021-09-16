---
title: 'yaml front matter(categories)'
description: jekyll
date: '2015-11-09'
modified_date: '2015-11-09'
image: /assets/images/posts/random-img.jpg
---

``jekyll-now``を使い始めて色々と調べていますが、一時的なのだけれど記録を残します。

カテゴリーなどの部分ではどうなるのか？

```
---
layout: post
title: yaml front matter(categories)
categories:
- news
---
```

カテゴリーや``tag``で行を変え``-``(dash)を使って下へ追加している形を取るとどうなるか？
表示が崩れるか？

一度このページを``add & commit & push``で表示を試したところ正しく表示することができました。

ソースでも認識されているのがわかると思います。
