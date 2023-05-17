20230414144046

// shortUrl API

// APIの移動中に、時間の秒は変化してしまい、smsIdが異なる値になってしまうので, gotMomentにmoment()を格納
TMN_Media4u_SendSMS[090 080ではじまる番号]
key   value
toNumber  secure.phoneNumber
textMessage  input.data.mirrorUrl || "https://catai.cc/service/#/17daa682-99b1-4a89-a4c5-b2bdd863dc19" || "message" + url.shortUrl
smsId      gotMoment + secure.phoneNumber.substr(3, 8)

Ddelay
key value
ms でしてい


TMN_Media4u_SendSMS_ResultCheck
key   value
smsId   gotMoment + secure.phoneNumber.substr(3, 8)

_result　の中身は 成功なら　”200\n重複不可”　　_reuslt.split(' ')　で 文字だけ取り出して比較に使う


//APIで送信したあと、 delay ようのＡＰＩを使用しないと、以下のような、”送信中”のステータスになってしまう また、１秒以内に、送信しても”重複”として扱われ送信は失敗する。
"送信APIの結果＞ 200",
"送信チェックAPIの結果＞ 200\n送信中"

// 1秒以内のとき
"送信APIの結果＞ 200",
"送信チェックAPIの結果＞ 200\n重複不可"


 // 　４秒 Delay させたあと
 "送信APIの結果＞ 200",
"送信チェックAPIの結果＞ 200\n送信済"

