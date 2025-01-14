[link-false-vulns]: false-vuln.md

[img-check-vulns]: ../../images/user-guides/vulnerabilities/check-vuln.png
[img-switch-vulns]: ../../images/user-guides/vulnerabilities/switch-tab-status.png

[glossary-vulnerability]: ../../glossary-en.md#vulnerability

# 脆弱性の確認

Wallarm Console の **脆弱性** セクションで、Wallarm によって検出された[脆弱性][glossary-vulnerability]を確認することができます。

デフォルトでは、すべての脆弱性がリスクレベルごとにグループ分けされています。グループ内のリストは、脆弱性の発見日によって並べ替えられています。

![!Vulnerabilitiesタブ][img-check-vulns]

Wallarmは、発見された脆弱性の履歴を保存し、定期的に確認します。開いた状態と閉じた状態の両方です。閉じた脆弱性が確認の結果として開くと、対応する通知が届きます。

脆弱性をクリックすると、変更ログが表示されます。

## リスクや日付で脆弱性を並べ替える

以下の基準で脆弱性を並べ替えることができます：
* リスク：
    * 高い順
    * 低い順
* 日付
    * 最新から
    * 最も古いものから

リスクレベルで脆弱性を絞り込むには、次のボタンのいずれかを押します：
* *すべて* — すべてのリスクレベルグループから脆弱性を表示
* *高リスク* — 高リスクの脆弱性を表示
* *中リスク* — 中リスクの脆弱性を表示
* *低リスク* — 低リスクの脆弱性を表示

## アクティブとクローズドの脆弱性をフィルタリングする

*アクティブ*をクリックして、アクティブな脆弱性を表示します。

*クローズド*をクリックして、クローズされた脆弱性を表示します。

![!Vulnerabilitiesのフィルタリングタブ][img-switch-vulns]

以下のセレクターをクリックすることで、閉じられた脆弱性をフィルタリングできます。

* *すべて* : 閉じた脆弱性と誤った脆弱性のリスト。
* *修正済み* : 修正された脆弱性のみのリスト。
* *誤報* : 誤った脆弱性だけのリスト。