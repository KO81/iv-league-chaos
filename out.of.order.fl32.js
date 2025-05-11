import{b as BtS,c as StB}from'./src/binary.switcher.js';
import{TtB64,uTtB64,TfB64,uTfB64,mutateAllArrays,headUp}from'./src/to.or.from.js';
import{a,d,beta,BsTB,irritator,_rotate,SnC,randInt,hex,plain,Matrix,IV,EinsteinHeadspin}from'./src/json.js';
"use strict";/*inspired by "Seek the depths, but never the end."
author: Christian Feilert
version: 1.b.2
type: expanded/alpha
date started: 18/1-2024
date last modified by author: 11/5-2025  */
let hold,g1,fakeCache=new Map();
function arr_rst(){hold=[...d.a];g1=[...d.b];
}function hr_rtn(){let z=hold.pop();hold.unshift(z);
	return z;
}async function h_get(str){
	let a0=await crypto.subtle.digest(hr_rtn(),new TextEncoder().encode(str));
	return Array.from(new Uint8Array(a0)).map((q)=>q.toString(16).padStart(2,'0')).join('')
}async function hr(str,phrase){
	let b0=0,b1=Math.abs(str.length+phrase.length+parseInt(String(plain(str)|plain(phrase)^0xDEAD).slice(0,2),16)),b2=0,b3=0,b4,b5,a0,a1,a2,a3,a4=[];
	while(b0++!=b1){
		hold=hold.rotate(Math.abs(Math.log(b0*b1+b1)),(parseInt(plain(str.length+phrase+b0/Math.sqrt(Math.abs(b0*b1)))))>>>0x9E3B95<=0x30f?0:1);
		g1.unshift(g1.pop());
	}a0=new TextEncoder().encode(await h_get(str));a1=new TextEncoder().encode(await h_get(phrase));
	a2=[...irritator(mutateAllArrays(new Object(a),String(await h_get(phrase+str)).substring(0,16)))];
	b5=Math.abs(parseInt(a2.slice(0,1),16)%3+1^1)||1;
	for(b4=a2.length-1;b4>-1;b4--){
		for(b2;b2<a2[b4].length;b2+=b5){
			for(b0=0;b0<a0.length;b0++){
				a2[b4][b2]-=(b0+b3-b2*b4+b3<<b2-b4+b0+b3);
				a2[b4][b2]=Math.round(a2[b4][b2]>>>a0[b2%a0.length]|Math.sqrt(Math.abs(a2[b4][b2]<<a0[b2%a0.length])))
			}for(b3=0;b3<a1.length;b3++){
				a2[b4][b2]+=a0[b3%a0.length]<<a1[b0%a1.length]^0xDEAD+(b2-b4+b0+b3);
				a4.push(a2[b4][b2])
		}}
	}return new TextDecoder().decode(new Uint8Array(a2.slice(2,3)[0][Math.abs(parseInt(a2.slice(0,1),16)%0x80+1^1)||1]>0?a4.map((v,i)=>i%2?v^0xBEEF:v^0xCAFE).map(p=>p=p%0xff):a4.map(p=>p=p%0xff)))
}async function gather(arg){arr_rst();hold=_rotate(arg.length+beta(arg.substring(-1)));
	let a0=a.i,a1=btoa(new TextEncoder().encode(arg).join('')).padStart(12,a0[beta(arg[1])]),a2,a3,a4,a5,a6,a7=BsTB,a8=arg.length,a9;
	if(a8<=3){arg=IV(32)};a2=await hr(a1,arg);
	a3=beta(a2[2]);a4=beta(arg[3]);a5=beta(a2[a2.length-2]);a6=beta(arg[a8-3]);
	if(a5<=3){a2=a2.replaceAll(a2[a6],a0[a3*a4])};a9=Math.round(Math.sqrt(a8*(a6+a3)*Math.PI.toFixed(5)));
	if(!Number.isInteger(a9/a5)){a7=StB};a9=a7(a2.replaceAll(a2[a3],a0[a4*a6]));
	if(beta(a2[3])<=3){a9=a9.split('').reverse().join('')
	}return a9
}async function pwprime(phrase){let a0=SnC(await gather(phrase));arr_rst()
	return a0
}function bell(str){str=str.toLowerCase()
  let a0=d.d,a1=[...a0].reverse(),a2=str.split(''),d0=a2.length;
  for(d0;d0>0;d0--){a2[d0]=a1[a0.indexOf(a2[d0])]
  }return a2.join('')
}function bellMath(n0,n1,bool){let a0=d.d,a1,a2='',a3,a4,d0=0;n0=n0.split('');n1=n1.split('');
	let b0=new Uint8Array(bool?n1.length:new TextEncoder().encode(n1.join('')));
	for(d0;d0<n1.length;d0++){a1=n0[d0%n0.length];a3=a0.indexOf(a1);a4=a0.indexOf(n1[d0]);
		if(bool){b0[d0]=0x10+a4+a3
		}else{a2+=a0[b0[d0]-0x10-a3]}
	}return bool?new TextDecoder().decode(b0):atob(hex(a2))
}async function useLess(phrase,str,bool){
	arr_rst();hold=_rotate(Math.round(Math.sqrt(phrase.length))+beta(phrase[0x3].substring(-2)),beta(phrase[0x2]));
	return bellMath(plain(bell(await h_get(phrase))),bool?plain(btoa(str)):str,bool);
}function getIgnore(phrase){let str,fT;
	if(fakeCache.has(phrase))return fakeCache.get(phrase);
	if(typeof loremEpsum!=='function'){
		fT=["Error: Invalid token. Contact support if this persists.","Session expired. Please re-authenticate.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","404: Data not found. Check your parameters.",
			"System busy. Try again later."];
		str=fT[randInt(0,fT.length)];
	}else{str=loremEpsum(randInt(10,1e2),{wordsPerUnit:randInt(4,12),numbersPerUnit:randInt(0,2)})
	}fakeCache.set(phrase,str);return str;
}async function isSigned(phrase,signed,bool,salt=''){let a0={iv:salt,ct:''},er;
	if(bool){a0.ct=signed;signed=await useLess(phrase,JSON.stringify(a0),1)
	}else{try{a0=JSON.parse(await useLess(phrase,signed,0));signed=a0
		}catch(e){}finally{if(typeof er!=='undefined'){signed=null}}
	}return signed
}function calle(arr,os=14){let a0,a1=[];
	for(a0 of headUp(BtS([...arr].slice(os,os+0x48).join(''))).map(p=>p=p%0x10)){a1.push([...d.d][a0])
	}return a1.join('').substring(0,32)
}function chaoticG1(g1,ex){
	let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16))||[0xde,0xad],a1=[...g1],a2=[...d.d],a3,a4,a5,d0=g1.length;
	for(d0--;d0>-1;d0-=2){
		a3=[(a0[d0%a0.length]*a0[(d0+1)%a0.length]^0xBEEF)%0x10,a0[d0-1]];a3[1]=(((Math.round(Math.log(a3[0]))||3)^(a0[d0]>>>a3[0])+d0)%g1.length)%0x10;
		a2=a2.rotate(a3[0]+a3[1],!(beta(ex[d0])>>a3[1]));a4=[a1[a3[1]],a1[a3[0]]];a1[a3[0]]=a4[0];a1[a3[1]]=a4[1];
		a1=a1.rotate(beta(ex[d0])>>a3[0],a3[1]<a3[0])
	}return g1=a1
}function sanity(arr,num,ex=''){
  	if(ex){num=(num^parseInt(ex.slice(0,4),16))%arr.length;
  	}return[new Matrix([...d.b].rotate(num)).build(),new Matrix(arr,Math.round(Math.sqrt(num))).build()];
}async function reorder1(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv='',obj=sign?await isSigned(phrase,str,0):str,a5=typeof obj==='object',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+(a5?obj.iv:iv)),a1=SnC(StB(a5?obj.ct:obj),8),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a6=a0.length,a7,result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(a5&&obj.iv.length){a2=chaoticG1(a2,obj.iv)
	}a0=a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0);
	a0=new EinsteinHeadspin(a0,a5?obj.iv:iv).Emc2Shuffle();
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+(a5?obj.iv:'')))||4)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,a5?obj.iv:phrase);
	for(d0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])-(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}return await TfB64(BtS(result.join(''))).catch(er=>{return getIgnore(phrase+str.substring(str.length-10))
	}).finally(res=>{return res})
}async function disorder1(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv=sign?IV():'',a0=Array.isArray(phrase)?phrase:await pwprime(phrase+salt+iv),a1=SnC(StB(await TtB64(str)),8),a2=chaoticG1(g1,calle(a0)),a3/**/,a4,a5,a6=a0.length,a7,result=[],d0=0;
	if(typeof phrase==='function'){phrase=chaoticG1(a2,phrase.toString()).slice(0,32)
	}if(Array.isArray(phrase))a3=calle(phrase,Math.round(Math.sqrt(a6/a2.indexOf(phrase[0xff])^(a6/a2.indexOf(phrase[0xf])))+a2.indexOf(phrase[a6-0xa])));
	if(salt.length){a2=chaoticG1(a2,calle(plain(salt.padStart(32,'q'))))
	}if(iv.length){a2=chaoticG1(a2,iv)
	}a0=a0.rotate(a2.indexOf(a0[a0.length-4])*a2.indexOf(a0[a0.length-2])^(a2.indexOf(a0[a0[5]])/Math.ceil(Math.log(a2.indexOf(a0[a0.length-3])))),a2.indexOf(a0[a0.length-1])<0x7?1:0);
	a0=new EinsteinHeadspin(a0,iv).Emc2Shuffle();
	a7=sanity(a2.rotate((Math.log2(parseInt(plain(salt+(a3?a3:phrase)+iv))||4)^0xDE)|0xDEAF&0xf6,a2.indexOf(a0[a0.length-4])>0x7?0:1),a6,sign?iv:phrase);
	for(d0;d0<a1.length;d0++){
		result.push(a7[1][a7[1].indexOf(a7[0][a7[0].indexOf(a1[d0])])+(a7[0].indexOf(a0[d0%a6]+a0[(d0+a2.indexOf(a0[d0%a6]))%a6]))&0xff])
	}return sign?await isSigned(phrase,BtS(result.join('')),1,iv):BtS(result.join(''))
}async function reorder(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
	let iv='',obj=sign?await isSigned(phrase,str,0):str,a0=SnC(StB(typeof obj==='object'?obj.ct:obj)),a1=Array.isArray(phrase)?phrase:[...await pwprime(phrase+(typeof obj==='object'?obj.iv:iv)+salt)].reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	if(salt.length){g1=chaoticG1(g1,calle(plain(salt.padEnd(32,'e'))))
	}if(typeof obj==='object'&&obj.iv.length){g1=chaoticG1(g1,obj.iv)
	}for(a2;a2<a0.length;a2++){a3=a1[a2%a6];a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))
		}if(a3==g1[6]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))
		}if(a3==g1[2]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[12]){a5.push([a4[2],a4[0],a4[1],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[4]){a5.push([a4[3],a4[2],a4[0],a4[1]].join(''))
		}if(a3==g1[9]){a5.push([a4[1],a4[3],a4[0],a4[2]].join(''))
		}if(a3==g1[13]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result=a5.pop()+result
	}return await TfB64(BtS(result)).catch(er=>{return getIgnore(phrase+str.substring(str.length-10))
	}).finally(res=>{return res});
}async function disorder(str,phrase,salt='',sign=0){if(!str.length||!phrase.length)return null;
  /*
    if(con)void testPhase(str,phrase,salt,sign); con is my external control variable
  */
	let iv=sign?IV():'',a0=SnC(StB(await TtB64(str))),a1=Array.isArray(phrase)?phrase:[...await pwprime(phrase+iv+salt)].reverse(),a2=0,a3,a4,a5=[],a6=a1.length,result='';
	if(salt.length){g1=chaoticG1(g1,calle(plain(salt.padEnd(32,'e'))))
	}if(iv.length){g1=chaoticG1(g1,iv)
	}for(a2;a2<a0.length;a2++){a3=a1[a2%a6];a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))					
		}if(a3==g1[6]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))			
		}if(a3==g1[2]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[12]){a5.push([a4[1],a4[2],a4[0],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[4]){a5.push([a4[2],a4[3],a4[1],a4[0]].join(''))
		}if(a3==g1[9]){a5.push([a4[2],a4[0],a4[3],a4[1]].join(''))
		}if(a3==g1[13]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result+=a5.shift()
	}return sign?await isSigned(phrase,BtS(result),1,iv):BtS(result)
}async function testPhase(str,phrase,salt='',sign=0){let b0,b1,b2=phrase;//return null
  /*
    this function is only for control purposes
    it can be deleted
  */
	setTimeout(async()=>{
		//console.clear();
		//b2=await pwprime(phrase);
		try{let b0=await disorder1(str,b2,salt,sign),b1=/*null*/setTimeout(async()=>{b1=await reorder1(b0,b2,salt,sign)},4e2);
	        setTimeout(()=>{
	        	console.log(b0,'\n',b0.length,'\n',b1,'\n',b1.length,'\n'/*,...window.ar0,'\n',...window.ar1,'\n',phrase,'\n',salt*/)
	        },5e2)
	        //setTimeout(async()=>{b0=await pwprime(phrase+salt);b1=chaoticG1([...g1],calle(b0));b2=chaoticG1([...d.b],calle(b0))
	        //	console.log(b0,'\n',b0.length,'\n',b1,'\n',b1.length,'\n',b2,'\n',b2.length,'\n',...d.b,'\n',...g1)
	        //},5e2)
	    }catch(er){console.log('tryout =>\n',er)
	    }
	},7e2);
};export{reorder,disorder,pwprime}
