# Wallarm APIへのプロキシ経由のアクセス

これらの手順では、プロキシサーバー経由でWallarm APIにアクセスする設定を行う手順を説明しています。

* `https://api.wallarm.com/` はEUクラウドのため
* `https://us1.api.wallarm.com/` はUSクラウドのため

アクセスを設定するには、`/etc/environment` ファイルで使用されるプロキシサーバーを定義する環境変数に新しい値を割り当ててください：

* `https_proxy` はHTTPSプロトコルのプロキシを定義する
* `http_proxy` はHTTPプロトコルのプロキシを定義する
* `no_proxy` はプロキシを使用しないリソースのリストを定義する

## https_proxy と http_proxy の値

`https_proxy` と `http_proxy` 変数に `<scheme>://<proxy_user>:<proxy_pass>@<host>:<port>` の文字列を割り当てます：

* `<scheme>` は使用されるプロトコルを定義します。現在の環境変数がプロキシを設定するプロトコルと一致する必要があります
* `<proxy_user>` はプロキシ認証のユーザー名を定義します
* `<proxy_pass>` はプロキシ認証のパスワードを定義します
* `<host>` はプロキシサーバーのホストを定義します
* `<port>` はプロキシサーバーのポートを定義します

## no_proxy の値

`no_proxy` 変数に、プロキシを使用しないリソースのIPアドレスおよび/またはドメインの配列を割り当てます：

* 正しいWallarmノードの操作のために `127.0.0.1`、`127.0.0.8`、`127.0.0.9`、`localhost`
* 追加のアドレスは以下の形式で: `"<res_1>, <res_2>, <res_3>, <res_4>, ..."` ここで、`<res_1>`、`<res_2>`、`<res_3>`、および `<res_4>` はIPアドレスおよび/またはドメインです

## ファイル /etc/environment の例

以下の `/etc/environment` ファイルの例は、次の設定を示しています：

* HTTPS および HTTP のリクエストは、プロキシサーバーへの認証に `admin` ユーザー名と `01234` パスワードを使用し、`1.2.3.4` ホストの `1234` ポートにプロキシされます。
* リクエストは、`127.0.0.1`、`127.0.0.8`、`127.0.0.9`、および `localhost` に送信される場合、プロキシが無効になります。

```bash
https_proxy=http://admin:01234@1.2.3.4:1234
http_proxy=http://admin:01234@1.2.3.4:1234
no_proxy="127.0.0.1, 127.0.0.8, 127.0.0.9, localhost"
```