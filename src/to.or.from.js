/*inspired by "Seek the depths, but never the end."*/
function headUp(txt){return new TextEncoder().encode(txt);
}async function comp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new CompressionStream('gzip'))){chunks.push(chunk)
		}return await cu8a(chunks)
	}catch(er){return new TextEncoder().encode(str)}
}async function decomp(str){let chunks=[],chunk;
	try{for await (chunk of new Blob([str]).stream().pipeThrough(new DecompressionStream('gzip'))){chunks.push(chunk)
  		}return new TextDecoder().decode(await cu8a(chunks))
	}catch(er){return new TextDecoder().decode(str)}
}async function cu8a(ui8as){return new Uint8Array(await new Blob(ui8as).arrayBuffer());
}function uTtB64(txt){return btoa(headUp(txt).join(' '));
}function uTfB64(txt){return new TextDecoder().decode(new Uint8Array(atob(txt).split(' ').map(x=>x=parseInt(x))));
}async function TtB64(txt){return btoa(String.fromCharCode(...await comp(txt)));
}async function TfB64(txt){return await decomp(Uint8Array.from(atob(txt),c=>c.charCodeAt(0)));
}function addSmokescreen(ct){
	const PUA_START=0xE000;
	return ct+String.fromCodePoint(PUA_START+Math.floor(Math.random()*100));
}function obfuscate(ct){let output=[],i=0;
	for(i;i<ct.length;i+=10){output.push(ct.slice(i,i+10),String.fromCharCode(Math.floor(Math.random()*32))/*Random control char*/);
	}return output.join('');
}function warpArray(arr,ex,seed=0){let a0=parseInt(ex.slice(seed*4,(seed+1)*4),16)||0xDEAD,a1;
	return arr.map((val,i)=>{a1=(i^a0)%arr.length;return(val*0x9E3B9+a1)^(a0>>(i%16))});
}function crossContaminate(a,ex){let a0=ex.match(/.{2}/g).map(b=>parseInt(b,16)),a1;
	Object.keys(a).forEach((key,i)=>{a1=Object.keys(a)[(i+a0[i%a0.length])%9];a[key]=a[key].map((v,j)=>v^a[a1][j%a[a1].length]|i%16)});
}function algebraicFold(arr,ex,depth=0){let a0,a1;
	if(depth>=3)return arr;
	a0=parseInt(ex.slice(depth*2,(depth+1)*2),16)%arr.length;
	a1=[...arr.slice(a0).map((v,i)=>v+arr[i%a0]),...arr.slice(0,a0).map((v,i)=>v-arr[(i+a0)%arr.length]^0xDEAD*i)];
	return algebraicFold(a1,ex,depth+1);
}function mutateAllArrays(a,ex){let b0=new Object();
	Object.keys(a).forEach((key,i)=>{b0[key]=warpArray(a[key],ex,i)});crossContaminate(b0,ex);
	Object.keys(a).forEach(key=>{b0[key]=algebraicFold(a[key],ex)});
	Object.keys(b0).forEach(key=>{b0[key].rotate(parseInt(ex.slice(0,2),16))
	});return b0
};export{TtB64,uTtB64,TfB64,uTfB64,mutateAllArrays,headUp}
