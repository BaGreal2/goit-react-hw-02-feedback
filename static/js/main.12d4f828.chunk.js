(this["webpackJsonphw-02"]=this["webpackJsonphw-02"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),r=n.n(o),c=(n(13),n(14),n(4)),i=n(5),u=n(1),d=n(7),s=n(6),h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleGood=function(t){e.setState({good:e.state.good+1})},e.handleBad=function(t){e.setState({bad:e.state.bad+1})},e.handleNeutral=function(t){e.setState({neutral:e.state.neutral+1})},e.state={good:0,bad:0,neutral:0},e.handleGood=e.handleGood.bind(Object(u.a)(e)),e.handleBad=e.handleBad.bind(Object(u.a)(e)),e.handleNeutral=e.handleNeutral.bind(Object(u.a)(e)),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral;return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleGood},"GOOD"),l.a.createElement("button",{onClick:this.handleBad},"BAD"),l.a.createElement("button",{onClick:this.handleNeutral},"NEUTRAL"),l.a.createElement("h2",null,"Statistics"),n>0||t>0||a>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"good: ",t),l.a.createElement("p",null,"bad: ",n),l.a.createElement("p",null,"neutral: ",a),l.a.createElement("p",null,"total: ",t+n+a),n>0&&l.a.createElement("p",null,"positive feedback: ",t/(t+n+a)*100,"%")):l.a.createElement("p",null,"No feedback"))}}]),n}(a.Component);var m=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.12d4f828.chunk.js.map