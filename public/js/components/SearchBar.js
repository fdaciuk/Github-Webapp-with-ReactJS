define(["react","modules/Ajax"],function(e,r){"use strict";var n=function(){var n={},t={};return n.render=function(){return e.DOM.div(null,e.DOM.input({type:"text",placeholder:"Github username...",className:"ghusername"}),e.DOM.button({className:"ghsubmitbtn",onClick:t.clickHandle},"Pull User Data"))},t.clickHandle=function(){console.log("click handle"),r.get("https://api.github.com/users/fdaciuk").done(t.requestSuccess).error(t.requestError)},t.requestSuccess=function(e){console.log("success:",e)},t.requestError=function(e){console.log("error:",e)},n};return e.createClass(n())});