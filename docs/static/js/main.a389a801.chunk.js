(this["webpackJsonptemplate-react"]=this["webpackJsonptemplate-react"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(16),s=c.n(r),n=(c(22),c(7)),i=c(10),l=c(2),j=c.p+"static/media/Rick_and_Morty_logo.de13d484.png",o=c(0),h=function(e){return Object(o.jsx)(n.b,{to:"/character/".concat(e.character.id),children:Object(o.jsxs)("article",{className:"characterCard",children:[Object(o.jsx)("img",{src:e.character.image,alt:e.character.name,className:"characterCard__img"}),Object(o.jsxs)("div",{className:"characterCard__text",children:[Object(o.jsx)("h2",{className:"characterCard__text-name",children:e.character.name}),Object(o.jsxs)("p",{className:"characterCard__text-species",children:[Object(o.jsx)("i",{className:"".concat("Alien"===e.character.species?"fas fa-hand-spock":"fas fa-user-alt"," characterCard__text-species-icon")}),e.character.species]})]})]})})},d=c(8),m=function(e){return Object(o.jsx)("section",{children:200===e.errorCode?Object(o.jsxs)("article",{className:"error200",children:["There is no character that matches the search for the word:",Object(o.jsxs)("span",{children:[" ",e.filterName]})]}):400===e.errorCode?Object(o.jsxs)("article",{className:"error400",children:[Object(o.jsx)("h2",{children:"This character doesn't exist."}),Object(o.jsx)(n.b,{to:"/",children:Object(o.jsx)("button",{className:"error400_button",children:"Back to character list"})})]}):404===e.errorCode?Object(o.jsxs)("article",{className:"error400",children:[Object(o.jsx)("h2",{children:"Page not found"}),Object(o.jsx)(n.b,{to:"/",children:Object(o.jsx)("button",{className:"error400_button",children:"Back to character list"})})]}):void 0})},b=function(e){if(0===e.characters.length)return Object(o.jsx)(m,{filterName:e.filterName,errorCode:200});var t=e.characters.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(h,{character:e})},e.id)}));return Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"main__list",children:t})})},u=b;b.propsTypes={characters:c.n(d).a.array};var O=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"name"}),Object(o.jsx)("input",{className:"main__sectionForm-form_input",type:"text",name:"name",id:"name",placeholder:"Filter by name",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})},f=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"species"}),Object(o.jsxs)("select",{className:"main__sectionForm-form_select",name:"species",id:"species",value:e.filterSpecies,placeholder:"Filter by species",onChange:function(t){e.handleFilter({value:t.target.value,key:"species"})},children:[Object(o.jsx)("option",{value:"",children:"All"}),Object(o.jsx)("option",{value:"Human",children:"Human"}),Object(o.jsx)("option",{value:"Alien",children:"Alien"})]})]})},x=function(e){return Object(o.jsx)("section",{className:"main__sectionForm",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"main__sectionForm-form",children:[Object(o.jsx)(O,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(o.jsx)(f,{filterSpecies:e.filterSpecies,handleFilter:e.handleFilter}),Object(o.jsxs)("button",{className:"main__sectionForm-form_reset",onClick:e.reset,children:[Object(o.jsx)("i",{className:"far fa-trash-alt"})," Reset"]})]})})},p=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"wrap-cardDetail",children:Object(o.jsxs)("article",{className:"characterCardDetail",children:[Object(o.jsxs)(n.b,{to:"/",className:"link_return",children:[Object(o.jsx)("i",{className:"fas fa-arrow-left"})," Return"]}),Object(o.jsx)("img",{className:"characterCardDetail__img",src:e.character.image,alt:e.character.name}),Object(o.jsxs)("div",{className:"characterCardDetail__detail",children:[Object(o.jsx)("h4",{className:"characterCardDetail__detail-name",children:e.character.name}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Status: "}),Object(o.jsx)("i",{className:function(){var t=e.character.status;return"Alive"===t?"fas fa-heartbeat":"Dead"===t?"fas fa-skull-crossbones":"fas fa-question"}()})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Species: "})," ",e.character.species]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Origin: "})," ",e.character.origin]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Episodes: "})," ",e.character.episode]})]})]})]})})})},N=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return{id:e.id,name:e.name,image:e.image,status:e.status,species:e.species,origin:e.origin.name,episode:e.episode.length}}))}))},_={get:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},clear:function(){localStorage.clear()}},g=function(){var e=Object(a.useState)(_.get("characters")||[]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(_.get("filterName")||""),n=Object(i.a)(s,2),h=n[0],d=n[1],b=Object(a.useState)(_.get("filterSpecies")||""),O=Object(i.a)(b,2),f=O[0],g=O[1];Object(a.useEffect)((function(){0===c.length&&N().then((function(e){r(e)}))}),[c]),Object(a.useEffect)((function(){_.set("characters",c),_.set("filterName",h),_.set("filterSpecies",f)}),[c,h,f]);var v=c.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).filter((function(e){return""===f||e.species===f}));return Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{src:j,alt:"Ricky and Morty",className:"header__logo"})}),Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[Object(o.jsx)(x,{reset:function(){d(""),g("")},filterName:h,filterSpecies:f,handleFilter:function(e){"name"===e.key?d(e.value):"species"===e.key&&g(e.value)}}),Object(o.jsx)(u,{filterName:h,characters:v})]}),Object(o.jsx)(l.a,{path:"/character/:characterId",render:function(e){var t=parseInt(e.match.params.characterId),a=c.find((function(e){return e.id===t}));return a?Object(o.jsx)(p,{character:a}):Object(o.jsx)(m,{errorCode:400})}}),Object(o.jsx)(l.a,{children:Object(o.jsx)(m,{errorCode:404})})]})})]})};s.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a389a801.chunk.js.map