import{inject as n,provide as r}from"vue";let t=Symbol("headlessui.useid"),i=0;function I(){return n(t,()=>`${++i}`)()}function l(e){r(t,e)}export{l as provideUseId,I as useId};
