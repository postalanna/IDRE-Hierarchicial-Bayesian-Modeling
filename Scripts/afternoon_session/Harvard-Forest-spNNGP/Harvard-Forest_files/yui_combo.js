YUI.add("moodle-core-event",function(e,o){var t,n;for(n in M.core=M.core||{},M.core.event=M.core.event||{FILTER_CONTENT_UPDATED:"filter-content-updated",EDITOR_CONTENT_RESTORED:"editor-content-restored",FORM_SUBMIT_AJAX:"form-submit-ajax"},M.core.globalEvents=M.core.globalEvents||{FORM_ERROR:"form_error",BLOCK_CONTENT_UPDATED:"block_content_updated"},t={emitFacade:!0,defaultFn:function(e){},preventedFn:function(e){},stoppedFn:function(e){}},M.core.event)M.core.event.hasOwnProperty(n)&&null===e.getEvent(M.core.event[n])&&e.publish(M.core.event[n],t);for(n in M.core.globalEvents)M.core.globalEvents.hasOwnProperty(n)&&null===e.Global.getEvent(M.core.globalEvents[n])&&e.Global.publish(M.core.globalEvents[n],e.merge(t,{broadcast:!0}))},"@VERSION@",{requires:["event-custom"]});YUI.add("moodle-filter_mathjaxloader-loader",function(n,e){M.filter_mathjaxloader=M.filter_mathjaxloader||{_lang:"",_configured:!1,configure:function(e){var t=document.createElement("script");t.type="text/x-mathjax-config",t[window.opera?"innerHTML":"text"]=e.mathjaxconfig,document.getElementsByTagName("head")[0].appendChild(t),this._lang=e.lang,n.on(M.core.event.FILTER_CONTENT_UPDATED,this.contentUpdated,this)},_setLocale:function(){if(!this._configured){var e=this._lang;"undefined"!=typeof window.MathJax&&(window.MathJax.Hub.Queue(function(){window.MathJax.Localization.setLocale(e)}),window.MathJax.Hub.Configured(),this._configured=!0)}},typeset:function(){if(!this._configured){var e=this;n.use("mathjax",function(){e._setLocale(),n.all(".filter_mathjaxloader_equation").each(function(e){"undefined"!=typeof window.MathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.getDOMNode()])})})}},contentUpdated:function(t){var a=this;n.use("mathjax",function(){if("undefined"!=typeof window.MathJax){var e=window.MathJax.Hub.processSectionDelay;window.MathJax.Hub.processSectionDelay=0,window.MathJax.Hub.Config({positionToHash:!1}),a._setLocale(),t.nodes.each(function(e){e.all(".filter_mathjaxloader_equation").each(function(e){window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,e.getDOMNode()])})}),window.MathJax.Hub.processSectionDelay=e}})}}},"@VERSION@",{requires:["moodle-core-event"]});