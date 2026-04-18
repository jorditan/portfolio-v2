import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.Dy6lLLXr.js";import{c as r}from"./createLucideIcon.B6d3Ucd4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function i(){return localStorage.getItem("theme")!=null?localStorage.getItem("theme"):"dark"}function m(){const e=document.documentElement;e.classList.contains("dark")?(e.classList.remove("dark"),localStorage.setItem("theme","light")):(e.classList.add("dark"),localStorage.setItem("theme","dark"))}function k(){const[e,t]=o.useState(null);o.useEffect(()=>{t(i())},[]);const l=()=>{m(),e!="dark"?t("dark"):t("light")},s="icon transition-all stroke-slate-900 dark:stroke-slate-50 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";return a.jsx("button",{onClick:l,"aria-label":e==="dark"?"Cambiar a modo claro":"Cambiar a modo oscuro",className:"rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",children:e==="dark"?a.jsx(c,{className:`transition-all hover:scale-110 ${s}`}):a.jsx(n,{className:`transition-all hover:scale-110 ${s}`})})}export{k as default};
