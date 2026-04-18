import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.Dy6lLLXr.js";import{c as r}from"./createLucideIcon.B6d3Ucd4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function i(){return localStorage.getItem("theme")!=null?localStorage.getItem("theme"):"dark"}function m(){const t=document.documentElement;t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.setItem("theme","light")):(t.classList.add("dark"),localStorage.setItem("theme","dark"))}function k(){const[t,a]=s.useState(null);s.useEffect(()=>{a(i())},[]);const l=()=>{m(),t!="dark"?a("dark"):a("light")},o="icon transition-all stroke-slate-900 dark:stroke-slate-50 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:l,"data-tooltip-target":"themeButton",className:"rounded-full",children:t==="dark"?e.jsx(c,{className:`transition-all hover:scale-110 ${o}`}):e.jsx(n,{className:`transition-all hover:scale-110 ${o}`})}),e.jsxs("div",{id:"themeButton",role:"tooltip",className:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-slate-50 dark:text-gray-900 bg-slate-900 dark:bg-white border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip",children:["Cambiar tema",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})}export{k as default};
