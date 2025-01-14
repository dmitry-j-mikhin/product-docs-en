[link-analyzing-vulns]:     analyze-vuln.md

[img-false-vuln-page]:       ../../images/user-guides/vulnerabilities/false-vuln-page.png

# 偽の脆弱性を扱う

[偽の陽性反応](../../about-wallarm/detecting-vulnerabilities.md#false-positives)は、正当なエンティティが脆弱性として判定される場合に発生します。

脆弱性を分析した後、脆弱性が偽の陽性反応であると結論付けることがあります。偽の陽性反応としてマークされた脆弱性は、適切なステータスに切り替わり、再チェックされません。

!!! info "検出された脆弱性が存在し、修正ができない場合"
    保護対象のアプリケーションに検出された脆弱性が存在するが修正できない場合は、 [**仮想パッチの作成**](../rules/vpatch-rule.md) ルールを設定することをお勧めします。このルールにより、検出されたタイプの脆弱性を悪用する攻撃をブロックし、インシデントのリスクを排除することができます。

## 脆弱性を偽の陽性反応としてマークする

脆弱性を偽の陽性反応としてマークするには、脆弱性メニューまたは所望の脆弱性のページで適切なボタンをクリックします。

![!脆弱性ページの偽の陽性反応][img-false-vuln-page]

Wallarmは、脆弱性を偽の陽性反応として再認定します。

## 偽の陽性反応のマークを削除する

偽の陽性反応としてマークされた脆弱性は、**閉じられた**タブに表示されます。偽の陽性反応のマークを削除するには、脆弱性カードを開いて**再開**をクリックしてください。

![!偽の脆弱性](../../images/user-guides/vulnerabilities/discard-false-vuln.png)

脆弱性はステータス **開いている**に切り替わり、Wallarmのツールで再チェックされます。