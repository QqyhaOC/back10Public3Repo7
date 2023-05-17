    var str = 'a, div, p';
    var result = str.replace( /(a|p|div)/g, '<$&>' );

    console.log( result );
    // 出力 ＞＞　    <a>, <div>, <p>


