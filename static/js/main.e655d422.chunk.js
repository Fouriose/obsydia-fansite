(this.webpackJsonpobsydia=this.webpackJsonpobsydia||[]).push([[0],{10:function(a,e,t){},11:function(a,e,t){"use strict";t.r(e);var c=t(1),r=t.n(c),i=t(3),s=t.n(i),o=t(0);var l=function(a){var e=a.imgPath;return Object(o.jsx)("img",{src:e,alt:"",className:"bgCharacter"})},n=t(4),m=t.p+"static/media/Logo.fd46698c.svg";var d=function(a){var e=document.querySelectorAll(".bgCharacter")[a.character.slot],t=document.querySelectorAll(".chararcterTooltip")[a.character.slot],c="characterBox-".concat(a.character.firstName.toLowerCase(),"__active");return Object(o.jsx)("div",{className:"characterBox characterBox-".concat(a.character.firstName.toLowerCase(),"}"),id:a.characterBoxState,onMouseEnter:function(){e.classList.add("bgCharacter__active"),t.classList.add(c)},onMouseLeave:function(){e.classList.remove("bgCharacter__active"),t.classList.remove(c)},children:Object(o.jsxs)("div",{className:"portraitWrapper",children:[Object(o.jsx)("div",{className:"chararcterTooltip",id:a.characterTooltipState,children:Object(o.jsx)("h1",{children:a.character.fullName})}),Object(o.jsx)("div",{className:"characterImageWrapper",children:Object(o.jsx)("img",{src:a.character.image,className:"characterBox-portrait",alt:""})})]})})},h=t.p+"static/media/Arrow-left.9c709f90.svg",j=t.p+"static/media/Arrow-right.77dbb872.svg";var v=function(a){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),r=t[0],i=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:h,id:r?"arrowLeft__active":void 0,alt:"logo",className:"arrowLeft"}),Object(o.jsx)(d,{character:a.petra,characterBoxState:r?"characterBox-1__active":void 0,characterTooltipState:r?"characterTooltip-1__active":void 0}),Object(o.jsx)(d,{character:a.selen,characterBoxState:r?"characterBox-2__active":void 0,characterTooltipState:r?"characterTooltip-2__active":void 0}),Object(o.jsx)(d,{character:a.rosemi,characterBoxState:r?"characterBox-3__active":void 0,characterTooltipState:r?"characterTooltip-3__active":void 0}),Object(o.jsx)("img",{src:m,alt:"logo",className:"obsydiaLogo",id:r?"logo__active":void 0,onClick:function(a){!1===r&&(i(!0),a.target.classList.add("obsydiaLogo__active"))}}),Object(o.jsx)("img",{src:j,id:r?"arrowRight__active":void 0,alt:"logo",className:"arrowRight"})]})},g=t.p+"static/media/Petra_Gurin.1b025dfa.png",b=t.p+"static/media/Selen_Tatsuki.e1064f72.png",x=t.p+"static/media/Rosemi_Lovelock.b0f033a0.png";var u=function(){var a={fullName:"Petra Gurin",firstName:"Petra",image:g,slot:0},e={fullName:"Selen Tatsuki",firstName:"Selen",image:b,slot:1},t={fullName:"Rosemi Lovelock",firstName:"Rosemi",image:x,slot:2};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"mainMenuContainer",children:Object(o.jsx)(v,{petra:a,selen:e,rosemi:t})}),Object(o.jsxs)("div",{className:"bgContainer",children:[Object(o.jsx)("div",{className:"bgImage"}),Object(o.jsxs)("div",{className:"bgCharacterContainer",children:[Object(o.jsx)(l,{imgPath:a.image}),Object(o.jsx)(l,{imgPath:e.image}),Object(o.jsx)(l,{imgPath:t.image})]})]})]})};t(10);s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e655d422.chunk.js.map