"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{9537:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var t,i,o,a,c,d,s,l,u,m=r(1413),f=function(n){return n.phonebook.contacts.items},p=function(n){return n.phonebook.filter},x=function(n){return n.phonebook.contacts.isLoading},b=function(n){return n.phonebook.contacts.error},g=r(3634),h=r(168),v=r(5705),j=r(5390),Z=(0,j.Z)(v.l0)(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-direction: column; \n  align-items: center;\n"]))),y=j.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--border-margin-padding);\n"]))),k=j.Z.label(o||(o=(0,h.Z)(["\n  font-size: var(--font-size-subtitle);\n"]))),w=(0,j.Z)(v.gN)(a||(a=(0,h.Z)(["\n  padding: var(--border-margin-padding);\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #cccccc;\n  border-radius: var(--border-margin-padding);\n"]))),z=j.Z.button(c||(c=(0,h.Z)(["\n  font-size: var(--font-size-buttons);\n  padding: 5px 15px;\n  margin: 10px 0 15px 0;\n  cursor: pointer;\n  border: solid 2px #000;\n  border-radius: var(--border-margin-padding);\n  background-color: #9b94ce;\n\n  :hover {\n    color: green;\n  }\n"]))),C=r(2791),F=r(9434),L=r(2797),_=r(5264),I=r(184),N=L.Ry().shape({name:L.Z_().min(2).max(70).required(),number:L.Rx().min(4).required()}),S={name:"",number:""};function q(){var n=(0,F.I0)(),e=(0,F.v9)(f);return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(v.J9,{initialValues:S,onSubmit:function(r,t){var i=t.resetForm;if(e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return _.Notify.failure("".concat(r.name," is already in contacts"));n((0,g.el)((0,m.Z)({},r))),i()},validationSchema:N,children:(0,I.jsxs)(Z,{children:[(0,I.jsxs)(y,{children:[(0,I.jsx)(k,{htmlFor:"name",children:"Name:"}),(0,I.jsx)(w,{name:"name",type:"text",id:"name"}),(0,I.jsx)(v.Bc,{name:"name"})]}),(0,I.jsxs)(y,{children:[(0,I.jsx)(k,{htmlFor:"number",children:"Number:"}),(0,I.jsx)(w,{name:"number",type:"tel",id:"number"}),(0,I.jsx)(v.Bc,{name:"number"})]}),(0,I.jsx)(z,{type:"submit",children:"Add contact"})]})})})}var B=j.Z.ul(d||(d=(0,h.Z)(["\n  width: 400px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),R=j.Z.li(s||(s=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: left;\n  gap: 20px;\n"]))),W=j.Z.span(l||(l=(0,h.Z)(["\n  font-size: var(--font-size-subtitle);\n  font-weight: bold;\n  color: #3b327d;\n"]))),A=j.Z.button(u||(u=(0,h.Z)(["\n  font-size: var(--font-size-buttons);\n  padding: 4px 10px;\n\n  cursor: pointer;\n  border: solid 2px #000;\n  border-radius: var(--border-margin-padding);\n  background-color: #9b94ce;\n\n  :hover {\n    color: #e02121;\n  }\n"])));function D(){var n=(0,F.I0)(),e=(0,F.v9)(f),r=(0,F.v9)(p),t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(B,{children:t.map((function(e){var r=e.id,t=e.name,i=e.number;return(0,I.jsxs)(R,{children:[(0,I.jsx)(W,{children:t}),(0,I.jsx)(W,{children:i}),(0,I.jsx)(A,{type:"button",onClick:function(){return n((0,g._f)(r))},children:"Delete"})]},r)}))})})}var E,J,T,V=r(960),Y=j.Z.div(E||(E=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),G=j.Z.label(J||(J=(0,h.Z)(["\n  font-size: var(--font-size-buttons);\n  margin-bottom: var(--border-margin-padding);\n"]))),H=j.Z.input(T||(T=(0,h.Z)(["\n  padding: var(--border-margin-padding);\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #cccccc;\n  border-radius: var(--border-margin-padding);\n"])));function K(){var n=(0,F.I0)(),e=(0,F.v9)(p);return(0,I.jsxs)(Y,{children:[(0,I.jsx)(G,{htmlFor:"filter",children:"Find contacts by name"}),(0,I.jsx)(H,{name:"filter",type:"text",id:"filter",value:e,onChange:function(e){return n((0,V.x)(e.target.value))}})]})}var M=r(8966);function O(){return(0,I.jsx)(M.iT,{height:60,width:60,color:"#9b94ce",wrapperStyle:{justifyContent:"center"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"##9b94ce",strokeWidth:2,strokeWidthSecondary:2})}var P=r(4270);function Q(){var n=(0,F.I0)(),e=(0,F.v9)(x),r=(0,F.v9)(b);return(0,C.useEffect)((function(){n((0,g.yF)())}),[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(P.q,{children:(0,I.jsx)("title",{children:"Your contacts"})}),(0,I.jsx)(q,{}),(0,I.jsx)(K,{}),r&&(0,I.jsx)("p",{children:r}),e&&(0,I.jsx)(O,{}),(0,I.jsx)(D,{})]})}}}]);
//# sourceMappingURL=537.1285772d.chunk.js.map