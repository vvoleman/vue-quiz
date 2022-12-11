(function(){"use strict";var e={8582:function(e,t,n){var s=n(9242),o=n(3396);const r={class:"container"};function i(e,t,n,s,i,u){const a=(0,o.up)("StatsPage"),l=(0,o.up)("FileSelect"),c=(0,o.up)("QuizPage");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(a,{questions:i.questions},null,8,["questions"]),(0,o.Wm)(l,{onLoaded:u.loadData},null,8,["onLoaded"]),i.loaded?((0,o.wg)(),(0,o.j4)(c,{key:0,questions:i.questions},null,8,["questions"])):(0,o.kq)("",!0)])}const u=e=>((0,o.dD)("data-v-55f0ccae"),e=e(),(0,o.Cn)(),e),a={class:"file-select card card--animated card--file-select"},l={class:"first card__body"},c=u((()=>(0,o._)("span",{class:"card__title"},"Vyberte soubor s daty",-1))),d={class:"card__input"};function h(e,t,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",l,[c,(0,o._)("div",d,[(0,o._)("input",{type:"file",ref:"file",onChange:t[0]||(t[0]=(...e)=>i.change&&i.change(...e))},null,544)])]),r.isLoaded?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>i.load&&i.load(...e)),class:"loadBtn btn"},"Načíst")):(0,o.kq)("",!0)])}var f={name:"FileSelect",data(){return{isLoaded:!1}},methods:{change(){const e=this.$refs.file.files[0];this.isLoaded=null!==e},load(){const e=this.$refs.file.files[0],t=new FileReader;t.onload=e=>{const t=JSON.parse(e.target.result);this.$emit("loaded",t)},t.onerror=e=>alert(e),t.readAsText(e)}}},g=n(89);const p=(0,g.Z)(f,[["render",h],["__scopeId","data-v-55f0ccae"]]);var w=p,v=n(7139);const m=e=>((0,o.dD)("data-v-bc493dbc"),e=e(),(0,o.Cn)(),e),y={class:"settings card card--settings"},b=m((()=>(0,o._)("label",{for:""},"Počet otázek",-1))),q={style:{display:"flex","align-items":"baseline","justify-content":"center"}},_=m((()=>(0,o._)("label",{for:"randomQuestions",style:{"margin-right":"5px"}},"Řadit náhodně otázky?",-1))),k={style:{display:"flex","align-items":"baseline","justify-content":"center"}},Q=m((()=>(0,o._)("label",{for:"randomCorrects",style:{"margin-right":"5px"}},"Řadit náhodně odpovědi?",-1)));function D(e,t,n,r,i,u){const a=(0,o.up)("QuestionBrowser"),l=(0,o.up)("ResultsPage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",y,[(0,o._)("h3",null,"Načteno "+(0,v.zw)(n.questions.length)+" otázek",1),(0,o._)("div",null,[b,(0,o.wy)((0,o._)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>i.numberOfQuestions=e)},null,512),[[s.nr,i.numberOfQuestions]])]),(0,o._)("div",q,[_,(0,o.wy)((0,o._)("input",{id:"randomQuestions",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>i.sortRandomQuestions=e)},null,512),[[s.e8,i.sortRandomQuestions]])]),(0,o._)("div",k,[Q,(0,o.wy)((0,o._)("input",{id:"randomCorrects",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>i.sortRandomCorrects=e)},null,512),[[s.e8,i.sortRandomCorrects]])]),i.running?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[3]||(t[3]=(...e)=>u.run&&u.run(...e)),class:"btn btn--run"},"Spustit")),i.running?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:t[4]||(t[4]=(...e)=>u.solve&&u.solve(...e)),class:"btn btn--solve"},"Vyhodnotit")):(0,o.kq)("",!0),i.running?((0,o.wg)(),(0,o.iD)("button",{key:2,onClick:t[5]||(t[5]=(...e)=>u.restart&&u.restart(...e)),class:"btn btn--restart"},"Restartovat")):(0,o.kq)("",!0)]),i.running?((0,o.wg)(),(0,o.j4)(a,{key:0,questions:i.runQuestions,onAnswer:u.setAnswers},null,8,["questions","onAnswer"])):(0,o.kq)("",!0),i.solved?((0,o.wg)(),(0,o.j4)(l,{key:1,questions:i.runQuestions,answers:i.answers},null,8,["questions","answers"])):(0,o.kq)("",!0)],64)}const z={class:"list"},C=["onClick"],O={class:"question"},x=["id","name","value"],S=["for"];function A(e,t,n,r,i,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.questions.length,(e=>((0,o.wg)(),(0,o.iD)("button",{class:(0,v.C_)(["question-box",{active:i.currentQuestion===e-1,"btn btn--answered":null!=i.answers[e-1]}]),key:e,onClick:t=>i.currentQuestion=e-1},[(0,o._)("b",null,(0,v.zw)(e),1)],10,C)))),128))]),(0,o._)("div",O,[(0,o._)("h3",null,(0,v.zw)(u.question.question),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.question.options,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.wy)((0,o._)("input",{id:n,type:"radio",name:i.currentQuestion,value:n,"onUpdate:modelValue":t[0]||(t[0]=e=>i.answers[i.currentQuestion]=e),onChange:t[1]||(t[1]=(...e)=>u.change&&u.change(...e))},null,40,x),[[s.G2,i.answers[i.currentQuestion]]]),(0,o._)("label",{for:n},(0,v.zw)(e),9,S)])))),128))])],64)}var R={name:"QuestionBrowser",props:{questions:Array},data(){return{currentQuestion:0,answers:[]}},computed:{question(){return this.questions[this.currentQuestion]}},unmounted(){document.removeEventListener("keyup",this.nextItem)},mounted(){document.addEventListener("keyup",this.nextItem)},methods:{change(){console.log("f"),this.$emit("answer",this.answers)},nextItem(e){37===e.keyCode?this.currentQuestion-1<0?this.currentQuestion=this.questions.length-1:this.currentQuestion--:39===e.keyCode&&(this.currentQuestion+1>=this.questions.length?this.currentQuestion=0:this.currentQuestion++),console.log(this.currentQuestion)}}};const j=(0,g.Z)(R,[["render",A],["__scopeId","data-v-02aa6038"]]);var P=j;const I=e=>((0,o.dD)("data-v-4437ebc4"),e=e(),(0,o.Cn)(),e),V={class:"results"},H=I((()=>(0,o._)("h2",null,"Výsledky:",-1))),Y={key:0},L=I((()=>(0,o._)("b",null,"(Vaše odpověď) ",-1))),Z=[L];function N(e,t,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("h2",null,"Váš výsledek je "+(0,v.zw)(i.percentage)+"% ("+(0,v.zw)(i.correctAnswers)+"/"+(0,v.zw)(n.questions.length)+")",1),H,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.questions.length,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("h2",null,"Otázka "+(0,v.zw)(e)+".: "+(0,v.zw)(n.questions[e-1].question),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.questions[e-1].options,((t,s)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[s===n.answers[e-1]?((0,o.wg)(),(0,o.iD)("span",Y,Z)):(0,o.kq)("",!0),(0,o._)("span",{class:(0,v.C_)({correct:s===n.questions[e-1].correct,incorrect:n.answers[e-1]===s&&n.answers[e-1]!==n.questions[e-1].correct})},(0,v.zw)(t),3)])))),128))])))),128))])}var F={name:"ResultsPage",props:{questions:Array,answers:Array},computed:{correctAnswers(){let e=0;for(let t=0;t<this.questions.length;t++)e+=1*(this.questions[t].correct===this.answers[t]);return e},percentage(){return Math.round(this.correctAnswers/this.questions.length*1e4)/100}}};const K=(0,g.Z)(F,[["render",N],["__scopeId","data-v-4437ebc4"]]);var B=K,J={name:"QuizPage",components:{ResultsPage:B,QuestionBrowser:P},data(){return{numberOfQuestions:0,sortRandomQuestions:!1,sortRandomCorrects:!1,runQuestions:[],running:!1,answers:[],solved:!1}},props:{questions:Array},methods:{run(){if(this.numberOfQuestions<=0||this.numberOfQuestions>this.questions.length)return;let e=this.questions;this.sortRandomQuestions&&(e=this.shuffle(e)),this.sortRandomCorrects&&e.map((e=>{let t=this.shuffle(e.options),n=e.correct,s=t.indexOf(e.options[n]);return console.log(e),e.options=t,e.correct=s,e})),e=e.slice(0,this.numberOfQuestions),this.runQuestions=e,this.running=!0,this.answers=[],this.solved=!1},shuffle(e){return e.map((e=>({value:e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e))},restart(){this.running=!1,this.solved=!1,this.runQuestions=[]},setAnswers(e){this.answers=e},solve(){let e=localStorage.getItem("answered");e=null!==e?JSON.parse(e):{};const t=[];console.log(this.answers);for(let n=0;n<this.runQuestions.length;n++){const s=this.runQuestions[n].question;null==e[s]&&(e[s]=[]),console.log(e[s],s),t[n]=this.runQuestions[n].correct===this.answers[n],e[s].push(!0===t[n]?1:0)}this.solved=!0,localStorage.setItem("answered",JSON.stringify(e))}}};const M=(0,g.Z)(J,[["render",D],["__scopeId","data-v-bc493dbc"]]);var U=M;const $=e=>((0,o.dD)("data-v-396f205f"),e=e(),(0,o.Cn)(),e),E={key:0},T={class:"modal modal--history"},W=$((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Otázka"),(0,o._)("th",null,"Celkový počet"),(0,o._)("th",null,"Úspěšnost")])],-1)));function G(e,t,n,s,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>r.display=!r.display)},(0,v.zw)(r.display?"Schovat":"Zobrazit")+" historii",1),r.display?((0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("table",T,[W,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.allQuestions,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.question},[(0,o._)("td",null,(0,v.zw)(e.question),1),(0,o._)("td",null,(0,v.zw)(e.total),1),(0,o._)("td",{class:(0,v.C_)({bad:e.percentage>=0&&e.percentage<70})},(0,v.zw)(e.percentage>=0?e.percentage+"%":"Žádný záznam"),3)])))),128))])])])):(0,o.kq)("",!0)],64)}var X={name:"StatsPage",props:{questions:Array},data(){return{display:!1,allQuestions:{},stats:[]}},mounted(){this.refactorData()},watch:{questions(){this.refactorData()},display(){this.refactorData()}},methods:{refactorData(){const e={};for(const s of this.questions)e[s.question]=[];let t=localStorage.getItem("answered");if(null==t)return;t=JSON.parse(t);for(const s in t)e[s]=t[s];console.log(e,this.questions);let n=[];for(const s in e){let t=e[s].length>0?e[s].reduce(((e,t)=>e+t)):0;n.push({question:s,total:e[s].length,correct:t,percentage:this.percentage(t,e[s].length)})}this.allQuestions=n},percentage(e,t){return 0===t?-1:Math.round(e/t*1e4)/100}}};const ee=(0,g.Z)(X,[["render",G],["__scopeId","data-v-396f205f"]]);var te=ee,ne={name:"App",components:{StatsPage:te,QuizPage:U,FileSelect:w},data(){return{questions:[],loaded:!1}},methods:{loadData(e){this.loaded=!0,this.questions=e}}};const se=(0,g.Z)(ne,[["render",i]]);var oe=se;(0,s.ri)(oe).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,r){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],r=e[c][2];for(var u=!0,a=0;a<s.length;a++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[a])}))?s.splice(a--,1):(u=!1,r<i&&(i=r));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,i=s[0],u=s[1],a=s[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var c=a(n)}for(t&&t(s);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},s=self["webpackChunkquiz"]=self["webpackChunkquiz"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8582)}));s=n.O(s)})();
//# sourceMappingURL=app.e5128c9b.js.map