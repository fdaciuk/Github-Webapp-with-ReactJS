define(["react","components/GithubUserHeader","components/GithubUserData","components/GithubUserRepos"],function(e,r,n,t){"use strict";var s=function(){var s={},a={};return s.render=function(){var r=this.props.userdata,n=this.props.reposdata,t=a.renderOk.call(this,r,n);return r.name||(t=a.renderFail()),e.DOM.div({className:this.props.className},t)},a.renderOk=function(s,a){return e.DOM.div(null,r({userdata:s}),n({userdata:s}),t({reposdata:a}))},a.renderFail=function(){return e.DOM.h2(null,"No User Info Found")},s};return e.createClass(s())});