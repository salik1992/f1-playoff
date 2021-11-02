(this["webpackJsonpf1-playoff"]=this["webpackJsonpf1-playoff"]||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var i,a,s,c=n(1),r=n(38),o=n(4),l=n(7),f=n(3),h=n(5),d=n(0),u=h.b.div(i||(i=Object(o.a)(["\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    width: 100%;\n    min-height: ","px;\n    line-height: ","px;\n    margin-top: 20px;\n    color: #ffffff;\n    background-color: #222222;\n    background-image: linear-gradient(to top, #333333, #111111);\n    border-top: 1px solid #000000;\n    box-shadow: 0 0 5px 0 #222222;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    \n    a {\n        color: #ffffff;\n        text-decoration: none;\n    }\n    \n    div {\n        margin: 0 20px;\n    }\n    \n    div:nth-child(1) {\n        text-align: left;\n    }\n    \n    div:nth-child(2) {\n        text-align: center;\n    }\n    \n    div:nth-child(3) {\n        text-align: right;\n    }\n"])),50,50),j=function(){return Object(d.jsxs)(u,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"https://twitter.com/@VitSalomon",children:"Created by: @VitSalomon"})}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"https://github.com/salik1992/f1-playoff",children:"Code at: github.com/salik1992/f1-playoff"})}),Object(d.jsx)("div",{children:"CC BY 4.0"})]})},p=h.b.div(a||(a=Object(o.a)(["\n    width: 100%;\n    height: ","px;\n    line-height: ","px;\n    margin-bottom: 20px;\n    color: #ffffff;\n    background-color: #222222;\n    background-image: linear-gradient(to bottom, #333333, #111111);\n    border-bottom: 1px solid #000000;\n    box-shadow: 0 0 5px 0 #222222;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    \n    a {\n        margin: 0 20px;\n        color: #ffffff;\n        text-decoration: none;\n    }\n"])),50,50),b=function(){return Object(d.jsx)(p,{children:Object(d.jsx)(l.b,{to:"/",children:"What if F1 used a play-off scoring system"})})},O=n(6),m=n.n(O),x=n(10),v=n(11),g=n(16),y=n(14),w=n(13),F=n(2),P={1991:n.p+"static/media/1991.66ef7303.csv",1992:n.p+"static/media/1992.f45a7f06.csv",1993:n.p+"static/media/1993.662377f2.csv",1994:n.p+"static/media/1994.0ad005fd.csv",1995:n.p+"static/media/1995.bdb7db42.csv",1996:n.p+"static/media/1996.b3a7bda8.csv",1997:n.p+"static/media/1997.c2710fa3.csv",1998:n.p+"static/media/1998.953713a0.csv",1999:n.p+"static/media/1999.6ce162c0.csv",2e3:n.p+"static/media/2000.f897b906.csv",2001:n.p+"static/media/2001.70a106b1.csv",2002:n.p+"static/media/2002.833a473a.csv",2003:n.p+"static/media/2003.c919582c.csv",2004:n.p+"static/media/2004.9507689c.csv",2005:n.p+"static/media/2005.fd39a638.csv",2006:n.p+"static/media/2006.553b28a9.csv",2007:n.p+"static/media/2007.a1ee5871.csv",2008:n.p+"static/media/2008.0dd3f852.csv",2009:n.p+"static/media/2009.06904a44.csv",2010:n.p+"static/media/2010.5bc08fd5.csv",2011:n.p+"static/media/2011.2026df6f.csv",2012:n.p+"static/media/2012.44b9be33.csv",2013:n.p+"static/media/2013.8531adcf.csv",2014:n.p+"static/media/2014.1f2f0b16.csv",2015:n.p+"static/media/2015.9deea0a0.csv",2016:n.p+"static/media/2016.bd2d2e29.csv",2017:n.p+"static/media/2017.31897bd3.csv",2018:n.p+"static/media/2018.bcd8022a.csv",2019:n.p+"static/media/2019.c445c74e.csv",2020:n.p+"static/media/2020.2483c87c.csv"},A=n(33),S=n(12),R=n(25),k=n(26),C=Object(S.compose)(Object(F.filter)((function(e,t){return t>0})),Object(R.split)(",")),I=Object(S.compose)(Object(F.map)((function(e){return Number.isNaN(e)?null:e})),Object(F.map)(Object(k.parseInt)())),L=function(e){var t=Object(R.split)(",")(e),n=Object(A.a)(t),i=n[0],a=n.slice(1);return{name:i,results:I(a),finishesCount:{},position:0,points:0,pointsFromLastRace:0,isInPlayOff:!1,playOffPoints:0,playOffFinishesCount:{}}},N=function(e){var t=Object(S.compose)(Object(F.filter)((function(e,t){return 5!==t})),Object(R.split)("\n"))(e),n=Object(A.a)(t),i=n[0],a=n[1],s=n[2],c=n[3],r=n[4],o=n.slice(5),l=Object(k.parseInt)()(C(i)[0]),f={},h=Object(S.compose)(Object(F.map)((function(e){return Number.isNaN(e)?0:e})),Object(F.map)(Object(k.parseInt)()),C)(a);Object(F.forEach)((function(e,t){f[t+1]=e}))(h);var d=C(s),u=Object(S.compose)(Object(F.map)((function(e){return"YES"===e})),C)(c),j=C(r),p=Object(F.map)(L)(o);return{year:l,awardedPoints:f,drivers:p,races:d,halfPoints:u,fastestLapPoints:j}},T=function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P[t]);case 2:return e.next=4,e.sent.text();case 4:return n=e.sent,e.abrupt("return",N(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=n(43),_=function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=function(e){return Object(F.sort)((function(t,n){var i=t.isInPlayOff&&n.isInPlayOff,a=i?"playOffPoints":"points";if(t[a]!==n[a])return n[a]-t[a];for(var s=i?"playOffFinishesCount":"finishesCount",c=1;c<=e.length&&t[s][c]===n[s][c];)c+=1;return n[s][c]-t[s][c]}))(e)}(Object(D.a)(e));return Object(F.forEach)((function(e){e.position=t.indexOf(e)}))(e),e},E=Object(S.compose)(Y,Object(F.filter)((function(e){return!e.isInPlayOff}))),M=Object(S.compose)(Y,Object(F.filter)((function(e){return e.isInPlayOff}))),B=function(){function e(){Object(v.a)(this,e),this.season=null,this.currentRace=0,this.setters={setRaceIndex:function(e){}},this.destructed=!1}return Object(g.a)(e,[{key:"init",value:function(){var e=Object(x.a)(m.a.mark((function e(t){var n,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:this.season=e.sent,null===(n=(i=this.setters).setRaceIndex)||void 0===n||n.call(i,this.currentRace),this.race();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"destruct",value:function(){this.destructed=!0}},{key:"getRace",value:function(){return this.season.races[this.currentRace]}},{key:"getRegularDrivers",value:function(){return E(this.season.drivers)}},{key:"getPlayOffDrivers",value:function(){return M(this.season.drivers)}},{key:"isPlayOffRunning",value:function(){return!1}},{key:"addPoints",value:function(){var e=this.season,t=e.halfPoints,n=e.drivers,i=e.awardedPoints,a=e.fastestLapPoints,s=t[this.currentRace]?.5:1;Object(F.forEach)(function(e){var t=e.awardedPoints,n=e.fastestLapPoints,i=e.pointsMultiplier,a=e.raceIndex;return function(e){var s,c=e.results[a],r=(null!==c?(null!==(s=t[c])&&void 0!==s?s:0)*i:0)+(e.name===n[a]?1:0);e.points+=r,e.pointsFromLastRace=r,c&&(e.finishesCount[c]?e.finishesCount[c]+=1:e.finishesCount[c]=1),e.isInPlayOff&&(e.playOffPoints+=r,c&&(e.playOffFinishesCount[c]?e.playOffFinishesCount[c]+=1:e.playOffFinishesCount[c]=1))}}({awardedPoints:i,fastestLapPoints:a,pointsMultiplier:s,raceIndex:this.currentRace}))(n)}},{key:"advanceRace",value:function(){this.currentRace<this.season.races.length-1&&(this.currentRace+=1,this.setters.setRaceIndex(this.currentRace),this.race())}}]),e}(),J=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"race",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.addPoints(),e.next=3,_(3500);case 3:if(!this.destructed){e.next=5;break}return e.abrupt("return");case 5:this.advanceRace();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(B),V=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).playoffStage=-1,e.playoffStages=void 0,e}return Object(g.a)(n,[{key:"isPlayOffRunning",value:function(){return this.playoffStage>=0}},{key:"race",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.advancePlayoffs(),this.addPoints(),e.next=4,_(3500);case 4:if(!this.destructed){e.next=6;break}return e.abrupt("return");case 6:this.advanceRace();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"advancePlayoffs",value:function(){if(this.playoffStage+1!==this.playoffStages.length){var e=this.playoffStages[this.playoffStage+1];this.currentRace+e.at===this.season.races.length&&(this.playoffStage+=1,this.advanceDriversToPlayoff(e.cutoff))}}},{key:"advanceDriversToPlayoff",value:function(e){var t=0===this.playoffStage?this.getRegularDrivers():this.getPlayOffDrivers();Object(F.forEach)((function(t){t.playOffPoints=0,t.playOffFinishesCount={},t.isInPlayOff=t.position<e}))(t)}}]),n}(B),H={at:7,cutoff:8},G={at:5,cutoff:6},K={at:3,cutoff:4},W=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).playoffStages=[H,G,K],e}return n}(V),U={at:7,cutoff:12},q={at:4,cutoff:8},z={at:1,cutoff:4},Q=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).playoffStages=[U,q,z],e}return n}(V);!function(e){e.F1_CLASSIC="F1_CLASSIC",e.F1_PLAYOFF="F1_PLAYOFF",e.NASCAR_PLAYOFF="NASCAR_PLAYOFF"}(s||(s={}));var X,Z,$,ee,te,ne,ie,ae,se,ce,re,oe,le=n(15),fe=n(27),he=Object(F.reverse)(Object.keys(P)),de=(X={},Object(fe.a)(X,s.F1_CLASSIC,"F1 Classic"),Object(fe.a)(X,s.F1_PLAYOFF,"F1 Play Off"),Object(fe.a)(X,s.NASCAR_PLAYOFF,"NASCAR Play Off"),X),ue=h.b.div(Z||(Z=Object(o.a)(["\n    text-align: center;\n\n    a {\n        display: inline-block;\n        padding: 10px 20px;\n        background-color: #00dd00;\n        border: 1px solid #009900;\n        text-decoration: none;\n    }\n"]))),je=function(e){var t=e.season,n=e.championshipStyle,i=Object(f.f)(),a=i.season,r=i.championshipStyle,o=Object(c.useState)(t||a||he[0]),h=Object(le.a)(o,2),u=h[0],j=h[1],p=Object(c.useState)(n||r||s.F1_CLASSIC),b=Object(le.a)(p,2),O=b[0],m=b[1];return Object(d.jsxs)(ue,{children:[Object(d.jsx)("select",{value:u,onChange:function(e){return j(e.target.value)},children:Object(F.map)((function(e){return Object(d.jsx)("option",{value:e,children:e},"season-picker-".concat(e))}))(he)}),Object(d.jsx)("select",{value:O,onChange:function(e){return m(e.target.value)},children:Object(F.map)((function(e){return Object(d.jsx)("option",{value:e,children:de[e]},"season-picker-".concat(e))}))(Object.keys(de))}),Object(d.jsx)("br",{}),Object(d.jsx)(l.b,{to:"/".concat(u,"/").concat(O),children:"Run the season"})]})},pe=1.75,be=h.b.h1($||($=Object(o.a)(["\n    text-align: center;\n"]))),Oe=h.b.h2(ee||(ee=Object(o.a)(["\n    text-align: left;\n"]))),me=h.b.p(te||(te=Object(o.a)(["\n    line-height: ","em;\n"])),pe),xe=h.b.ul(ne||(ne=Object(o.a)(["\n    line-height: ","em;\n"])),pe),ve=h.b.li(ie||(ie=Object(o.a)(["\n    line-height: ","em;\n"])),pe),ge=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(be,{children:"Interesting facts about Fictional F1 Playoff results"}),Object(d.jsxs)(me,{children:["For full rules, refer to the ",Object(d.jsx)(l.b,{to:"/",children:"main page"}),"."]}),Object(d.jsx)(me,{children:"This is, of course, only guesstimate as we cannot simulate different decisions like driving for win instead of saving car towards the end of the season. Or letting teammate win so he would stay in the team for next year, etc."}),Object(d.jsx)(me,{children:"This takes into account only different scoring system. Nothing more."}),Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"Out of 30 seasons 15 would have the same champion."}),Object(d.jsx)(ve,{children:"No champion of this era would loose champion status."}),Object(d.jsx)(ve,{children:"Lewis Hamilton would won 1 less championship (6 in total) and some of them in different years."}),Object(d.jsx)(ve,{children:"Michael Schumacher would be only 3 time world champion (1995, 2000, 2001)."}),Object(d.jsx)(ve,{children:"There would be a new world champion in 1992, Martin Brundle."}),Object(d.jsx)(ve,{children:"In 2008 the controversial victory of Fernando Alonso in Singapore would gain him a 2nd championship win out of 3. (2006, 2008 and 2012)."}),Object(d.jsx)(ve,{children:"Jenson Button would be crowned a champion in 2011 not 2009."}),Object(d.jsx)(ve,{children:"Kimi Raikkonen would be 3 time world champion (2003, 2005, 2007)."}),Object(d.jsx)(ve,{children:"Sebastien Vettel would be only 2 time world champion in 2009 and 2013."}),Object(d.jsx)(ve,{children:"Nico Rosberg would win the championship in 2015 instead of 2016."}),Object(d.jsx)(ve,{children:"There would be a new champion in 2017, Valtteri Bottas."})]}),Object(d.jsx)(je,{championshipStyle:s.F1_PLAYOFF})]})},ye=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(be,{children:"Interesting facts about fictional F1 NASCAR-like Playoff results"}),Object(d.jsxs)(me,{children:["For full rules, refer to the ",Object(d.jsx)(l.b,{to:"/",children:"main page"}),"."]}),Object(d.jsx)(me,{children:"This is, of course, only guesstimate as we cannot simulate different decisions like driving for win instead of saving car towards the end of the season. Or letting teammate win so he would stay in the team for next year, etc."}),Object(d.jsx)(me,{children:"This takes into account only different scoring system. Nothing more."}),Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"Out of 30 seasons 15 would have the same champion."}),Object(d.jsx)(ve,{children:"Nigel Mansell nor Damon Hill would have become champions."}),Object(d.jsx)(ve,{children:"Lewis Hamilton would be only 4 time champion (2014, 2016, 2018, 2019)."}),Object(d.jsx)(ve,{children:"Michael Schumacher would be only 3 time world champion (2000, 2001, 2002)."}),Object(d.jsxs)(ve,{children:["There would be several new world champions:",Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"Gerhard Berger - 1992"}),Object(d.jsx)(ve,{children:"Jean Alesi - 1994"}),Object(d.jsx)(ve,{children:"David Coulthard - 1995"}),Object(d.jsx)(ve,{children:"Eddie Irvine - 1999"}),Object(d.jsx)(ve,{children:"Juan Pablo Montoya - 2004"}),Object(d.jsx)(ve,{children:"Felipe Massa - 2008"}),Object(d.jsx)(ve,{children:"Valtteri Bottas - 2017"}),Object(d.jsx)(ve,{children:"Max Verstappen - 2020"})]})]}),Object(d.jsx)(ve,{children:"Jenson Button would be crowned a champion in 2012 not 2009."}),Object(d.jsx)(ve,{children:"Kimi Raikkonen would be 2 time world champion (2003, 2007)."}),Object(d.jsx)(ve,{children:"Sebastien Vettel would still be 4 time world champion, only swapping years 2009 and 2012 with Jenson Button."}),Object(d.jsx)(ve,{children:"Nico Rosberg would win the championship in 2015 instead of 2016."})]}),Object(d.jsx)(je,{championshipStyle:s.NASCAR_PLAYOFF})]})},we=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(be,{children:"What If F1 used Play Off style championship"}),Object(d.jsx)(me,{children:'This small webpage allows to simulate running F1 seasons spanning from 1991 to 2020 under rules that use play off style championship similar to current NASCAR but slightly less "aggressive".'}),Object(d.jsx)(me,{children:"The NASCAR style play off rules are also available for picking."}),Object(d.jsx)(Oe,{children:"Motivation"}),Object(d.jsx)(me,{children:"The goal of this exercise is to discover and show what implications it might have on the known scenarios. There are some pros and cons to this approach. The main advantage might be a nearly guaranteed fight to the last race. The main disadvantage would be an unfair result if the driver who dominated the main part of the season would loose because of two unlucky races."}),Object(d.jsx)(je,{}),Object(d.jsx)(Oe,{children:"Fictional F1 Play Off Rules"}),Object(d.jsx)(me,{children:"The begining of the season is same to the current F1 rules. But towards the end there are some changes:"}),Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"7 races before the end of the season the top 8 drivers are promoted to the play off stage. The rest of the field continues fighting for positions but cannot reach the play off and thus championship win anymore."}),Object(d.jsx)(ve,{children:"All drivers still accumulate points the same as before the play off. Drivers in the top 8 have also their own group in which they start from 0."}),Object(d.jsx)(ve,{children:"After 2 races (5 races to the end) 7th and 8th placed drivers in the play off group are eliminated and join back the rest of the field."}),Object(d.jsx)(ve,{children:"The remaining top 6 have the points reset again and they start from 0."}),Object(d.jsx)(ve,{children:"After 2 more races (3 races to the end) 5th and 6th placed drivers in the play off group are eliminated and join back the rest of the field."}),Object(d.jsx)(ve,{children:"Remaining top 4 drivers get points reset once more and have a de facto 3 race long championship which decides the overall winner."}),Object(d.jsxs)(ve,{children:["The final order in the championship is decided:",Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"For top 4 by their order in the final stage group."}),Object(d.jsx)(ve,{children:"For the rest of the field by the overall points accumulated."})]})]}),Object(d.jsxs)(ve,{children:[Object(d.jsx)(l.b,{to:"/info/F1_PLAYOFF",children:"See interesting facts"})," or pick any season to run:"]})]}),Object(d.jsx)(je,{championshipStyle:s.F1_PLAYOFF}),Object(d.jsx)(Oe,{children:"NASCAR like Play off rules"}),Object(d.jsx)(me,{children:"These are not exact as done in NASCAR, but close and they are more extreme."}),Object(d.jsxs)(xe,{children:[Object(d.jsx)(ve,{children:"7 races before the end top 12 drivers are promoted to the play off group."}),Object(d.jsx)(ve,{children:"After 3 races (4 races before the end) last 4 drivers of the play off group are eliminated. And the points get reset."}),Object(d.jsx)(ve,{children:"After another 3 races (1 race before the end) next 4 drivers are eliminated. And the points get reset."}),Object(d.jsx)(ve,{children:"Top 4 have 1 race that decides it all."}),Object(d.jsxs)(ve,{children:[Object(d.jsx)(l.b,{to:"/info/NASCAR_PLAYOFF",children:"See interesting facts"})," or pick any season to run:"]})]}),Object(d.jsx)(je,{championshipStyle:s.NASCAR_PLAYOFF})]})},Fe=h.b.div(ae||(ae=Object(o.a)(["\n    position: absolute;\n    display: flex;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: ","px;\n    line-height: ","px;\n    color: #ffffff;\n    background-image: linear-gradient(to top, #000000, #222222);\n    transition: transform 800ms;\n\n    .name {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .position, .points, .points-from-last-race {\n        padding: 0 20px;\n        min-width: 40px;\n        font-weight: bold;\n    }\n\n    .position {\n        text-align: center;\n    }\n\n    .points, .points-from-last-race {\n        text-align: right;\n    }\n\n    .points-from-last-race {\n        color: #00aa00;\n\n        &.points-0 {\n            color: #999999;\n        }\n    }\n"])),50,50),Pe=function(e){var t=e.offsetIndex,n=e.isInPlayoff,i=e.playoffRunners,a=void 0===i?0:i,s=e.driver,c=s.position,r=s.name,o=s.points,l=s.playOffPoints,f=s.pointsFromLastRace;return Object(d.jsxs)(Fe,{style:{transform:"translateY(".concat(50*t,"px)")},children:[Object(d.jsx)("div",{className:"position",children:c+1+(n?0:a)}),Object(d.jsx)("div",{className:"name",children:r}),Object(d.jsx)("div",{className:"points",children:n?l:o}),Object(d.jsxs)("div",{className:"points-from-last-race points-".concat(f),children:["+",f]})]})},Ae=h.b.div(se||(se=Object(o.a)(["\n    position: relative;\n    top: ","px;\n    margin-bottom: 30px;\n"])),(function(e){var t=e.offset;return 50*(null!==t&&void 0!==t?t:0)})),Se=h.b.div(ce||(ce=Object(o.a)(["\n    height: ","px;\n"])),(function(e){return 50*e.driversLength+100})),Re=function(){var e=Object(f.f)(),t=e.season,n=e.championshipStyle,i=Object(c.useState)(null),a=Object(le.a)(i,2),r=a[0],o=a[1],l=Object(c.useState)(-1),h=Object(le.a)(l,2),u=h[0],j=h[1],p=Object(c.useState)({race:"",regularDrivers:[],playoffDrivers:[],isPlayoffRunning:!1}),b=Object(le.a)(p,2),O=b[0],m=b[1];return Object(c.useEffect)((function(){return function(){null===r||void 0===r||r.destruct()}}),[]),Object(c.useEffect)((function(){r&&(r.init(t),r.setters={setRaceIndex:j})}),[t,r]),Object(c.useEffect)((function(){r&&!r.destructed&&m({race:r.getRace(),regularDrivers:r.getRegularDrivers(),playoffDrivers:r.getPlayOffDrivers(),isPlayoffRunning:r.isPlayOffRunning()})}),[u]),Object(c.useEffect)((function(){null===r||void 0===r||r.destruct(),o(function(e){switch(e){case s.F1_CLASSIC:return new J;case s.F1_PLAYOFF:return new W;case s.NASCAR_PLAYOFF:return new Q}}(n))}),[t,n]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(je,{}),Object(d.jsxs)(be,{children:["Season - ",t]}),Object(d.jsxs)(be,{children:["Race ",u+1,": ",O.race]}),Object(d.jsxs)(Se,{driversLength:O.playoffDrivers.length+O.regularDrivers.length,children:[O.isPlayoffRunning&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Oe,{children:"Playoff Group"}),Object(d.jsx)(Ae,{children:Object(F.map)((function(e){return Object(d.jsx)(Pe,{offsetIndex:e.position,driver:e,isInPlayoff:!0},e.name)}))(O.playoffDrivers)})]}),Object(d.jsx)(Ae,{offset:O.playoffDrivers.length,children:Object(F.map)((function(e){return Object(d.jsx)(Pe,{offsetIndex:e.position,driver:e,playoffRunners:O.playoffDrivers.length},e.name)}))(O.regularDrivers)})]})]})},ke=h.b.div(re||(re=Object(o.a)(["\n    margin: auto;\n    width: 100%;\n    max-width: 1280px;\n"]))),Ce=Object(h.a)(oe||(oe=Object(o.a)(["\n    * {\n        font-family: 'Helvetica', 'Roboto', 'Segoe UI', sans;\n    }\n    html, body {\n        margin: 0;\n        padding: 0;\n    }\n    #root {\n        margin-bottom: 70px;\n    }\n"]))),Ie=function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(ke,{children:[Object(d.jsx)(Ce,{}),Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/info/F1_PLAYOFF",component:ge}),Object(d.jsx)(f.a,{path:"/info/NASCAR_PLAYOFF",component:ye}),Object(d.jsx)(f.a,{path:"/:season/:championshipStyle",component:Re}),Object(d.jsx)(f.a,{path:"/",component:we})]})]}),Object(d.jsx)(j,{})]})};Object(r.render)(Object(d.jsx)(c.StrictMode,{children:Object(d.jsx)(Ie,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.a595d7d0.chunk.js.map