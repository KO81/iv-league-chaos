"use strict";/*
author: Christian Feilert
version: 1
type: expanded/alpha
date started: 7/1-2024
date last modified by author: 14/1-2024  */
const b=(o)=>{return o.match(/.{1,8}/g).join(' ').split(' ').reduce((p,c)=>p+=String.fromCharCode(parseInt(c,2)),'');
},c=(o)=>{let a0='',a1,i=0,j;for(i;i<o.length;i++){a1='';for(j=7;j>=0;j--){a1+=(o.charCodeAt(i)>>j)&1};a0+=a1}return a0.trim()
};export{b,c}
