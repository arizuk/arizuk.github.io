---
title: Next.jsを使って簡単なブログを作りました
---

## モチベーション
server/clientを同一言語で書いた場合楽なんだろうか？ という疑問の解消のために、SSRを試して見たかったので、[Next.js](https://github.com/zeit/next.js)を使って自分用のブログサイトを作ってみました。Next.jsだとSSRに加えて、server側を簡単に静的ファイル化できそうだったので使ってみることにしました。(※他のフレームワークは詳しく見てません)

## Repository
https://github.com/arizuk/arizuk.github.io

## 要件

- SPA && SSR
- markdownファイルから動的にページが生成されること
- github-pagesで静的ホスティングができること


## markdownによる記事作成

### dynamic routing

`exportPathMap`を動的に生成することで対応しました。この設定は静的ファイルをexportする際にも有効になります。

```
# next.config.js
const getRoutes = async () => {
  const pathMap = {
    '/':  { page: '/index' },
    '/posts':  { page: '/posts' },
  };

  const posts = JSON.parse(fs.readFileSync('./static/posts.json', 'utf-8'));
  return posts.reduce((map, post) => {
    map[`/posts/${post.href}`] = { page: '/_post_content', query: { id: post.href } }
    return map;
  }, pathMap);
};

module.exports = {
  exportPathMap: getRoutes,
};

```

[コード](https://github.com/arizuk/arizuk.github.io/blob/f1ab8fbc48c74f9e5186aded4389ae95ce8e7a61/next.config.js#L4)

### markdownのレンダリング

`getInitialProps`内部でclient/serverの判定はできるので、

- serverの場合は、filesystemからmarkdownを読み込む
- clientの場合は、serverからmarkdownファイルをfetchする

という[実装](https://github.com/arizuk/arizuk.github.io/blob/f1ab8fbc48c74f9e5186aded4389ae95ce8e7a61/utils/index.js#L43)にしました。

```
const readFile = async () => { /*...*/ };

const getPostContentFromFs = async (fname) => {
  return await readFile(`static/posts/${fname}`);
};

const getPostContentFromServer = async (fname) => {
  const res = await fetch(`/static/posts/${fname}`);
  return await res.text();
};

export async function getPostContent(fname) {
  if (process.browser) {
    return getPostContentFromServer(fname);
  } else {
    return getPostContentFromFs(fname);
  }
};
```


Next.jsの場合、コードはUniversalである必要があり、fsモジュールをimportするには、次のような[設定](https://github.com/arizuk/arizuk.github.io/blob/f1ab8fbc48c74f9e5186aded4389ae95ce8e7a61/next.config.js#L20)が
必要でした。

```
# next.config.js
module.exports = {
  webpack(config) {
    config.node = {
      fs: 'empty',
    };
    return config;
  }
};
```

SSRに詳しくないのであれですが、この手の分岐が増えるとメンテナンスはしにくくなるので、本来はserver側でも`fetch`してくるのが筋なのかもしれません。

## github-pagesでの静的ホスティング

今回は `<username>.github.io` でホスティングをしたかったので、ちょっとだけ工夫をしました。

細かい説明は省きますが、以下のような構成にしました

- master branch
  - 配信する静的ファイルをroot直下に含む
  - `git branch -d master && git checkout --orphan master` でブランチを切る
  - `touch .nojekyll`
- docs branch
  - ソースコードを含む
  - `out`ディレクトリに`next export`で静的ファイルを出力する
  - `out`ディレクトリはgit管理化から外す
  - `git worktree add out master`で`out`ディレクトリをmaster branchの作業ディレクトリにする

上記構成にしておけば、docs branchで生成物をexportして、`out`ディレクトリでcommit && pushすればgithub pagesが更新されます。branchの切り替えもしなくて良いので楽です。

## CSS周り

CSS及びデザインはさっぱりできないので、多きな声では言えないのですが、jekyllのthemesから拝借してごにょごにょしました。

styleの設定に[styled-jsx](https://github.com/zeit/styled-jsx)を一部使ってみたんですが、

* scss等のsyntaxが使えない
* vscodeでデフォルトでは補完が効かない
* cssが長くなった場合、見通しが悪い

と、あまり良い印象は受けませんでした。CSSとJSの分離は技術の分離であって関心事の分離ではないとか、いう意見もありましたが、分離したほうが圧倒的に開発しやすいという印象です。やっぱり個人的には、VueのSingle file components派です。

## 所感

Next.js, service workerを使ったprefetchなんかも対応中らしいので、SPA/SSRで高速に動く小さいサイトを手早く作るには簡単だし便利なのではないでしょうか。

## 参考
http://ganow.me/article/blog-system-configuration