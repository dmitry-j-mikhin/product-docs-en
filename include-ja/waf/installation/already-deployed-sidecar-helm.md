次の Wallarm のドキュメントを英語から日本語に翻訳してください：
 					!!! info "複数の Wallarm ノードをデプロイする場合"
   **環境にデプロイされたすべての Wallarm ノード** は同じバージョンでなければなりません。分離されたサーバーにインストールされた postanalytics モジュールも **同じバージョン** でなければなりません。

   追加ノードのインストール前に、そのバージョンが既にデプロイされているモジュールのバージョンと一致していることを確認してください。デプロイされているモジュールのバージョンが[廃止されるか間も無く廃止される (`4.0` またはそれ以下)][versioning-policy]場合、すべてのモジュールを最新バージョンにアップグレードしてください。

   デプロイされた Wallarm フィルタリングノードイメージのバージョンは、Helm チャートの設定ファイルで指定されています → `wallarm.image.tag`。