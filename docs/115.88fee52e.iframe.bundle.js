"use strict";(self.webpackChunkairview_mdx=self.webpackChunkairview_mdx||[]).push([[115],{"./node_modules/mermaid/dist/requirementDiagram-b9649942.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/mermaid/dist/commonDb-573409be.js"),_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/mermaid/dist/mermaidAPI-3ae0f2f0.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/mermaid/dist/utils-d622194a.js"),parser=(__webpack_require__("./node_modules/dompurify/dist/purify.js"),__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[1,3],$V1=[1,5],$V2=[1,6],$V3=[1,7],$V4=[1,8],$V5=[5,6,8,14,16,18,19,40,41,42,43,44,45,53,71,72],$V6=[1,22],$V7=[2,13],$V8=[1,26],$V9=[1,27],$Va=[1,28],$Vb=[1,29],$Vc=[1,30],$Vd=[1,31],$Ve=[1,24],$Vf=[1,32],$Vg=[1,33],$Vh=[1,36],$Vi=[71,72],$Vj=[5,8,14,16,18,19,40,41,42,43,44,45,53,60,62,71,72],$Vk=[1,56],$Vl=[1,57],$Vm=[1,58],$Vn=[1,59],$Vo=[1,60],$Vp=[1,61],$Vq=[1,62],$Vr=[62,63],$Vs=[1,74],$Vt=[1,70],$Vu=[1,71],$Vv=[1,72],$Vw=[1,73],$Vx=[1,75],$Vy=[1,79],$Vz=[1,80],$VA=[1,77],$VB=[1,78],$VC=[5,8,14,16,18,19,40,41,42,43,44,45,53,71,72],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,openDirective:9,typeDirective:10,closeDirective:11,":":12,argDirective:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,requirementDef:23,elementDef:24,relationshipDef:25,requirementType:26,requirementName:27,STRUCT_START:28,requirementBody:29,ID:30,COLONSEP:31,id:32,TEXT:33,text:34,RISK:35,riskLevel:36,VERIFYMTHD:37,verifyType:38,STRUCT_STOP:39,REQUIREMENT:40,FUNCTIONAL_REQUIREMENT:41,INTERFACE_REQUIREMENT:42,PERFORMANCE_REQUIREMENT:43,PHYSICAL_REQUIREMENT:44,DESIGN_CONSTRAINT:45,LOW_RISK:46,MED_RISK:47,HIGH_RISK:48,VERIFY_ANALYSIS:49,VERIFY_DEMONSTRATION:50,VERIFY_INSPECTION:51,VERIFY_TEST:52,ELEMENT:53,elementName:54,elementBody:55,TYPE:56,type:57,DOCREF:58,ref:59,END_ARROW_L:60,relationship:61,LINE:62,END_ARROW_R:63,CONTAINS:64,COPIES:65,DERIVES:66,SATISFIES:67,VERIFIES:68,REFINES:69,TRACES:70,unqString:71,qString:72,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",12:":",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",28:"STRUCT_START",30:"ID",31:"COLONSEP",33:"TEXT",35:"RISK",37:"VERIFYMTHD",39:"STRUCT_STOP",40:"REQUIREMENT",41:"FUNCTIONAL_REQUIREMENT",42:"INTERFACE_REQUIREMENT",43:"PERFORMANCE_REQUIREMENT",44:"PHYSICAL_REQUIREMENT",45:"DESIGN_CONSTRAINT",46:"LOW_RISK",47:"MED_RISK",48:"HIGH_RISK",49:"VERIFY_ANALYSIS",50:"VERIFY_DEMONSTRATION",51:"VERIFY_INSPECTION",52:"VERIFY_TEST",53:"ELEMENT",56:"TYPE",58:"DOCREF",60:"END_ARROW_L",62:"LINE",63:"END_ARROW_R",64:"CONTAINS",65:"COPIES",66:"DERIVES",67:"SATISFIES",68:"VERIFIES",69:"REFINES",70:"TRACES",71:"unqString",72:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,3],[4,5],[4,2],[4,2],[4,1],[9,1],[10,1],[13,1],[11,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[23,5],[29,5],[29,5],[29,5],[29,5],[29,2],[29,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[36,1],[36,1],[36,1],[38,1],[38,1],[38,1],[38,1],[24,5],[55,5],[55,5],[55,2],[55,1],[25,5],[25,5],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[27,1],[27,1],[32,1],[32,1],[34,1],[34,1],[54,1],[54,1],[57,1],[57,1],[59,1],[59,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 6:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 7:case 8:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 9:yy.parseDirective("%%{","open_directive");break;case 10:yy.parseDirective($$[$0],"type_directive");break;case 11:$$[$0]=$$[$0].trim().replace(/'/g,'"'),yy.parseDirective($$[$0],"arg_directive");break;case 12:yy.parseDirective("}%%","close_directive","pie");break;case 13:this.$=[];break;case 19:yy.addRequirement($$[$0-3],$$[$0-4]);break;case 20:yy.setNewReqId($$[$0-2]);break;case 21:yy.setNewReqText($$[$0-2]);break;case 22:yy.setNewReqRisk($$[$0-2]);break;case 23:yy.setNewReqVerifyMethod($$[$0-2]);break;case 26:this.$=yy.RequirementType.REQUIREMENT;break;case 27:this.$=yy.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 28:this.$=yy.RequirementType.INTERFACE_REQUIREMENT;break;case 29:this.$=yy.RequirementType.PERFORMANCE_REQUIREMENT;break;case 30:this.$=yy.RequirementType.PHYSICAL_REQUIREMENT;break;case 31:this.$=yy.RequirementType.DESIGN_CONSTRAINT;break;case 32:this.$=yy.RiskLevel.LOW_RISK;break;case 33:this.$=yy.RiskLevel.MED_RISK;break;case 34:this.$=yy.RiskLevel.HIGH_RISK;break;case 35:this.$=yy.VerifyType.VERIFY_ANALYSIS;break;case 36:this.$=yy.VerifyType.VERIFY_DEMONSTRATION;break;case 37:this.$=yy.VerifyType.VERIFY_INSPECTION;break;case 38:this.$=yy.VerifyType.VERIFY_TEST;break;case 39:yy.addElement($$[$0-3]);break;case 40:yy.setNewElementType($$[$0-2]);break;case 41:yy.setNewElementDocRef($$[$0-2]);break;case 44:yy.addRelationship($$[$0-2],$$[$0],$$[$0-4]);break;case 45:yy.addRelationship($$[$0-2],$$[$0-4],$$[$0]);break;case 46:this.$=yy.Relationships.CONTAINS;break;case 47:this.$=yy.Relationships.COPIES;break;case 48:this.$=yy.Relationships.DERIVES;break;case 49:this.$=yy.Relationships.SATISFIES;break;case 50:this.$=yy.Relationships.VERIFIES;break;case 51:this.$=yy.Relationships.REFINES;break;case 52:this.$=yy.Relationships.TRACES}},table:[{3:1,4:2,6:$V0,9:4,14:$V1,16:$V2,18:$V3,19:$V4},{1:[3]},{3:10,4:2,5:[1,9],6:$V0,9:4,14:$V1,16:$V2,18:$V3,19:$V4},{5:[1,11]},{10:12,20:[1,13]},{15:[1,14]},{17:[1,15]},o($V5,[2,8]),{20:[2,9]},{3:16,4:2,6:$V0,9:4,14:$V1,16:$V2,18:$V3,19:$V4},{1:[2,2]},{4:21,5:$V6,7:17,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{11:34,12:[1,35],22:$Vh},o([12,22],[2,10]),o($V5,[2,6]),o($V5,[2,7]),{1:[2,1]},{8:[1,37]},{4:21,5:$V6,7:38,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{4:21,5:$V6,7:39,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{4:21,5:$V6,7:40,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{4:21,5:$V6,7:41,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{4:21,5:$V6,7:42,8:$V7,9:4,14:$V1,16:$V2,18:$V3,19:$V4,23:18,24:19,25:20,26:23,32:25,40:$V8,41:$V9,42:$Va,43:$Vb,44:$Vc,45:$Vd,53:$Ve,71:$Vf,72:$Vg},{27:43,71:[1,44],72:[1,45]},{54:46,71:[1,47],72:[1,48]},{60:[1,49],62:[1,50]},o($Vi,[2,26]),o($Vi,[2,27]),o($Vi,[2,28]),o($Vi,[2,29]),o($Vi,[2,30]),o($Vi,[2,31]),o($Vj,[2,55]),o($Vj,[2,56]),o($V5,[2,4]),{13:51,21:[1,52]},o($V5,[2,12]),{1:[2,3]},{8:[2,14]},{8:[2,15]},{8:[2,16]},{8:[2,17]},{8:[2,18]},{28:[1,53]},{28:[2,53]},{28:[2,54]},{28:[1,54]},{28:[2,59]},{28:[2,60]},{61:55,64:$Vk,65:$Vl,66:$Vm,67:$Vn,68:$Vo,69:$Vp,70:$Vq},{61:63,64:$Vk,65:$Vl,66:$Vm,67:$Vn,68:$Vo,69:$Vp,70:$Vq},{11:64,22:$Vh},{22:[2,11]},{5:[1,65]},{5:[1,66]},{62:[1,67]},o($Vr,[2,46]),o($Vr,[2,47]),o($Vr,[2,48]),o($Vr,[2,49]),o($Vr,[2,50]),o($Vr,[2,51]),o($Vr,[2,52]),{63:[1,68]},o($V5,[2,5]),{5:$Vs,29:69,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},{5:$Vy,39:$Vz,55:76,56:$VA,58:$VB},{32:81,71:$Vf,72:$Vg},{32:82,71:$Vf,72:$Vg},o($VC,[2,19]),{31:[1,83]},{31:[1,84]},{31:[1,85]},{31:[1,86]},{5:$Vs,29:87,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},o($VC,[2,25]),o($VC,[2,39]),{31:[1,88]},{31:[1,89]},{5:$Vy,39:$Vz,55:90,56:$VA,58:$VB},o($VC,[2,43]),o($VC,[2,44]),o($VC,[2,45]),{32:91,71:$Vf,72:$Vg},{34:92,71:[1,93],72:[1,94]},{36:95,46:[1,96],47:[1,97],48:[1,98]},{38:99,49:[1,100],50:[1,101],51:[1,102],52:[1,103]},o($VC,[2,24]),{57:104,71:[1,105],72:[1,106]},{59:107,71:[1,108],72:[1,109]},o($VC,[2,42]),{5:[1,110]},{5:[1,111]},{5:[2,57]},{5:[2,58]},{5:[1,112]},{5:[2,32]},{5:[2,33]},{5:[2,34]},{5:[1,113]},{5:[2,35]},{5:[2,36]},{5:[2,37]},{5:[2,38]},{5:[1,114]},{5:[2,61]},{5:[2,62]},{5:[1,115]},{5:[2,63]},{5:[2,64]},{5:$Vs,29:116,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},{5:$Vs,29:117,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},{5:$Vs,29:118,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},{5:$Vs,29:119,30:$Vt,33:$Vu,35:$Vv,37:$Vw,39:$Vx},{5:$Vy,39:$Vz,55:120,56:$VA,58:$VB},{5:$Vy,39:$Vz,55:121,56:$VA,58:$VB},o($VC,[2,20]),o($VC,[2,21]),o($VC,[2,22]),o($VC,[2,23]),o($VC,[2,40]),o($VC,[2,41])],defaultActions:{8:[2,9],10:[2,2],16:[2,1],37:[2,3],38:[2,14],39:[2,15],40:[2,16],41:[2,17],42:[2,18],44:[2,53],45:[2,54],47:[2,59],48:[2,60],52:[2,11],93:[2,57],94:[2,58],96:[2,32],97:[2,33],98:[2,34],100:[2,35],101:[2,36],102:[2,37],103:[2,38],105:[2,61],106:[2,62],108:[2,63],109:[2,64]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,EOF=1,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,token,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(token=void 0,"number"!=typeof(token=tstack.pop()||lexer2.lex()||EOF)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),symbol=token),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==EOF?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return this.begin("open_directive"),19;case 1:return this.begin("type_directive"),20;case 2:return this.popState(),this.begin("arg_directive"),12;case 3:return this.popState(),this.popState(),22;case 4:return 21;case 5:return"title";case 6:return this.begin("acc_title"),14;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),16;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 53:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 5;case 14:case 15:case 16:break;case 17:return 8;case 18:return 6;case 19:return 28;case 20:return 39;case 21:return 31;case 22:return 30;case 23:return 33;case 24:return 35;case 25:return 37;case 26:return 40;case 27:return 41;case 28:return 42;case 29:return 43;case 30:return 44;case 31:return 45;case 32:return 46;case 33:return 47;case 34:return 48;case 35:return 49;case 36:return 50;case 37:return 51;case 38:return 52;case 39:return 53;case 40:return 64;case 41:return 65;case 42:return 66;case 43:return 67;case 44:return 68;case 45:return 69;case 46:return 70;case 47:return 56;case 48:return 58;case 49:return 60;case 50:return 63;case 51:return 62;case 52:this.begin("string");break;case 54:return"qString";case 55:return yy_.yytext=yy_.yytext.trim(),71}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[53,54],inclusive:!1},INITIAL:{rules:[0,5,6,8,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,55],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}());parser.parser=parser;const parser$1=parser;let relations=[],latestRequirement={},requirements={},latestElement={},elements={};const db={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},parseDirective:function(statement,context,type){_mermaidAPI_3ae0f2f0_js__WEBPACK_IMPORTED_MODULE_6__.m.parseDirective(this,statement,context,type)},getConfig:()=>(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.g)().req,addRequirement:(name,type)=>(void 0===requirements[name]&&(requirements[name]={name,type,id:latestRequirement.id,text:latestRequirement.text,risk:latestRequirement.risk,verifyMethod:latestRequirement.verifyMethod}),latestRequirement={},requirements[name]),getRequirements:()=>requirements,setNewReqId:id=>{void 0!==latestRequirement&&(latestRequirement.id=id)},setNewReqText:text=>{void 0!==latestRequirement&&(latestRequirement.text=text)},setNewReqRisk:risk=>{void 0!==latestRequirement&&(latestRequirement.risk=risk)},setNewReqVerifyMethod:verifyMethod=>{void 0!==latestRequirement&&(latestRequirement.verifyMethod=verifyMethod)},setAccTitle:_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.o,getAccTitle:_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.p,setAccDescription:_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.v,getAccDescription:_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.q,addElement:name=>(void 0===elements[name]&&(elements[name]={name,type:latestElement.type,docRef:latestElement.docRef},_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.l.info("Added new requirement: ",name)),latestElement={},elements[name]),getElements:()=>elements,setNewElementType:type=>{void 0!==latestElement&&(latestElement.type=type)},setNewElementDocRef:docRef=>{void 0!==latestElement&&(latestElement.docRef=docRef)},addRelationship:(type,src,dst)=>{relations.push({type,src,dst})},getRelationships:()=>relations,clear:()=>{relations=[],latestRequirement={},requirements={},latestElement={},elements={},(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.y)()}},ReqMarkers={CONTAINS:"contains",ARROW:"arrow"},markers_ReqMarkers=ReqMarkers,markers_insertLineEndings=(parentNode,conf2)=>{let containsNode=parentNode.append("defs").append("marker").attr("id",ReqMarkers.CONTAINS+"_line_ending").attr("refX",0).attr("refY",conf2.line_height/2).attr("markerWidth",conf2.line_height).attr("markerHeight",conf2.line_height).attr("orient","auto").append("g");containsNode.append("circle").attr("cx",conf2.line_height/2).attr("cy",conf2.line_height/2).attr("r",conf2.line_height/2).attr("fill","none"),containsNode.append("line").attr("x1",0).attr("x2",conf2.line_height).attr("y1",conf2.line_height/2).attr("y2",conf2.line_height/2).attr("stroke-width",1),containsNode.append("line").attr("y1",0).attr("y2",conf2.line_height).attr("x1",conf2.line_height/2).attr("x2",conf2.line_height/2).attr("stroke-width",1),parentNode.append("defs").append("marker").attr("id",ReqMarkers.ARROW+"_line_ending").attr("refX",conf2.line_height).attr("refY",.5*conf2.line_height).attr("markerWidth",conf2.line_height).attr("markerHeight",conf2.line_height).attr("orient","auto").append("path").attr("d",`M0,0\n      L${conf2.line_height},${conf2.line_height/2}\n      M${conf2.line_height},${conf2.line_height/2}\n      L0,${conf2.line_height}`).attr("stroke-width",1)};let conf={},relCnt=0;const newRectNode=(parentNode,id)=>parentNode.insert("rect","#"+id).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",conf.rect_min_width+"px").attr("height",conf.rect_min_height+"px"),newTitleNode=(parentNode,id,txts)=>{let x=conf.rect_min_width/2,title=parentNode.append("text").attr("class","req reqLabel reqTitle").attr("id",id).attr("x",x).attr("y",conf.rect_padding).attr("dominant-baseline","hanging"),i=0;txts.forEach((textStr=>{0==i?title.append("tspan").attr("text-anchor","middle").attr("x",conf.rect_min_width/2).attr("dy",0).text(textStr):title.append("tspan").attr("text-anchor","middle").attr("x",conf.rect_min_width/2).attr("dy",.75*conf.line_height).text(textStr),i++}));let totalY=1.5*conf.rect_padding+i*conf.line_height*.75;return parentNode.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",conf.rect_min_width).attr("y1",totalY).attr("y2",totalY),{titleNode:title,y:totalY}},newBodyNode=(parentNode,id,txts,yStart)=>{let body=parentNode.append("text").attr("class","req reqLabel").attr("id",id).attr("x",conf.rect_padding).attr("y",yStart).attr("dominant-baseline","hanging"),currentRow=0;let wrappedTxts=[];return txts.forEach((textStr=>{let currentTextLen=textStr.length;for(;currentTextLen>30&&currentRow<3;){let firstPart=textStr.substring(0,30);currentTextLen=(textStr=textStr.substring(30,textStr.length)).length,wrappedTxts[wrappedTxts.length]=firstPart,currentRow++}if(3==currentRow){let lastStr=wrappedTxts[wrappedTxts.length-1];wrappedTxts[wrappedTxts.length-1]=lastStr.substring(0,lastStr.length-4)+"..."}else wrappedTxts[wrappedTxts.length]=textStr;currentRow=0})),wrappedTxts.forEach((textStr=>{body.append("tspan").attr("x",conf.rect_padding).attr("dy",conf.line_height).text(textStr)})),body},drawRelationshipFromLayout=function(svg,rel,g,insert,diagObj){const edge=g.edge(elementString(rel.src),elementString(rel.dst)),lineFunction=(0,d3__WEBPACK_IMPORTED_MODULE_0__.jvg)().x((function(d){return d.x})).y((function(d){return d.y})),svgPath=svg.insert("path","#"+insert).attr("class","er relationshipLine").attr("d",lineFunction(edge.points)).attr("fill","none");rel.type==diagObj.db.Relationships.CONTAINS?svgPath.attr("marker-start","url("+_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.e.getUrl(conf.arrowMarkerAbsolute)+"#"+rel.type+"_line_ending)"):(svgPath.attr("stroke-dasharray","10,7"),svgPath.attr("marker-end","url("+_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.e.getUrl(conf.arrowMarkerAbsolute)+"#"+markers_ReqMarkers.ARROW+"_line_ending)")),((parentNode,svgPath,conf2,txt)=>{const len=svgPath.node().getTotalLength(),labelPoint=svgPath.node().getPointAtLength(.5*len),labelId="rel"+relCnt;relCnt++;const labelBBox=parentNode.append("text").attr("class","req relationshipLabel").attr("id",labelId).attr("x",labelPoint.x).attr("y",labelPoint.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(txt).node().getBBox();parentNode.insert("rect","#"+labelId).attr("class","req reqLabelBox").attr("x",labelPoint.x-labelBBox.width/2).attr("y",labelPoint.y-labelBBox.height/2).attr("width",labelBBox.width).attr("height",labelBBox.height).attr("fill","white").attr("fill-opacity","85%")})(svg,svgPath,0,`<<${rel.type}>>`)},elementString=str=>str.replace(/\s/g,"").replace(/\./g,"_"),diagram={parser:parser$1,db,renderer:{draw:(text,id,_version,diagObj)=>{conf=(0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.g)().requirement,diagObj.db.clear(),diagObj.parser.parse(text);const securityLevel=conf.securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("#i"+id));const svg=("sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ys)("body")).select(`[id='${id}']`);markers_insertLineEndings(svg,conf);const g=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__.k({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:conf.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let requirements2=diagObj.db.getRequirements(),elements2=diagObj.db.getElements(),relationships=diagObj.db.getRelationships();var reqs,graph,svgNode;reqs=requirements2,graph=g,svgNode=svg,Object.keys(reqs).forEach((reqName=>{let req=reqs[reqName];reqName=elementString(reqName),_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_7__.l.info("Added new requirement: ",reqName);const groupNode=svgNode.append("g").attr("id",reqName),rectNode=newRectNode(groupNode,"req-"+reqName);let titleNodeInfo=newTitleNode(groupNode,reqName+"_title",[`<<${req.type}>>`,`${req.name}`]);newBodyNode(groupNode,reqName+"_body",[`Id: ${req.id}`,`Text: ${req.text}`,`Risk: ${req.risk}`,`Verification: ${req.verifyMethod}`],titleNodeInfo.y);const rectBBox=rectNode.node().getBBox();graph.setNode(reqName,{width:rectBBox.width,height:rectBBox.height,shape:"rect",id:reqName})})),((els,graph,svgNode)=>{Object.keys(els).forEach((elName=>{let el=els[elName];const id=elementString(elName),groupNode=svgNode.append("g").attr("id",id),textId="element-"+id,rectNode=newRectNode(groupNode,textId);let titleNodeInfo=newTitleNode(groupNode,textId+"_title",["<<Element>>",`${elName}`]);newBodyNode(groupNode,textId+"_body",[`Type: ${el.type||"Not Specified"}`,`Doc Ref: ${el.docRef||"None"}`],titleNodeInfo.y);const rectBBox=rectNode.node().getBBox();graph.setNode(id,{width:rectBBox.width,height:rectBBox.height,shape:"rect",id})}))})(elements2,g,svg),((relationships,g)=>{relationships.forEach((function(r){let src=elementString(r.src),dst=elementString(r.dst);g.setEdge(src,dst,{relationship:r})}))})(relationships,g),(0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__.bK)(g),function(svgNode,graph){graph.nodes().forEach((function(v){void 0!==v&&void 0!==graph.node(v)&&(svgNode.select("#"+v),svgNode.select("#"+v).attr("transform","translate("+(graph.node(v).x-graph.node(v).width/2)+","+(graph.node(v).y-graph.node(v).height/2)+" )"))}))}(svg,g),relationships.forEach((function(rel){drawRelationshipFromLayout(svg,rel,g,id,diagObj)}));const padding=conf.rect_padding,svgBounds=svg.node().getBBox(),width=svgBounds.width+2*padding,height=svgBounds.height+2*padding;(0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_8__.k)(svg,height,width,conf.useMaxWidth),svg.attr("viewBox",`${svgBounds.x-padding} ${svgBounds.y-padding} ${width} ${height}`)}},styles:options=>`\n\n  marker {\n    fill: ${options.relationColor};\n    stroke: ${options.relationColor};\n  }\n\n  marker.cross {\n    stroke: ${options.lineColor};\n  }\n\n  svg {\n    font-family: ${options.fontFamily};\n    font-size: ${options.fontSize};\n  }\n\n  .reqBox {\n    fill: ${options.requirementBackground};\n    fill-opacity: 100%;\n    stroke: ${options.requirementBorderColor};\n    stroke-width: ${options.requirementBorderSize};\n  }\n  \n  .reqTitle, .reqLabel{\n    fill:  ${options.requirementTextColor};\n  }\n  .reqLabelBox {\n    fill: ${options.relationLabelBackground};\n    fill-opacity: 100%;\n  }\n\n  .req-title-line {\n    stroke: ${options.requirementBorderColor};\n    stroke-width: ${options.requirementBorderSize};\n  }\n  .relationshipLine {\n    stroke: ${options.relationColor};\n    stroke-width: 1;\n  }\n  .relationshipLabel {\n    fill: ${options.relationLabelColor};\n  }\n\n`}}}]);