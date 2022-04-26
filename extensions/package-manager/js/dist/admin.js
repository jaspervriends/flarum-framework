(()=>{var a={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},d:(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};(()=>{"use strict";a.r(e);const t=flarum.core.compat["common/extend"],n=flarum.core.compat["admin/app"];var r=a.n(n);const o=flarum.core.compat["common/components/Alert"];var s=a.n(o);const i=flarum.core.compat["admin/components/ExtensionPage"];var l=a.n(i);const c=flarum.core.compat["common/components/Button"];var u=a.n(c);const d=flarum.core.compat["admin/components/LoadingModal"];var p=a.n(d);function g(a,e){return g=Object.setPrototypeOf||function(a,e){return a.__proto__=e,a},g(a,e)}function f(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,g(a,e)}const h=flarum.core.compat["common/Component"];var k=a.n(h);const v=flarum.core.compat["common/utils/Stream"];var x=a.n(v);function y(a){var e=a.response.errors[0];if(!["composer_command_failure","extension_already_installed","extension_not_installed"].includes(e.code))throw a;switch(e.code){case"composer_command_failure":e.guessed_cause?(r().alerts.show({type:"error"},r().translator.trans("flarum-package-manager.admin.exceptions.guessed_cause."+e.guessed_cause)),r().modal.close()):r().alerts.show({type:"error"},r().translator.trans("flarum-package-manager.admin.exceptions.composer_command_failure"));break;case"extension_already_installed":r().alerts.show({type:"error"},r().translator.trans("flarum-package-manager.admin.exceptions.extension_already_installed")),r().modal.close();break;case"extension_not_installed":r().alerts.show({type:"error"},r().translator.trans("flarum-package-manager.admin.exceptions.extension_not_installed")),r().modal.close()}}var b=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))||this).packageName=void 0,e.isLoading=!1,e}f(e,a);var t=e.prototype;return t.oninit=function(e){a.prototype.oninit.call(this,e),this.packageName=x()("")},t.view=function(){return m("div",{className:"Form-group"},m("label",{htmlFor:"install-extension"},r().translator.trans("flarum-package-manager.admin.extensions.install")),m("p",{className:"helpText"},r().translator.trans("flarum-package-manager.admin.extensions.install_help",{extiverse:m("a",{href:"https://extiverse.com"},"extiverse.com")})),m("div",{className:"FormControl-container"},m("input",{className:"FormControl",id:"install-extension",placeholder:"vendor/package-name",bidi:this.packageName}),m(u(),{className:"Button",icon:"fas fa-download",onclick:this.onsubmit.bind(this),loading:this.isLoading},r().translator.trans("flarum-package-manager.admin.extensions.proceed"))))},t.data=function(){return{package:this.packageName()}},t.onsubmit=function(){var a=this;this.isLoading=!0,r().modal.show(p()),r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/extensions",body:{data:this.data()},errorHandler:y}).then((function(a){var e=a.id;r().alerts.show({type:"success"},r().translator.trans("flarum-package-manager.admin.extensions.successful_install",{extension:e})),window.location.href=r().forum.attribute("adminUrl")+"#/extension/"+e,window.location.reload()})).finally((function(){a.isLoading=!1,m.redraw()}))},e}(k());function _(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}const w=flarum.core.compat["common/helpers/humanTime"];var N=a.n(w);const P=flarum.core.compat["common/utils/extractText"];var U=a.n(P);const M=flarum.core.compat["common/components/LoadingIndicator"];var j=a.n(M);const L=flarum.core.compat["common/components/Tooltip"];var S=a.n(L);const C=flarum.core.compat["common/components/Modal"];var O=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))||this).loading=!0,e.whyNot=null,e}f(e,a);var t=e.prototype;return t.className=function(){return"Modal--large WhyNotModal"},t.title=function(){return r().translator.trans("flarum-package-manager.admin.why_not_modal.title")},t.oncreate=function(e){a.prototype.oncreate.call(this,e),this.requestWhyNot()},t.content=function(){return m("div",{className:"Modal-body"},this.loading?m(j(),null):m("pre",{className:"WhyNotModal-contents"},this.whyNot))},t.requestWhyNot=function(){var a=this;r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/why-not",body:{data:{package:this.attrs.package}},errorHandler:y}).then((function(e){a.loading=!1,a.whyNot=e.data.whyNot,m.redraw()}))},e}(a.n(C)());const B=flarum.core.compat["common/utils/classList"];var T=a.n(B);const E=flarum.core.compat["common/helpers/icon"];var q=a.n(E),A=function(a){function e(){return a.apply(this,arguments)||this}f(e,a);var t=e.prototype;return t.view=function(a){var e=this.attrs,t=e.extension,n=e.updates,o=e.onClickUpdate,s=e.whyNotWarning,i=e.isCore,l=e.isDanger;return m("div",{className:T()({"PackageManager-extension":!0,"PackageManager-extension--core":i,"PackageManager-extension--danger":l})},m("div",{className:"PackageManager-extension-icon ExtensionIcon",style:t.icon},t.icon?q()(t.icon.name):""),m("div",{className:"PackageManager-extension-info"},m("div",{className:"PackageManager-extension-name"},t.extra["flarum-extension"].title),m("div",{className:"PackageManager-extension-version"},m("span",{className:"PackageManager-extension-version-current"},this.version(t.version)),n["latest-minor"]?m("span",{className:"PackageManager-extension-version-latest PackageManager-extension-version-latest--minor"},this.version(n["latest-minor"])):null,n["latest-major"]&&!i?m("span",{className:"PackageManager-extension-version-latest PackageManager-extension-version-latest--major"},this.version(n["latest-major"])):null)),m("div",{className:"PackageManager-extension-controls"},o?m(S(),{text:r().translator.trans("flarum-package-manager.admin.extensions.update")},m(u(),{icon:"fas fa-arrow-alt-circle-up",className:"Button Button--icon Button--flat",onclick:o,"aria-label":r().translator.trans("flarum-package-manager.admin.extensions.update")})):null,s?m(S(),{text:r().translator.trans("flarum-package-manager.admin.extensions.check_why_it_failed_updating")},m(u(),{icon:"fas fa-exclamation-circle",className:"Button Button--icon Button--flat Button--danger",onclick:function(){return r().modal.show(O,{package:t.name})},"aria-label":r().translator.trans("flarum-package-manager.admin.extensions.check_why_it_failed_updating")})):null))},t.version=function(a){return"v"+a.replace("v","")},e}(k()),F=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))||this).isLoading=null,e.updateState=void 0,e}f(e,a);var t=e.prototype;return t.oninit=function(e){a.prototype.oninit.call(this,e),this.updateState=this.attrs.updateState},t.view=function(a){return m("div",{className:"Form-group Form-group--danger PackageManager-majorUpdate"},m("img",{alt:"flarum logo",src:r().forum.attribute("baseUrl")+"/assets/extensions/flarum-package-manager/flarum.svg"}),m("label",null,r().translator.trans("flarum-package-manager.admin.major_updater.title",{version:this.attrs.coreUpdate["latest-major"]})),m("p",{className:"helpText"},r().translator.trans("flarum-package-manager.admin.major_updater.description")),m("div",{className:"PackageManager-updaterControls"},m(S(),{text:r().translator.trans("flarum-package-manager.admin.major_updater.dry_run_help")},m(u(),{className:"Button",icon:"fas fa-vial",onclick:this.update.bind(this,!0)},r().translator.trans("flarum-package-manager.admin.major_updater.dry_run"))),m(u(),{className:"Button Button--danger",icon:"fas fa-play",onclick:this.update.bind(this,!1)},r().translator.trans("flarum-package-manager.admin.major_updater.update"))),this.updateState.incompatibleExtensions.length?m("div",{className:"PackageManager-majorUpdate-incompatibleExtensions PackageManager-extensions-grid"},this.updateState.incompatibleExtensions.map((function(a){return m(A,{extension:r().data.extensions[a.replace("flarum-","").replace("flarum-ext-","").replace("/","-")],updates:{},onClickUpdate:null,isDanger:!0})}))):null,"failure"===this.updateState.status?m(s(),{type:"error",className:"PackageManager-majorUpdate-failure",dismissible:!1,controls:[m(u(),{className:"Button Button--text PackageManager-majorUpdate-failure-details",icon:"fas fa-question-circle",onclick:function(){return r().modal.show(O,{package:"flarum/core"})}},r().translator.trans("flarum-package-manager.admin.major_updater.failure.why"))]},m("p",{className:"PackageManager-majorUpdate-failure-desc"},r().translator.trans("flarum-package-manager.admin.major_updater.failure.desc"))):null)},t.update=function(a){var e=this;this.isLoading="update-"+(a?"dry-run":"run"),r().modal.show(p()),r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/major-update",body:{data:{dryRun:a}},errorHandler:y}).then((function(){r().alerts.show({type:"success"},r().translator.trans("flarum-package-manager.admin.update_successful")),window.location.reload()})).catch((function(a){var t,n,o;r().modal.close(),e.updateState.status="failure",e.updateState.incompatibleExtensions=null==(t=a.response)||null==(n=t.errors)||null==(o=n.pop())?void 0:o.incompatible_extensions})).finally((function(){e.isLoading=null,m.redraw()}))},e}(k()),W=function(a){function e(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).isLoading=null,e.packageUpdates={},e.lastUpdateCheck=JSON.parse(r().data.settings["flarum-package-manager.last_update_check"]),e}f(e,a);var t,n,o=e.prototype;return o.oninit=function(e){a.prototype.oninit.call(this,e)},o.view=function(){var a,e,t=this,n=this.getExtensionUpdates(),o=this.getCoreUpdate();return o&&(e={id:"flarum-core",name:"flarum/core",version:r().data.settings.version,icon:{backgroundImage:"url("+r().forum.attribute("baseUrl")+"/assets/extensions/flarum-package-manager/flarum.svg"},extra:{"flarum-extension":{title:r().translator.trans("flarum-package-manager.admin.updater.flarum")}}}),[m("div",{className:"Form-group"},m("label",null,r().translator.trans("flarum-package-manager.admin.updater.updater_title")),m("p",{className:"helpText"},r().translator.trans("flarum-package-manager.admin.updater.updater_help")),(null==(a=this.lastUpdateCheck)?void 0:a.checkedAt)&&m("p",{className:"PackageManager-lastUpdatedAt"},m("span",{className:"PackageManager-lastUpdatedAt-label"},r().translator.trans("flarum-package-manager.admin.updater.last_update_checked_at")),m("span",{className:"PackageManager-lastUpdatedAt-value"},N()(this.lastUpdateCheck.checkedAt))),m("div",{className:"PackageManager-updaterControls"},m(u(),{className:"Button",icon:"fas fa-sync-alt",onclick:this.checkForUpdates.bind(this),loading:"check"===this.isLoading,disabled:null!==this.isLoading&&"check"!==this.isLoading},r().translator.trans("flarum-package-manager.admin.updater.check_for_updates")),m(u(),{className:"Button",icon:"fas fa-play",onclick:this.updateGlobally.bind(this),loading:"global-update"===this.isLoading,disabled:null!==this.isLoading&&"global-update"!==this.isLoading},r().translator.trans("flarum-package-manager.admin.updater.run_global_update"))),null!==this.isLoading?m("div",{className:"PackageManager-extensions"},m(j(),null)):n.length||e?m("div",{className:"PackageManager-extensions"},m("div",{className:"PackageManager-extensions-grid"},e?m(A,{extension:e,updates:o,isCore:!0,onClickUpdate:this.updateCoreMinor.bind(this),whyNotWarning:this.lastUpdateRun.limitedPackages().includes("flarum/core")}):null,n.map((function(a){return m(A,{extension:a,updates:t.packageUpdates[a.id],onClickUpdate:t.updateExtension.bind(t,a),whyNotWarning:t.lastUpdateRun.limitedPackages().includes(a.name)})})))):null),o&&o["latest-major"]?m(F,{coreUpdate:o,updateState:this.lastUpdateRun.major}):null]},o.getExtensionUpdates=function(){var a,e,t,n=this;return null==(a=this.lastUpdateCheck)||null==(e=a.updates)||null==(t=e.installed)||t.filter((function(a){var e=a.name.replace("/","-").replace(/(flarum-ext-)|(flarum-)/,""),t=r().data.extensions[e],o=["semver-safe-update","update-possible"].includes(a["latest-status"]);return t&&o&&(n.packageUpdates[t.id]=a),t&&o})),Object.values(r().data.extensions).filter((function(a){return n.packageUpdates[a.id]}))},o.getCoreUpdate=function(){var a,e,t;return null==(a=this.lastUpdateCheck)||null==(e=a.updates)||null==(t=e.installed)?void 0:t.filter((function(a){return"flarum/core"===a.name})).pop()},o.checkForUpdates=function(){var a=this;this.isLoading="check",r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/check-for-updates",errorHandler:y}).then((function(e){a.lastUpdateCheck=e})).finally((function(){a.isLoading=null,m.redraw()}))},o.updateCoreMinor=function(){var a=this;confirm(U()(r().translator.trans("flarum-package-manager.admin.minor_update_confirmation.content")))&&(r().modal.show(p()),this.isLoading="minor-update",r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/minor-update",errorHandler:y}).then((function(){r().alerts.show({type:"success"},r().translator.trans("flarum-package-manager.admin.update_successful")),window.location.reload()})).finally((function(){a.isLoading=null,m.redraw()})))},o.updateExtension=function(a){var e=this;r().modal.show(p()),this.isLoading="extension-update",r().request({method:"PATCH",url:r().forum.attribute("apiUrl")+"/package-manager/extensions/"+a.id,errorHandler:y}).then((function(){r().alerts.show({type:"success"},r().translator.trans("flarum-package-manager.admin.extensions.successful_update",{extension:a.extra["flarum-extension"].title})),window.location.reload()})).finally((function(){e.isLoading=null,m.redraw()}))},o.updateGlobally=function(){var a=this;r().modal.show(p()),this.isLoading="global-update",r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/package-manager/global-update",errorHandler:y}).then((function(){r().alerts.show({type:"success"},r().translator.trans("flarum-package-manager.admin.updater.global_update_successful")),window.location.reload()})).finally((function(){a.isLoading=null,m.redraw()}))},t=e,(n=[{key:"lastUpdateRun",get:function(){var a=JSON.parse(r().data.settings["flarum-package-manager.last_update_run"]);return a.limitedPackages=function(){return[].concat(a.major.limitedPackages,a.minor.limitedPackages,a.global.limitedPackages)},a}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(k());const R=flarum.core.compat["admin/utils/isExtensionEnabled"];var H=a.n(R);r().initializers.add("flarum-package-manager",(function(a){a.extensionData.for("flarum-package-manager").registerSetting((function(){return a.data.isRequiredDirectoriesWritable?null:m("div",{className:"Form-group"},m(s(),{type:"warning",dismissible:!1},a.translator.trans("flarum-package-manager.admin.file_permissions")))})).registerSetting((function(){return a.data.isRequiredDirectoriesWritable?m(b,null):null})).registerSetting((function(){return a.data.isRequiredDirectoriesWritable?m(W,null):null})),(0,t.extend)(l().prototype,"topItems",(function(e){var t=this;"flarum-package-manager"===this.extension.id||H()(this.extension.id)||e.add("remove",m(u(),{className:"Button Button--danger",icon:"fas fa-times",onclick:function(){a.modal.show(p()),a.request({url:a.forum.attribute("apiUrl")+"/package-manager/extensions/"+t.extension.id,method:"DELETE"}).then((function(){a.alerts.show({type:"success"},a.translator.trans("flarum-package-manager.admin.extensions.successful_remove")),window.location=a.forum.attribute("adminUrl")})).finally((function(){a.modal.close()}))}},"Remove"))}))}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map