(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{2013:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return t(2206)}])},83:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893);t(7294);var s=t(8043),a=t(797),i=t(4560),c=t(422);function l(e){let{member:r,roleLimit:t}=e,l=0===t?[]:r.roles.slice(-t).reverse();return(0,n.jsx)(i.Z,{name:r.name,subtitles:l,children:(0,n.jsx)(c.Z,{aspectRatio:[1,1],imageKey:(0,s.IK)("members/".concat((0,a.Cb)(r.id)),"icons/tse-bulb"),alt:"Profile photo of ".concat(r.name)})})}},4560:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(5893),s=t(1664),a=t.n(s);t(7294);var i=t(8182);function c(e){let{name:r,subtitles:t,href:s,children:c}=e;return(0,n.jsxs)(i.Z,{className:"m-3 mb-4",style:{background:"rgba(0, 0, 0, 0)"},children:[(0,n.jsx)("div",{className:"mb-3",children:c}),(0,n.jsx)(i.Z.Title,{style:{fontWeight:600},children:r}),t.map((e,r)=>(0,n.jsx)(i.Z.Text,{className:"m-0",children:e},r)),void 0!==s&&(0,n.jsx)(a(),{href:s,className:"stretched-link",children:"Learn more"})]})}c.defaultProps={href:void 0,children:void 0}},6703:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(5893);t(7294);var s=t(1555),a=t(4051);function i(e){let{title:r,profiles:t,width:i}=e;if(0===t.length)return null;let c={xs:6,md:4};return 4===i&&(c.lg=3),(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("h3",{className:"mb-3 mt-5",style:{fontWeight:600},children:r}),(0,n.jsx)(a.Z,{style:{marginLeft:"-1.75rem",marginRight:"-1.75rem"},children:t.map((e,r)=>(0,n.jsx)(s.Z,{...c,children:e},r))})]})}i.defaultProps={title:void 0,width:4}},6363:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(5893),s=t(4184),a=t.n(s);t(7294);var i=t(682),c=t(6650),l=t(7143),d=t(5255),o=t.n(d);function u(e){let{metadata:{title:r,subtitle:t,heroImage:s},children:d}=e,u=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:r}),t&&(0,n.jsx)("p",{children:s?t:(0,n.jsx)("em",{children:t})})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{title:r}),s&&(0,n.jsx)(c.Z,{imageKey:s,children:u}),(0,n.jsxs)(i.Z,{className:a()("mt-5",o().markdownRoot),children:[!s&&(0,n.jsx)("header",{children:u}),d]})]})}},2206:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return f},default:function(){return h}});var n=t(5893),s=t(7294),a=t(9907),i=t(83),c=t(6703),l=t(9261),d=t(797),o=t(6363);function u(e){let{team:r}=e;return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let{role:r,personIds:t}=e;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("h3",{children:r+(t.length>1?"s":"")}),(0,n.jsx)(c.Z,{profiles:t.map(e=>(0,n.jsx)(i.Z,{member:(0,d.bl)(l.tf,{id:e}),roleLimit:0},e))})]},r)})})}function m(e){let{project:r,children:t}=e;return(0,n.jsxs)(o.Z,{metadata:{title:r.name,subtitle:r.description},children:[t,(0,n.jsx)("h2",{children:"Meet the Team"}),(0,n.jsx)(u,{team:r.team})]})}var f=!0;function h(e){let{slug:r}=e,t=(0,d.bl)(a.c,{slug:r}),s=t.content;return(0,n.jsx)(m,{project:t,children:(0,n.jsx)(s,{})})}},5255:function(e){e.exports={markdownRoot:"PlainLayout_markdownRoot__nx_7X"}},9008:function(e,r,t){e.exports=t(9201)},8182:function(e,r,t){"use strict";t.d(r,{Z:function(){return N}});var n=t(4184),s=t.n(n),a=t(7294),i=t(6792),c=t(6611),l=t(9602),d=t(5893);let o=a.forwardRef(({bsPrefix:e,className:r,variant:t,as:n="img",...a},c)=>{let l=(0,i.vE)(e,"card-img");return(0,d.jsx)(n,{ref:c,className:s()(t?`${l}-${t}`:l,r),...a})});o.displayName="CardImg";var u=t(9059);let m=a.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},c)=>{let l=(0,i.vE)(e,"card-header"),o=(0,a.useMemo)(()=>({cardHeaderBsPrefix:l}),[l]);return(0,d.jsx)(u.Z.Provider,{value:o,children:(0,d.jsx)(t,{ref:c,...n,className:s()(r,l)})})});m.displayName="CardHeader";let f=(0,l.Z)("h5"),h=(0,l.Z)("h6"),x=(0,c.Z)("card-body"),j=(0,c.Z)("card-title",{Component:f}),p=(0,c.Z)("card-subtitle",{Component:h}),v=(0,c.Z)("card-link",{Component:"a"}),Z=(0,c.Z)("card-text",{Component:"p"}),g=(0,c.Z)("card-footer"),b=(0,c.Z)("card-img-overlay"),_=a.forwardRef(({bsPrefix:e,className:r,bg:t,text:n,border:a,body:c,children:l,as:o="div",...u},m)=>{let f=(0,i.vE)(e,"card");return(0,d.jsx)(o,{ref:m,...u,className:s()(r,f,t&&`bg-${t}`,n&&`text-${n}`,a&&`border-${a}`),children:c?(0,d.jsx)(x,{children:l}):l})});_.displayName="Card",_.defaultProps={body:!1};var N=Object.assign(_,{Img:o,Title:j,Subtitle:p,Body:x,Link:v,Text:Z,Header:m,Footer:g,ImgOverlay:b})}},function(e){e.O(0,[367,907,774,888,179],function(){return e(e.s=2013)}),_N_E=e.O()}]);