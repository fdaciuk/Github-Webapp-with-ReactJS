define(["react"],function(r){"use strict";function e(){var e={};return e.render=function(){var e=this.props.userdata;return r.DOM.div({className:"ghcontent"},r.DOM.div({className:"avi"},r.DOM.a({href:e.html_url,target:"_blank"},r.DOM.img({src:e.avatar_url,width:"80",height:"80",alt:e.name}))),r.DOM.p(null,"Followers: ",e.followers," - Following: ",e.following,r.DOM.br(null),"Repos: ",e.public_repos))},e}return r.createClass(e())});