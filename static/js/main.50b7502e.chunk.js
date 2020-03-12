(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(8),o=s.n(i),c=(s(14),s(1)),r=s(2),l=s(4),m=s(3),u=s(5),d=(s(7),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Clock"},a.a.createElement("div",{id:"timer-label",className:"clock-container"},a.a.createElement("h2",{className:"clockTitle"},this.props.onGoing),a.a.createElement("div",{id:"time-left",className:"time-left"},this.props.min<10?"0".concat(this.props.min):this.props.min,":",this.props.sec<10?"0".concat(this.props.sec):this.props.sec),a.a.createElement("div",{className:"control-buttons"},a.a.createElement("button",{id:"start_stop",onClick:this.props.startStop},"Start/Stop"),a.a.createElement("br",null),a.a.createElement("button",{id:"reset",onClick:this.props.reset}," Reset"))))}}]),t}(a.a.Component)),p=function(e){function t(){var e,s;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(s=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).sendClick=function(e){s.props.configSession(e.target.id)},s}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Config"},a.a.createElement("div",{id:"break-label"},a.a.createElement("h2",{className:"session-title"},"Session"),a.a.createElement("div",{className:"config-container"},a.a.createElement("p",{className:"plus",id:"session-increment",onClick:this.sendClick},"+"),a.a.createElement("p",{id:"session-length"},this.props.sessionTime),a.a.createElement("p",{className:"minus",id:"session-decrement",onClick:this.sendClick},"-"))),a.a.createElement("div",{id:"session-label"},a.a.createElement("h2",{className:"break-title"},"Break"),a.a.createElement("div",{className:"config-container"},a.a.createElement("p",{className:"plus",id:"break-increment",onClick:this.sendClick},"+"),a.a.createElement("p",{id:"break-length"},this.props.breakTime),a.a.createElement("p",{className:"minus",id:"break-decrement",onClick:this.sendClick},"-"))))}}]),t}(a.a.Component),h=function(e){function t(e){var s;return Object(c.a)(this,t),(s=Object(l.a)(this,Object(m.a)(t).call(this,e))).intervalID=0,s.reset=function(){clearInterval(s.intervalID),s.setState({onGoing:"Session",active:!1,sessionTime:25,breakTime:5,minutes:25,seconds:0},(function(){s.stopAudio()}))},s.configTime=function(e){s.state.sessionTime<60&&"session-increment"===e?s.setState({sessionTime:s.state.sessionTime+1},(function(){return s.updateTime()})):s.state.sessionTime>1&&"session-decrement"===e?s.setState({sessionTime:s.state.sessionTime-1},(function(){return s.updateTime()})):s.state.breakTime<60&&"break-increment"===e?s.setState({breakTime:s.state.breakTime+1},(function(){return s.updateBreakTime()})):s.state.breakTime>1&&"break-decrement"===e&&s.setState({breakTime:s.state.breakTime-1},(function(){return s.updateBreakTime()}))},s.updateTime=function(){"Break"===s.state.onGoing||!1===s.state.active&&s.setState({minutes:s.state.sessionTime})},s.updateBreakTime=function(){"Session"===s.state.onGoing||!1===s.state.active&&s.setState({minutes:s.state.breakTime})},s.startStop=function(){var e=function(){0===s.state.seconds&&s.setState({minutes:s.state.minutes-1,seconds:60}),s.setState({seconds:s.state.seconds-1},(function(){-1===s.state.minutes&&59===s.state.seconds&&(clearInterval(s.intervalID),s.playAudio(),s.intervalID=setInterval(t,1e3),s.setState({onGoing:"Break",seconds:0,minutes:s.state.breakTime},(function(){s.playAudio()})))}))},t=function(){0===s.state.seconds&&s.setState({minutes:s.state.minutes-1,seconds:60}),s.setState({seconds:s.state.seconds-1},(function(){-1===s.state.minutes&&59===s.state.seconds&&(console.log("end of break"),clearInterval(s.intervalID),s.intervalID=setInterval(e,1e3),s.setState({onGoing:"Session",minutes:s.state.sessionTime,seconds:0}))}))};!1===s.state.active?(s.intervalID=setInterval(e,1e3),s.setState({active:!s.state.active},(function(){console.log("ON")}))):!0===s.state.active&&(clearInterval(s.intervalID),s.setState({active:!s.state.active},(function(){console.log("OFF")})))},s.playAudio=function(){document.getElementById("beep").play()},s.stopAudio=function(){var e=document.getElementById("beep");e.duration>0&&!e.paused&&(e.pause(),e.currentTime=0)},s.state={active:!1,onGoing:"Session",sessionTime:25,breakTime:5,minutes:25,seconds:0},s}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,{configSession:this.configTime,sessionTime:this.state.sessionTime,breakTime:this.state.breakTime}),a.a.createElement(d,{onGoing:this.state.onGoing,reset:this.reset,startStop:this.startStop,min:this.state.minutes,sec:this.state.seconds}),a.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1"}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,s){},9:function(e,t,s){e.exports=s(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.50b7502e.chunk.js.map