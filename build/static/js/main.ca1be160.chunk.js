(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(14),n(6)),i=n(1),s=n(2),u=n(4),m=n(3),h=n(5),d=function(e){var t=e.players,n=t.length,a=t.reduce(function(e,t){return e+t.score},0);return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,a))))},p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isRunning:!1,elapsedTime:0,previousTime:0},n.tick=function(){if(n.state.isRunning){var e=Date.now();n.setState(function(t){return{previousTime:e,elapsedTime:t.elapsedTime+(e-n.state.previousTime)}})}},n.handleStopwatch=function(){n.setState(function(e){return{isRunning:!n.state.isRunning}}),n.state.isRunning||n.setState({previousTime:Date.now()})},n.handleReset=function(){n.setState({elapsedTime:0})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){e.tick()},100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=Math.floor(this.state.elapsedTime/1e3);return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},e),r.a.createElement("button",{onClick:this.handleStopwatch},this.state.isRunning?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),t}(a.Component),f=function(e){var t=e.players,n=e.title;return r.a.createElement("header",null,r.a.createElement(d,{players:t}),r.a.createElement("h1",null,n),r.a.createElement(p,null))};f.defaultProps={title:"Scoreboard"};var v=f,y=function(e){var t=e.changeScore,n=e.score,a=e.index;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return t(a,-1)}},"-"),r.a.createElement("span",{className:"counter-score"},n),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return t(a,1)}},"+"))},E=function(e){return r.a.createElement("svg",{className:e.highScore?"is-high-score":null,viewBox:"0 0 44 35"},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))},g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.score,a=e.index,c=e.removePlayer,l=e.changeScore,o=e.name,i=e.isHighScore;return r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return c(t)}},"\u2716"),r.a.createElement(E,{highScore:i}),o),r.a.createElement(y,{score:n,changeScore:l,index:a}))}}]),t}(a.PureComponent),b=function(e){var t=e.addPlayer,n=r.a.createRef();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n.current.value),e.currentTarget.reset()}},r.a.createElement("input",{type:"text",ref:n,placeholder:"Enter a player's name"}),r.a.createElement("input",{type:"submit",value:"Add Player"}))},S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:[{name:"Guil",score:0,id:1,highscore:!1},{name:"Treasure",score:0,id:2,highscore:!1},{name:"Ashley",score:0,id:3,highscore:!1},{name:"James",score:0,id:4,highscore:!1}]},n.prevPlayerID=4,n.handleScoreChange=function(e,t){n.setState(function(n){return{score:n.players[e].score+=t}})},n.handleRemovePlayer=function(e){n.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},n.getHighScore=function(){var e=n.state.players.map(function(e){return e.score}),t=Math.max.apply(Math,Object(o.a)(e));return t||null},n.handleAddPlayer=function(e){n.setState(function(t){return{players:[].concat(Object(o.a)(t.players),[{name:e,score:0,id:n.prevPlayerID+=1,highscore:!1}])}})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.getHighScore();return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(v,{title:"Scoreboard",players:this.state.players}),this.state.players.map(function(n,a){return r.a.createElement(g,{name:n.name,id:n.id,index:a,score:n.score,key:n.id.toString(),removePlayer:e.handleRemovePlayer,changeScore:e.handleScoreChange,isHighScore:t===n.score})}),r.a.createElement(b,{addPlayer:this.handleAddPlayer}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ca1be160.chunk.js.map