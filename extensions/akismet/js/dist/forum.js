(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/app"];var a=t.n(r);const n=flarum.core.compat["forum/utils/PostControls"];var m=t.n(n);const s=flarum.core.compat["forum/components/CommentPost"];var u=t.n(s);a().initializers.add("flarum-akismet",(function(){(0,o.extend)(m(),"destructiveControls",(function(t,e){if(t.has("approve")){var o=e.flags();o&&o.some((function(t){return"akismet"===t.type()}))&&(t.get("approve").children=a().translator.trans("flarum-akismet.forum.post.not_spam_button"))}})),(0,o.override)(u().prototype,"flagReason",(function(t,e){return"akismet"===e.type()?a().translator.trans("flarum-akismet.forum.post.akismet_flagged_text"):t(e)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map