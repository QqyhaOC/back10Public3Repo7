.map ( e=>
            { return `<button type="button" style="color:white; background-color:${e.backgroundcolor}; width:33%; height:30px; cursor:pointer; vertical-align:top;" cg-action="postback" cg-data="${e.data}" cg-label="${e.label}">${e.title}</button>`}).join(' ')}

<div style="padding=left:10px;">
${ context.controls.map ( e=> { return `<button type="button" style="color:white; background-color:${e.backgroundcolor}; width:33%; height:30px; cursor:pointer; vertical-align:top;" cg-action="postback" cg-data="${e.data}" cg-label="${e.label}">${e.title}</button>`} ) }  </div>


 <div class="scroll-container">
  <button class="scroll-page" id="page-1">眞壁</button>
  <button class="scroll-page" id="page-2">伊賀頼</button>
  <button class="scroll-page" id="page-3">京洛</button>
</div>

${ context.entityPlural.map ( e=> { return `<button type="button" style="color:black; background-color:white; width:33%; height:30px; cursor:pointer; vertical-align:top;" cg-action="postback" cg-data="${e.value}" cg-label="${e.value}">${e.value}</button>`})}


// 後払いホワイトガードダイエット美容健康子供用スキンリフトスキンヒーロホワイトガード
