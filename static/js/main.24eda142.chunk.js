(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),r=n.n(o),l=(n(16),n(1)),c=n(2),i=n(4),u=n(3),m=n(5),h=(n(18),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={questionsNumber:10},n.handleNumberOfQuestions=function(e){n.setState({questionsNumber:parseInt(e.target.value,10)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.onStartGameClick,t=this.state.questionsNumber;return console.log("questionsNumber:",this.state.questionsNumber),console.log(typeof this.state.questionsNumber),s.a.createElement("div",{className:"startscreen-wrapper"},s.a.createElement("h1",{className:"header-main"},"Fretboard Trainer App"),s.a.createElement("div",{className:"strings-overlay"},s.a.createElement("div",{className:"question-options"},s.a.createElement("label",{htmlFor:"questions-dropdown"},"Select number of questions:"),s.a.createElement("select",{id:"questions-dropdown",onChange:this.handleNumberOfQuestions,value:t},s.a.createElement("option",{value:5},"5"),s.a.createElement("option",{value:10},"10"),s.a.createElement("option",{value:15},"15"))),s.a.createElement("button",{className:"start-button",onClick:function(){return e(t)}},"Start")))}}]),t}(a.Component)),g=(n(20),function(e){var t=e.totalWrongGuessesCount,n=e.onGameRestarted,a=e.questionsCount,o=e.duration;return s.a.createElement("div",{className:"results-wrapper"},s.a.createElement("h2",null,"Your results:"),s.a.createElement("p",null,"Number of questions: ",a),s.a.createElement("p",null,"Number of mistakes:"," ",s.a.createElement("span",{className:"is-wrong-count"},s.a.createElement("strong",null,t))),s.a.createElement("p",null,"Total time: ",s.a.createElement("strong",null,o)," seconds"),s.a.createElement("button",{className:"restart-button",onClick:n},"Restart"))}),f=n(6),p=n(9),d=n.n(p),v=(n(22),[["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G"],["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D"],["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A"],["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"]]),E=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={randomStringIndex:null,randomNoteIndex:null,wrongGuesses:[],totalWrongGuessesCount:0,rightGuess:"",rightGuessesArr:[],startTime:null},n.assignNoteToGuess=function(){var e=t.getRandomStringIndex(),a=t.getRandomNoteIndex();n.playTheNote(v[e][a]),n.setState({randomStringIndex:e,randomNoteIndex:a})},n.setStartTime=function(){n.setState({startTime:Date.now()})},n.playTheNote=function(e){(new d.a.Synth).toMaster().triggerAttackRelease("".concat(e,"4"),"8n")},n.handleNoteClick=function(e){var a=E[e]===v[n.state.randomStringIndex][n.state.randomNoteIndex],s=n.props,o=s.onGameCompleted,r=s.questionsCount;if(n.playTheNote(E[e]),a){var l=n.state.startTime,c=((Date.now()-l)/1e3).toFixed(1);n.setState(function(a){var s=[].concat(Object(f.a)(a.rightGuessesArr),[E[e]]);if(s.length<r){var l=t.getRandomStringIndex(),i=t.getRandomNoteIndex();return n.playTheNote(v[l][i]),{wrongGuesses:[],rightGuessesArr:s,randomStringIndex:l,randomNoteIndex:i}}return o(s,a.totalWrongGuessesCount,c),{rightGuessesArr:s}})}else n.setState(function(t){return{wrongGuesses:[].concat(Object(f.a)(t.wrongGuesses),[E[e]]),totalWrongGuessesCount:t.totalWrongGuessesCount+1}})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.assignNoteToGuess(),this.setStartTime()}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=[],o=[],r=this.state,l=r.randomStringIndex,c=r.randomNoteIndex,i=r.wrongGuesses,u=r.totalWrongGuessesCount,m=r.rightGuess,h=r.rightGuessesArr,g=this.props.questionsCount,f=0;f<v.length;f++){for(var p=[],d="",C=0;C<v[f].length;C++)f===l&&C===c?(d="string-item is-highlighted",console.log("highlighted:",v[f][C])):d="string-item",p.push(s.a.createElement("li",{className:d,key:"".concat(f,"-").concat(C)},s.a.createElement("button",null,v[f][C])));t.push(s.a.createElement("ul",{className:"string",key:f},p))}for(var N=function(t){var a="",o=i.includes(E[t]),r=m===E[t];o?a="is-wrong":r&&(a="is-correct"),n.push(s.a.createElement("li",{key:t},s.a.createElement("button",{onClick:function(){return e.handleNoteClick(t)},className:a},E[t])))},G=0;G<E.length;G++)N(G);for(var b=0;b<12;b++)a.push(s.a.createElement("div",{className:"vertical-stripe",key:b}));for(var w=0;w<12;w++)o.push(s.a.createElement("div",{className:"marker-dot",key:w}));return console.log("latest wrongGuesses:",this.state.wrongGuesses),console.log("total wrong guesses count:",u),console.log("latest rightGuesses:",this.state.rightGuessesArr,this.state.rightGuessesArr.length),s.a.createElement("div",{className:"fretboard-inner"},s.a.createElement("div",{className:"strings-wrapper"},s.a.createElement("div",{className:"strings-wrapper--inner"},s.a.createElement("div",{className:"vertical-stripes"},a),s.a.createElement("div",{className:"marker-dots"},o),s.a.createElement("div",{className:"strings"},t))),s.a.createElement("div",{className:"defined-notes-wrapper"},s.a.createElement("ul",{className:"defined-notes"},n)),s.a.createElement("p",null,"Question ",h.length+1," of ",g))}}],[{key:"getRandomStringIndex",value:function(){return Math.floor(Math.random()*v.length)}},{key:"getRandomNoteIndex",value:function(){return Math.floor(Math.random()*v[0].length)}}]),t}(a.Component),N=(n(24),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={screen:1,totalWrongGuessesCount:null,rightGuessesArr:[],questionsCount:null,duration:null},n.handleStartGameClick=function(e){n.setState({screen:2,questionsCount:e})},n.handleGameCompleted=function(e,t,a){n.setState({screen:3,rightGuessesArr:e,totalWrongGuessesCount:t,duration:a})},n.startGameHandler=function(){n.setState({screen:2}),n.assignNoteToGuess()},n.restartClickHandler=function(){n.setState({screen:2})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.screen,n=e.totalWrongGuessesCount,a=(e.rightGuessesArr,e.questionsCount),o=e.duration;return 1===t?s.a.createElement("div",{className:"App"},s.a.createElement(h,{onStartGameClick:this.handleStartGameClick})):2===t?s.a.createElement("div",{className:"App"},s.a.createElement(C,{questionsCount:a,onGameCompleted:this.handleGameCompleted})):3===t?s.a.createElement("div",{className:"App"},s.a.createElement(g,{questionsCount:a,onGameRestarted:this.restartClickHandler,totalWrongGuessesCount:n,duration:o})):void 0}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.24eda142.chunk.js.map