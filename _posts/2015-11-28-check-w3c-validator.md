---
title: 'Check W3C validator'
description: W3C validator
date: '2015-11-28'
modified_date: '2015-11-28'
image: /assets/images/posts/random-img.jpg
---

## W3C validator チェックの結果

+ img タグにalt属性が付いていない
+ h1 タグが無数にある

でした。

h1 タグはサイトタイトルに使用するのみで別の場所では使えないらしい

> Consider using the h1 element as a top-level heading only (all h1 elements are treated as top-level headings by many screen readers and other tools).

上の引用がエラー内容です

記事のタグでは h1 ではなく h2 以下を使うようにしたほうが良いらしい

っということで``_layouts``フォルダのpage.htmlとpost.htmlそれぞれのタグを変更しておいた。
がなぜか治らない。
なぜだ！？

キャッシュがあるからか？

##### 【 追 記 】
``Jekyll Now`` では``index.html``が最初に呼ばれサイトのHOMEを示すページを生成する。
この場合は、リストページを表示します。

このページを最初に表示するのを忘れていました。
``index.html``内でも**article**タグの中に内包された**h1**タイトルで記事分繰り返す処理になっていたことから注意を受けたようだ。

固定ページを作りたくなったりすると``jekyll-now``では少々問題が起こりそうなのでこちらのサイトもHugoに移行しようと思います。

まずはローカル環境でテーマ作りに取り掛かりたいと思います。
とは言っても、その辺のテーマを少々修正する程度にとどめて``Hugo``環境のベースを整えたいと思います。
