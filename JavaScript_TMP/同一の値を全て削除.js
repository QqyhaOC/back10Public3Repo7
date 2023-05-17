let code="ーー150---11----あい漢字アイウエオ--------I\'M AmericanーーーSo I-------11";

;// RegExp >> 15011あい漢字アイウエオ11
console.log("RegExp >>",code.replace(/-|ー|[a-zA-Z]|\s|\'/g, ''))

// RegExp　\D >> 150111 数字以外に一致(\D)したものを replace
console.log("RegExp　\\D >>",code.replace(/\D/g, ''));

let eliminated= code.split('').filter(e => e != '-').join('');


// スペース
// \s ･･･ 空白文字
// [\s]+ ･･･ すべての空白文字

// 改行
// \r  \n  \r\n･･･ 改行
// [\r|\n|\r\n]+ ･･･ すべての改行

// タブ文字
// \t ･･･ タブ文字
// [\t]+ ･･･ すべての空白文字
