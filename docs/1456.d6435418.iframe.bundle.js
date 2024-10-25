"use strict";(self.webpackChunkairview_mdx=self.webpackChunkairview_mdx||[]).push([[1456],{"./node_modules/mermaid/dist/createText-1f5f8f92.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createText});__webpack_require__("./node_modules/d3/src/index.js");var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/mermaid/dist/commonDb-573409be.js"),_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/mermaid/dist/mermaidAPI-3ae0f2f0.js"),_khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/mermaid/node_modules/@khanacademy/simple-markdown/dist/es/index.js");function markdownToLines(markdown){const preprocessedMarkdown=function preprocessMarkdown(markdown){return markdown.replace(/\n{2,}/g,"\n").replace(/^\s+/gm,"")}(markdown),syntaxTree=(0,_khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__.Z.defaultBlockParse)(preprocessedMarkdown);let lines=[[]],currentLine=0;function processNode(node,parentType){if("text"===node.type){node.content.split("\n").forEach(((textLine,index)=>{0!==index&&(currentLine++,lines.push([])),textLine.split(" ").forEach((word=>{word&&lines[currentLine].push({content:word,type:parentType||"normal"})}))}))}else"strong"!==node.type&&"em"!==node.type||node.content.forEach((contentNode=>{processNode(contentNode,node.type)}))}return syntaxTree.forEach((treeNode=>{"paragraph"===treeNode.type&&treeNode.content.forEach((contentNode=>{processNode(contentNode)}))})),lines}function createTspan(textElement,lineIndex,lineHeight){return textElement.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",lineIndex*lineHeight-.1+"em").attr("dy",lineHeight+"em")}function updateTextContentAndStyles(tspan,wrappedLine){tspan.text(""),wrappedLine.forEach(((word,index)=>{const innerTspan=tspan.append("tspan").attr("font-style","em"===word.type?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight","strong"===word.type?"bold":"normal");0===index?innerTspan.text(word.content):innerTspan.text(" "+word.content)}))}const createText=(el,text="",{style="",isTitle=!1,classes="",useHtmlLabels=!0,isNode=!0,width,addSvgBackground=!1}={})=>{if(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_2__.l.info("createText",text,style,isTitle,classes,useHtmlLabels,isNode,addSvgBackground),useHtmlLabels){const htmlText=function markdownToHTML(markdown){return(0,_khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_1__.Z.defaultBlockParse)(markdown).map((function output(node){return"text"===node.type?node.content.replace(/\n/g,"<br/>"):"strong"===node.type?`<strong>${node.content.map(output).join("")}</strong>`:"em"===node.type?`<em>${node.content.map(output).join("")}</em>`:"paragraph"===node.type?`<p>${node.content.map(output).join("")}</p>`:""})).join("")}(text);let vertexNode=function addHtmlSpan(element,node,width,classes){const fo=element.append("foreignObject"),div=fo.append("xhtml:div"),label=node.label,labelClass=node.isNode?"nodeLabel":"edgeLabel";div.html(`<span class="${labelClass} ${classes}" `+(node.labelStyle?'style="'+node.labelStyle+'"':"")+">"+label+"</span>"),function applyStyle(dom,styleFn){styleFn&&dom.attr("style",styleFn)}(div,node.labelStyle),div.style("display","table-cell"),div.style("white-space","nowrap"),div.style("max-width",width+"px"),div.attr("xmlns","http://www.w3.org/1999/xhtml");let bbox=div.node().getBoundingClientRect();return bbox.width===width&&(div.style("display","table"),div.style("white-space","break-spaces"),div.style("width",width+"px"),bbox=div.node().getBoundingClientRect()),fo.style("width",bbox.width),fo.style("height",bbox.height),fo.node()}(el,{isNode,label:(0,_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_3__.d)(htmlText).replace(/fa[blrs]?:fa-[\w-]+/g,(s=>`<i class='${s.replace(":"," ")}'></i>`)),labelStyle:style.replace("fill:","color:")},width,classes);return vertexNode}{const structuredText=markdownToLines(text),special=['"',"'",".",",",":",";","!","?","(",")","[","]","{","}"];let lastWord;structuredText.forEach((line=>{line.forEach((word=>{special.includes(word.content)&&lastWord&&(lastWord.content+=word.content,word.content=""),lastWord=word}))}));const svgLabel=function createFormattedText(width,g,structuredText,addBackground=!1){const labelGroup=g.append("g");let bkg=labelGroup.insert("rect").attr("class","background");const textElement=labelGroup.append("text").attr("y","-10.1");let lineIndex=-1;if(structuredText.forEach((line=>{lineIndex++;let currentWord,tspan=createTspan(textElement,lineIndex,1.1),words=[...line].reverse(),wrappedLine=[];for(;words.length;)currentWord=words.pop(),wrappedLine.push(currentWord),updateTextContentAndStyles(tspan,wrappedLine),tspan.node().getComputedTextLength()>width&&(wrappedLine.pop(),words.push(currentWord),updateTextContentAndStyles(tspan,wrappedLine),wrappedLine=[],lineIndex++,tspan=createTspan(textElement,lineIndex,1.1))})),addBackground){const bbox=textElement.node().getBBox(),padding=2;return bkg.attr("x",-padding).attr("y",-padding).attr("width",bbox.width+2*padding).attr("height",bbox.height+2*padding),labelGroup.node()}return textElement.node()}(width,el,structuredText,addSvgBackground);return svgLabel}}},"./node_modules/mermaid/node_modules/@khanacademy/simple-markdown/dist/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SimpleMarkdown});var TABLE_ROW_SEPARATOR_TRIM,TABLE_CELL_END_TRIM,TABLE_RIGHT_ALIGN,TABLE_CENTER_ALIGN,TABLE_LEFT_ALIGN,parseTableAlignCapture,parseTableRow,parseTable,CR_NEWLINE_R=/\r\n?/g,TAB_R=/\t/g,FORMFEED_R=/\f/g,preprocess=function preprocess(source){return source.replace(CR_NEWLINE_R,"\n").replace(FORMFEED_R,"").replace(TAB_R,"    ")},populateInitialState=function populateInitialState(givenState,defaultState){var state=givenState||{};if(null!=defaultState)for(var prop in defaultState)Object.prototype.hasOwnProperty.call(defaultState,prop)&&(state[prop]=defaultState[prop]);return state},parserFor=function parserFor(rules,defaultState){var latestState,ruleList=Object.keys(rules).filter((function(type){var rule=rules[type];if(null==rule||null==rule.match)return!1;var order=rule.order;return"number"==typeof order&&isFinite(order)||"undefined"==typeof console||console.warn("simple-markdown: Invalid order for rule `"+type+"`: "+String(order)),!0}));ruleList.sort((function(typeA,typeB){var ruleA=rules[typeA],ruleB=rules[typeB],orderA=ruleA.order,orderB=ruleB.order;if(orderA!==orderB)return orderA-orderB;var secondaryOrderA=ruleA.quality?0:1,secondaryOrderB=ruleB.quality?0:1;return secondaryOrderA!==secondaryOrderB?secondaryOrderA-secondaryOrderB:typeA<typeB?-1:typeA>typeB?1:0}));var nestedParse=function nestedParse(source,state){var result=[];for(latestState=state=state||latestState;source;){var ruleType=null,rule=null,capture=null,quality=NaN,i=0,currRuleType=ruleList[0],currRule=rules[currRuleType];do{var currOrder=currRule.order,prevCaptureStr=null==state.prevCapture?"":state.prevCapture[0],currCapture=currRule.match(source,state,prevCaptureStr);if(currCapture){var currQuality=currRule.quality?currRule.quality(currCapture,state,prevCaptureStr):0;currQuality<=quality||(ruleType=currRuleType,rule=currRule,capture=currCapture,quality=currQuality)}i++,currRuleType=ruleList[i],currRule=rules[currRuleType]}while(currRule&&(!capture||currRule.order===currOrder&&currRule.quality));if(null==rule||null==capture)throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '"+ruleList[ruleList.length-1]+"'. It seems to not match the following source:\n"+source);if(capture.index)throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");var parsed=rule.parse(capture,nestedParse,state);if(Array.isArray(parsed))Array.prototype.push.apply(result,parsed);else{if(null==parsed||"object"!=typeof parsed)throw new Error("parse() function returned invalid parse result: '".concat(parsed,"'"));null==parsed.type&&(parsed.type=ruleType),result.push(parsed)}state.prevCapture=capture,source=source.substring(state.prevCapture[0].length)}return result};return function outerParse(source,state){return(latestState=populateInitialState(state,defaultState)).inline||latestState.disableAutoBlockNewlines||(source+="\n\n"),latestState.prevCapture=null,nestedParse(preprocess(source),latestState)}},inlineRegex=function inlineRegex(regex){var match=function match(source,state,prevCapture){return state.inline?regex.exec(source):null};return match.regex=regex,match},blockRegex=function blockRegex(regex){var match=function match(source,state){return state.inline?null:regex.exec(source)};return match.regex=regex,match},anyScopeRegex=function anyScopeRegex(regex){var match=function match(source,state){return regex.exec(source)};return match.regex=regex,match},TYPE_SYMBOL="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,reactElement=function reactElement(type,key,props){return{$$typeof:TYPE_SYMBOL,type,key:null==key?void 0:key,ref:null,props,_owner:null}},htmlTag=function htmlTag(tagName,content,attributes,isClosed){attributes=attributes||{},isClosed=void 0===isClosed||isClosed;var attributeString="";for(var attr in attributes){var attribute=attributes[attr];Object.prototype.hasOwnProperty.call(attributes,attr)&&attribute&&(attributeString+=" "+sanitizeText(attr)+'="'+sanitizeText(attribute)+'"')}var unclosedTag="<"+tagName+attributeString+">";return isClosed?unclosedTag+content+"</"+tagName+">":unclosedTag},EMPTY_PROPS={},sanitizeUrl=function sanitizeUrl(url){if(null==url)return null;try{var prot=new URL(url,"https://localhost").protocol;if(0===prot.indexOf("javascript:")||0===prot.indexOf("vbscript:")||0===prot.indexOf("data:"))return null}catch(e){return null}return url},SANITIZE_TEXT_R=/[<>&"']/g,SANITIZE_TEXT_CODES={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#96;"},sanitizeText=function sanitizeText(text){return String(text).replace(SANITIZE_TEXT_R,(function(chr){return SANITIZE_TEXT_CODES[chr]}))},UNESCAPE_URL_R=/\\([^0-9A-Za-z\s])/g,unescapeUrl=function unescapeUrl(rawUrlString){return rawUrlString.replace(UNESCAPE_URL_R,"$1")},parseInline=function parseInline(parse,content,state){var isCurrentlyInline=state.inline||!1;state.inline=!0;var result=parse(content,state);return state.inline=isCurrentlyInline,result},parseCaptureInline=function parseCaptureInline(capture,parse,state){return{content:parseInline(parse,capture[1],state)}},ignoreCapture=function ignoreCapture(){return{}},LIST_ITEM_PREFIX_R=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),LIST_ITEM_R=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\n|$)","gm"),BLOCK_END_R=/\n{2,}$/,INLINE_CODE_ESCAPE_BACKTICKS_R=/^ (?= *`)|(` *) $/g,LIST_BLOCK_END_R=BLOCK_END_R,LIST_ITEM_END_R=/ *\n+$/,LIST_R=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) )\\n*|\\s*\n*$)"),LIST_LOOKBEHIND_R=/(?:^|\n)( *)$/,TABLES=(TABLE_ROW_SEPARATOR_TRIM=/^ *\| *| *\| *$/g,TABLE_CELL_END_TRIM=/ *$/,TABLE_RIGHT_ALIGN=/^ *-+: *$/,TABLE_CENTER_ALIGN=/^ *:-+: *$/,TABLE_LEFT_ALIGN=/^ *:-+ *$/,parseTableAlignCapture=function parseTableAlignCapture(alignCapture){return TABLE_RIGHT_ALIGN.test(alignCapture)?"right":TABLE_CENTER_ALIGN.test(alignCapture)?"center":TABLE_LEFT_ALIGN.test(alignCapture)?"left":null},parseTableRow=function parseTableRow(source,parse,state,trimEndSeparators){var prevInTable=state.inTable;state.inTable=!0;var tableRow=parse(source.trim(),state);state.inTable=prevInTable;var cells=[[]];return tableRow.forEach((function(node,i){"tableSeparator"===node.type?(!trimEndSeparators||0!==i&&i!==tableRow.length-1)&&cells.push([]):("text"!==node.type||null!=tableRow[i+1]&&"tableSeparator"!==tableRow[i+1].type||(node.content=node.content.replace(TABLE_CELL_END_TRIM,"")),cells[cells.length-1].push(node))})),cells},{parseTable:(parseTable=function parseTable(trimEndSeparators){return function(capture,parse,state){state.inline=!0;var header=parseTableRow(capture[1],parse,state,trimEndSeparators),align=function parseTableAlign(source,parse,state,trimEndSeparators){return trimEndSeparators&&(source=source.replace(TABLE_ROW_SEPARATOR_TRIM,"")),source.trim().split("|").map(parseTableAlignCapture)}(capture[2],0,0,trimEndSeparators),cells=function parseTableCells(source,parse,state,trimEndSeparators){return source.trim().split("\n").map((function(rowText){return parseTableRow(rowText,parse,state,trimEndSeparators)}))}(capture[3],parse,state,trimEndSeparators);return state.inline=!1,{type:"table",header,align,cells}}})(!0),parseNpTable:parseTable(!1),TABLE_REGEX:/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,NPTABLE_REGEX:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/}),LINK_INSIDE="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",LINK_HREF_AND_TITLE="\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",AUTOLINK_MAILTO_CHECK_R=/mailto:/i,parseRef=function parseRef(capture,state,refNode){var ref=(capture[2]||capture[1]).replace(/\s+/g," ").toLowerCase();if(state._defs&&state._defs[ref]){var def=state._defs[ref];refNode.target=def.target,refNode.title=def.title}return state._refs=state._refs||{},state._refs[ref]=state._refs[ref]||[],state._refs[ref].push(refNode),refNode},currOrder=0,defaultRules={Array:{react:function react(arr,output,state){for(var oldKey=state.key,result=[],i=0,key=0;i<arr.length;i++,key++){state.key=""+i;var node=arr[i];if("text"===node.type)for(node={type:"text",content:node.content};i+1<arr.length&&"text"===arr[i+1].type;i++)node.content+=arr[i+1].content;result.push(output(node,state))}return state.key=oldKey,result},html:function html(arr,output,state){for(var result="",i=0;i<arr.length;i++){var node=arr[i];if("text"===node.type)for(node={type:"text",content:node.content};i+1<arr.length&&"text"===arr[i+1].type;i++)node.content+=arr[i+1].content;result+=output(node,state)}return result}},heading:{order:currOrder++,match:blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),parse:function(_parse){function parse(_x,_x2,_x3){return _parse.apply(this,arguments)}return parse.toString=function(){return _parse.toString()},parse}((function(capture,parse,state){return{level:capture[1].length,content:parseInline(parse,capture[2].trim(),state)}})),react:function react(node,output,state){return reactElement("h"+node.level,state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("h"+node.level,output(node.content,state))}},nptable:{order:currOrder++,match:blockRegex(TABLES.NPTABLE_REGEX),parse:TABLES.parseNpTable,react:null,html:null},lheading:{order:currOrder++,match:blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),parse:function(_parse2){function parse(_x4,_x5,_x6){return _parse2.apply(this,arguments)}return parse.toString=function(){return _parse2.toString()},parse}((function(capture,parse,state){return{type:"heading",level:"="===capture[2]?1:2,content:parseInline(parse,capture[1],state)}})),react:null,html:null},hr:{order:currOrder++,match:blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/),parse:ignoreCapture,react:function react(node,output,state){return reactElement("hr",state.key,EMPTY_PROPS)},html:function html(node,output,state){return"<hr>"}},codeBlock:{order:currOrder++,match:blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),parse:function(_parse3){function parse(_x7,_x8,_x9){return _parse3.apply(this,arguments)}return parse.toString=function(){return _parse3.toString()},parse}((function(capture,parse,state){return{lang:void 0,content:capture[0].replace(/^    /gm,"").replace(/\n+$/,"")}})),react:function react(node,output,state){var className=node.lang?"markdown-code-"+node.lang:void 0;return reactElement("pre",state.key,{children:reactElement("code",null,{className,children:node.content})})},html:function html(node,output,state){var className=node.lang?"markdown-code-"+node.lang:void 0,codeBlock=htmlTag("code",sanitizeText(node.content),{class:className});return htmlTag("pre",codeBlock)}},fence:{order:currOrder++,match:blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),parse:function(_parse4){function parse(_x10,_x11,_x12){return _parse4.apply(this,arguments)}return parse.toString=function(){return _parse4.toString()},parse}((function(capture,parse,state){return{type:"codeBlock",lang:capture[2]||void 0,content:capture[3]}})),react:null,html:null},blockQuote:{order:currOrder++,match:blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),parse:function(_parse5){function parse(_x13,_x14,_x15){return _parse5.apply(this,arguments)}return parse.toString=function(){return _parse5.toString()},parse}((function(capture,parse,state){return{content:parse(capture[0].replace(/^ *> ?/gm,""),state)}})),react:function react(node,output,state){return reactElement("blockquote",state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("blockquote",output(node.content,state))}},list:{order:currOrder++,match:function match(source,state){var prevCaptureStr=null==state.prevCapture?"":state.prevCapture[0],isStartOfLineCapture=LIST_LOOKBEHIND_R.exec(prevCaptureStr),isListBlock=state._list||!state.inline;return isStartOfLineCapture&&isListBlock?(source=isStartOfLineCapture[1]+source,LIST_R.exec(source)):null},parse:function(_parse6){function parse(_x16,_x17,_x18){return _parse6.apply(this,arguments)}return parse.toString=function(){return _parse6.toString()},parse}((function(capture,parse,state){var bullet=capture[2],ordered=bullet.length>1,start=ordered?+bullet:void 0,items=capture[0].replace(LIST_BLOCK_END_R,"\n").match(LIST_ITEM_R),lastItemWasAParagraph=!1;return{ordered,start,items:items.map((function(item,i){var prefixCapture=LIST_ITEM_PREFIX_R.exec(item),space=prefixCapture?prefixCapture[0].length:0,spaceRegex=new RegExp("^ {1,"+space+"}","gm"),content=item.replace(spaceRegex,"").replace(LIST_ITEM_PREFIX_R,""),isLastItem=i===items.length-1,thisItemIsAParagraph=-1!==content.indexOf("\n\n")||isLastItem&&lastItemWasAParagraph;lastItemWasAParagraph=thisItemIsAParagraph;var adjustedContent,oldStateInline=state.inline,oldStateList=state._list;state._list=!0,thisItemIsAParagraph?(state.inline=!1,adjustedContent=content.replace(LIST_ITEM_END_R,"\n\n")):(state.inline=!0,adjustedContent=content.replace(LIST_ITEM_END_R,""));var result=parse(adjustedContent,state);return state.inline=oldStateInline,state._list=oldStateList,result}))}})),react:function react(node,output,state){var ListWrapper=node.ordered?"ol":"ul";return reactElement(ListWrapper,state.key,{start:node.start,children:node.items.map((function(item,i){return reactElement("li",""+i,{children:output(item,state)})}))})},html:function html(node,output,state){var listItems=node.items.map((function(item){return htmlTag("li",output(item,state))})).join(""),listTag=node.ordered?"ol":"ul",attributes={start:node.start};return htmlTag(listTag,listItems,attributes)}},def:{order:currOrder++,match:blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),parse:function(_parse7){function parse(_x19,_x20,_x21){return _parse7.apply(this,arguments)}return parse.toString=function(){return _parse7.toString()},parse}((function(capture,parse,state){var def=capture[1].replace(/\s+/g," ").toLowerCase(),target=capture[2],title=capture[3];return state._refs&&state._refs[def]&&state._refs[def].forEach((function(refNode){refNode.target=target,refNode.title=title})),state._defs=state._defs||{},state._defs[def]={target,title},{def,target,title}})),react:function react(){return null},html:function html(){return""}},table:{order:currOrder++,match:blockRegex(TABLES.TABLE_REGEX),parse:TABLES.parseTable,react:function react(node,output,state){var getStyle=function getStyle(colIndex){return null==node.align[colIndex]?{}:{textAlign:node.align[colIndex]}},headers=node.header.map((function(content,i){return reactElement("th",""+i,{style:getStyle(i),scope:"col",children:output(content,state)})})),rows=node.cells.map((function(row,r){return reactElement("tr",""+r,{children:row.map((function(content,c){return reactElement("td",""+c,{style:getStyle(c),children:output(content,state)})}))})}));return reactElement("table",state.key,{children:[reactElement("thead","thead",{children:reactElement("tr",null,{children:headers})}),reactElement("tbody","tbody",{children:rows})]})},html:function html(node,output,state){var getStyle=function getStyle(colIndex){return null==node.align[colIndex]?"":"text-align:"+node.align[colIndex]+";"},headers=node.header.map((function(content,i){return htmlTag("th",output(content,state),{style:getStyle(i),scope:"col"})})).join(""),rows=node.cells.map((function(row){var cols=row.map((function(content,c){return htmlTag("td",output(content,state),{style:getStyle(c)})})).join("");return htmlTag("tr",cols)})).join(""),thead=htmlTag("thead",htmlTag("tr",headers)),tbody=htmlTag("tbody",rows);return htmlTag("table",thead+tbody)}},newline:{order:currOrder++,match:blockRegex(/^(?:\n *)*\n/),parse:ignoreCapture,react:function react(node,output,state){return"\n"},html:function html(node,output,state){return"\n"}},paragraph:{order:currOrder++,match:blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),parse:parseCaptureInline,react:function react(node,output,state){return reactElement("div",state.key,{className:"paragraph",children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("div",output(node.content,state),{class:"paragraph"})}},escape:{order:currOrder++,match:inlineRegex(/^\\([^0-9A-Za-z\s])/),parse:function(_parse8){function parse(_x22,_x23,_x24){return _parse8.apply(this,arguments)}return parse.toString=function(){return _parse8.toString()},parse}((function(capture,parse,state){return{type:"text",content:capture[1]}})),react:null,html:null},tableSeparator:{order:currOrder++,match:function match(source,state){return state.inTable?/^ *\| */.exec(source):null},parse:function parse(){return{type:"tableSeparator"}},react:function react(){return" | "},html:function html(){return" &vert; "}},autolink:{order:currOrder++,match:inlineRegex(/^<([^: >]+:\/[^ >]+)>/),parse:function(_parse9){function parse(_x25,_x26,_x27){return _parse9.apply(this,arguments)}return parse.toString=function(){return _parse9.toString()},parse}((function(capture,parse,state){return{type:"link",content:[{type:"text",content:capture[1]}],target:capture[1]}})),react:null,html:null},mailto:{order:currOrder++,match:inlineRegex(/^<([^ >]+@[^ >]+)>/),parse:function(_parse10){function parse(_x28,_x29,_x30){return _parse10.apply(this,arguments)}return parse.toString=function(){return _parse10.toString()},parse}((function(capture,parse,state){var address=capture[1],target=capture[1];return AUTOLINK_MAILTO_CHECK_R.test(target)||(target="mailto:"+target),{type:"link",content:[{type:"text",content:address}],target}})),react:null,html:null},url:{order:currOrder++,match:inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),parse:function(_parse11){function parse(_x31,_x32,_x33){return _parse11.apply(this,arguments)}return parse.toString=function(){return _parse11.toString()},parse}((function(capture,parse,state){return{type:"link",content:[{type:"text",content:capture[1]}],target:capture[1],title:void 0}})),react:null,html:null},link:{order:currOrder++,match:inlineRegex(new RegExp("^\\[("+LINK_INSIDE+")\\]\\("+LINK_HREF_AND_TITLE+"\\)")),parse:function(_parse12){function parse(_x34,_x35,_x36){return _parse12.apply(this,arguments)}return parse.toString=function(){return _parse12.toString()},parse}((function(capture,parse,state){return{content:parse(capture[1],state),target:unescapeUrl(capture[2]),title:capture[3]}})),react:function react(node,output,state){return reactElement("a",state.key,{href:sanitizeUrl(node.target),title:node.title,children:output(node.content,state)})},html:function html(node,output,state){var attributes={href:sanitizeUrl(node.target),title:node.title};return htmlTag("a",output(node.content,state),attributes)}},image:{order:currOrder++,match:inlineRegex(new RegExp("^!\\[("+LINK_INSIDE+")\\]\\("+LINK_HREF_AND_TITLE+"\\)")),parse:function(_parse13){function parse(_x37,_x38,_x39){return _parse13.apply(this,arguments)}return parse.toString=function(){return _parse13.toString()},parse}((function(capture,parse,state){return{alt:capture[1],target:unescapeUrl(capture[2]),title:capture[3]}})),react:function react(node,output,state){return reactElement("img",state.key,{src:sanitizeUrl(node.target),alt:node.alt,title:node.title})},html:function html(node,output,state){var attributes={src:sanitizeUrl(node.target),alt:node.alt,title:node.title};return htmlTag("img","",attributes,!1)}},reflink:{order:currOrder++,match:inlineRegex(new RegExp("^\\[("+LINK_INSIDE+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(_parse14){function parse(_x40,_x41,_x42){return _parse14.apply(this,arguments)}return parse.toString=function(){return _parse14.toString()},parse}((function(capture,parse,state){return parseRef(capture,state,{type:"link",content:parse(capture[1],state)})})),react:null,html:null},refimage:{order:currOrder++,match:inlineRegex(new RegExp("^!\\[("+LINK_INSIDE+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(_parse15){function parse(_x43,_x44,_x45){return _parse15.apply(this,arguments)}return parse.toString=function(){return _parse15.toString()},parse}((function(capture,parse,state){return parseRef(capture,state,{type:"image",alt:capture[1]})})),react:null,html:null},em:{order:currOrder,match:inlineRegex(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),quality:function quality(capture){return capture[0].length+.2},parse:function(_parse16){function parse(_x46,_x47,_x48){return _parse16.apply(this,arguments)}return parse.toString=function(){return _parse16.toString()},parse}((function(capture,parse,state){return{content:parse(capture[2]||capture[1],state)}})),react:function react(node,output,state){return reactElement("em",state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("em",output(node.content,state))}},strong:{order:currOrder,match:inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),quality:function quality(capture){return capture[0].length+.1},parse:parseCaptureInline,react:function react(node,output,state){return reactElement("strong",state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("strong",output(node.content,state))}},u:{order:currOrder++,match:inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),quality:function quality(capture){return capture[0].length},parse:parseCaptureInline,react:function react(node,output,state){return reactElement("u",state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("u",output(node.content,state))}},del:{order:currOrder++,match:inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),parse:parseCaptureInline,react:function react(node,output,state){return reactElement("del",state.key,{children:output(node.content,state)})},html:function html(node,output,state){return htmlTag("del",output(node.content,state))}},inlineCode:{order:currOrder++,match:inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/),parse:function(_parse17){function parse(_x49,_x50,_x51){return _parse17.apply(this,arguments)}return parse.toString=function(){return _parse17.toString()},parse}((function(capture,parse,state){return{content:capture[2].replace(INLINE_CODE_ESCAPE_BACKTICKS_R,"$1")}})),react:function react(node,output,state){return reactElement("code",state.key,{children:node.content})},html:function html(node,output,state){return htmlTag("code",sanitizeText(node.content))}},br:{order:currOrder++,match:anyScopeRegex(/^ {2,}\n/),parse:ignoreCapture,react:function react(node,output,state){return reactElement("br",state.key,EMPTY_PROPS)},html:function html(node,output,state){return"<br>"}},text:{order:currOrder++,match:anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),parse:function(_parse18){function parse(_x52,_x53,_x54){return _parse18.apply(this,arguments)}return parse.toString=function(){return _parse18.toString()},parse}((function(capture,parse,state){return{content:capture[0]}})),react:function react(node,output,state){return node.content},html:function html(node,output,state){return sanitizeText(node.content)}}},outputFor=function outputFor(rules,property){var latestState,defaultState=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!property)throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");var arrayRuleCheck=(rules.Array||defaultRules.Array)[property];if(!arrayRuleCheck)throw new Error("simple-markdown: outputFor: to join nodes of type `"+property+"` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");var arrayRuleOutput=arrayRuleCheck,nestedOutput=function nestedOutput(ast,state){return latestState=state=state||latestState,Array.isArray(ast)?arrayRuleOutput(ast,nestedOutput,state):rules[ast.type][property](ast,nestedOutput,state)};return function outerOutput(ast,state){return latestState=populateInitialState(state,defaultState),nestedOutput(ast,latestState)}},defaultRawParse=parserFor(defaultRules),defaultBlockParse=function defaultBlockParse(source,state){return(state=state||{}).inline=!1,defaultRawParse(source,state)},defaultImplicitParse=function defaultImplicitParse(source,state){var isBlock=BLOCK_END_R.test(source);return(state=state||{}).inline=!isBlock,defaultRawParse(source,state)},defaultReactOutput=outputFor(defaultRules,"react"),defaultHtmlOutput=outputFor(defaultRules,"html"),markdownToReact=function markdownToReact(source,state){return defaultReactOutput(defaultBlockParse(source,state),state)},SimpleMarkdown={defaultRules,parserFor,outputFor,inlineRegex,blockRegex,anyScopeRegex,parseInline,parseBlock:function parseBlock(parse,content,state){var isCurrentlyInline=state.inline||!1;state.inline=!1;var result=parse(content+"\n\n",state);return state.inline=isCurrentlyInline,result},markdownToReact,markdownToHtml:function markdownToHtml(source,state){return defaultHtmlOutput(defaultBlockParse(source,state),state)},ReactMarkdown:function ReactMarkdown(props){var divProps={};for(var prop in props)"source"!==prop&&Object.prototype.hasOwnProperty.call(props,prop)&&(divProps[prop]=props[prop]);return divProps.children=markdownToReact(props.source),reactElement("div",null,divProps)},defaultBlockParse,defaultInlineParse:function defaultInlineParse(source,state){return(state=state||{}).inline=!0,defaultRawParse(source,state)},defaultImplicitParse,defaultReactOutput,defaultHtmlOutput,preprocess,sanitizeText,sanitizeUrl,unescapeUrl,htmlTag,reactElement,defaultRawParse,ruleOutput:function ruleOutput(rules,property){property||"undefined"==typeof console||console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");return function nestedRuleOutput(ast,outputFunc,state){return rules[ast.type][property](ast,outputFunc,state)}},reactFor:function reactFor(outputFunc){return function nestedOutput(ast,state){if(state=state||{},Array.isArray(ast)){for(var oldKey=state.key,result=[],lastResult=null,i=0;i<ast.length;i++){state.key=""+i;var nodeOut=nestedOutput(ast[i],state);"string"==typeof nodeOut&&"string"==typeof lastResult?(lastResult+=nodeOut,result[result.length-1]=lastResult):(result.push(nodeOut),lastResult=nodeOut)}return state.key=oldKey,result}return outputFunc(ast,nestedOutput,state)}},htmlFor:function htmlFor(outputFunc){return function nestedOutput(ast,state){return state=state||{},Array.isArray(ast)?ast.map((function(node){return nestedOutput(node,state)})).join(""):outputFunc(ast,nestedOutput,state)}},defaultParse:function defaultParse(){return"undefined"!=typeof console&&console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),defaultImplicitParse.apply(null,arguments)},defaultOutput:function defaultOutput(){return"undefined"!=typeof console&&console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),defaultReactOutput.apply(null,arguments)}}}}]);