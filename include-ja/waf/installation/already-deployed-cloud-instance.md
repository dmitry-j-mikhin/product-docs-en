!!! info "複数のWallarmノードをデプロイする場合"
    お使いの環境にデプロイされたすべてのWallarmノードは、 **同じバージョン** でなければなりません。 別々のサーバーにインストールされたポストアナリティクスモジュールも **同じバージョン** でなければなりません。

    追加ノードのインストール前に、そのバージョンが既にデプロイされているモジュールのバージョンと一致していることを確認してください。デプロイされたモジュールのバージョンが[廃止されるか、近いうちに廃止される(`4.0`またはそれ以下)][versioning-policy]場合は、すべてのモジュールを最新バージョンにアップグレードしてください。

    起動中のバージョンを確認するには、実行中のインスタンスに接続し、次のコマンドを実行します:

    ```
    apt list wallarm-node
    ```