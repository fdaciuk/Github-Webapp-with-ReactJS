define(function(){"use strict";var e=function(){var e={},n={};return n.callbacks={},n.methods={},e.get=function(e){return n.XHRConnection("GET",e)},e.post=function(e,t){return n.XHRConnection("POST",e,t)},e.put=function(e,t){return n.XHRConnection("PUT",e,t)},e["delete"]=function(e){return n.XHRConnection("DELETE",e)},n.XHRConnection=function(e,t,r){var o=new XMLHttpRequest;return o.open(e,t,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.addEventListener("readystatechange",n.readyStateChange,!1),o.send(r),n.promises()},n.readyStateChange=function(){var e=this;4===e.readyState&&(e.status>=200&&e.status<300?n.methods.done.apply(n.methods,n.parseResponse(e)):n.methods.error.apply(n.methods,n.parseResponse(e)))},n.promises=function(){var e=n.callbacks;return n.methods={done:function(){},error:function(){}},e.done=function(t){return n.methods.done=t,e},e.error=function(t){return n.methods.error=t,e},e},n.parseResponse=function(e){var n;try{n=JSON.parse(e.responseText)}catch(t){n=e.responseText}return[n,e]},e};return e});