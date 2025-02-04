					# フィルタリングノードのバージョニングポリシー

このポリシーは、さまざまなWallarmフィルタリングノードアーティファクトのバージョニング方法を説明しています。Linuxパッケージ、Dockerコンテナ、Helmチャートなどです。このドキュメントを使用して、インストール用のフィルタリングノードのバージョンを選択し、インストールされたパッケージのアップデートをスケジュールすることができます。

!!! info "アーティファクト"
    アーティファクトとは、Wallarmノードの開発結果で、プラットフォーム上のフィルタリングノードをインストールするために使用されます。例：Linuxパッケージ、Kong APIモジュール、Dockerコンテナなど。

## バージョンリスト

| ノードバージョン | リリース日   | サポート終了 |
|------------------|----------------|---------------|
|2.18および下位2.x|                | 2021年11月 |
| 3.6および下位3.x| 2021年10月   | 2022年11月 |
| 4.0              | 2022年6月      | 2023年2月 |
| 4.2              | 2022年8月    |               |
| 4.4              | 2022年11月  |               |
| 4.6              |2023年第1四半期|               |

## バージョン形式

Wallarmフィルタリングノードアーティファクトのバージョンには、次の形式があります。

```bash
<MAJOR_VERSION>.<MINOR_VERSION>.<PATCH_VERSION>[-<BUILD_NUMBER>]
```

| パラメーター                 | 説明                                                                                                                                                                                                                                                                                                         | 平均リリース率          |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `<MAJOR_VERSION>`              | ウォームノードの主要バージョン:<ul><li>コンポーネントの大幅な改訂</li><li>非互換性のある変更</li></ul>初期値は `2`。値は1ずつ増加します。例：`3.6.0`、`4.0.0`。                                                                                                                    | リリース予定なし              |
| `<MINOR_VERSION>`              | ウォームノードのマイナーバージョン:<ul><li>新しい製品機能</li><li>重要なバグ修正</li><li>その他の互換性のある変更</li></ul>値は2ずつ増加します。例：`4.0`、`4.2`。                                                                                                             | 1四半期ごと                         |
| `<PATCH_VERSION>`              | ノードパッチバージョン:<ul><li>マイナーバグ修正</li><li>特別要求後に追加された新機能</li></ul>初期値は `0`。値は1ずつ増加します。例：`4.2.0`、`4.2.1`。                                                                                                                                     | 1か月ごと                        |
| `<BUILD_NUMBER>` (オプション) | ノードビルドバージョン。値は、使用されるパッケージビルドプラットフォームによって自動的に割り当てられます。手動プロセスでビルドされたアーティファクトには値が割り当てられません。<br />値は1ずつ増加します。例：`4.2.0-1`、`4.2.0-2`。最初のビルドが失敗した場合、ビルドが再実行され、値が増加します。 | 新しい`<PATCH_VERSION>`がリリースされるごとに |

パッケージやイメージをダウンロードするときは、異なるWallarmノードのバージョン形式を使用することをお勧めします。フォーマットは、[Wallarmノードのインストール形式](../admin-en/supported-platforms.md)によって異なります。

* `<MAJOR_VERSION>.<MINOR_VERSION>` Linuxパッケージ用
* `<MAJOR_VERSION>.<MINOR_VERSION>.<PATCH_VERSION>` Helmチャート用
* `<MAJOR_VERSION>.<MINOR_VERSION>.<PATCH_VERSION>[-<BUILD_NUMBER>]` Dockerおよびクラウドイメージ用

    Wallarm Dockerイメージをプルする際には、フィルタリングノードのバージョンを`<MAJOR_VERSION>.<MINOR_VERSION>`の形式で指定することもできます。プルされたフィルタリングノードのバージョンには、最新のパッチバージョンの変更が含まれるため、異なる時期にプルされた同じ`<MAJOR_VERSION>.<MINOR_VERSION>`イメージバージョンの動作は異なる場合があります。

Wallarmノードパッケージのバージョンは、同じアーティファクト内でも異なる場合があります。例えば、1つのパッケージだけを更新する必要がある場合、残りのパッケージは前のバージョンを維持します。

## バージョンサポート

Wallarmは、以下の方法でフィルタリングノードの最新3バージョンのみをサポートしています。

* 最新バージョン（例：4.2）の場合：パッケージのダウンロードを許可し、バグ修正をリリースし、使用されているバージョンで脆弱性が検出された場合はサードパーティのコンポーネントを更新します。特別な要求があった場合に新機能をリリースすることがあります。
* 前のバージョン（例：4.0）の場合：パッケージのダウンロードを許可し、バグ修正をリリースします。
* 3番目の利用可能なバージョン（例：3.6）の場合：最新バージョンのリリース日から3か月間、パッケージのダウンロードとバグ修正のリリースを許可します。3か月後にバージョンが廃止されます。

廃止されたバージョンのノードアーティファクトは、ダウンロードとインストールが可能ですが、廃止されたバージョンにはバグ修正や新機能はリリースされません。

フィルタリングノードを初めてインストールする場合は、最新の利用可能なバージョンを使用することをお勧めします。すでにノードがインストールされている環境に追加のフィルタリングノードをインストールする場合は、すべてのインストールで同じバージョンを使用して完全互換性を確保することをお勧めします。

## NGINXのアップグレード

ほとんどのWallarmモジュールは、独自のバージョンのNGINXコンポーネントとともに配布されます。WallarmモジュールをNGINXコンポーネントの最新バージョンで動作させるためには、次のように更新します。

* WallarmのDEBおよびRPMパッケージは、公式のNGINXおよびNGINX Plusモジュールに基づいています。新しいバージョンのNGINX/NGINX Plusがリリースされると、Wallarmはそのバージョンを1日以内に更新することを約束します。Wallarmは、この更新をサポートされているノードバージョンの新しいマイナー/パッチバージョンとして公開します。
* Wallarm Ingress Controllerは、[Community Ingress NGINX Controller](https://github.com/kubernetes/ingress-nginx)を基にしています。新しいバージョンのCommunity Ingress NGINX Controllerがリリースされると、Wallarmは、そのバージョンを次の30日以内に更新することを約束します。Wallarmは、この更新を最新のIngressコントローラーの新しいマイナーバージョンとして公開します。

## バージョン更新

フィルタリングノードのインストール、更新、または製品の設定時には、最新の利用可能なバージョンを使用することが想定されています。Wallarmノードの指示には、最新の利用可能なパッチとビルドを自動的にインストールするコマンドが記載されています。

### 新バージョン通知

Wallarmは、新しいメジャーおよびマイナーバージョンに関する情報を以下のソースで公開します。

* パブリックドキュメント
* [ニュースポータル](https://changelog.wallarm.com/)
* Wallarmコンソール

    ![!Wallarmコンソールでの新バージョンに関する通知](../images/updating-migrating/wallarm-console-new-version-notification.png)

Wallarmノードのメジャーおよびマイナーバージョンの利用可能な更新とWallarmノードのパッチバージョンに関する情報も、Wallarm Console → **ノード**で一般的なノードに表示されます。各パッケージには、**最新**のステータスまたは利用可能な更新のリストがあります。例えば、最新のコンポーネントバージョンがインストールされたフィルタリングノードのカードは次のようになります。

![!ノードカード](../images/user-guides/nodes/view-regular-node-comp-vers.png)

### 更新手順

新しいフィルタリングノードのメジャーバージョンとマイナーバージョンのリリースとともに、インストール手順も公開されます。インストール済みのアーティファクトを更新する方法については、「更新と移行」の対応する手順を使用してください。