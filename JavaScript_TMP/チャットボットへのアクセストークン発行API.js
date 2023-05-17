
ESDノード
ESD名 : Warranty_temp_receipt
//　createした後、自動で発行される _id プロパティを保存
local.esdId = _result._id

APIノード
API名：authToken[サービスアクセス用トークン発行API]
token= _result.result

url='https://catai.cc/service/#/' + _projectId + '?token=' + token + '&input={"text":"","data":{"inheritKey":"' + encrypt(local.esdId) + '","timing":"in_the_middle"}}'

// https://catai.cc/service/#/2e06a402-1d30-4eed-97e5-f99201a61b50?input={"text":"","data":{"inheritKey":"Kvi+h1EdKw/mX37GEqM3Tji9tApdQwJFAND5RDC1Dz4=|　　0v2SV8OCW0VXuNqEizkPTw==","timing":"in_the_middle" }}

/*   << 疑問 >>
 *　・　token を発行しているように見えない '?token='が ないという意味
 *  ・　OUTPUTノードで終話したあとも永遠と チャットを続けることができる
 *  ・　encryptedESDId  = encrypt(local.esdId)　のように 暗号化したものを変数にいれて url変数に使おうとしたらできなかった。
 */

