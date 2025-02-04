# マルチテナント概要

**マルチテナント**機能は、Wallarmを使用して複数の独立した企業インフラストラクチャまたは分離された環境を同時に保護することができます。

**テナント**は、以下のエンティティを表します：

* Wallarmをパートナーとして統合している場合の独立した企業（**クライアント**）。
* Wallarmをクライアントとして統合している場合の分離された環境。

--8<-- "../include-ja/waf/features/multi-tenancy/partner-client-term.md"

## マルチテナントが対処する問題

マルチテナント機能は、以下の問題に対処しています：

* **Wallarmのパートナーになる**。パートナーは、システムインフラストラクチャにフィルタリングノードをインストールして、攻撃緩和をクライアントに提供する組織です。

    各クライアントには、Wallarmコンソールで個別のアカウントが割り当てられ、すべてのアカウントデータが分離され、選択したユーザーのみがアクセスできるようになります。
* **保護された環境のデータを互いに分離する**。環境は、別々のアプリケーション、データセンター、API、本番環境、ステージング環境等となります。

    関連する問題例：

    * Wallarmノードは、分離されたチームが管理する本番環境とステージング環境に送られるリクエストをフィルタリングします。その要件は、特定の環境を管理するチームのみがそのデータにアクセスできるようにすることです。
    * Wallarmノードは、分離されたチームが管理する複数のデータセンターに展開され、それらは異なる地域にあるもので、一つはヨーロッパ、もう一つはアジアです。その要件は、特定のデータセンターを管理するユーザーのみがそのデータにアクセスできるようにすることです。

    各クライアントには、Wallarmコンソールで個別のアカウントが割り当てられ、すべてのアカウントデータが分離され、選択したユーザーのみがアクセスできるようになります。

## Wallarmコンポーネントのカスタマイズ

Wallarmは、Wallarm Consoleおよびその他のコンポーネントのカスタマイズを許可しています。マルチテナントを使用する場合、次のカスタマイズオプションが役立ちます：

* Wallarm Consoleのブランド化
* カスタムドメインでのWallarm Consoleのホスト
* クライアントや同僚からのメッセージを受信するための技術サポート用のメールアドレスの設定

## マルチテナント構成

マルチテナント機能はデフォルトでは非アクティブです。機能を有効にして構成するには：

1. サブスクリプションプランに**マルチテナントシステム**機能を追加するために [sales@wallarm.com](mailto:sales@wallarm.com) にリクエストを送信します。
2. Wallarm Consoleでテナントアカウントを[構成](configure-accounts.md)します。
3. マルチテナントWallarmノードを[展開および構成](deploy-multi-tenant-node.md)します。