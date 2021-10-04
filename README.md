## 使用方法
ホストはVercelです。
このリポジトリはコンテンツとAppが分離していますのでそれぞれ設定をしないと動きません。
以下にその設定方法を記します。

### 環境変数の設定
先ず、Githubにてパーソナル アクセス トークンを取得する。
取得したパーソナル アクセス トークンを```GITHUB_TOKEN```としてVercelの環境変数に設定する。
プログラム内ではリポジトリのコンテンツを取得するフェッチが動いています。
プライベートでコンテンツを管理している場合は、プライベートコンテンツが見れるように設定をしてください。

### コンテンツのGithubリポジトリの下記項目を環境変数へ設定
環境変数名は
```
OWNER
REPO
DIR
```
の３つです。
最後のファイル名はコード内で取得します。
ファイル名がslugになります。

### VercelのDeploy Hookを取得
Appの```settings > Git > Deploy Hook```がありますのでそこで取得してコピーしてください。

### Github Web Hookの設定
Vercelで取得したUrlをコンテンツのリポジトリの設定からWeb Hookを設定します。

以上の設定でApp、コンテンツそれぞれで```Build & Deploy```が走ります。
コンテンツをGithubへプッシュした時、Appを修正したときにそれぞれ走るようになっています。

### 参考
[構成図](https://nuovotaka.com/posts/2021-09-25-Nextjs-Tailwindcss/)

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
