;/*FB_PKG_DELIM*/

__d("ActorURI",["ActorURIConfig","URI"],(function(a,b,c,d,e,f,g){var h;function a(a,b){return new(h||(h=c("URI")))(a).addQueryData(c("ActorURIConfig").PARAMETER_ACTOR,b)}g.create=a;g.PARAMETER_ACTOR=c("ActorURIConfig").PARAMETER_ACTOR}),98);
__d("BTManifestName",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({MAIN:"main",LONGTAIL:"longtail"});c=a;f["default"]=c}),66);
__d("BtLongtailHashFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5779");b=d("FalcoLoggerInternal").create("bt_longtail_hash",a);e=b;g["default"]=e}),98);
__d("CometBTManifestLoader",["BootloaderEvents","BtLongtailHashFalcoEvent","ClientConsistencyEventEmitter","FBLogger","ODS","Promise","SiteData","XHRRequest","asyncToGeneratorRuntime","err","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=new Set();function k(a,b,c,d){return l.apply(this,arguments)}function l(){l=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,d,e,f){var g=(yield new(i||(i=b("Promise")))(function(b,g){new(c("XHRRequest"))(a+"/btmanifest/"+e+"/"+d+"/"+f).setMethod("GET").setResponseHandler(function(a){return b(a.toString())}).setErrorHandler(function(a){return g(a)}).send()}));if(typeof g!=="string")throw c("FBLogger")("binary_transparency","bt_invalid_manifest_response").mustfixThrow("Invalid response from BT manifest endpoint");return g});return l.apply(this,arguments)}function m(a,b){(h||(h=d("ODS"))).bumpEntityKey(454,"obc.www.all","bt.comet_manifest_loader."+Number(d("SiteData").compose_bootloads)+"."+d("SiteData").pkg_cohort+"."+a+"."+b)}function n(a,b,d){var e;if(d instanceof Error)e=d;else if(typeof d==="object"){var f=JSON.stringify(d);e=c("err")("(XHRRequest): %s",f.slice(0,300)+(f.length>300?"...":""))}else e=c("err")(d);c("FBLogger")("binary_transparency","bt_download_manifest_error").catching(e).mustfix('Unable to download and inject BT manifest "%s" for version: %s',b,a)}function o(a,b){return p.apply(this,arguments)}function p(){p=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b){if(!d("SiteData").manifest_origin||d("SiteData").manifest_version_prefix==null||d("SiteData").manifest_base_uri==null)return;var c=a+"_"+b;a=""+d("SiteData").manifest_version_prefix+a;if(j.has(c))return;m(b,"start");j.add(c);try{var e,f=document.createElement("script");f.innerText=(yield k(d("SiteData").manifest_base_uri,d("SiteData").manifest_origin,a,b));f.type="application/json";f.setAttribute("name","binary-transparency-manifest");f.dataset.manifestRev=a;f.dataset.manifestType=b;(e=document.head)==null?void 0:e.appendChild(f);m(b,"complete")}catch(d){m(b,"failed"),n(a,b,d),j["delete"](c)}});return p.apply(this,arguments)}function a(){c("promiseDone")(o(d("SiteData").client_revision,"main")),d("BootloaderEvents").onResourceInLongTailBTManifest(function(a){c("promiseDone")(o(d("SiteData").client_revision,"longtail")),a.hashes.forEach(function(b){c("BtLongtailHashFalcoEvent").log(function(){return{client_revision:String(d("SiteData").client_revision),compose_bootloads:d("SiteData").compose_bootloads,ef_page:d("SiteData").ef_page||"",hash:b,pkg_cohort:d("SiteData").pkg_cohort,reference:a.source,rls_id:d("SiteData").hsi}})})}),c("ClientConsistencyEventEmitter").addListener("newRevision",function(a){c("promiseDone")(o(a,"main")),c("promiseDone")(o(a,"longtail"))})}g.init=a}),98);
__d("InstagramLoginSyncJSCookieDebugTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:InstagramLoginSyncJSCookieDebugLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setSessionKey=function(a){this.$1.session_key=a;return this};return a}();c={session_key:!0};f["default"]=a}),66);
__d("buildIframeOriginUrl",["URI"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return a}g["default"]=a}),98);
__d("PolarisFacebookCookieSyncConstants",["URI","buildIframeOriginUrl"],(function(a,b,c,d,e,f,g){"use strict";var h;a={error:"ig_iframe_error",ig_sync:"ig_iframe_ig_sync",ig_sync_error:"ig_iframe_ig_sync_error",ig_sync_success:"ig_iframe_ig_sync_success",ready:"ig_iframe_ready",success:"ig_iframe_success",sync:"ig_iframe_fb_sync"};b=c("buildIframeOriginUrl")("https://www.facebook.com");d=new(h||(h=c("URI")))(b).getDomain();e="fr";g.IFRAME_MESSAGES=a;g.IFRAME_ORIGIN=b;g.IFRAME_DOMAIN=d;g.FR_COOKIE_UPDATED_LOCAL_STORAGE_KEY=e}),98);
__d("XAsyncRequest",["cr:1042"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1042")}),98);
__d("XControllerURIBuilder",["invariant","URI","gkx","isInternalFBURI"],(function(a,b,c,d,e,f,g,h){var i;a=function(){function a(a,b){this.$1={},this.$2=a,this.$3=b}var b=a.prototype;b.setInt=function(a,b){return this.__setParam(a,"Int",b)};b.setFBID=function(a,b){return this.__setParam(a,"FBID",b)};b.setFloat=function(a,b){return this.__setParam(a,"Float",b)};b.setString=function(a,b){return this.__setParam(a,"String",b)};b.setExists=function(a,b){b===!1&&(b=void 0);return this.__setParam(a,"Exists",b)};b.setBool=function(a,b){return this.__setParam(a,"Bool",b)};b.setBoolVector=function(a,b){return this.__setParam(a,"BoolVector",b)};b.setEnum=function(a,b){return this.__setParam(a,"Enum",b)};b.setPath=function(a,b){return this.__setParam(a,"Path",b)};b.setIntVector=function(a,b){return this.__setParam(a,"IntVector",b)};b.setIntKeyset=function(a,b){return this.__setParam(a,"IntKeyset",b)};b.setIntSet=function(a,b){return this.__setParam(a,"IntSet",b.join(","))};b.setFloatVector=function(a,b){return this.__setParam(a,"FloatVector",b)};b.setFloatSet=function(a,b){return this.__setParam(a,"FloatSet",b.join(","))};b.setStringVector=function(a,b){return this.__setParam(a,"StringVector",b)};b.setStringKeyset=function(a,b){return this.__setParam(a,"StringKeyset",b)};b.setStringSet=function(a,b){return this.__setParam(a,"StringSet",b)};b.setFBIDVector=function(a,b){return this.__setParam(a,"FBIDVector",b)};b.setFBIDSet=function(a,b){return this.__setParam(a,"FBIDSet",b)};b.setFBIDKeyset=function(a,b){return this.__setParam(a,"FBIDKeyset",b)};b.setEnumVector=function(a,b){return this.__setParam(a,"EnumVector",b)};b.setEnumSet=function(a,b){return this.__setParam(a,"EnumSet",b)};b.setEnumKeyset=function(a,b){return this.__setParam(a,"EnumKeyset",b)};b.setIntToIntMap=function(a,b){return this.__setParam(a,"IntToIntMap",b)};b.setIntToFloatMap=function(a,b){return this.__setParam(a,"IntToFloatMap",b)};b.setIntToStringMap=function(a,b){return this.__setParam(a,"IntToStringMap",b)};b.setIntToBoolMap=function(a,b){return this.__setParam(a,"IntToBoolMap",b)};b.setStringToIntMap=function(a,b){return this.__setParam(a,"StringToIntMap",b)};b.setStringToFloatMap=function(a,b){return this.__setParam(a,"StringToFloatMap",b)};b.setStringToStringMap=function(a,b){return this.__setParam(a,"StringToStringMap",b)};b.setStringToNullableStringMap=function(a,b){return this.__setParam(a,"StringToNullableStringMap",b)};b.setStringToBoolMap=function(a,b){return this.__setParam(a,"StringToBoolMap",b)};b.setStringToEnumMap=function(a,b){return this.__setParam(a,"StringToEnumMap",b)};b.setEnumToStringVectorMap=function(a,b){return this.__setParam(a,"EnumToStringVectorMap",b)};b.setEnumToStringMap=function(a,b){return this.__setParam(a,"EnumToStringMap",b)};b.setEnumToBoolMap=function(a,b){return this.__setParam(a,"EnumToBoolMap",b)};b.setEnumToEnumMap=function(a,b){return this.__setParam(a,"EnumToEnumMap",b)};b.setEnumToIntMap=function(a,b){return this.__setParam(a,"EnumToIntMap",b)};b.setEnumToFBIDVectorMap=function(a,b){return this.__setParam(a,"EnumToFBIDVectorMap",b)};b.setStringToIntDict=function(a,b){return this.__setParam(a,"StringToIntDict",b)};b.setStringToNullableIntDict=function(a,b){return this.__setParam(a,"StringToNullableIntDict",b)};b.setStringToFloatDict=function(a,b){return this.__setParam(a,"StringToFloatDict",b)};b.setStringToStringKeysetDict=function(a,b){return this.__setParam(a,"StringToStringKeysetDict",b)};b.setStringToNullableFloatDict=function(a,b){return this.__setParam(a,"StringToNullableFloatDict",b)};b.setStringToStringDict=function(a,b){return this.__setParam(a,"StringToStringDict",b)};b.setStringToNullableStringDict=function(a,b){return this.__setParam(a,"StringToNullableStringDict",b)};b.setStringToBoolDict=function(a,b){return this.__setParam(a,"StringToBoolDict",b)};b.setStringToEnumDict=function(a,b){return this.__setParam(a,"StringToEnumDict",b)};b.setEnumToIntDict=function(a,b){return this.__setParam(a,"EnumToIntDict",b)};b.setEnumToStringDict=function(a,b){return this.__setParam(a,"EnumToStringDict",b)};b.setHackType=function(a,b){return this.__setParam(a,"HackType",b)};b.setTypeAssert=function(a,b){return this.__setParam(a,"TypeAssert",b)};b.__validateRequiredParamsExistence=function(){for(var a in this.$3)!this.$3[a].required||Object.prototype.hasOwnProperty.call(this.$1,a)||h(0,903,a)};b.setParams=function(a){for(var b in a){this.__assertParamExists(b);var c=this.$3[b].type;this.__setParam(b,c,a[b])}return this};b.__assertParamExists=function(a){a in this.$3||h(0,37339,a)};b.__setParam=function(a,b,c){this.__assertParamExists(a);var d=this.$3[a].type,e={StringOrPFBID:"String",IntOrPFBID:"Int",FBIDOrPFBID:"FBID",PaymentLegacyAdAccountID:"Int"};e=e[d];d===b||e===b||h(0,37340,a,b,d);this.__setParamInt(a,c);return this};b.__setParamInt=function(a,b){this.$1[a]=b};b.getRequest_LEGACY_UNTYPED=function(a){return a.setReplaceTransportMarkers().setURI(this.getURI())};b.setPreviousActorIsPageVoice=function(a){this.__setParamInt("paipv",a?1:0);return this};b.getURI=function(){this.__validateRequiredParamsExistence();var a={},b="",d=/^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,e=this.$2.split("/"),f=!1;for(var g=0;g<e.length;g++){var j=e[g];if(j==="")continue;var k=d.exec(j);if(!k)b+="/"+j;else{j=k[2]==="?";var l=k[4],m=this.$3[l];m||h(0,11837,l,this.$2);if(j&&f)continue;if(this.$1[l]==null&&j){f=!0;continue}j=this.$1[l]!=null?this.$1[l]:m.defaultValue;j!=null||h(0,907,l);m=k[1]?k[1]:"";k=k[5]?k[5]:"";b+="/"+m+j+k;a[l]=!0}}this.$2.slice(-1)==="/"&&(b+="/");b===""&&(b="/");m=new(i||(i=c("URI")))(b);for(j in this.$1){k=this.$1[j];if(!a[j]&&k!=null){l=this.$3[j];m.addQueryData(j,l&&l.type==="Exists"?null:k)}}return m};b.getLookasideURI=function(){var a="lookaside.facebook.com";c("isInternalFBURI")((i||(i=c("URI"))).getRequestURI())?a="lookaside.internalfb.com":c("gkx")("21116")&&(a="lookaside.internmc.facebook.com");return this.getURI().setDomain(a).setProtocol("https")};a.create=function(b,c){return function(){return new a(b,c)}};return a}();a.prototype.getRequest=function(a){return this.getRequest_LEGACY_UNTYPED(a)};g["default"]=a}),98);
__d("XRequest",["invariant"],(function(a,b,c,d,e,f,g){var h=function a(b,c,d){var e;switch(b){case"Bool":e=c&&c!=="false"&&c!=="0"||!1;break;case"Int":e=c.toString();/-?\d+/.test(e)||g(0,11839,c);break;case"Float":e=parseFloat(c,10);isNaN(e)&&g(0,11840,c);break;case"FBID":e=c.toString();for(var f=0;f<e.length;++f){var h=e.charCodeAt(f);48<=h&&h<=57||g(0,11841,c)}break;case"String":e=c.toString();break;case"Enum":d===0?e=a("Int",c,null):d===1?e=a("String",c,null):d===2?e=c:g(0,5044,d);break;default:if(h=/^Nullable(\w+)$/.exec(b))c===null?e=null:e=a(h[1],c,d);else if(f=/^(\w+)Vector$/.exec(b)){!Array.isArray(c)?(e=c.toString(),e=e===""?[]:e.split(",")):e=c;var i=f[1];typeof i==="string"||g(0,5045);e=e.map(function(b){return a(i,b,d&&d.member)})}else if(h=/^(\w+)(Set|Keyset)$/.exec(b))!Array.isArray(c)?(e=c.toString(),e=e===""?[]:e.split(",")):e=c,e=e.reduce(function(a,b){a[b]=b;return a},{}),i=h[1],typeof i==="string"||g(0,5045),e=Object.keys(e).map(function(b){return a(i,e[b],d&&d.member)});else if(f=/^(\w+)To(\w+)Map$/.exec(b)){e={};var j=f[1],k=f[2];typeof j==="string"&&typeof k==="string"||g(0,5045);Object.keys(c).forEach(function(b){e[a(j,b,d&&d.key)]=a(k,c[b],d&&d.value)})}else g(0,11842,b)}return e};a=function(){function a(a,b,c){var d=this;this.$1=b;this.$2=babelHelpers["extends"]({},c.getQueryData());b=a.split("/").filter(function(a){return a});a=c.getPath().split("/").filter(function(a){return a});var e;for(var f=0;f<b.length;++f){var h=/^\{(\?)?(\*)?(\w+)\}$/.exec(b[f]);if(!h){b[f]===a[f]||g(0,5047,c.getPath());continue}var i=!!h[1],j=!!h[2];!j||f===b.length-1||g(0,11843,e);e=h[3];Object.prototype.hasOwnProperty.call(this.$1,e)||g(0,11844,e);this.$1[e].required?i&&g(0,5050,e):i||this.$1[e].defaultValue!=null||g(0,5057,e);a[f]&&(this.$2[e]=j?a.slice(f).join("/"):a[f])}Object.keys(this.$1).forEach(function(a){!d.$1[a].required||Object.prototype.hasOwnProperty.call(d.$2,a)||g(0,5051)})}var b=a.prototype;b.getExists=function(a){return this.$2[a]!==void 0};b.getBool=function(a){return this.$3(a,"Bool")};b.getInt=function(a){return this.$3(a,"Int")};b.getFloat=function(a){return this.$3(a,"Float")};b.getFBID=function(a){return this.$3(a,"FBID")};b.getString=function(a){return this.$3(a,"String")};b.getEnum=function(a){return this.$3(a,"Enum")};b.getOptionalInt=function(a){return this.$4(a,"Int")};b.getOptionalFloat=function(a){return this.$4(a,"Float")};b.getOptionalFBID=function(a){return this.$4(a,"FBID")};b.getOptionalString=function(a){return this.$4(a,"String")};b.getOptionalEnum=function(a){return this.$4(a,"Enum")};b.getIntVector=function(a){return this.$3(a,"IntVector")};b.getFloatVector=function(a){return this.$3(a,"FloatVector")};b.getFBIDVector=function(a){return this.$3(a,"FBIDVector")};b.getStringVector=function(a){return this.$3(a,"StringVector")};b.getEnumVector=function(a){return this.$3(a,"EnumVector")};b.getOptionalIntVector=function(a){return this.$4(a,"IntVector")};b.getOptionalFloatVector=function(a){return this.$4(a,"FloatVector")};b.getOptionalFBIDVector=function(a){return this.$4(a,"FBIDVector")};b.getOptionalStringVector=function(a){return this.$4(a,"StringVector")};b.getOptionalEnumVector=function(a){return this.$4(a,"EnumVector")};b.getIntSet=function(a){return this.$3(a,"IntSet")};b.getFBIDSet=function(a){return this.$3(a,"FBIDSet")};b.getFBIDKeyset=function(a){return this.$3(a,"FBIDKeyset")};b.getStringSet=function(a){return this.$3(a,"StringSet")};b.getEnumKeyset=function(a){return this.$3(a,"EnumKeyset")};b.getOptionalIntSet=function(a){return this.$4(a,"IntSet")};b.getOptionalFBIDSet=function(a){return this.$4(a,"FBIDSet")};b.getOptionalFBIDKeyset=function(a){return this.$4(a,"FBIDKeyset")};b.getOptionalStringSet=function(a){return this.$4(a,"StringSet")};b.getEnumToBoolMap=function(a){return this.$3(a,"EnumToBoolMap")};b.getEnumToEnumMap=function(a){return this.$3(a,"EnumToEnumMap")};b.getEnumToFloatMap=function(a){return this.$3(a,"EnumToFloatMap")};b.getEnumToIntMap=function(a){return this.$3(a,"EnumToIntMap")};b.getEnumToStringMap=function(a){return this.$3(a,"EnumToStringMap")};b.getIntToBoolMap=function(a){return this.$3(a,"IntToBoolMap")};b.getIntToEnumMap=function(a){return this.$3(a,"IntToEnumMap")};b.getIntToFloatMap=function(a){return this.$3(a,"IntToFloatMap")};b.getIntToIntMap=function(a){return this.$3(a,"IntToIntMap")};b.getIntToStringMap=function(a){return this.$3(a,"IntToStringMap")};b.getStringToBoolMap=function(a){return this.$3(a,"StringToBoolMap")};b.getStringToEnumMap=function(a){return this.$3(a,"StringToEnumMap")};b.getStringToFloatMap=function(a){return this.$3(a,"StringToFloatMap")};b.getStringToIntMap=function(a){return this.$3(a,"StringToIntMap")};b.getStringToStringMap=function(a){return this.$3(a,"StringToStringMap")};b.getOptionalEnumToBoolMap=function(a){return this.$4(a,"EnumToBoolMap")};b.getOptionalEnumToEnumMap=function(a){return this.$4(a,"EnumToEnumMap")};b.getOptionalEnumToFloatMap=function(a){return this.$4(a,"EnumToFloatMap")};b.getOptionalEnumToIntMap=function(a){return this.$4(a,"EnumToIntMap")};b.getOptionalEnumToStringMap=function(a){return this.$4(a,"EnumToStringMap")};b.getOptionalIntToBoolMap=function(a){return this.$4(a,"IntToBoolMap")};b.getOptionalIntToEnumMap=function(a){return this.$4(a,"IntToEnumMap")};b.getOptionalIntToFloatMap=function(a){return this.$4(a,"IntToFloatMap")};b.getOptionalIntToIntMap=function(a){return this.$4(a,"IntToIntMap")};b.getOptionalIntToStringMap=function(a){return this.$4(a,"IntToStringMap")};b.getOptionalStringToBoolMap=function(a){return this.$4(a,"StringToBoolMap")};b.getOptionalStringToEnumMap=function(a){return this.$4(a,"StringToEnumMap")};b.getOptionalStringToFloatMap=function(a){return this.$4(a,"StringToFloatMap")};b.getOptionalStringToIntMap=function(a){return this.$4(a,"StringToIntMap")};b.getOptionalStringToStringMap=function(a){return this.$4(a,"StringToStringMap")};b.getEnumToNullableEnumMap=function(a){return this.$3(a,"EnumToNullableEnumMap")};b.getEnumToNullableFloatMap=function(a){return this.$3(a,"EnumToNullableFloatMap")};b.getEnumToNullableIntMap=function(a){return this.$3(a,"EnumToNullableIntMap")};b.getEnumToNullableStringMap=function(a){return this.$3(a,"EnumToNullableStringMap")};b.getIntToNullableEnumMap=function(a){return this.$3(a,"IntToNullableEnumMap")};b.getIntToNullableFloatMap=function(a){return this.$3(a,"IntToNullableFloatMap")};b.getIntToNullableIntMap=function(a){return this.$3(a,"IntToNullableIntMap")};b.getIntToNullableStringMap=function(a){return this.$3(a,"IntToNullableStringMap")};b.getStringToNullableEnumMap=function(a){return this.$3(a,"StringToNullableEnumMap")};b.getStringToNullableFloatMap=function(a){return this.$3(a,"StringToNullableFloatMap")};b.getStringToNullableIntMap=function(a){return this.$3(a,"StringToNullableIntMap")};b.getStringToNullableStringMap=function(a){return this.$3(a,"StringToNullableStringMap")};b.getOptionalEnumToNullableEnumMap=function(a){return this.$4(a,"EnumToNullableEnumMap")};b.getOptionalEnumToNullableFloatMap=function(a){return this.$4(a,"EnumToNullableFloatMap")};b.getOptionalEnumToNullableIntMap=function(a){return this.$4(a,"EnumToNullableIntMap")};b.getOptionalEnumToNullableStringMap=function(a){return this.$4(a,"EnumToNullableStringMap")};b.getOptionalIntToNullableEnumMap=function(a){return this.$4(a,"IntToNullableEnumMap")};b.getOptionalIntToNullableFloatMap=function(a){return this.$4(a,"IntToNullableFloatMap")};b.getOptionalIntToNullableIntMap=function(a){return this.$4(a,"IntToNullableIntMap")};b.getOptionalIntToNullableStringMap=function(a){return this.$4(a,"IntToNullableStringMap")};b.getOptionalStringToNullableEnumMap=function(a){return this.$4(a,"StringToNullableEnumMap")};b.getOptionalStringToNullableFloatMap=function(a){return this.$4(a,"StringToNullableFloatMap")};b.getOptionalStringToNullableIntMap=function(a){return this.$4(a,"StringToNullableIntMap")};b.getOptionalStringToNullableStringMap=function(a){return this.$4(a,"StringToNullableStringMap")};b.$3=function(a,b){this.$5(a,b);var c=this.$1[a];if(!Object.prototype.hasOwnProperty.call(this.$2,a)&&c.defaultValue!=null){c.required&&g(0,5052);return h(b,c.defaultValue,c.enumType)}c.required||b==="Bool"||c.defaultValue!=null||g(0,11845,b,a,b,a);return h(b,this.$2[a],c.enumType)};b.$4=function(a,b){this.$5(a,b);var c=this.$1[a];c.required&&g(0,11846,b,a,b,a);c.defaultValue&&g(0,5052);return Object.prototype.hasOwnProperty.call(this.$2,a)?h(b,this.$2[a],c.enumType):null};b.$5=function(a,b){Object.prototype.hasOwnProperty.call(this.$1,a)||g(0,37317,a),this.$1[a].type===b||g(0,11848,a,b,this.$1[a].type)};return a}();f["default"]=a}),66);
__d("XController",["XControllerURIBuilder","XRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b){this.$1=a,this.$2=b}var b=a.prototype;b.getURIBuilder=function(a){var b=this,d=new(c("XControllerURIBuilder"))(this.$1,this.$2);if(a){var e=this.getRequest(a);Object.keys(this.$2).forEach(function(a){var c=b.$2[a],f="";!c.required&&!Object.prototype.hasOwnProperty.call(c,"defaultValue")&&(f="Optional");f="get"+f+c.type;f=e[f](a);if(f==null||Object.prototype.hasOwnProperty.call(c,"defaultValue")&&f===c.defaultValue)return;c="set"+c.type;d[c](a,f)})}return d};b.getRequest=function(a){return new(c("XRequest"))(this.$1,this.$2,a)};a.create=function(b,c){return new a(b,c)};return a}();g["default"]=a}),98);
__d("XInstagramFacebookCookieToSyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instagram/sync/",{})}),null);
__d("XInstagramLoginSyncUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instagram/login_sync/update/",{})}),null);
__d("InstagramLoginSync",["Event","InstagramLoginSyncJSCookieDebugTypedLogger","PolarisFacebookCookieSyncConstants","SecurePostMessage","XAsyncRequest","XInstagramFacebookCookieToSyncController","XInstagramLoginSyncUpdateController","buildIframeOriginUrl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("buildIframeOriginUrl")("https://www.instagram.com"),i=function(a,b,c){var e=b.errorDescription;b={data:b.payload,errorDescription:e,eventName:d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES[c]};d("SecurePostMessage").sendMessageToSpecificOrigin(a.source,b,a.origin)};function j(a){var b=c("XInstagramFacebookCookieToSyncController").getURIBuilder().getURI();new(c("XAsyncRequest"))().setURI(b).setMethod("GET").setReadOnly(!0).setHandler(function(b){return i(a,b,"ig_sync_success")}).setErrorHandler(function(b){return i(a,b,"ig_sync_error")}).send()}function k(a,b){var d=c("XInstagramLoginSyncUpdateController").getURIBuilder().getURI(),e=a.data.data;if(e==null)return;new(c("XAsyncRequest"))().setURI(d).setMethod("POST").setData({encrypted_data:e,session_key:b}).setHandler(function(b){return i(a,b,"success")}).setErrorHandler(function(b){return i(a,b,"error")}).send()}function a(a){try{new(c("InstagramLoginSyncJSCookieDebugTypedLogger"))().setSessionKey(a).log(),d("SecurePostMessage").sendMessageToSpecificOrigin(window.parent,{eventName:d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.ready},h),c("Event").listen(window,"message",function(b){if(b.origin!==h)return;var c=b.data.eventName;switch(c){case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.sync:k(b,a);return;case d("PolarisFacebookCookieSyncConstants").IFRAME_MESSAGES.ig_sync:j(b);return;default:return}})}catch(a){}}g.init=a}),98);
__d("ServiceWorkerCacheManagement",["regeneratorRuntime"],(function(a,b,c,d,e,f){function a(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:if(!("caches"in self)){a.next=3;break}a.next=3;return b("regeneratorRuntime").awrap(caches["delete"]("sr-cache-1"));case 3:case"end":return a.stop()}},null,this)}f.manageCache=a}),66);
__d("XAsyncRequestWWW",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setTimeoutHandler=function(a,b){this.$1.setTimeoutHandler(a,b);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setAutoProcess=function(a){this.$1.setOption("suppressEvaluation",a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);