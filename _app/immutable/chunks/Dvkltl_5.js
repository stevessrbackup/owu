var ug=Object.defineProperty;var dg=(e,t,r)=>t in e?ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lo=(e,t,r)=>dg(e,typeof t!="symbol"?t+"":t,r);import{S as Mr,i as Pr,s as Ur,I as Vr,J as Wr,y as Te,l as re,m as te,K as qr,C as Ie,E as Ee,F as ze,v as Lr,k as sr,d as z,b as pe,r as or,R as Hr,a as Re,c as B,D as dt,e as D,f as q,g as j,h as xe,q as he,Q as $r,j as L,t as ke,u as me,a0 as sp,n as pt,G as Qe,o as Xe,w as op,M as uo,H as Nr,a5 as pg,x as cg,z as fg,A as hg,B as mg}from"./lTfUmea3.js";import"./IHki7fMi.js";import{g as po}from"./DVmrw8hu.js";import{p as gg}from"./TcZ9U4Qy.js";import{g as _g}from"./D0QH3NT1.js";import{e as lr,u as lp,d as bg,o as yg}from"./Ci7iTbHE.js";import{_ as $g,a as wg,b as vg}from"./BOpxhWpf.js";import{m as xg}from"./IAO6lmoK.js";import{M as up}from"./Dd4g4LlR.js";import{S as kg}from"./6_UBAdpp.js";import{T as Gr}from"./BY86EVO7.js";import{M as Sg}from"./WZe-h9K1.js";import{C as mt}from"./Cav_883n.js";import{C as Yt}from"./BZ20zXNi.js";import{t as hi}from"./DcqA7E--.js";import{f as dp}from"./D0YOCu7p.js";import{d as gn,r as Tg}from"./BC4znSyB.js";import{d as Ig,e as Eg,g as zg}from"./DAN0KfBf.js";import{A as Cg}from"./DwuvZ54G.js";import{B as Bn}from"./BYX5GbU1.js";import{C as Ag}from"./Crr_z-Cc.js";import{P as Og}from"./CLcyGYt9.js";import"./Efg1nGCl.js";import{M as Bg}from"./Cn21pddA.js";import{b as Ng}from"./CweU28fE.js";import{f as Dg}from"./CNEiduZf.js";import{D as Rg}from"./C7kCLbhW.js";import{G as Mg}from"./BZrxntuj.js";import{E as Pg}from"./ClCiRT9K.js";/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Nn=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Vg=Object.getOwnPropertyNames,Wg=Object.prototype.hasOwnProperty,qg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),se=(e,t)=>()=>(e&&(t=e(e=0)),t),Fr=(e,t)=>{for(var r in t)Nn(e,r,{get:t[r],enumerable:!0})},Lg=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Vg(t))!Wg.call(e,n)&&n!==r&&Nn(e,n,{get:()=>t[n],enumerable:!(a=Ug(t,n))||a.enumerable});return e},fa=e=>Lg(Nn({},"__esModule",{value:!0}),e),Xr,ar,Or,co,pp,cp=se(()=>{Xr=new Map,ar=[],Or=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Xr.get(e);if(a===void 0)Xr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=ar.indexOf(e);n!==-1&&ar.splice(n,1);for(let i=0;i<ar.length;i++)if(Xr.get(ar[i]).priority<=r){ar.splice(i,0,e);return}ar.push(e)}return}throw new TypeError("not a valid backend")},co=async e=>{let t=Xr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},pp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?ar:r,n,i=[],s=new Set;for(let l of a){let u=await co(l);typeof u=="string"?i.push({name:l,err:u}):(n||(n=u),n===u&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of i)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]}}),Hg=se(()=>{cp()}),fp,Gg=se(()=>{fp="1.22.0"}),mi,zt,hp=se(()=>{Gg(),mi="warning",zt={wasm:{},webgl:{},webgpu:{},versions:{common:fp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mi=e}},get logLevel(){return mi}},Object.defineProperty(zt,"logLevel",{enumerable:!0})}),et,Fg=se(()=>{hp(),et=zt}),mp,gp,jg=se(()=>{mp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let p=i*n,f=0,h=p,m=p*2,_=-1;s==="RGBA"?(f=0,h=p,m=p*2,_=p*3):s==="RGB"?(f=0,h=p,m=p*2):s==="RBG"&&(f=0,m=p,h=p*2);for(let $=0;$<i;$++)for(let v=0;v<n;v++){let y=(e.data[f++]-u[0])*l[0],b=(e.data[h++]-u[1])*l[1],S=(e.data[m++]-u[2])*l[2],k=_===-1?255:(e.data[_++]-u[3])*l[3];a.fillStyle="rgba("+y+","+b+","+S+","+k+")",a.fillRect(v,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},gp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],s=e.dims[3]):(n=e.dims[3],i=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,u,p;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=i*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,m=0,_=1,$=2,v=3,y=0,b=f,S=f*2,k=-1;o==="RGBA"?(y=0,b=f,S=f*2,k=f*3):o==="RGB"?(y=0,b=f,S=f*2):o==="RBG"&&(y=0,S=f,b=f*2),a=r.createImageData(n,i);for(let T=0;T<i*n;m+=h,_+=h,$+=h,v+=h,T++)a.data[m]=(e.data[y++]-p[0])*u[0],a.data[_]=(e.data[b++]-p[1])*u[1],a.data[$]=(e.data[S++]-p[2])*u[2],a.data[v]=k===-1?255:(e.data[k++]-p[3])*u[3]}else throw new Error("Can not access image data");return a}}),Ea,_p,bp,yp,$p,wp,Kg=se(()=>{Dn(),Ea=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,s;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",u=r*a,p=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),f=4,h=0,m=1,_=2,$=3,v=0,y=u,b=u*2,S=-1;o==="RGB"&&(f=3,h=0,m=1,_=2,$=-1),l==="RGBA"?S=u*3:l==="RBG"?(v=0,b=u,y=u*2):l==="BGR"&&(b=0,y=u,v=u*2);for(let k=0;k<u;k++,h+=f,_+=f,m+=f,$+=f)p[v++]=(e[h]+s[0])/i[0],p[y++]=(e[m]+s[1])/i[1],p[b++]=(e[_]+s[2])/i[2],S!==-1&&$!==-1&&(p[S++]=(e[$]+s[3])/i[3]);return l==="RGBA"?new kt("float32",p,[1,4,r,a]):new kt("float32",p,[1,3,r,a])},_p=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=u(p);if(f!=null){let h=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=m}else o.tensorFormat="RGBA",o.height=h,o.width=m;f.drawImage(e,0,0),s=f.getImageData(0,0,m,h).data}else throw new Error("Can not access image data")}else if(a){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let h=l();h.width=f,h.height=p;let m=u(h);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=u(p);if(f!=null){let h=e.height,m=e.width;return f.drawImage(e,0,0,m,h),s=f.getImageData(0,0,m,h).data,o.height=h,o.width=m,Ea(s,o)}else throw new Error("Can not access image data")}else{if(i)return new Promise((p,f)=>{let h=l(),m=u(h);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{h.width=_.width,h.height=_.height,m.drawImage(_,0,0,h.width,h.height);let $=m.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,p(Ea($.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Ea(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},bp=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,s=[1,a,r,4];return new kt({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:i})},yp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new kt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},$p=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new kt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},wp=(e,t,r)=>new kt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),_r,la,gi,vp,Zg=se(()=>{_r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),la=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gi=!1,vp=()=>{if(!gi){gi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(_r.set("int64",BigInt64Array),la.set(BigInt64Array,"int64")),t&&(_r.set("uint64",BigUint64Array),la.set(BigUint64Array,"uint64")),a?(_r.set("float16",r),la.set(r,"float16")):_r.set("float16",Uint16Array)}}}),xp,kp,Qg=se(()=>{Dn(),xp=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},kp=(e,t)=>{switch(e.location){case"cpu":return new kt(e.type,e.data,t);case"cpu-pinned":return new kt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new kt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new kt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new kt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),kt,Dn=se(()=>{jg(),Kg(),Zg(),Qg(),kt=class{constructor(e,t,r){vp();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=_r.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(a=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=_r.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",s=e;else if(l==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let l=la.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let i=xp(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return _p(e,t)}static fromTexture(e,t){return bp(e,t)}static fromGpuBuffer(e,t){return yp(e,t)}static fromMLTensor(e,t){return $p(e,t)}static fromPinnedBuffer(e,t,r){return wp(e,t,r)}toDataURL(e){return mp(this,e)}toImageData(e){return gp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return kp(this,e)}}}),Lt,Sp=se(()=>{Dn(),Lt=kt}),La,_i,Ht,Mt,Tp=se(()=>{hp(),La=(e,t)=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||console.timeStamp(`${e}::ORT::${t}`)},_i=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(s+=`::${t}`),La("CPU",s);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},Ht=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||_i("BEGIN",e)},Mt=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||_i("END",e)}}),Ip,Xg=se(()=>{cp(),Sp(),Tp(),Ip=class Ep{constructor(t){this.handler=t}async run(t,r,a){Ht();let n={},i={};if(typeof t!="object"||t===null||t instanceof Lt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Lt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let u of r){if(typeof u!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(u)===-1)throw new RangeError(`'fetches' contains invalid output name: ${u}.`);n[u]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let u=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Lt)&&(u=!0,s=!1,n[f]=h)}if(u){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let u of this.inputNames)if(typeof t[u]>"u")throw new Error(`input '${u}' is missing in 'feeds'.`);if(s)for(let u of this.outputNames)n[u]=null;let o=await this.handler.run(t,n,i),l={};for(let u in o)if(Object.hasOwnProperty.call(o,u)){let p=o[u];p instanceof Lt?l[u]=p:l[u]=new Lt(p.type,p.data,p.dims)}return Mt(),l}async release(){return this.handler.dispose()}static async create(t,r,a,n){Ht();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(h=t.byteLength-f,typeof a=="number"){if(h=a,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(p,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await pp(s),u=await o.createInferenceSessionHandler(i,l);return Mt(),new Ep(u)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),zp,Yg=se(()=>{Xg(),zp=Ip}),Jg=se(()=>{}),e_=se(()=>{}),t_=se(()=>{}),r_=se(()=>{}),a_={};Fr(a_,{InferenceSession:()=>zp,TRACE:()=>La,TRACE_FUNC_BEGIN:()=>Ht,TRACE_FUNC_END:()=>Mt,Tensor:()=>Lt,env:()=>et,registerBackend:()=>Or});var Pt=se(()=>{Hg(),Fg(),Yg(),Sp(),Jg(),e_(),Tp(),t_(),r_()}),Rn=se(()=>{}),Cp={};Fr(Cp,{default:()=>Ap});var bi,yi,Ap,i_=se(()=>{var e;Mh(),kr(),Mn(),bi="ort-wasm-proxy-worker",yi=((e=globalThis.self)==null?void 0:e.name)===bi,yi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Pn(a.wasm).then(()=>{ts(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;rs(i,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=a,i=Qa(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;as(n,i).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":is(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:s,outputIndices:o,options:l}=a;ns(n,i,s,o,new Array(o.length).fill(null),l).then(u=>{u.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:u},os([...s,...u]))},u=>{postMessage({type:r,err:u})});break}case"end-profiling":ss(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Ap=yi?null:t=>new Worker(t??xt,{type:"module",name:bi})}),Op={};Fr(Op,{default:()=>Bp});var $i,wi,Bp,fo,n_=se(()=>{var e,t;wi=($i=import.meta.url,async function(r={}){var oo;var a,n,i=r,s=new Promise((d,c)=>{a=d,n=c}),o=typeof window=="object",l=typeof WorkerGlobalScope<"u",u=l&&((oo=self.name)==null?void 0:oo.startsWith("em-pthread"));i.mountExternalData=(d,c)=>{d.startsWith("./")&&(d=d.substring(2)),(i.Fb||(i.Fb=new Map)).set(d,c)},i.unmountExternalData=()=>{delete i.Fb};var p=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let f=d=>async(...c)=>{var g;try{if(i.Gb)throw Error("Session already started");let w=i.Gb={ec:c[0],errors:[]},x=await d(...c);if(i.Gb!==w)throw Error("Session mismatch");(g=i.Kb)==null||g.flush();let N=w.errors;if(0<N.length){let Z=await Promise.all(N);if(Z=Z.filter(ne=>ne),0<Z.length)throw Error(Z.join(`
`))}return x}finally{i.Gb=null}};i.jsepInit=(d,c)=>{if(d==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.bc,i.Wb,i.Xb,i.ac]=c;let g=i.Kb;i.jsepRegisterBuffer=(w,x,N,Z)=>g.registerBuffer(w,x,N,Z),i.jsepGetBuffer=w=>g.getBuffer(w),i.jsepCreateDownloader=(w,x,N)=>g.createDownloader(w,x,N),i.jsepOnCreateSession=w=>{g.onCreateSession(w)},i.jsepOnReleaseSession=w=>{g.onReleaseSession(w)},i.jsepOnRunStart=w=>g.onRunStart(w),i.cc=(w,x)=>{g.upload(w,x)}}else if(d==="webnn"){let g=c[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor]=c.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnOnRunStart=w=>g.onRunStart(w),i.webnnOnRunEnd=g.onRunEnd.bind(g),i.webnnRegisterMLContext=(w,x)=>{g.registerMLContext(w,x)},i.webnnOnReleaseSession=w=>{g.onReleaseSession(w)},i.webnnCreateMLTensorDownloader=(w,x)=>g.createMLTensorDownloader(w,x),i.webnnRegisterMLTensor=(w,x,N,Z)=>g.registerMLTensor(w,x,N,Z),i.webnnCreateMLContext=w=>g.createMLContext(w),i.webnnRegisterMLConstant=(w,x,N,Z,ne,de)=>g.registerMLConstant(w,x,N,Z,ne,i.Fb,de),i.webnnRegisterGraphInput=g.registerGraphInput.bind(g),i.webnnIsGraphInput=g.isGraphInput.bind(g),i.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),i.webnnIsGraphOutput=g.isGraphOutput.bind(g),i.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),i.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let h=()=>{let d=(c,g,w)=>(...x)=>{let N=Vt,Z=g==null?void 0:g();x=c(...x);let ne=g==null?void 0:g();return Z!==ne&&(c=ne,w(Z),g=w=null),Vt!=N?new Promise((de,be)=>{si={resolve:de,reject:be}}):x};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[c]=d(i[c],()=>i[c],g=>i[c]=g)})(),f!==void 0&&(i._OrtRun=f(i._OrtRun),i._OrtRunWithBinding=f(i._OrtRunWithBinding)),h=void 0};i.asyncInit=()=>{h==null||h()};var m,_,$=Object.assign({},i),v=(d,c)=>{throw c},y="";(o||l)&&(l?y=self.location.href:typeof document<"u"&&document.currentScript&&(y=document.currentScript.src),$i&&(y=$i),y=y.startsWith("blob:")?"":y.slice(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(_=d=>{var c=new XMLHttpRequest;return c.open("GET",d,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),m=async d=>{if(U(d))return new Promise((g,w)=>{var x=new XMLHttpRequest;x.open("GET",d,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):w(x.status)},x.onerror=w,x.send(null)});var c=await fetch(d,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)});var b=console.log.bind(console),S=console.error.bind(console),k=b,T=S;Object.assign(i,$),$=null;var I,A,O,C,W,ae,J,Q,G,M,R,Y,K,ie=i.wasmBinary,le=!1,U=d=>d.startsWith("file://");function ee(){return I.buffer!=C.buffer&&oe(),C}function H(){return I.buffer!=C.buffer&&oe(),W}function V(){return I.buffer!=C.buffer&&oe(),ae}function P(){return I.buffer!=C.buffer&&oe(),J}function E(){return I.buffer!=C.buffer&&oe(),Q}function ue(){return I.buffer!=C.buffer&&oe(),G}function Ce(){return I.buffer!=C.buffer&&oe(),M}function ve(){return I.buffer!=C.buffer&&oe(),K}if(u){let d=function(c){try{var g=c.data,w=g.Cb;if(w==="load"){let x=[];self.onmessage=N=>x.push(N),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let N of x)d(N);self.onmessage=d};for(let N of g.Sb)i[N]&&!i[N].proxy||(i[N]=(...Z)=>{postMessage({Cb:"callHandler",Rb:N,args:Z})},N=="print"&&(k=i[N]),N=="printErr"&&(T=i[N]));I=g.lc,oe(),Ae(g.mc)}else if(w==="run"){ma(g.Bb),di(g.Bb,0,0,1,0,0),Ct(),ii(g.Bb),We||(Zs(),We=!0);try{Tr(g.hc,g.Ib)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&(w==="checkMailbox"?We&&_a():w&&(T(`worker: received unknown command ${w}`),T(g)))}catch(x){throw Qs(),x}};var Ae,We=!1;T=function(...c){c=c.join(" "),console.error(c)},self.alert=function(...c){postMessage({Cb:"alert",text:c.join(" "),jc:Sa()})},self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=d}function oe(){var d=I.buffer;i.HEAP8=C=new Int8Array(d),i.HEAP16=ae=new Int16Array(d),i.HEAPU8=W=new Uint8Array(d),i.HEAPU16=J=new Uint16Array(d),i.HEAP32=Q=new Int32Array(d),i.HEAPU32=G=new Uint32Array(d),i.HEAPF32=M=new Float32Array(d),i.HEAPF64=K=new Float64Array(d),i.HEAP64=R=new BigInt64Array(d),i.HEAPU64=Y=new BigUint64Array(d)}function ce(){u?startWorker(i):we.Da()}u||(I=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),oe());var Ue,Ke=0,Ve=null;function Je(){if(--Ke==0&&Ve){var d=Ve;Ve=null,d()}}function at(d){throw T(d="Aborted("+d+")"),le=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),n(d),d}function tt(){return{a:{L:ft,Aa:wt,b:Ir,$:cr,A:ls,pa:us,X:ps,Z:cs,qa:fs,na:hs,ga:ms,ma:gs,J:_s,Y:bs,V:ys,oa:$s,W:ws,va:Zh,E:Qh,Q:Xh,O:Jh,D:tm,v:rm,r:am,P:im,z:pm,R:cm,ja:fm,T:hm,aa:mm,M:gm,F:_m,ia:ii,sa:bm,t:ym,Ca:$m,w:xm,o:km,m:Tm,c:ti,Ba:Im,n:Em,j:Am,u:Om,p:Bm,f:Nm,s:Dm,l:Rm,e:Mm,k:Pm,h:Um,g:Vm,d:Wm,da:qm,ea:Lm,fa:Hm,ba:Ds,ca:Rs,N:Ms,xa:Fm,ua:Km,i:Zm,C:Qm,G:Xm,ta:jm,x:Ym,ra:Jm,U:eg,q:Gm,y:tg,K:rg,S:ag,za:ig,ya:ng,ka:Ws,la:qs,_:Ft,B:Ls,I:Hs,ha:Gs,H:Fs,a:I,wa:Gt}}}var Tt={840156:(d,c,g,w,x)=>{if(i===void 0||!i.Fb)return 1;if((d=ut(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=i.Fb.get(d)))return 2;if(c=Number(c>>>0),g=Number(g>>>0),w=Number(w>>>0),c+g>d.byteLength)return 3;try{let N=d.subarray(c,c+g);switch(x){case 0:H().set(N,w>>>0);break;case 1:i.nc?i.nc(w,N):i.cc(w,N);break;default:return 4}return 0}catch{return 4}},840980:(d,c,g)=>{i.Pb(d,H().subarray(c>>>0,c+g>>>0))},841044:()=>i.oc(),841086:d=>{i.Ob(d)},841123:()=>{i.Wb()},841154:()=>{i.Xb()},841183:()=>{i.ac()},841208:d=>i.Vb(d),841241:d=>i.Zb(d),841273:(d,c,g)=>{i.Lb(Number(d),Number(c),Number(g),!0)},841336:(d,c,g)=>{i.Lb(Number(d),Number(c),Number(g))},841393:()=>typeof wasmOffsetConverter<"u",841450:d=>{i.kb("Abs",d,void 0)},841501:d=>{i.kb("Neg",d,void 0)},841552:d=>{i.kb("Floor",d,void 0)},841605:d=>{i.kb("Ceil",d,void 0)},841657:d=>{i.kb("Reciprocal",d,void 0)},841715:d=>{i.kb("Sqrt",d,void 0)},841767:d=>{i.kb("Exp",d,void 0)},841818:d=>{i.kb("Erf",d,void 0)},841869:d=>{i.kb("Sigmoid",d,void 0)},841924:(d,c,g)=>{i.kb("HardSigmoid",d,{alpha:c,beta:g})},842003:d=>{i.kb("Log",d,void 0)},842054:d=>{i.kb("Sin",d,void 0)},842105:d=>{i.kb("Cos",d,void 0)},842156:d=>{i.kb("Tan",d,void 0)},842207:d=>{i.kb("Asin",d,void 0)},842259:d=>{i.kb("Acos",d,void 0)},842311:d=>{i.kb("Atan",d,void 0)},842363:d=>{i.kb("Sinh",d,void 0)},842415:d=>{i.kb("Cosh",d,void 0)},842467:d=>{i.kb("Asinh",d,void 0)},842520:d=>{i.kb("Acosh",d,void 0)},842573:d=>{i.kb("Atanh",d,void 0)},842626:d=>{i.kb("Tanh",d,void 0)},842678:d=>{i.kb("Not",d,void 0)},842729:(d,c,g)=>{i.kb("Clip",d,{min:c,max:g})},842798:d=>{i.kb("Clip",d,void 0)},842850:(d,c)=>{i.kb("Elu",d,{alpha:c})},842908:d=>{i.kb("Gelu",d,void 0)},842960:d=>{i.kb("Relu",d,void 0)},843012:(d,c)=>{i.kb("LeakyRelu",d,{alpha:c})},843076:(d,c)=>{i.kb("ThresholdedRelu",d,{alpha:c})},843146:(d,c)=>{i.kb("Cast",d,{to:c})},843204:d=>{i.kb("Add",d,void 0)},843255:d=>{i.kb("Sub",d,void 0)},843306:d=>{i.kb("Mul",d,void 0)},843357:d=>{i.kb("Div",d,void 0)},843408:d=>{i.kb("Pow",d,void 0)},843459:d=>{i.kb("Equal",d,void 0)},843512:d=>{i.kb("Greater",d,void 0)},843567:d=>{i.kb("GreaterOrEqual",d,void 0)},843629:d=>{i.kb("Less",d,void 0)},843681:d=>{i.kb("LessOrEqual",d,void 0)},843740:(d,c,g,w,x)=>{i.kb("ReduceMean",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},843915:(d,c,g,w,x)=>{i.kb("ReduceMax",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844089:(d,c,g,w,x)=>{i.kb("ReduceMin",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844263:(d,c,g,w,x)=>{i.kb("ReduceProd",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844438:(d,c,g,w,x)=>{i.kb("ReduceSum",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844612:(d,c,g,w,x)=>{i.kb("ReduceL1",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844785:(d,c,g,w,x)=>{i.kb("ReduceL2",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},844958:(d,c,g,w,x)=>{i.kb("ReduceLogSum",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},845135:(d,c,g,w,x)=>{i.kb("ReduceSumSquare",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},845315:(d,c,g,w,x)=>{i.kb("ReduceLogSumExp",d,{keepDims:!!c,noopWithEmptyAxes:!!g,axes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},845495:d=>{i.kb("Where",d,void 0)},845548:(d,c,g)=>{i.kb("Transpose",d,{perm:c?Array.from(E().subarray(Number(c)>>>0,Number(g)>>>0)):[]})},845672:(d,c,g,w)=>{i.kb("DepthToSpace",d,{blocksize:c,mode:ut(g),format:w?"NHWC":"NCHW"})},845805:(d,c,g,w)=>{i.kb("DepthToSpace",d,{blocksize:c,mode:ut(g),format:w?"NHWC":"NCHW"})},845938:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt,Cr)=>{i.kb("ConvTranspose",d,{format:de?"NHWC":"NCHW",autoPad:c,dilations:[g],group:w,kernelShape:[x],pads:[N,Z],strides:[ne],wIsConst:()=>!!ee()[be>>>0],outputPadding:Pe?Array.from(E().subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],outputShape:Ze?Array.from(E().subarray(Number(Ze)>>>0,Number(gt)>>>0)):[],activation:ut(Cr)})},846371:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("ConvTranspose",d,{format:ne?"NHWC":"NCHW",autoPad:c,dilations:Array.from(E().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:w,kernelShape:Array.from(E().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(E().subarray(Number(N)>>>0,4+(Number(N)>>>0)>>>0)),strides:Array.from(E().subarray(Number(Z)>>>0,2+(Number(Z)>>>0)>>>0)),wIsConst:()=>!!ee()[de>>>0],outputPadding:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],outputShape:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[],activation:ut(gt)})},847032:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt,Cr)=>{i.kb("ConvTranspose",d,{format:de?"NHWC":"NCHW",autoPad:c,dilations:[g],group:w,kernelShape:[x],pads:[N,Z],strides:[ne],wIsConst:()=>!!ee()[be>>>0],outputPadding:Pe?Array.from(E().subarray(Number(Pe)>>>0,Number(Le)>>>0)):[],outputShape:Ze?Array.from(E().subarray(Number(Ze)>>>0,Number(gt)>>>0)):[],activation:ut(Cr)})},847465:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("ConvTranspose",d,{format:ne?"NHWC":"NCHW",autoPad:c,dilations:Array.from(E().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:w,kernelShape:Array.from(E().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(E().subarray(Number(N)>>>0,4+(Number(N)>>>0)>>>0)),strides:Array.from(E().subarray(Number(Z)>>>0,2+(Number(Z)>>>0)>>>0)),wIsConst:()=>!!ee()[de>>>0],outputPadding:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],outputShape:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[],activation:ut(gt)})},848126:(d,c)=>{i.kb("GlobalAveragePool",d,{format:c?"NHWC":"NCHW"})},848217:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("AveragePool",d,{format:gt?"NHWC":"NCHW",auto_pad:c,ceil_mode:g,count_include_pad:w,storage_order:x,dilations:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[],kernel_shape:ne?Array.from(E().subarray(Number(ne)>>>0,Number(de)>>>0)):[],pads:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],strides:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[]})},848696:(d,c)=>{i.kb("GlobalAveragePool",d,{format:c?"NHWC":"NCHW"})},848787:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("AveragePool",d,{format:gt?"NHWC":"NCHW",auto_pad:c,ceil_mode:g,count_include_pad:w,storage_order:x,dilations:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[],kernel_shape:ne?Array.from(E().subarray(Number(ne)>>>0,Number(de)>>>0)):[],pads:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],strides:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[]})},849266:(d,c)=>{i.kb("GlobalMaxPool",d,{format:c?"NHWC":"NCHW"})},849353:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("MaxPool",d,{format:gt?"NHWC":"NCHW",auto_pad:c,ceil_mode:g,count_include_pad:w,storage_order:x,dilations:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[],kernel_shape:ne?Array.from(E().subarray(Number(ne)>>>0,Number(de)>>>0)):[],pads:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],strides:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[]})},849828:(d,c)=>{i.kb("GlobalMaxPool",d,{format:c?"NHWC":"NCHW"})},849915:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt)=>{i.kb("MaxPool",d,{format:gt?"NHWC":"NCHW",auto_pad:c,ceil_mode:g,count_include_pad:w,storage_order:x,dilations:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[],kernel_shape:ne?Array.from(E().subarray(Number(ne)>>>0,Number(de)>>>0)):[],pads:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],strides:Le?Array.from(E().subarray(Number(Le)>>>0,Number(Ze)>>>0)):[]})},850390:(d,c,g,w,x)=>{i.kb("Gemm",d,{alpha:c,beta:g,transA:w,transB:x})},850494:d=>{i.kb("MatMul",d,void 0)},850548:(d,c,g,w)=>{i.kb("ArgMax",d,{keepDims:!!c,selectLastIndex:!!g,axis:w})},850656:(d,c,g,w)=>{i.kb("ArgMin",d,{keepDims:!!c,selectLastIndex:!!g,axis:w})},850764:(d,c)=>{i.kb("Softmax",d,{axis:c})},850827:(d,c)=>{i.kb("Concat",d,{axis:c})},850887:(d,c,g,w,x)=>{i.kb("Split",d,{axis:c,numOutputs:g,splitSizes:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},851043:d=>{i.kb("Expand",d,void 0)},851097:(d,c)=>{i.kb("Gather",d,{axis:Number(c)})},851168:(d,c)=>{i.kb("GatherElements",d,{axis:Number(c)})},851247:(d,c)=>{i.kb("GatherND",d,{batch_dims:Number(c)})},851326:(d,c,g,w,x,N,Z,ne,de,be,Pe)=>{i.kb("Resize",d,{antialias:c,axes:g?Array.from(E().subarray(Number(g)>>>0,Number(w)>>>0)):[],coordinateTransformMode:ut(x),cubicCoeffA:N,excludeOutside:Z,extrapolationValue:ne,keepAspectRatioPolicy:ut(de),mode:ut(be),nearestMode:ut(Pe)})},851688:(d,c,g,w,x,N,Z)=>{i.kb("Slice",d,{starts:c?Array.from(E().subarray(Number(c)>>>0,Number(g)>>>0)):[],ends:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[],axes:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[]})},851952:d=>{i.kb("Tile",d,void 0)},852004:(d,c,g)=>{i.kb("InstanceNormalization",d,{epsilon:c,format:g?"NHWC":"NCHW"})},852118:(d,c,g)=>{i.kb("InstanceNormalization",d,{epsilon:c,format:g?"NHWC":"NCHW"})},852232:d=>{i.kb("Range",d,void 0)},852285:(d,c)=>{i.kb("Einsum",d,{equation:ut(c)})},852366:(d,c,g,w,x)=>{i.kb("Pad",d,{mode:c,value:g,pads:w?Array.from(E().subarray(Number(w)>>>0,Number(x)>>>0)):[]})},852509:(d,c,g,w,x,N)=>{i.kb("BatchNormalization",d,{epsilon:c,momentum:g,spatial:!!x,trainingMode:!!w,format:N?"NHWC":"NCHW"})},852678:(d,c,g,w,x,N)=>{i.kb("BatchNormalization",d,{epsilon:c,momentum:g,spatial:!!x,trainingMode:!!w,format:N?"NHWC":"NCHW"})},852847:(d,c,g)=>{i.kb("CumSum",d,{exclusive:Number(c),reverse:Number(g)})},852944:(d,c,g)=>{i.kb("DequantizeLinear",d,{axis:c,blockSize:g})},853034:(d,c,g,w,x)=>{i.kb("GridSample",d,{align_corners:c,mode:ut(g),padding_mode:ut(w),format:x?"NHWC":"NCHW"})},853204:(d,c,g,w,x)=>{i.kb("GridSample",d,{align_corners:c,mode:ut(g),padding_mode:ut(w),format:x?"NHWC":"NCHW"})},853374:(d,c)=>{i.kb("ScatterND",d,{reduction:ut(c)})},853459:(d,c,g,w,x,N,Z,ne,de)=>{i.kb("Attention",d,{numHeads:c,isUnidirectional:g,maskFilterValue:w,scale:x,doRotary:N,qkvHiddenSizes:Z?Array.from(E().subarray(Number(ne)>>>0,Number(ne)+Z>>>0)):[],pastPresentShareBuffer:!!de})},853731:d=>{i.kb("BiasAdd",d,void 0)},853786:d=>{i.kb("BiasSplitGelu",d,void 0)},853847:d=>{i.kb("FastGelu",d,void 0)},853903:(d,c,g,w,x,N,Z,ne,de,be,Pe,Le,Ze,gt,Cr,lg)=>{i.kb("Conv",d,{format:Le?"NHWC":"NCHW",auto_pad:c,dilations:g?Array.from(E().subarray(Number(g)>>>0,Number(w)>>>0)):[],group:x,kernel_shape:N?Array.from(E().subarray(Number(N)>>>0,Number(Z)>>>0)):[],pads:ne?Array.from(E().subarray(Number(ne)>>>0,Number(de)>>>0)):[],strides:be?Array.from(E().subarray(Number(be)>>>0,Number(Pe)>>>0)):[],w_is_const:()=>!!ee()[Number(Ze)>>>0],activation:ut(gt),activation_params:Cr?Array.from(Ce().subarray(Number(Cr)>>>0,Number(lg)>>>0)):[]})},854487:d=>{i.kb("Gelu",d,void 0)},854539:(d,c,g,w,x,N,Z,ne,de)=>{i.kb("GroupQueryAttention",d,{numHeads:c,kvNumHeads:g,scale:w,softcap:x,doRotary:N,rotaryInterleaved:Z,smoothSoftmax:ne,localWindowSize:de})},854756:(d,c,g,w)=>{i.kb("LayerNormalization",d,{axis:c,epsilon:g,simplified:!!w})},854867:(d,c,g,w)=>{i.kb("LayerNormalization",d,{axis:c,epsilon:g,simplified:!!w})},854978:(d,c,g,w,x,N)=>{i.kb("MatMulNBits",d,{k:c,n:g,accuracyLevel:w,bits:x,blockSize:N})},855105:(d,c,g,w,x,N)=>{i.kb("MultiHeadAttention",d,{numHeads:c,isUnidirectional:g,maskFilterValue:w,scale:x,doRotary:N})},855264:(d,c)=>{i.kb("QuickGelu",d,{alpha:c})},855328:(d,c,g,w,x)=>{i.kb("RotaryEmbedding",d,{interleaved:!!c,numHeads:g,rotaryEmbeddingDim:w,scale:x})},855467:(d,c,g)=>{i.kb("SkipLayerNormalization",d,{epsilon:c,simplified:!!g})},855569:(d,c,g)=>{i.kb("SkipLayerNormalization",d,{epsilon:c,simplified:!!g})},855671:(d,c,g,w)=>{i.kb("GatherBlockQuantized",d,{gatherAxis:c,quantizeAxis:g,blockSize:w})},855792:d=>{i.$b(d)},855826:(d,c)=>i.bc(Number(d),Number(c),i.Gb.ec,i.Gb.errors)};function wt(d,c,g){return zs(async()=>{await i.Yb(Number(d),Number(c),Number(g))})}function ft(){return typeof wasmOffsetConverter<"u"}class $e{constructor(c){lo(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var Oe=d=>{d.terminate(),d.onmessage=()=>{}},je=[],nt=d=>{fe.length==0&&(pr(),jt(fe[0]));var c=fe.pop();if(!c)return 6;De.push(c),rt[d.Bb]=c,c.Bb=d.Bb;var g={Cb:"run",hc:d.fc,Ib:d.Ib,Bb:d.Bb};return c.postMessage(g,d.Nb),0},lt=0,Ne=(d,c,...g)=>{for(var w=2*g.length,x=fi(),N=ci(8*w),Z=N>>>3,ne=0;ne<g.length;ne++){var de=g[ne];typeof de=="bigint"?(R[Z+2*ne]=1n,R[Z+2*ne+1]=de):(R[Z+2*ne]=0n,ve()[Z+2*ne+1>>>0]=de)}return d=Xs(d,0,w,N,c),Ia(x),d};function Gt(d){if(u)return Ne(0,1,d);if(O=d,!(0<lt)){for(var c of De)Oe(c);for(c of fe)Oe(c);fe=[],De=[],rt={},le=!0}v(0,new $e(d))}function It(d){if(u)return Ne(1,0,d);Ft(d)}var Ft=d=>{if(O=d,u)throw It(d),"unwind";Gt(d)},fe=[],De=[],ot=[],rt={},vt=d=>{var c=d.Bb;delete rt[c],fe.push(d),De.splice(De.indexOf(d),1),d.Bb=0,Ys(c)};function Ct(){ot.forEach(d=>d())}var jt=d=>new Promise(c=>{d.onmessage=x=>{var N=(x=x.data).Cb;if(x.Hb&&x.Hb!=Sa()){var Z=rt[x.Hb];Z?Z.postMessage(x,x.Nb):T(`Internal error! Worker sent a message "${N}" to target pthread ${x.Hb}, but that thread no longer exists!`)}else N==="checkMailbox"?_a():N==="spawnThread"?nt(x):N==="cleanupThread"?vt(rt[x.ic]):N==="loaded"?(d.loaded=!0,c(d)):N==="alert"?alert(`Thread ${x.jc}: ${x.text}`):x.target==="setimmediate"?d.postMessage(x):N==="callHandler"?i[x.Rb](...x.args):N&&T(`worker sent an unknown command ${N}`)},d.onerror=x=>{throw T(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,w=[];for(g of[])i.propertyIsEnumerable(g)&&w.push(g);d.postMessage({Cb:"load",Sb:w,lc:I,mc:A})});function pr(){var d=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});fe.push(d)}var ma=d=>{oe();var c=ue()[d+52>>>2>>>0];d=ue()[d+56>>>2>>>0],to(c,c-d),Ia(c)},Tr=(d,c)=>{lt=0,d=ro(d,c),0<lt?O=d:pi(d)};class ga{constructor(c){this.Jb=c-24}}function Ir(d,c,g){var w=new ga(d>>>=0);throw c>>>=0,g>>>=0,ue()[w.Jb+16>>>2>>>0]=0,ue()[w.Jb+4>>>2>>>0]=c,ue()[w.Jb+8>>>2>>>0]=g,d}function jr(d,c,g,w){return u?Ne(2,1,d,c,g,w):cr(d,c,g,w)}function cr(d,c,g,w){if(d>>>=0,g>>>=0,w>>>=0,p===void 0)return 6;var x=[];return u&&x.length===0?jr(d,c>>>=0,g,w):(d={fc:g,Bb:d,Ib:w,Nb:x},u?(d.Cb="spawnThread",postMessage(d,x),0):nt(d))}var Kr=typeof TextDecoder<"u"?new TextDecoder:void 0,Er=(d,c=0,g=NaN)=>{var w=(c>>>=0)+g;for(g=c;d[g]&&!(g>=w);)++g;if(16<g-c&&d.buffer&&Kr)return Kr.decode(d.buffer instanceof ArrayBuffer?d.subarray(c,g):d.slice(c,g));for(w="";c<g;){var x=d[c++];if(128&x){var N=63&d[c++];if((224&x)==192)w+=String.fromCharCode((31&x)<<6|N);else{var Z=63&d[c++];65536>(x=(240&x)==224?(15&x)<<12|N<<6|Z:(7&x)<<18|N<<12|Z<<6|63&d[c++])?w+=String.fromCharCode(x):(x-=65536,w+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else w+=String.fromCharCode(x)}return w},ut=(d,c)=>(d>>>=0)?Er(H(),d,c):"";function ls(d,c,g){return u?Ne(3,1,d,c,g):0}function us(d,c){if(u)return Ne(4,1,d,c)}var ds=d=>{for(var c=0,g=0;g<d.length;++g){var w=d.charCodeAt(g);127>=w?c++:2047>=w?c+=2:55296<=w&&57343>=w?(c+=4,++g):c+=3}return c},zr=(d,c,g)=>{var w=H();if(c>>>=0,0<g){var x=c;g=c+g-1;for(var N=0;N<d.length;++N){var Z=d.charCodeAt(N);if(55296<=Z&&57343>=Z&&(Z=65536+((1023&Z)<<10)|1023&d.charCodeAt(++N)),127>=Z){if(c>=g)break;w[c++>>>0]=Z}else{if(2047>=Z){if(c+1>=g)break;w[c++>>>0]=192|Z>>6}else{if(65535>=Z){if(c+2>=g)break;w[c++>>>0]=224|Z>>12}else{if(c+3>=g)break;w[c++>>>0]=240|Z>>18,w[c++>>>0]=128|Z>>12&63}w[c++>>>0]=128|Z>>6&63}w[c++>>>0]=128|63&Z}}w[c>>>0]=0,d=c-x}else d=0;return d};function ps(d,c){if(u)return Ne(5,1,d,c)}function cs(d,c,g){if(u)return Ne(6,1,d,c,g)}function fs(d,c,g){return u?Ne(7,1,d,c,g):0}function hs(d,c){if(u)return Ne(8,1,d,c)}function ms(d,c,g){if(u)return Ne(9,1,d,c,g)}function gs(d,c,g,w){if(u)return Ne(10,1,d,c,g,w)}function _s(d,c,g,w){if(u)return Ne(11,1,d,c,g,w)}function bs(d,c,g,w){if(u)return Ne(12,1,d,c,g,w)}function ys(d){if(u)return Ne(13,1,d)}function $s(d,c){if(u)return Ne(14,1,d,c)}function ws(d,c,g){if(u)return Ne(15,1,d,c,g)}var vs,er,Zh=()=>at(""),Ut=d=>{for(var c="";H()[d>>>0];)c+=vs[H()[d++>>>0]];return c},Ya={},Ja={};function Kt(d,c,g={}){return function(w,x,N={}){var Z=x.name;if(!w)throw new er(`type "${Z}" must have a positive integer typeid pointer`);if(Ja.hasOwnProperty(w)){if(N.Tb)return;throw new er(`Cannot register type '${Z}' twice`)}Ja[w]=x,Ya.hasOwnProperty(w)&&(x=Ya[w],delete Ya[w],x.forEach(ne=>ne()))}(d,c,g)}var xs=(d,c,g)=>{switch(c){case 1:return g?w=>ee()[w>>>0]:w=>H()[w>>>0];case 2:return g?w=>V()[w>>>1>>>0]:w=>P()[w>>>1>>>0];case 4:return g?w=>E()[w>>>2>>>0]:w=>ue()[w>>>2>>>0];case 8:return g?w=>R[w>>>3]:w=>Y[w>>>3];default:throw new TypeError(`invalid integer width (${c}): ${d}`)}};function Qh(d,c,g){g>>>=0,Kt(d>>>=0,{name:c=Ut(c>>>0),fromWireType:w=>w,toWireType:function(w,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":(w=typeof x)=="object"||w==="array"||w==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},Db:tr,readValueFromPointer:xs(c,g,c.indexOf("u")==-1),Eb:null})}var tr=8;function Xh(d,c,g,w){Kt(d>>>=0,{name:c=Ut(c>>>0),fromWireType:function(x){return!!x},toWireType:function(x,N){return N?g:w},Db:tr,readValueFromPointer:function(x){return this.fromWireType(H()[x>>>0])},Eb:null})}var ei=[],Zt=[];function ti(d){9<(d>>>=0)&&--Zt[d+1]==0&&(Zt[d]=void 0,ei.push(d))}var bt=d=>{if(!d)throw new er("Cannot use deleted val. handle = "+d);return Zt[d]},Et=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=ei.pop()||Zt.length;return Zt[c]=d,Zt[c+1]=1,c}};function ri(d){return this.fromWireType(ue()[d>>>2>>>0])}var Yh={name:"emscripten::val",fromWireType:d=>{var c=bt(d);return ti(d),c},toWireType:(d,c)=>Et(c),Db:tr,readValueFromPointer:ri,Eb:null};function Jh(d){return Kt(d>>>0,Yh)}var em=(d,c)=>{switch(c){case 4:return function(g){return this.fromWireType(Ce()[g>>>2>>>0])};case 8:return function(g){return this.fromWireType(ve()[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${d}`)}};function tm(d,c,g){g>>>=0,Kt(d>>>=0,{name:c=Ut(c>>>0),fromWireType:w=>w,toWireType:(w,x)=>x,Db:tr,readValueFromPointer:em(c,g),Eb:null})}function rm(d,c,g,w,x){if(d>>>=0,g>>>=0,c=Ut(c>>>0),x===-1&&(x=4294967295),x=ne=>ne,w===0){var N=32-8*g;x=ne=>ne<<N>>>N}var Z=c.includes("unsigned")?function(ne,de){return de>>>0}:function(ne,de){return de};Kt(d,{name:c,fromWireType:x,toWireType:Z,Db:tr,readValueFromPointer:xs(c,g,w!==0),Eb:null})}function am(d,c,g){function w(N){var Z=ue()[N>>>2>>>0];return N=ue()[N+4>>>2>>>0],new x(ee().buffer,N,Z)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];Kt(d>>>=0,{name:g=Ut(g>>>0),fromWireType:w,Db:tr,readValueFromPointer:w},{Tb:!0})}function im(d,c){Kt(d>>>=0,{name:c=Ut(c>>>0),fromWireType:function(g){for(var w,x=ue()[g>>>2>>>0],N=g+4,Z=N,ne=0;ne<=x;++ne){var de=N+ne;ne!=x&&H()[de>>>0]!=0||(Z=ut(Z,de-Z),w===void 0?w=Z:(w+="\0",w+=Z),Z=de+1)}return Wt(g),w},toWireType:function(g,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var x=typeof w=="string";if(!(x||w instanceof Uint8Array||w instanceof Uint8ClampedArray||w instanceof Int8Array))throw new er("Cannot pass non-string to std::string");var N=x?ds(w):w.length,Z=Ta(4+N+1),ne=Z+4;if(ue()[Z>>>2>>>0]=N,x)zr(w,ne,N+1);else if(x)for(x=0;x<N;++x){var de=w.charCodeAt(x);if(255<de)throw Wt(Z),new er("String has UTF-16 code units that do not fit in 8 bits");H()[ne+x>>>0]=de}else for(x=0;x<N;++x)H()[ne+x>>>0]=w[x];return g!==null&&g.push(Wt,Z),Z},Db:tr,readValueFromPointer:ri,Eb(g){Wt(g)}})}var ks=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,nm=(d,c)=>{for(var g=d>>1,w=g+c/2;!(g>=w)&&P()[g>>>0];)++g;if(32<(g<<=1)-d&&ks)return ks.decode(H().slice(d,g));for(g="",w=0;!(w>=c/2);++w){var x=V()[d+2*w>>>1>>>0];if(x==0)break;g+=String.fromCharCode(x)}return g},sm=(d,c,g)=>{if(g??(g=2147483647),2>g)return 0;var w=c;g=(g-=2)<2*d.length?g/2:d.length;for(var x=0;x<g;++x){var N=d.charCodeAt(x);V()[c>>>1>>>0]=N,c+=2}return V()[c>>>1>>>0]=0,c-w},om=d=>2*d.length,lm=(d,c)=>{for(var g=0,w="";!(g>=c/4);){var x=E()[d+4*g>>>2>>>0];if(x==0)break;++g,65536<=x?(x-=65536,w+=String.fromCharCode(55296|x>>10,56320|1023&x)):w+=String.fromCharCode(x)}return w},um=(d,c,g)=>{if(c>>>=0,g??(g=2147483647),4>g)return 0;var w=c;g=w+g-4;for(var x=0;x<d.length;++x){var N=d.charCodeAt(x);if(55296<=N&&57343>=N&&(N=65536+((1023&N)<<10)|1023&d.charCodeAt(++x)),E()[c>>>2>>>0]=N,(c+=4)+4>g)break}return E()[c>>>2>>>0]=0,c-w},dm=d=>{for(var c=0,g=0;g<d.length;++g){var w=d.charCodeAt(g);55296<=w&&57343>=w&&++g,c+=4}return c};function pm(d,c,g){if(d>>>=0,c>>>=0,g=Ut(g>>>=0),c===2)var w=nm,x=sm,N=om,Z=ne=>P()[ne>>>1>>>0];else c===4&&(w=lm,x=um,N=dm,Z=ne=>ue()[ne>>>2>>>0]);Kt(d,{name:g,fromWireType:ne=>{for(var de,be=ue()[ne>>>2>>>0],Pe=ne+4,Le=0;Le<=be;++Le){var Ze=ne+4+Le*c;Le!=be&&Z(Ze)!=0||(Pe=w(Pe,Ze-Pe),de===void 0?de=Pe:(de+="\0",de+=Pe),Pe=Ze+c)}return Wt(ne),de},toWireType:(ne,de)=>{if(typeof de!="string")throw new er(`Cannot pass non-string to C++ string type ${g}`);var be=N(de),Pe=Ta(4+be+c);return ue()[Pe>>>2>>>0]=be/c,x(de,Pe+4,be+c),ne!==null&&ne.push(Wt,Pe),Pe},Db:tr,readValueFromPointer:ri,Eb(ne){Wt(ne)}})}function cm(d,c){Kt(d>>>=0,{Ub:!0,name:c=Ut(c>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function fm(d){di(d>>>0,!l,1,!o,131072,!1),Ct()}var ai=d=>{if(!le)try{if(d(),!(0<lt))try{u?pi(O):Ft(O)}catch(c){c instanceof $e||c=="unwind"||v(0,c)}}catch(c){c instanceof $e||c=="unwind"||v(0,c)}};function ii(d){d>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(E(),d>>>2,d).value.then(_a),d+=128,Atomics.store(E(),d>>>2,1))}var _a=()=>{var d=Sa();d&&(ii(d),ai(eo))};function hm(d,c){(d>>>=0)==c>>>0?setTimeout(_a):u?postMessage({Hb:d,Cb:"checkMailbox"}):(d=rt[d])&&d.postMessage({Cb:"checkMailbox"})}var ni=[];function mm(d,c,g,w,x){for(c>>>=0,w/=2,ni.length=w,g=x>>>0>>>3,x=0;x<w;x++)ni[x]=R[g+2*x]?R[g+2*x+1]:ve()[g+2*x+1>>>0];return(c?Tt[c]:og[d])(...ni)}var gm=()=>{lt=0};function _m(d){d>>>=0,u?postMessage({Cb:"cleanupThread",ic:d}):vt(rt[d])}function bm(d){}var ba=(d,c)=>{var g=Ja[d];if(g===void 0)throw d=Ks(d),g=Ut(d),Wt(d),new er(`${c} has unknown type ${g}`);return g},Ss=(d,c,g)=>{var w=[];return d=d.toWireType(w,g),w.length&&(ue()[c>>>2>>>0]=Et(w)),d};function ym(d,c,g){return c>>>=0,g>>>=0,d=bt(d>>>0),c=ba(c,"emval::as"),Ss(c,g,d)}function $m(d,c){return c>>>=0,d=bt(d>>>0),(c=ba(c,"emval::as")).toWireType(null,d)}var ya=d=>{try{d()}catch(c){at(c)}},rr=0,Vt=null,Ts=0,$a=[],Is={},Es={},wm=0,si=null,vm=[];function zs(d){return function(c){if(!le){if(rr===0){var g=!1,w=!1;c((x=0)=>{if(!le&&(Ts=x,g=!0,w)){rr=2,ya(()=>no(Vt)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),x=!1;try{var N=function(){var de=E()[Vt+8>>>2>>>0];return de=we[Es[de]],--lt,de()}()}catch(de){N=de,x=!0}var Z=!1;if(!Vt){var ne=si;ne&&(si=null,(x?ne.reject:ne.resolve)(N),Z=!0)}if(x&&!Z)throw N}}),w=!0,g||(rr=1,Vt=function(){var x=Ta(65548),N=x+12;ue()[x>>>2>>>0]=N,ue()[x+4>>>2>>>0]=N+65536,N=$a[0];var Z=Is[N];return Z===void 0&&(Z=wm++,Is[N]=Z,Es[Z]=N),N=Z,E()[x+8>>>2>>>0]=N,x}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),ya(()=>ao(Vt)))}else rr===2?(rr=0,ya(so),Wt(Vt),Vt=null,vm.forEach(ai)):at(`invalid state: ${rr}`);return Ts}}(c=>{d().then(c)})}function xm(d){return d>>>=0,zs(async()=>{var c=await bt(d);return Et(c)})}var wa=[];function km(d,c,g,w){return g>>>=0,w>>>=0,(d=wa[d>>>0])(null,c=bt(c>>>0),g,w)}var Sm={},va=d=>{var c=Sm[d];return c===void 0?Ut(d):c};function Tm(d,c,g,w,x){return g>>>=0,w>>>=0,x>>>=0,(d=wa[d>>>0])(c=bt(c>>>0),c[g=va(g)],w,x)}function Im(d,c){return c>>>=0,(d=bt(d>>>0))==bt(c)}var Cs=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Em(d){return(d>>>=0)==0?Et(Cs()):(d=va(d),Et(Cs()[d]))}var zm=d=>{var c=wa.length;return wa.push(d),c},Cm=(d,c)=>{for(var g=Array(d),w=0;w<d;++w)g[w]=ba(ue()[c+4*w>>>2>>>0],"parameter "+w);return g},As=(d,c)=>Object.defineProperty(c,"name",{value:d});function Am(d,c,g){var w=(c=Cm(d,c>>>0)).shift();d--;var x=`return function (obj, func, destructorsRef, args) {
`,N=0,Z=[];g===0&&Z.push("obj");for(var ne=["retType"],de=[w],be=0;be<d;++be)Z.push("arg"+be),ne.push("argType"+be),de.push(c[be]),x+=`  var arg${be} = argType${be}.readValueFromPointer(args${N?"+"+N:""});
`,N+=c[be].Db;return x+=`  var rv = ${g===1?"new func":"func.call"}(${Z.join(", ")});
`,w.Ub||(ne.push("emval_returnValue"),de.push(Ss),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),ne.push(x+`};
`),d=function(Pe){var Le=Function;if(!(Le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Le} which is not a function`);var Ze=As(Le.name||"unknownFunctionName",function(){});return Ze.prototype=Le.prototype,Ze=new Ze,(Pe=Le.apply(Ze,Pe))instanceof Object?Pe:Ze}(ne)(...de),g=`methodCaller<(${c.map(Pe=>Pe.name).join(", ")}) => ${w.name}>`,zm(As(g,d))}function Om(d){return d=va(d>>>0),Et(i[d])}function Bm(d,c){return c>>>=0,d=bt(d>>>0),c=bt(c),Et(d[c])}function Nm(d){9<(d>>>=0)&&(Zt[d+1]+=1)}function Dm(){return Et([])}function Rm(d){d=bt(d>>>0);for(var c=Array(d.length),g=0;g<d.length;g++)c[g]=d[g];return Et(c)}function Mm(d){return Et(va(d>>>0))}function Pm(){return Et({})}function Um(d){for(var c=bt(d>>>=0);c.length;){var g=c.pop();c.pop()(g)}ti(d)}function Vm(d,c,g){c>>>=0,g>>>=0,d=bt(d>>>0),c=bt(c),g=bt(g),d[c]=g}function Wm(d,c){return c>>>=0,d=(d=ba(d>>>0,"_emval_take_value")).readValueFromPointer(c),Et(d)}function qm(d,c){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),c>>>=0,d=new Date(1e3*d),E()[c>>>2>>>0]=d.getUTCSeconds(),E()[c+4>>>2>>>0]=d.getUTCMinutes(),E()[c+8>>>2>>>0]=d.getUTCHours(),E()[c+12>>>2>>>0]=d.getUTCDate(),E()[c+16>>>2>>>0]=d.getUTCMonth(),E()[c+20>>>2>>>0]=d.getUTCFullYear()-1900,E()[c+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,E()[c+28>>>2>>>0]=d}var Os=d=>d%4==0&&(d%100!=0||d%400==0),Bs=[0,31,60,91,121,152,182,213,244,274,305,335],Ns=[0,31,59,90,120,151,181,212,243,273,304,334];function Lm(d,c){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),c>>>=0,d=new Date(1e3*d),E()[c>>>2>>>0]=d.getSeconds(),E()[c+4>>>2>>>0]=d.getMinutes(),E()[c+8>>>2>>>0]=d.getHours(),E()[c+12>>>2>>>0]=d.getDate(),E()[c+16>>>2>>>0]=d.getMonth(),E()[c+20>>>2>>>0]=d.getFullYear()-1900,E()[c+24>>>2>>>0]=d.getDay();var g=(Os(d.getFullYear())?Bs:Ns)[d.getMonth()]+d.getDate()-1|0;E()[c+28>>>2>>>0]=g,E()[c+36>>>2>>>0]=-60*d.getTimezoneOffset(),g=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(g!=w&&d.getTimezoneOffset()==Math.min(w,g)),E()[c+32>>>2>>>0]=d}function Hm(d){d>>>=0;var c=new Date(E()[d+20>>>2>>>0]+1900,E()[d+16>>>2>>>0],E()[d+12>>>2>>>0],E()[d+8>>>2>>>0],E()[d+4>>>2>>>0],E()[d>>>2>>>0],0),g=E()[d+32>>>2>>>0],w=c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),N=new Date(c.getFullYear(),0,1).getTimezoneOffset(),Z=Math.min(N,x);return 0>g?E()[d+32>>>2>>>0]=+(x!=N&&Z==w):0<g!=(Z==w)&&(x=Math.max(N,x),c.setTime(c.getTime()+6e4*((0<g?Z:x)-w))),E()[d+24>>>2>>>0]=c.getDay(),g=(Os(c.getFullYear())?Bs:Ns)[c.getMonth()]+c.getDate()-1|0,E()[d+28>>>2>>>0]=g,E()[d>>>2>>>0]=c.getSeconds(),E()[d+4>>>2>>>0]=c.getMinutes(),E()[d+8>>>2>>>0]=c.getHours(),E()[d+12>>>2>>>0]=c.getDate(),E()[d+16>>>2>>>0]=c.getMonth(),E()[d+20>>>2>>>0]=c.getYear(),d=c.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function Ds(d,c,g,w,x,N,Z){return u?Ne(16,1,d,c,g,w,x,N,Z):-52}function Rs(d,c,g,w,x,N){if(u)return Ne(17,1,d,c,g,w,x,N)}var Zr={},Gm=()=>performance.timeOrigin+performance.now();function Ms(d,c){if(u)return Ne(18,1,d,c);if(Zr[d]&&(clearTimeout(Zr[d].id),delete Zr[d]),!c)return 0;var g=setTimeout(()=>{delete Zr[d],ai(()=>Js(d,performance.timeOrigin+performance.now()))},c);return Zr[d]={id:g,rc:c},0}function Fm(d,c,g,w){d>>>=0,c>>>=0,g>>>=0,w>>>=0;var x=new Date().getFullYear(),N=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var Z=Math.max(N,x);ue()[d>>>2>>>0]=60*Z,E()[c>>>2>>>0]=+(N!=x),d=(c=ne=>{var de=Math.abs(ne);return`UTC${0<=ne?"-":"+"}${String(Math.floor(de/60)).padStart(2,"0")}${String(de%60).padStart(2,"0")}`})(N),c=c(x),x<N?(zr(d,g,17),zr(c,w,17)):(zr(d,w,17),zr(c,g,17))}var jm=()=>Date.now();function Km(d,c,g){return 0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),R[g>>>0>>>3]=BigInt(Math.round(1e6*d)),0):28}var oi=[],Ps=(d,c)=>{oi.length=0;for(var g;g=H()[d++>>>0];){var w=g!=105;c+=(w&=g!=112)&&c%8?4:0,oi.push(g==112?ue()[c>>>2>>>0]:g==106?R[c>>>3]:g==105?E()[c>>>2>>>0]:ve()[c>>>3>>>0]),c+=w?8:4}return oi};function Zm(d,c,g){return d>>>=0,c=Ps(c>>>0,g>>>0),Tt[d](...c)}function Qm(d,c,g){return d>>>=0,c=Ps(c>>>0,g>>>0),Tt[d](...c)}var Xm=()=>{};function Ym(d,c){return T(ut(d>>>0,c>>>0))}var Jm=()=>{throw lt+=1,"unwind"};function eg(){return 4294901760}var tg=()=>navigator.hardwareConcurrency;function rg(){return at("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ag(d){d>>>=0;var c=H().length;if(d<=c||4294901760<d)return!1;for(var g=1;4>=g;g*=2){var w=c*(1+.2/g);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-I.buffer.byteLength+65535)/65536|0;try{I.grow(w),oe();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}var xa=()=>(at("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Qr={},Us=d=>{d.forEach(c=>{xa()})};function ig(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),Us(d),Qr.Mb=xa(),Qr.dc=d,Qr.Mb}function ng(d,c,g){if(d>>>=0,c>>>=0,Qr.Mb==d)var w=Qr.dc;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Us(w);for(var x=3;w[x]&&xa()!=d;)++x;for(d=0;d<g&&w[d+x];++d)E()[c+4*d>>>2>>>0]=xa();return d}var li,ui={},Vs=()=>{if(!li){var d,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ui)ui[d]===void 0?delete c[d]:c[d]=ui[d];var g=[];for(d in c)g.push(`${d}=${c[d]}`);li=g}return li};function Ws(d,c){if(u)return Ne(19,1,d,c);d>>>=0,c>>>=0;var g=0;return Vs().forEach((w,x)=>{var N=c+g;for(x=ue()[d+4*x>>>2>>>0]=N,N=0;N<w.length;++N)ee()[x++>>>0]=w.charCodeAt(N);ee()[x>>>0]=0,g+=w.length+1}),0}function qs(d,c){if(u)return Ne(20,1,d,c);d>>>=0,c>>>=0;var g=Vs();ue()[d>>>2>>>0]=g.length;var w=0;return g.forEach(x=>w+=x.length+1),ue()[c>>>2>>>0]=w,0}function Ls(d){return u?Ne(21,1,d):52}function Hs(d,c,g,w){return u?Ne(22,1,d,c,g,w):52}function Gs(d,c,g,w){return u?Ne(23,1,d,c,g,w):70}var sg=[null,[],[]];function Fs(d,c,g,w){if(u)return Ne(24,1,d,c,g,w);c>>>=0,g>>>=0,w>>>=0;for(var x=0,N=0;N<g;N++){var Z=ue()[c>>>2>>>0],ne=ue()[c+4>>>2>>>0];c+=8;for(var de=0;de<ne;de++){var be=H()[Z+de>>>0],Pe=sg[d];be===0||be===10?((d===1?k:T)(Er(Pe)),Pe.length=0):Pe.push(be)}x+=ne}return ue()[w>>>2>>>0]=x,0}u||function(){for(var d=i.numThreads-1;d--;)pr();je.unshift(()=>{Ke++,function(c){u?c():Promise.all(fe.map(jt)).then(c)}(()=>Je())})}();for(var js=Array(256),ka=0;256>ka;++ka)js[ka]=String.fromCharCode(ka);vs=js,er=i.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},i.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Zt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>Zt.length/2-5-ei.length;var we,og=[Gt,It,jr,ls,us,ps,cs,fs,hs,ms,gs,_s,bs,ys,$s,ws,Ds,Rs,Ms,Ws,qs,Ls,Hs,Gs,Fs];(async function(){function d(w,x){return we=w.exports,we=function(){var N=we,Z={};for(let[ne,de]of Object.entries(N))Z[ne]=typeof de=="function"?(...be)=>{$a.push(ne);try{return de(...be)}finally{le||($a.pop(),Vt&&rr===1&&$a.length===0&&(rr=0,lt+=1,ya(io),typeof Fibers<"u"&&Fibers.sc()))}}:de;return Z}(),we=function(){var N=we,Z=de=>be=>de(be)>>>0,ne=de=>()=>de()>>>0;return(N=Object.assign({},N)).Ea=Z(N.Ea),N.gb=ne(N.gb),N.ib=Z(N.ib),N.ub=Z(N.ub),N.vb=ne(N.vb),N.__cxa_get_exception_ptr=Z(N.__cxa_get_exception_ptr),N}(),ot.push(we.jb),A=x,Je(),we}Ke++;var c=tt();if(i.instantiateWasm)return new Promise(w=>{i.instantiateWasm(c,(x,N)=>{d(x,N),w(x.exports)})});if(u)return new Promise(w=>{Ae=x=>{var N=new WebAssembly.Instance(x,tt());w(d(N,x))}});Ue??(Ue=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",y):y+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href);try{var g=await async function(w){var x=Ue;if(!ie&&typeof WebAssembly.instantiateStreaming=="function"&&!U(x))try{var N=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(N,w)}catch(Z){T(`wasm streaming compile failed: ${Z}`),T("falling back to ArrayBuffer instantiation")}return async function(Z,ne){try{var de=await async function(be){if(!ie)try{var Pe=await m(be);return new Uint8Array(Pe)}catch{}if(be==Ue&&ie)be=new Uint8Array(ie);else{if(!_)throw"both async and sync fetching of the wasm failed";be=_(be)}return be}(Z);return await WebAssembly.instantiate(de,ne)}catch(be){T(`failed to asynchronously prepare wasm: ${be}`),at(be)}}(x,w)}(c);return d(g.instance,g.module)}catch(w){return n(w),Promise.reject(w)}})();var Ks=d=>(Ks=we.Ea)(d),Zs=()=>(Zs=we.Fa)();i._OrtInit=(d,c)=>(i._OrtInit=we.Ga)(d,c),i._OrtGetLastError=(d,c)=>(i._OrtGetLastError=we.Ha)(d,c),i._OrtCreateSessionOptions=(d,c,g,w,x,N,Z,ne,de,be)=>(i._OrtCreateSessionOptions=we.Ia)(d,c,g,w,x,N,Z,ne,de,be),i._OrtAppendExecutionProvider=(d,c,g,w,x)=>(i._OrtAppendExecutionProvider=we.Ja)(d,c,g,w,x),i._OrtAddFreeDimensionOverride=(d,c,g)=>(i._OrtAddFreeDimensionOverride=we.Ka)(d,c,g),i._OrtAddSessionConfigEntry=(d,c,g)=>(i._OrtAddSessionConfigEntry=we.La)(d,c,g),i._OrtReleaseSessionOptions=d=>(i._OrtReleaseSessionOptions=we.Ma)(d),i._OrtCreateSession=(d,c,g)=>(i._OrtCreateSession=we.Na)(d,c,g),i._OrtReleaseSession=d=>(i._OrtReleaseSession=we.Oa)(d),i._OrtGetInputOutputCount=(d,c,g)=>(i._OrtGetInputOutputCount=we.Pa)(d,c,g),i._OrtGetInputOutputMetadata=(d,c,g,w)=>(i._OrtGetInputOutputMetadata=we.Qa)(d,c,g,w),i._OrtFree=d=>(i._OrtFree=we.Ra)(d),i._OrtCreateTensor=(d,c,g,w,x,N)=>(i._OrtCreateTensor=we.Sa)(d,c,g,w,x,N),i._OrtGetTensorData=(d,c,g,w,x)=>(i._OrtGetTensorData=we.Ta)(d,c,g,w,x),i._OrtReleaseTensor=d=>(i._OrtReleaseTensor=we.Ua)(d),i._OrtCreateRunOptions=(d,c,g,w)=>(i._OrtCreateRunOptions=we.Va)(d,c,g,w),i._OrtAddRunConfigEntry=(d,c,g)=>(i._OrtAddRunConfigEntry=we.Wa)(d,c,g),i._OrtReleaseRunOptions=d=>(i._OrtReleaseRunOptions=we.Xa)(d),i._OrtCreateBinding=d=>(i._OrtCreateBinding=we.Ya)(d),i._OrtBindInput=(d,c,g)=>(i._OrtBindInput=we.Za)(d,c,g),i._OrtBindOutput=(d,c,g,w)=>(i._OrtBindOutput=we._a)(d,c,g,w),i._OrtClearBoundOutputs=d=>(i._OrtClearBoundOutputs=we.$a)(d),i._OrtReleaseBinding=d=>(i._OrtReleaseBinding=we.ab)(d),i._OrtRunWithBinding=(d,c,g,w,x)=>(i._OrtRunWithBinding=we.bb)(d,c,g,w,x),i._OrtRun=(d,c,g,w,x,N,Z,ne)=>(i._OrtRun=we.cb)(d,c,g,w,x,N,Z,ne),i._OrtEndProfiling=d=>(i._OrtEndProfiling=we.db)(d),i._JsepOutput=(d,c,g)=>(i._JsepOutput=we.eb)(d,c,g),i._JsepGetNodeName=d=>(i._JsepGetNodeName=we.fb)(d);var Sa=()=>(Sa=we.gb)(),Wt=i._free=d=>(Wt=i._free=we.hb)(d),Ta=i._malloc=d=>(Ta=i._malloc=we.ib)(d),di=(d,c,g,w,x,N)=>(di=we.lb)(d,c,g,w,x,N),Qs=()=>(Qs=we.mb)(),Xs=(d,c,g,w,x)=>(Xs=we.nb)(d,c,g,w,x),Ys=d=>(Ys=we.ob)(d),pi=d=>(pi=we.pb)(d),Js=(d,c)=>(Js=we.qb)(d,c),eo=()=>(eo=we.rb)(),to=(d,c)=>(to=we.sb)(d,c),Ia=d=>(Ia=we.tb)(d),ci=d=>(ci=we.ub)(d),fi=()=>(fi=we.vb)(),ro=i.dynCall_ii=(d,c)=>(ro=i.dynCall_ii=we.wb)(d,c),ao=d=>(ao=we.xb)(d),io=()=>(io=we.yb)(),no=d=>(no=we.zb)(d),so=()=>(so=we.Ab)();return i.stackSave=()=>fi(),i.stackRestore=d=>Ia(d),i.stackAlloc=d=>ci(d),i.setValue=function(d,c,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":ee()[d>>>0]=c;break;case"i16":V()[d>>>1>>>0]=c;break;case"i32":E()[d>>>2>>>0]=c;break;case"i64":R[d>>>3]=BigInt(c);break;case"float":Ce()[d>>>2>>>0]=c;break;case"double":ve()[d>>>3>>>0]=c;break;case"*":ue()[d>>>2>>>0]=c;break;default:at(`invalid type for setValue: ${g}`)}},i.getValue=function(d,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return ee()[d>>>0];case"i16":return V()[d>>>1>>>0];case"i32":return E()[d>>>2>>>0];case"i64":return R[d>>>3];case"float":return Ce()[d>>>2>>>0];case"double":return ve()[d>>>3>>>0];case"*":return ue()[d>>>2>>>0];default:at(`invalid type for getValue: ${c}`)}},i.UTF8ToString=ut,i.stringToUTF8=zr,i.lengthBytesUTF8=ds,function d(){if(0<Ke)Ve=d;else if(u)a(i),ce();else{for(;0<je.length;)je.shift()(i);0<Ke?Ve=d:(i.calledRun=!0,le||(ce(),a(i)))}}(),i.PTR_SIZE=4,s}),Bp=wi,fo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),fo&&wi()}),vi,_n,ho,xt,Np,za,mo,go,xi,_o,ki,Dp,Si,Rp,Mn=se(()=>{Rn(),vi=typeof location>"u"?void 0:location.origin,_n=import.meta.url>"file:"&&import.meta.url<"file;",ho=()=>{{if(_n){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,vi).href}return import.meta.url}},xt=ho(),Np=()=>{if(xt&&!xt.startsWith("blob:"))return xt.substring(0,xt.lastIndexOf("/")+1)},za=(e,t)=>{try{let r=t??xt;return(r?new URL(e,r):new URL(e)).origin===vi}catch{return!1}},mo=(e,t)=>{let r=t??xt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},go=(e,t)=>`${t??"./"}${e}`,xi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_o=async e=>(await import(e)).default,ki=(i_(),fa(Cp)).default,Dp=async()=>{if(!xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(za(xt))return[void 0,ki()];let e=await xi(xt);return[e,ki(e)]},Si=(n_(),fa(Op)).default,Rp=async(e,t,r)=>{if(!e&&!t&&Si&&xt&&za(xt))return[void 0,Si];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??mo(a,t),i=r&&n&&!za(n,t),s=i?await xi(n):n??go(a,t);return[i?s:void 0,await _o(s)]}}}),Ti,Ca,Yr,Ii,bo,yo,$o,Pn,Ye,kr=se(()=>{Mn(),Ca=!1,Yr=!1,Ii=!1,bo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},yo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},$o=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Pn=async e=>{if(Ca)return Promise.resolve();if(Yr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ii)throw new Error("previous call to 'initializeWebAssembly()' failed.");Yr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!$o())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!yo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=bo();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,o=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,u=(l==null?void 0:l.href)??l,p=e.wasmBinary,[f,h]=await Rp(o,i,r>1),m=!1,_=[];if(t>0&&_.push(new Promise($=>{setTimeout(()=>{m=!0,$()},t)})),_.push(new Promise(($,v)=>{let y={numThreads:r};if(p)y.wasmBinary=p;else if(u||i)y.locateFile=b=>u??i+b;else if(o&&o.indexOf("blob:")!==0)y.locateFile=b=>new URL(b,o).href;else if(f){let b=Np();b&&(y.locateFile=S=>b+S)}h(y).then(b=>{Yr=!1,Ca=!0,Ti=b,$(),f&&URL.revokeObjectURL(f)},b=>{Yr=!1,Ii=!0,v(b)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ye=()=>{if(Ca&&Ti)return Ti;throw new Error("WebAssembly is not initialized yet.")}}),Rt,Ha,Fe,Un=se(()=>{kr(),Rt=(e,t)=>{let r=Ye(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},Ha=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let s=t?t+n:n;if(typeof i=="object")Ha(i,s+".",r,a);else if(typeof i=="string"||typeof i=="number")a(s,i.toString());else if(typeof i=="boolean")a(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Fe=e=>{let t=Ye(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),s=t.getValue(n+a,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Mp,s_=se(()=>{kr(),Un(),Mp=e=>{let t=Ye(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=Rt(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&Fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ha(e.extra,"",new WeakSet,(s,o)=>{let l=Rt(s,a),u=Rt(o,a);t._OrtAddRunConfigEntry(r,l,u)!==0&&Fe(`Can't set a run config entry: ${s} - ${o}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),i}}}),wo,vo,xo,Jr,ko,Pp,o_=se(()=>{kr(),Un(),wo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Jr=(e,t,r,a)=>{let n=Rt(t,a),i=Rt(r,a);Ye()._OrtAddSessionConfigEntry(e,n,i)!==0&&Fe(`Can't set a session config entry: ${t} - ${r}.`)},ko=async(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name,i=[];switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let p=a==null?void 0:a.deviceType;p&&Jr(e,"deviceType",p,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let p=a;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Jr(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let s=Rt(n,r),o=i.length,l=0,u=0;if(o>0){l=Ye()._malloc(o*Ye().PTR_SIZE),r.push(l),u=Ye()._malloc(o*Ye().PTR_SIZE),r.push(u);for(let p=0;p<o;p++)Ye().setValue(l+p*Ye().PTR_SIZE,i[p][0],"*"),Ye().setValue(u+p*Ye().PTR_SIZE,i[p][1],"*")}await Ye()._OrtAppendExecutionProvider(e,s,l,u,o)!==0&&Fe(`Can't append execution provider: ${n}.`)}},Pp=async e=>{let t=Ye(),r=0,a=[],n=e||{};xo(n);try{let i=wo(n.graphOptimizationLevel??"all"),s=vo(n.executionMode??"sequential"),o=typeof n.logId=="string"?Rt(n.logId,a):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let u=n.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let p=typeof n.optimizedModelFilePath=="string"?Rt(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,u,p),r===0&&Fe("Can't create session options."),n.executionProviders&&await ko(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Jr(r,"enableGraphCapture",n.enableGraphCapture.toString(),a)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let m=Rt(f,a);t._OrtAddFreeDimensionOverride(r,m,h)!==0&&Fe(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&Ha(n.extra,"",new WeakSet,(f,h)=>{Jr(r,f,h,a)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Fe("Can't release session options."),a.forEach(s=>t._free(s)),i}}}),br,Xt,yr,Xa,Ga,Vn,Wn,bn,Se=se(()=>{br=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},yr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},Xa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ga=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",bn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),qn,Up=se(()=>{Rn(),qn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(o){if(o instanceof RangeError){let l=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let u=l.byteLength;new Uint8Array(i,s,u).set(l),s+=u}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),So,To,Io,Eo,Ln,zo,qe,Jt=se(()=>{Se(),So=["V","I","W","E","F"],To=(e,t)=>{`${So[e]}${new Date().toISOString()}${t}`},Ln=(e,t)=>{Io=e,Eo=t},zo=(e,t)=>{let r=Ga(e),a=Ga(Io);r>=a&&To(r,typeof t=="function"?t():t)},qe=(...e)=>{Eo&&zo(...e)}}),Co,Dr,F,Fa,Vp,Wp,qp,Be=se(()=>{Co=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Dr=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(a<2||n<2)return;let o=Co.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[i-2],s[i-1]]=o}for(let o=r?3:1;o<=i;o++){let l=a-o<0?1:e[a-o],u=n-o<0?1:t[n-o];if(l!==u&&l>1&&u>1)return;let p=Math.max(l,u);if(l&&u)s[i-o]=Math.max(l,u);else{if(p>1)return;s[i-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},F=class Wa{static size(t){return Wa.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Wa.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Wa.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},Fa=class ua{static adjustPoolAttributes(t,r,a,n,i,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=a.length?a.push(r[o+2]):a[o]=r[o+2];for(let o=0;o<a.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<a.length;o++)if(o<i.length){if(i[o]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let o=0;o<a.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<a.length;o++){if(a[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=a[o]||s[o+a.length]>=a[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,s,o){if(o){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)ua.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],a[l],n[l],i,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,a,n,i,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return ua.computeShapeHelper(t,r,l,a,n,i,s,o),l}static computeConvOutputShape(t,r,a,n,i,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return ua.computeShapeHelper(!1,t,l,a,n,i,s,o),l}static computeShapeHelper(t,r,a,n,i,s,o,l){if(t)for(let u=0;u<r.length-2;u++)a.push(1);else for(let u=0;u<r.length-2;u++)a.push(ua.adjustPadAndReturnShape(r[u+2],n[u],i[u],s[u],o,u,u+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,n,i,s,o,l){let u=a*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return i[s]=0,i[o]=0,Math.floor((t-u)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+n-t;return i[s]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),i[o]=p-i[s],Math.floor((t+p-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[o]-u)/r+1)}},Vp=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,o;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let l=-1;if(a?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(i<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Dr.isValidBroadcast(n,[i,o]))throw new Error("gemm: invalid bias shape for broadcast");return[i,o,s]}},Wp=-34028234663852886e22,qp=34028234663852886e22}),Hn,Lp=se(()=>{Se(),Hn=(e,t)=>new(Xa(t))(e)}),Ei,yn,zi,Ao,Ci,Oo,Ai,Oi,Bi,Bo,Hp,l_=se(()=>{Se(),Jt(),Ei=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),yn=(e,t)=>{if(t==="int32")return e;let r=Ei.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let a=r/8;if(e.byteLength%a!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let n=e.byteLength/a,i=new(Xa(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=i[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&i.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(i,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},zi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(a,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(a.some(i=>i<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(a,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(a.some(i=>i<-128||i>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(a,Number);return new Uint8Array(n.buffer)}case"uint8":{if(a.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number)}case"uint32":{if(a.some(i=>i<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(a,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ao=1,Ci=()=>Ao++,Oo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ai=(e,t)=>{let r=Ei.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},Oi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:a,dataType:n,shape:i,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=a,this.dataType=n,this.tensorShape=i,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ai(this.dataType,this.tensorShape)}destroy(){qe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=zi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Bi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e),i;if(!n.opSupportLimits().input.dataTypes.includes(t)){if(i=Oo.get(t),!i||!n.opSupportLimits().input.dataTypes.includes(i))throw new Error(`WebNN backend does not support data type: ${t}`);qe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${i}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Ai(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,i),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=yn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else qe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let a=(t=this.wrapper)!=null&&t.isDataConverted?zi(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(a):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(a);return}else return a.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Bo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Ci();return this.tensorTrackersById.set(e,new Bi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){qe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){qe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=Ci(),s=new Oi({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new Bi(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,n,i,s){let o=this.getMLContext(e);for(let[u,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){qe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(u,1)[0];return f.sessionId=e,f}qe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new Oi({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Hp=(...e)=>new Bo(...e)}),ea,No,Gp,u_=se(()=>{Se(),kr(),Lp(),l_(),Jt(),ea=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),No=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},Gp=class{constructor(e){this.tensorManager=Hp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Ln(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){qe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){qe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)qe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>No(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){qe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=ea.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){qe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=ea.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ye().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");qe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Hn(r,t)}}registerMLTensor(e,t,r,a){let n=ea.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return qe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i,s=!1){if(!i)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=i.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=l.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(u);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(u):new Uint16Array(u);break;case"int32":p=new Int32Array(u);break;case"uint32":p=new Uint32Array(u);break;case"int64":if(s){let f=yn(new Uint8Array(u),"int64");p=new Int32Array(f.buffer),n.dataType="int32"}else p=new BigInt64Array(u);break;case"uint64":p=new BigUint64Array(u);break;case"int8":p=new Int8Array(u);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return qe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let a=this.mlContextBySessionId.get(e),n=ea.get(br(t));return typeof n>"u"?!1:r?!!(a!=null&&a.opSupportLimits().input.dataTypes.includes(n)):!!(a!=null&&a.opSupportLimits().output.dataTypes.includes(n))}flush(){}}}),Gn=se(()=>{}),Ni,Aa,Oa,Do,Ro,Di,$n,Mo,Fp,d_=se(()=>{Jt(),Gn(),Ni=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Aa=[],Oa=e=>Math.ceil(Number(e)/16)*16,Do=e=>{for(let t=0;t<Aa.length;t++){let r=Aa[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ro=1,Di=()=>Ro++,$n=async(e,t,r,a)=>{let n=Oa(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let o=i.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{i.destroy()}},Mo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ni)Aa.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=Oa(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,n)),o.unmap();let u=this.backend.device.createCommandEncoder();u.copyBufferToBuffer(o,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([u.finish()]),o.destroy(),qe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Oa(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return qe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Di();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),qe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),qe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Do(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?a=o.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Di(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),qe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return qe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await $n(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ni.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(qe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Fp=(...e)=>new Mo(...e)}),Po,Ge,st=se(()=>{Po=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ge=e=>new Po(e)}),Rr,Ba,ct,_t,ye,it,wn,Br,ur,_e,ta,X,ge,jp,Fn,Uo,Kp,Me=se(()=>{Se(),Be(),Rr=64,Ba=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ct=(e,t=1)=>{let r=Ba(e,t);return typeof r=="string"?r:r[0]},_t=(e,t=1)=>{let r=Ba(e,t);return typeof r=="string"?r:r[1]},ye=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:F.computeStrides(r)})}),t},it=e=>e%4===0?4:e%2===0?2:1,wn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Br=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ur=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,_e=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ta=(e,t,r,a,n)=>{let i=typeof r=="number",s=i?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,u=Ba(t,n),p=typeof u=="string"?u:u[1],f=typeof u=="string"?u:u[0],h={indices:l,value:p,storage:f,tensor:t},m=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=i?"uniforms.":"",v=`${$}${e}_shape`,y=`${$}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${_e(y,U,s)};
    let rest${U} = current % ${_e(y,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),T=[];if(s>=2)for(let U=s-1;U>=0;U--)T.push(`${_e(y,U,s)} * (indices[${U}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,A=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),O=(...U)=>s===0?"0u":`${h.indices}(${U.map(m).join(",")})`,C=(U,ee)=>s<2?`${U}`:`${_e(U,ee,s)}`,W=(U,ee,H)=>s<2?`${U}=${H};`:`${_e(U,ee,s)}=${H};`,ae={},J=(U,ee)=>{_.broadcastedIndicesToOffset=!0;let H=`${ee.name}broadcastedIndicesTo${e}Offset`;if(H in ae)return`${H}(${U})`;let V=[];for(let P=s-1;P>=0;P--){let E=ee.indicesGet("outputIndices",P+ee.rank-s);V.push(`${C(y,P)} * (${E} % ${C(v,P)})`)}return ae[H]=`fn ${H}(outputIndices: ${ee.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${H}(${U})`},Q=(U,ee)=>(()=>{if(h.storage===h.value)return`${e}[${U}]=${ee};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${ee}), select(0u, 0xFFFFFFFFu, ${ee} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${ee}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ee}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),G=U=>(()=>{if(h.storage===h.value)return`${e}[${U}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${U}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${U}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),M=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${p} {
    return ${G(`i2o_${e}(indices)`)};
  }`,R=s<2?"":(()=>{let U=o.map(H=>`d${H}: u32`).join(", "),ee=o.map(H=>`d${H}`).join(", ");return`
  fn get_${e}(${U}) -> ${p} {
    return get_${e}ByIndices(${O(ee)});
  }`})(),Y=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let ee=U.map(m).join(",");return s===0?G("0u"):s===1?G(ee[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${ee})`)},K=U=>s<2?G(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),ie=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${p}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,le=s<2?"":(()=>{let U=o.map(H=>`d${H}: u32`).join(", "),ee=o.map(H=>`d${H}`).join(", ");return`
  fn set_${e}(${U}, value: ${p}) {
    set_${e}ByIndices(${O(ee)}, value);
  }`})();return{impl:()=>{let U=[],ee=!1;return _.offsetToIndices&&(U.push(S),ee=!0),_.indicesToOffset&&(U.push(I),ee=!0),_.broadcastedIndicesToOffset&&(Object.values(ae).forEach(H=>U.push(H)),ee=!0),_.set&&(U.push(le),ee=!0),_.setByIndices&&(U.push(ie),ee=!0),_.get&&(U.push(R),ee=!0),_.getByIndices&&(U.push(M),ee=!0),!i&&ee&&U.unshift(`const ${v} = ${h.indices}(${r.join(",")});`,`const ${y} = ${h.indices}(${F.computeStrides(r).join(",")});`),U.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:A,broadcastedIndicesToOffset:J,indices:O,indicesGet:C,indicesSet:W,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let ee=U[s];if(typeof ee!="string")throw new Error("value must be string");let H=U.slice(0,s).map(m).join(",");return s===0?Q("0u",ee):s===1?Q(H[0],ee):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${H}, ${ee})`)},setByOffset:Q,setByIndices:(U,ee)=>s<2?Q(U,ee):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${ee});`),get:Y,getByOffset:G,getByIndices:K,usage:a,name:e,strides:y,shape:v,rank:s}},X=(e,t,r,a=1)=>ta(e,t,r,"input",a),ge=(e,t,r,a=1)=>ta(e,t,r,"output",a),jp=(e,t,r)=>ta(e,t,r,"atomicOutput",1),Fn=(e,t,r,a=1)=>ta(e,t,r,"internal",a),Uo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Rr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Kp=(e,t)=>new Uo(e,t)}),Vo,Ri,Wo,qo,Lo,Ho,St,Zp,Qp,dr=se(()=>{Se(),Be(),st(),Me(),Vo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ri=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Wo=(e,t)=>F.sortBasedOnPerm(e,Ri(e.length,t)),qo=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},Lo=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},Ho=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},St=(e,t)=>{let r=e.dataType,a=e.dims.length,n=Ri(a,t),i=Wo(e.dims,n),s=e.dims,o=i,l=a<2||Ho(n,e.dims),u;if(l)return u=_=>{let $=X("input",r,s,4),v=ge("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables($,v)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=F.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:u};let{newShape:p,newPerm:f}=Lo(e.dims,n),h=F.areEqual(f,[2,3,1]),m=F.areEqual(f,[3,1,2]);if(p.length===2||h||m){s=h?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let _=16;return u=$=>{let v=X("a",r,s.length),y=ge("output",r,o.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(v,y)}
  var<workgroup> tile : array<array<${y.type.value}, ${_+1}>, ${_}>;
  ${$.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${y.setByIndices(`${y.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=F.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:$},...ye(s,o)]}},getShaderSource:u}}return u=_=>{let $=X("a",r,s.length),v=ge("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables($,v)}

  ${qo(n,a,$,v)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=F.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(s,o)]}},getShaderSource:u}},Zp=(e,t)=>{Vo(e.inputs,t.perm),e.compute(St(e.inputs[0],t.perm))},Qp=e=>Ge({perm:e.perm})}),Go,Fo,jo,Ko,Zo,Qo,Xo,Yo,Jo,el,At,Xp,Yp,Jp,ec,tc,rc,ac,ic,nc,sc,p_=se(()=>{Se(),Be(),Me(),jn(),dr(),Go={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Fo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},jo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ko={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Zo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Qo=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},Xo=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},Yo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Jo=(e,t)=>{let r=[];if(!Yo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},el=(e,t,r,a,n,i,s)=>{let o=r[0].dims,l=F.size(i),u=F.size(s),p=X("_A",r[0].dataType,o),f=ge("output",n,i),h=64;l===1&&(h=256);let m=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,_=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${jo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Go[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Fo[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Ko[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},At=(e,t,r,a)=>{let n=e.inputs.length===1?r:vn(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((m,_)=>_));let s=F.normalizeAxes(i,e.inputs[0].dims.length),o=s,l=e.inputs[0],u=Jo(o,e.inputs[0].dims.length);u.length>0&&(l=e.compute(St(e.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Zo(o.length,l.dims.length));let[p,f]=Qo(l.dims,o),h=p;n.keepDims&&(h=Xo(p,s)),e.compute(el(t,n.cacheKey,[l],a,e.inputs[0].dataType,h,f),{inputs:[l]})},Xp=(e,t)=>{At(e,"ReduceMeanShared",t,"mean")},Yp=(e,t)=>{At(e,"ReduceL1Shared",t,"l1")},Jp=(e,t)=>{At(e,"ReduceL2Shared",t,"l2")},ec=(e,t)=>{At(e,"ReduceLogSumExpShared",t,"logSumExp")},tc=(e,t)=>{At(e,"ReduceMaxShared",t,"max")},rc=(e,t)=>{At(e,"ReduceMinShared",t,"min")},ac=(e,t)=>{At(e,"ReduceProdShared",t,"prod")},ic=(e,t)=>{At(e,"ReduceSumShared",t,"sum")},nc=(e,t)=>{At(e,"ReduceSumSquareShared",t,"sumSquare")},sc=(e,t)=>{At(e,"ReduceLogSumShared",t,"logSum")}}),Ot,tl,ja,vn,Bt,rl,al,il,nl,sl,ol,ll,ul,dl,pl,Nt,oc,lc,uc,dc,pc,cc,fc,hc,mc,gc,jn=se(()=>{Se(),Be(),st(),Me(),p_(),Ot=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},tl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ja=(e,t,r,a,n,i,s=!1,o=!1)=>{let l=[],u=r[0].dims,p=u.length,f=F.normalizeAxes(n,p),h=!o&&f.length===0;u.forEach(($,v)=>{h||f.indexOf(v)>=0?s&&l.push(1):l.push($)});let m=l.length,_=F.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let v=[],y=X("_A",r[0].dataType,p),b=ge("output",i,m),S=a(y,b,f),k=S[2];for(let T=0,I=0;T<p;T++)h||f.indexOf(T)>=0?(s&&I++,k=`for(var j${T}: u32 = 0; j${T} < ${u[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${y.indicesSet("input_indices",T,`j${T}`)}
                  ${k}
                }`):(v.push(`${y.indicesSet("input_indices",T,b.indicesGet("output_indices",I))};`),I++);return`

        ${$.registerUniform("output_size","u32").declareVariables(y,b)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${y.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(u,l)]})}},vn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Ge({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Bt=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:vn(n,r);e.compute(ja(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?tl:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},rl=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},al=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},il=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},nl=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},sl=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},ol=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},ll=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ul=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},dl=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},pl=(e,t)=>{Ot(e.inputs),Bt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Nt=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},oc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ol(e,t):Xp(e,t)},lc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?al(e,t):Yp(e,t)},uc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?il(e,t):Jp(e,t)},dc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nl(e,t):ec(e,t)},pc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):tc(e,t)},cc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ll(e,t):rc(e,t)},fc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ul(e,t):ac(e,t)},hc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):ic(e,t)},mc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):nc(e,t)},gc=(e,t)=>{Nt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rl(e,t):sc(e,t)}}),Mi,_c,bc,xn,c_=se(()=>{Se(),st(),jn(),Mi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},_c=(e,t)=>{Mi(e.inputs);let r=(a,n,i)=>{let s=[];for(let o=0;o<a.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ja("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bc=(e,t)=>{Mi(e.inputs);let r=(a,n,i)=>{let s=[];for(let o=0;o<a.rank;o++)(i.indexOf(o)>=0||i.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ja("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},xn=e=>Ge(e)}),cl,Na,fl,hl,ml,ha,gl,yc,Kn=se(()=>{Se(),Be(),Gn(),Me(),cl=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],u=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,m=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=u;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(h!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let v=_+$,y=-1,b=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==u||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:v,maxSequenceLength:y,inputHiddenSize:p,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Na=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,fl=(e,t,r,a,n,i,s,o)=>{let l=it(s?1:i),u=64,p=i/l;p<u&&(u=32);let f=Math.ceil(i/l/u),h=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:p},{type:12,data:f}],m=ct(e.dataType,l),_=_t(1,l),$=["type"];s&&$.push("type"),o&&$.push("type");let v=y=>{let b=ge("x",e.dataType,e.dims,l),S=[b],k=s?X("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let T=o?X("total_sequence_length_input",o.dataType,o.dims):void 0;T&&S.push(T);let I=_t(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${y.registerUniforms(A).declareVariables(...S)}
  ${y.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Na(k,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${m};${l}`,inputDependencies:$},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:h})}},hl=(e,t,r,a,n,i,s,o,l)=>{let u=s+i.kvSequenceLength,p=[i.batchSize,i.numHeads,i.sequenceLength,u],f=e>1&&a,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=f?[i.batchSize,h,u,i.headSize]:void 0,_=i.nReps?i.nReps:1,$=i.scale===0?1/Math.sqrt(i.headSize):i.scale,v=it(i.headSize),y=i.headSize/v,b=12,S={x:Math.ceil(u/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:y},{type:12,data:u},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:_}],T=f&&a&&F.size(a.dims)>0,I=["type","type"];T&&I.push("type"),n&&I.push("type"),o&&I.push("type"),l&&I.push("type");let A=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&A.push({dims:m,dataType:t.dataType,gpuDataType:0});let O=C=>{let W=X("q",t.dataType,t.dims,v),ae=X("key",r.dataType,r.dims,v),J=[W,ae];if(T){let ie=X("past_key",a.dataType,a.dims,v);J.push(ie)}n&&J.push(X("attention_bias",n.dataType,n.dims));let Q=o?X("seq_lens",o.dataType,o.dims):void 0;Q&&J.push(Q);let G=l?X("total_sequence_length_input",l.dataType,l.dims):void 0;G&&J.push(G);let M=ge("output",t.dataType,p),R=[M];f&&R.push(ge("present_key",t.dataType,m,v));let Y=_t(1,v),K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${W.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${W.type.storage}, ${b*b}>;
  ${C.registerUniforms(K).declareVariables(...J,...R)}
  ${C.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Na(Q,G,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${M.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${n!==void 0};${a!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:A,dispatchGroup:S,programUniforms:k}),getShaderSource:O}},ml=(e,t,r,a,n,i,s=void 0,o=void 0)=>{let l=i+n.kvSequenceLength,u=n.nReps?n.nReps:1,p=n.vHiddenSize*u,f=e>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=f?[n.batchSize,h,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,p],$=12,v={x:Math.ceil(n.vHeadSize/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},y=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:u}],b=f&&a&&F.size(a.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),o&&S.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=I=>{let A=X("probs",t.dataType,t.dims),O=X("v",r.dataType,r.dims),C=[A,O];b&&C.push(X("past_value",a.dataType,a.dims));let W=s?X("seq_lens",s.dataType,s.dims):void 0;s&&C.push(W);let ae=o?X("total_sequence_length_input",o.dataType,o.dims):void 0;o&&C.push(ae);let J=[ge("output",t.dataType,_)];f&&J.push(ge("present_value",t.dataType,m));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${A.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${A.type.value}, ${$*$}>;
  ${I.registerUniforms(Q).declareVariables(...C,...J)}
  ${I.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Na(W,ae,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:v,programUniforms:y}),getShaderSource:T}},ha=(e,t,r,a,n,i,s,o,l,u,p=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=h>1?u.pastSequenceLength:0,_=m+u.kvSequenceLength,$=l&&F.size(l.dims)>0?l:void 0,v=[t,r];h>1&&s&&F.size(s.dims)>0&&v.push(s),$&&v.push($),p&&v.push(p),f&&v.push(f);let y=e.compute(hl(h,t,r,s,$,u,m,p,f),{inputs:v,outputs:h>1?[-1,1]:[-1]})[0];e.compute(fl(y,u.batchSize,u.numHeads,m,u.sequenceLength,_,p,f),{inputs:p&&f?[y,p,f]:[y],outputs:[]});let b=[y,a];h>1&&o&&F.size(o.dims)>0&&b.push(o),p&&b.push(p),f&&b.push(f),e.compute(ml(h,y,a,o,u,m,p,f),{inputs:b,outputs:h>1?[0,2]:[0]})},gl=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],u=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let h=ge("output_q",l[0].dataType,r),m=ge("output_k",l[0].dataType,r),_=ge("output_v",l[0].dataType,r),$=X("input",l[0].dataType,l[0].dims),v=X("weight",l[1].dataType,l[1].dims),y=X("bias",l[2].dataType,l[2].dims),b=$.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables($,v,y,h,m,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},yc=(e,t)=>{let r=cl(e.inputs,t),[a,n,i]=gl(e,r);return ha(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),_l,bl,yl,$c,f_=se(()=>{Pt(),Se(),Be(),st(),Me(),_l=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let s=n.length;if(s!==a.length)throw new Error(`${i}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==a[l])throw new Error(`${i}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},bl=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,s=a?it(i[i.length-1]):1,o=n==="NHWC"&&i.length>1?s:1,l=F.size(i)/s,u=a,p=u?i.length:i,f=X("x",e[0].dataType,e[0].dims,s),h=X("scale",e[1].dataType,e[1].dims,o),m=X("bias",e[2].dataType,e[2].dims,o),_=X("inputMean",e[3].dataType,e[3].dims,o),$=X("inputVar",e[4].dataType,e[4].dims,o),v=ge("y",e[0].dataType,p,s),y=()=>{let S="";if(a)S=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")S=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<h.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,h,m,_,$,v)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${s}`)};
    ${y()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...ye(i)]:[{type:12,data:l}]})}},yl=e=>Ge(e),$c=(e,t)=>{let{inputs:r,outputCount:a}=e,n=yl({...t,outputCount:a});if(et.webgpu.validateInputContent&&_l(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(bl(r,n))}}),$l,wl,wc,h_=se(()=>{Be(),Me(),$l=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wl=e=>{let t=e[0].dims,r=e[0].dims[2],a=F.size(t)/4,n=e[0].dataType,i=X("input",n,t,4),s=X("bias",n,[r],4),o=X("residual",n,t,4),l=ge("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const channels = ${r}u / 4;
  ${u.declareVariables(i,s,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},wc=e=>{$l(e.inputs),e.compute(wl(e.inputs))}}),vl,He,vc,xc,kc,Sc,Tc,Ic,Ec,zc,Cc,xl,Ac,Oc,Bc,Nc,da,Dc,qa,Rc,Mc,Pc,Uc,Vc,Wc,qc,Lc,Hc,Gc,Fc,jc,Kc,Zc,Qc,Xc,Pi,Yc,kn,Sn,Jc,ef,tf,kl,Sl,rf,Zn=se(()=>{Se(),Be(),st(),Me(),vl=(e,t,r,a,n,i,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let u=X("inputData",r,[o],4),p=ge("outputData",a,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(u,p)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},He=(e,t,r,a,n,i=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:u=>vl(u,F.size(e.dims),e.dataType,i,r,a,o),getRunData:u=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(F.size(u[0].dims)/64/4)},programUniforms:l})}},vc=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},xc=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},kc=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},Sc=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},Tc=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},Ic=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},Ec=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},zc=e=>Ge(e),Cc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(He(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},xl=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ge({min:t,max:r})},Ac=(e,t)=>{let r=t||xl(e.inputs),a=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Oc=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},Bc=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},Nc=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},da=e=>Ge(e),Dc=(e,t)=>{let r=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},qa=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Rc=e=>{let t=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,qa(t)))},Mc=e=>{e.compute(He(e.inputs[0],"Exp","exp"))},Pc=e=>{e.compute(He(e.inputs[0],"Floor","floor"))},Uc=e=>{let t=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,qa(t)))},Vc=(e,t)=>{let r=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Wc=e=>{e.compute(He(e.inputs[0],"Not",t=>`!${t}`))},qc=e=>{e.compute(He(e.inputs[0],"Neg",t=>`-${t}`))},Lc=e=>{e.compute(He(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Hc=e=>{let t=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Gc=e=>{e.compute(He(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Fc=e=>Ge(e),jc=(e,t)=>{let r=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Kc=e=>{e.compute(He(e.inputs[0],"Sin","sin"))},Zc=e=>{e.compute(He(e.inputs[0],"Sinh","sinh"))},Qc=e=>{e.compute(He(e.inputs[0],"Sqrt","sqrt"))},Xc=e=>{e.compute(He(e.inputs[0],"Tan","tan"))},Pi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Yc=e=>{e.compute(He(e.inputs[0],"Tanh",Pi))},kn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Pi("v")};
}
`,Sn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Jc=e=>{let t=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"FastGelu",Sn,kn(t),void 0,e.inputs[0].dataType))},ef=(e,t)=>{let r=_t(e.inputs[0].dataType);return e.compute(He(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},tf=e=>{e.compute(He(e.inputs[0],"Log","log"))},kl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Sl=e=>`quick_gelu_impl(${e})`,rf=(e,t)=>{let r=_t(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",Sl,kl(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Tl,Il,af,m_=se(()=>{Be(),Me(),Zn(),Tl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Il=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=X("input",e[0].dataType,e[0].dims,4),a=X("bias",e[0].dataType,[e[0].dims[2]],4),n=ge("output",e[0].dataType,t,4),i=F.size(t)/4,s=ct(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,a,n)}

  ${qa(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},af=e=>{Tl(e.inputs),e.compute(Il(e.inputs))}}),El,zl,Dt,nf,sf,of,lf,uf,df,pf,cf,ff,hf,g_=se(()=>{Se(),Be(),Me(),El=(e,t,r,a,n,i,s,o,l,u,p,f)=>{let h,m;typeof o=="string"?h=m=(b,S)=>`${o}((${b}),(${S}))`:typeof o=="function"?h=m=o:(h=o.scalar,m=o.vector);let _=ge("outputData",p,a.length,4),$=X("aData",l,t.length,4),v=X("bData",u,r.length,4),y;if(n)if(i){let b=F.size(t)===1,S=F.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;b||S?y=_.setByOffset("global_idx",m(b?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),S?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):y=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(s||k?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=_.setByOffset("global_idx",m($.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,k,T="")=>{let I=`aData[indexA${k}][componentA${k}]`,A=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${v.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${T}(${h(I,A)});
          `};p===9?y=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,v,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},zl=(e,t,r,a,n,i,s=r.dataType)=>{let o=r.dims.map($=>Number($)??1),l=a.dims.map($=>Number($)??1),u=!F.areEqual(o,l),p=o,f=F.size(o),h=!1,m=!1,_=[u];if(u){let $=Dr.calcShape(o,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");p=$.slice(),f=F.size(p);let v=F.size(o)===1,y=F.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;_.push(v),_.push(y),_.push(b),_.push(S);let k=1;for(let T=1;T<p.length;T++){let I=o[o.length-T],A=l[l.length-T];if(I===A)k*=I;else break}k%4===0?(m=!0,h=!0):(v||y||b||S)&&(h=!0)}else h=!0;return _.push(h),{name:e,shaderCache:{hint:t+_.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>El($,o,l,p,h,u,m,n,r.dataType,a.dataType,s,i),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(p)/4)},...ye(o,l,p)]})}},Dt=(e,t,r,a,n,i)=>{e.compute(zl(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},nf=e=>{Dt(e,"Add",(t,r)=>`${t}+${r}`)},sf=e=>{Dt(e,"Div",(t,r)=>`${t}/${r}`)},of=e=>{Dt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},lf=e=>{Dt(e,"Mul",(t,r)=>`${t}*${r}`)},uf=e=>{let t=X("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Dt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},df=e=>{Dt(e,"Sub",(t,r)=>`${t}-${r}`)},pf=e=>{Dt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},cf=e=>{Dt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ff=e=>{Dt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},hf=e=>{Dt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Cl,Al,Ol,Bl,mf,gf,__=se(()=>{Se(),Be(),st(),Me(),Cl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((l,u)=>{if(u!==t&&l!==a.dims[u])throw new Error("non concat dimensions must match")})}})},Al=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ol=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Bl=(e,t,r,a)=>{let n=F.size(r),i=new Array(e.length),s=new Array(e.length),o=0,l=[],u=[],p=[{type:12,data:n}];for(let $=0;$<e.length;++$)o+=e[$].dims[t],i[$]=o,u.push(e[$].dims.length),s[$]=X(`input${$}`,a,u[$]),l.push("rank"),p.push({type:12,data:i[$]});for(let $=0;$<e.length;++$)p.push(...ye(e[$].dims));p.push(...ye(r));let f=ge("output",a,r.length),h=f.indicesGet("indices",t),m=Array.from(Array(i.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),_=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)$.registerUniform(`sizeInConcatAxis${v}`,"u32");return $.declareVariables(...s,f)})()}

  ${Al(i.length,m)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${m});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ol(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:_}},mf=(e,t)=>{let r=e.inputs,a=r[0].dims,n=F.normalizeAxis(t.axis,a.length);Cl(r,n);let i=a.slice();i[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>F.size(o.dims)>0);e.compute(Bl(s,n,i,r[0].dataType),{inputs:s})},gf=e=>Ge({axis:e.axis})}),wr,vr,xr,Qn,Sr=se(()=>{Se(),Be(),wr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},xr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Qn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Wp,qp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ht,_f,Xn=se(()=>{ht=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},_f=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),bf,b_=se(()=>{bf=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ca,Yn,Jn=se(()=>{Se(),Be(),Me(),Sr(),ca=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${_e(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,_e(n,o+i,a))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Yn=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],u=o[o.length-1],p=s[s.length-1],f=it(u),h=it(p),m=it(l),_=F.size(r)/f/m,$=e.length>2,v=a?a.slice(0,-2):r.slice(0,-2),y=[F.size(v),l,u],b=[{type:12,data:_},{type:12,data:l},{type:12,data:u},{type:12,data:p}];vr(t,b),b.push(...ye(v,s,o)),$&&b.push(...ye(e[2].dims)),b.push(...ye(y));let S=k=>{let T=Fn("batch_dims",e[0].dataType,v.length),I=X("a",e[0].dataType,s.length,h),A=X("b",e[1].dataType,o.length,f),O=ge("output",e[0].dataType,y.length,f),C=ct(O.type.tensor),W=wr(t,O.type.value,C),ae=[I,A],J="";if($){let M=n?f:1;ae.push(X("bias",e[2].dataType,e[2].dims.length,M)),J=`${n?`value += bias[col / ${M}];`:`value += ${O.type.value}(bias[row + i]);`}`}let Q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];xr(t,Q);let G=()=>{let M=`var a_data: ${I.type.value};`;for(let R=0;R<h;R++)M+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${f}];`;for(let R=0;R<m;R++){M+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${h}];`;for(let Y=0;Y<h;Y++)M+=`
            values[${R}] = fma(${A.type.value}(a_data${h===1?"":`[${Y}]`}), b_data${Y}, values[${R}]);
`}return M};return`
  ${k.registerUniforms(Q).registerInternalVariables(T).declareVariables(...ae,O)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${ca("a_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${ca("b_indices",A,A.rank-2,T.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${O.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${G()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${J}
      ${W}
      let cur_indices = ${O.type.indices}(batch, row + i, col);
      let offset = ${O.indicesToOffset("cur_indices")};
      ${O.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${m};${n}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:S}}}),Nl,Dl,Tn,Ui,Rl,In,Ml,Ka,es=se(()=>{Se(),Be(),Me(),Sr(),Jn(),Xn(),Nl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Dl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Tn=(e,t,r="f32",a,n=!1,i=32,s=!1,o=32)=>{let l=t[1]*e[1],u=t[0]*e[0],p=n?l:i,f=n?i:l,h=p/t[0],m=i/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&p%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${p/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${u/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Nl(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Dl(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ui=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Rl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",In=(e,t,r="f32",a,n=!1,i=32,s=!1,o=32,l=!1)=>{let u=e[1]*t[1],p=e[0]*t[0],f=n?u:i,h=n?i:u;if(!(h%t[1]===0&&f%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let m=h/t[1],_=f/t[0],$=i/t[1],v=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Ui(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ui(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Rl(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${v}
  }
`},Ml=(e,t,r,a,n=!1)=>{let[i,s,o,l]=a,u=ct(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ht(e,u)} {
      var value = ${ht(e,u)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${ca("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ht(e,u)} {
      var value = ${ht(e,u)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ca("bIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ht(e,u)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ht(e,u)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ka=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),u=o.slice(0,-2),p=a?a.slice(0,-2):r.slice(0,-2),f=F.size(p),h=s[s.length-2],m=s[s.length-1],_=o[o.length-1],$=m%4===0&&_%4===0,v=h<=8?[4,1,1]:[4,4,1],y=[8,8,1],b=[Math.ceil(_/y[0]/v[0]),Math.ceil(h/y[1]/v[1]),Math.ceil(f/y[2]/v[2])],S=$?4:1,k=[...l,h,m/S],T=k.length,I=[...u,m,_/S],A=I.length,O=[f,h,_/S],C=[{type:6,data:h},{type:6,data:_},{type:6,data:m}];vr(t,C),C.push(...ye(p,k,I));let W=["rank","rank"],ae=e.length>2;ae&&(C.push(...ye(e[2].dims)),W.push("rank")),C.push(...ye(O));let J=Q=>{let G=p.length,M=Fn("batchDims",e[0].dataType,G,1),R=ct(e[0].dataType),Y=X("a",e[0].dataType,T,S),K=X("b",e[1].dataType,A,S),ie=ge("result",e[0].dataType,O.length,S),le=[Y,K];if(ae){let P=n?S:1;le.push(X("bias",e[2].dataType,e[2].dims.length,P))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];xr(t,U);let ee=ct(ie.type.tensor),H=wr(t,ie.type.value,ee),V=Ml(S,ae,H,[M,Y,K,ie],n);return`
  ${Q.registerUniforms(U).registerInternalVariables(M).declareVariables(...le,ie)}
  ${V}
  ${$?Tn(v,y,R,M):In(v,y,R,M)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${$};${n}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:C}),getShaderSource:J}}}),Pl,yf,y_=se(()=>{Se(),Jt(),Me(),Sr(),Xn(),b_(),es(),Pl=(e,t,r,a,n=!1,i,s=4,o=4,l=4,u="f32")=>{let p=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},f=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",y=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${y} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${y} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${y} % inChannels;
    var resData = ${ht(s,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${$}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${ht(s,u)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${ht(s,u)}(0.0);`,k=e?a&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${ht(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${ht(o,u)}(0.0);`,T=ht(l,u),I=ht(e?s:o,u),A=ht(e?o:s,u),O=wr(i,T,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${_f(n)}
      ${O}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},yf=(e,t,r,a,n,i,s,o,l)=>{let u=t.format==="NHWC",p=u?e[0].dims[3]:e[0].dims[1],f=r[0],h=u?r[2]:r[3],m=u?r[1]:r[2],_=u?r[3]:r[1],$=u&&(p%4===0||p%3===0)&&_%4===0,v=u?_:h*m,y=u?h*m:_,b=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(v/b[0]/S[0]),Math.ceil(y/b[1]/S[1]),Math.ceil(f/b[2]/S[2])];qe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let T=$?u&&p%4!==0?3:4:1,I=b[1]*S[1],A=b[0]*S[0],O=Math.max(b[0]*T,b[1]),C=a%I===0,W=n%A===0,ae=i%O===0,J=$?[T,4,4]:[1,1,1],Q=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vr(t,Q),Q.push(...ye(e[0].dims,e[1].dims));let G=["rank","rank"];s&&(Q.push(...ye(e[2].dims)),G.push("rank")),Q.push(...ye(r));let M=R=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];xr(t,Y);let K=$?4:1,ie=ct(e[0].dataType),le=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${$?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,U=X("x",e[0].dataType,e[0].dims.length,T===3?1:T),ee=X("w",e[1].dataType,e[1].dims.length,K),H=[U,ee],V=ge("result",e[0].dataType,r.length,K);if(s){let P=X("bias",e[2].dataType,e[2].dims.length,K);H.push(P),le+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${ie}>`:ie} {
          return bias[coords.${u?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${bf("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${R.registerUniforms(Y).declareVariables(...H,V)}
        ${le}
        ${Pl(u,C,W,ae,s,t,J[0],J[1],J[2],ie)}
        ${$?Tn(S,b,ie,void 0,!u,O):In(S,b,ie,void 0,!u,O,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${$};${C};${W};${ae};${I};${A};${O}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Q}),getShaderSource:M}}}),Ul,Vi,ra,Vl,Wi,Wl,$f,wf,$_=se(()=>{Se(),Jt(),Be(),Me(),Sr(),Xn(),Ul=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Vi=e=>typeof e=="number"?[e,e,e]:e,ra=(e,t)=>t<=1?e:e+(e-1)*(t-1),Vl=(e,t,r,a=1)=>{let n=ra(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},Wi=(e,t,r,a,n)=>{n==null&&(n=Vl(e,t[0],a[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*n)/a[s]+1));return i},Wl=(e,t,r,a,n,i,s,o,l,u)=>{let p,f,h,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Wi([t,r,a,1],[o,l,u],1,[n,i,s],e);f=_[0],h=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every(($,v,y)=>$===y[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Wi([t,r,a,1],[o,l,u],1,[n,i,s],e[0]);f=_[0],h=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/i),m=Math.ceil(a/s);let _=(f-1)*n+o-t,$=(h-1)*i+l-r,v=(m-1)*s+u-a,y=Math.floor(_/2),b=_-y,S=Math.floor($/2),k=$-S,T=Math.floor(v/2),I=v-T;p={top:S,bottom:k,left:T,right:I,front:y,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:h,outWidth:m}},$f=(e,t,r,a,n,i=!1,s="channelsLast")=>{let o,l,u,p,f;if(s==="channelsLast")[o,l,u,p,f]=e;else if(s==="channelsFirst")[o,f,l,u,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,m,_,$]=t,[v,y,b]=Vi(r),[S,k,T]=Vi(a),I=ra(m,S),A=ra(_,k),O=ra($,T),{padInfo:C,outDepth:W,outHeight:ae,outWidth:J}=Wl(n,l,u,p,v,y,b,I,A,O),Q=i?h*f:h,G=[0,0,0,0,0];return s==="channelsFirst"?G=[o,Q,W,ae,J]:s==="channelsLast"&&(G=[o,W,ae,J,Q]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:u,inWidth:p,inChannels:f,outDepth:W,outHeight:ae,outWidth:J,outChannels:Q,padInfo:C,strideDepth:v,strideHeight:y,strideWidth:b,filterDepth:m,filterHeight:_,filterWidth:$,effectiveFilterDepth:I,effectiveFilterHeight:A,effectiveFilterWidth:O,dilationDepth:S,dilationHeight:k,dilationWidth:T,inShape:e,outShape:G,filterShape:t}},wf=(e,t,r,a,n,i)=>{let s=i==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((v,y)=>y)},u=[Math.ceil(Ul(l.x.map(v=>r[v]))/o[0]),1,1];qe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let p=1,f=F.size(r),h=[{type:12,data:f},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];vr(t,h),h.push(...ye(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(h.push(...ye(e[2].dims)),m.push("rank")),h.push(...ye(r));let $=v=>{let y=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];xr(t,y);let b=1,S=ct(e[0].dataType),k=X("x",e[0].dataType,e[0].dims.length,p),T=X("W",e[1].dataType,e[1].dims.length,b),I=[k,T],A=ge("result",e[0].dataType,r.length,b),O="";if(_){let ae=X("bias",e[2].dataType,e[2].dims.length,b);I.push(ae),O+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?_e("coords",4,5):_e("coords",1,5)}];
        }`}let C=ht(p,S),W=wr(t,C,S);return`
            ${O}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${v.registerUniforms(y).declareVariables(...I,A)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${_e("coords",0,k.rank)};
              let d2 = ${s?_e("coords",k.rank-1,k.rank):_e("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?_e("coords",1,k.rank):_e("coords",2,k.rank)},
              ${s?_e("coords",2,k.rank):_e("coords",3,k.rank)},
              ${s?_e("coords",3,k.rank):_e("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?_e("uniforms.x_shape",1,k.rank):_e("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?_e("uniforms.x_shape",2,k.rank):_e("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?_e("uniforms.x_shape",3,k.rank):_e("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?_e("uniforms.x_shape",4,k.rank):_e("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:h}),getShaderSource:$}}}),vf,xf,w_=se(()=>{Se(),Be(),Me(),Sr(),vf=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",u=l?r[3]:r[1],p=u/t.group,f=l&&p>=4?it(u):1,h=F.size(r)/f,m=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];vr(t,m),m.push(...ye(s,[o[0],o[1],o[2],o[3]/f]));let _=n?["rank","rank","rank"]:["rank","rank"];m.push(...ye([r[0],r[1],r[2],r[3]/f]));let $=v=>{let y=ge("output",e[0].dataType,r.length,f),b=ct(y.type.tensor),S=wr(t,y.type.value,b),k=X("x",e[0].dataType,s.length),T=X("w",e[1].dataType,o.length,f),I=[k,T];n&&I.push(X("b",e[2].dataType,e[2].dims,f));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];xr(t,A);let O=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(A).declareVariables(...I,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${y.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${y.type.value} = ${y.type.value}(0);
    ${O}
    ${i}
    ${S}
    ${y.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:$}},xf=(e,t,r,a)=>{let n=e.length>2,i=it(r[3]),s=it(r[2]),o=F.size(r)/i/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],u=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],p=[r[0],r[1],r[2],r[3]/i],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vr(t,f),f.push(...ye(l,u,p));let h=(s-1)*t.strides[1]+u[1],m=_=>{let $=ge("output",e[0].dataType,p.length,i),v=ct($.type.tensor),y=wr(t,$.type.value,v),b=X("x",e[0].dataType,l.length,i),S=X("w",e[1].dataType,u.length,i),k=[b,S];n&&k.push(X("b",e[2].dataType,e[2].dims,i));let T=n?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return xr(t,I),`
  ${_.registerUniforms(I).declareVariables(...k,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${h}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${y}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${h};${u[0]};${u[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),ql,Da,Ll,Ra,En,qi,Hl,Gl,zn,v_=se(()=>{Be(),y_(),$_(),es(),w_(),Sr(),Jn(),dr(),ql=(e,t,r,a,n,i)=>{let s=e[0],o=e.slice(i?1:2,i?3:4),l=o.length,u=t[0],p=t.slice(2).map((h,m)=>h+(h-1)*(r[m]-1)),f=o.map((h,m)=>h+a[m]+a[m+l]).map((h,m)=>Math.floor((h-p[m]+n[m])/n[m]));return f.splice(0,0,s),f.splice(i?3:1,0,u),f},Da=[2,3,1,0],Ll=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ra=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();Fa.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},En=e=>{let t=Qn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,u=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,pads:o,strides:l,wIsConst:u,...t,cacheKey:`${e.format};${t.activation};`}},qi=(e,t,r,a)=>{let n=r.format==="NHWC",i=ql(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let I=[t[0]];if(n){let A=e.kernelCustomData.wT??e.compute(St(t[1],Da),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),I.push(A)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(xf(I,r,i,a),{inputs:I}):e.compute(vf(I,r,i,a),{inputs:I});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],u=t[0].dims[n?3:1],p=t[1].dims[2],f=t[1].dims[3],h=i[n?1:2],m=i[n?2:3],_=i[n?3:1],$=n&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if($||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=i[0],A,O,C,W=[];if(n){let Q=e.kernelCustomData.wT??e.compute(St(t[1],Da),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),$){let G=o*l*u;A=t[0].reshape([1,I,G]),O=Q.reshape([1,G,_]),C=[1,I,_]}else A=t[0].reshape([I,o*l,u]),O=Q.reshape([1,u,_]),C=[I,h*m,_];W.push(A),W.push(O)}else A=t[0].reshape([I,u,o*l]),O=t[1].reshape([1,_,u]),C=[I,_,h*m],W.push(O),W.push(A);s&&W.push(t[2]);let ae=C[2],J=W[0].dims[W[0].dims.length-1];ae<8&&J<8?e.compute(Yn(W,r,i,C,n,a),{inputs:W}):e.compute(Ka(W,r,i,C,n,a),{inputs:W});return}let v=!0,y=e.kernelCustomData.wT??e.compute(St(t[1],Da),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let b=[t[0],y];s&&b.push(t[2]);let S=n?h*m:_,k=n?_:h*m,T=p*f*u;e.compute(yf(b,r,i,S,k,T,s,v,a),{inputs:b})},Hl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Ra({...t,pads:n,strides:i,dilations:s,kernelShape:o},a);qi(e,a,l,u=>r?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},Gl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Ra(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=$f(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(wf(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},zn=(e,t)=>{if(Ll(e.inputs,t),e.inputs[0].dims.length===3)Hl(e,t);else if(e.inputs[0].dims.length===5)Gl(e,e.inputs,t);else{let r=Ra(t,e.inputs);qi(e,e.inputs,r)}}}),kf,x_=se(()=>{Se(),Jt(),Be(),Me(),kf=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,u=o[3],p=i?it(l):1,f=i&&u===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/p)*p,m=l-h,_=i?it(u):1,$=i?u===1?p:_:1,v=F.size(n)/_,y=[Math.ceil(v/64),1,1];qe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${y}`);let b=["rank","rank"],S=[t.strides[0],t.strides[1]],k=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],T=[t.dilations[0],t.dilations[1]],I=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],A=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],O=[{type:12,data:v},{type:12,data:S},{type:12,data:k},{type:12,data:T},{type:12,data:I},{type:6,data:A},{type:12,data:h},{type:12,data:l},{type:12,data:u},...ye(e[0].dims,e[1].dims)];a&&(O.push(...ye(e[2].dims)),b.push("rank")),O.push(...ye(n));let C=W=>{let ae=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],J=ct(e[0].dataType),Q=i?1:2,G=i?2:3,M=i?3:1,R=X("W",e[1].dataType,e[1].dims.length,$),Y=X("Dy",e[0].dataType,e[0].dims.length,p),K=[Y,R];a&&K.push(X("bias",e[2].dataType,[n[M]].length,_));let ie=ge("result",e[0].dataType,n.length,_),le=()=>{let H="";if(f)p===4?H+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${R.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?H+=`
          dotProd = dotProd + dot(vec4<${J}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${J}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(H+=`
          dotProd = dotProd + dot(vec4<${J}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${J}>(${R.getByOffset("w_offset")}, ${R.getByOffset("w_offset + 1u")}, ${R.getByOffset("w_offset + 2u")}, ${R.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(H+=`
                  let xValue = ${i?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,p===1)H+=`
          let w_offset = ${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${R.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<p;V++)H+=`
            let wValue${V} = ${R.getByOffset(`${R.indicesToOffset(`${R.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return H},U=()=>{if(m===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let H="";if(p===1){H+="dotProd = dotProd";for(let V=0;V<m;V++)H+=`
            + ${Y.getByOffset(`x_offset + ${V}`)} * ${R.getByOffset(`w_offset + ${V}`)}`;H+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);H+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${R.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return H},ee=`
            let outputIndices = ${ie.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${ie.indicesGet("outputIndices",0)};
            let d1 = ${ie.indicesGet("outputIndices",M)};
            let r = ${ie.indicesGet("outputIndices",Q)};
            let c = ${ie.indicesGet("outputIndices",G)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ie.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${J}(dyRCorner) + ${J}(wR)) / ${J}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${J}(uniforms.Dy_shape[${Q}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${J}(dyCCorner) + ${J}(wC)) / ${J}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${J}(uniforms.Dy_shape[${G}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${R.indicesToOffset(`${R.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${le()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${_}]`:""};
            ${ie.setByOffset("global_idx","value")};
          `;return`
    ${W.registerUniforms(ae).declareVariables(...K,ie)}
      ${W.mainStart()}
      ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ee}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${$}${_}${f}${m}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:y[0],y:y[1],z:y[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:C}}}),Fl,jl,Kl,Li,Sf,Zl,Hi,Ql,Tf,k_=se(()=>{x_(),Sr(),dr(),Fl=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,jl=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},Kl=(e,t,r,a,n,i,s,o,l,u)=>{let p=e.length-2,f=u.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=e[0],m=t[o?3:1]*n;for(let _=0,$=e.length-p-(o?1:0);_<p;++_,++$){let v=e[$],y=f?v*s[_]:u[_],b=Fl(v,s[_],i[_],t[$],r[_],y);jl(b,a,i,_,_+p),f&&u.push(s[_]*(v-1)+l[_]+(t[$]-1)*r[_]+1-i[_]-i[_+p])}u.splice(0,0,h),u.splice(o?3:1,0,m)},Li=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let u=e.strides.slice();if(u.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}Kl(o,r,l,e.autoPad,e.group,n,u,a,s,i);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:i,dilations:l,strides:u}),p},Sf=e=>{let t=Qn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,s=e.kernelShape,o=e.pads,l=e.strides,u=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:u,...t,cacheKey:`${e.format};${t.activation};`}},Zl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Hi=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(St(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(kf(i,r,a),{inputs:i})},Ql=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),i=[1].concat(i),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let u=Li({...t,pads:o,strides:s,dilations:i,kernelShape:n,outputPadding:l},a);Hi(e,a,u,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Tf=(e,t)=>{if(Zl(e.inputs,t),e.inputs[0].dims.length===3)Ql(e,t);else{let r=Li(t,e.inputs);Hi(e,e.inputs,r)}}}),Xl,If,Ef,S_=se(()=>{Se(),Be(),st(),Me(),Xl=(e,t,r,a)=>{let n=F.size(t),i=t.length,s=X("input",e,i),o=ge("output",e,i),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),u=F.normalizeAxis(l,i),p=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=_e("uniforms.input_shape","uniforms.axis",i),_=a.reverse?h+(a.exclusive?" + 1":""):"0",$=a.reverse?m:h+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:u},...ye(t,t)]}),getShaderSource:p}},If=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(Xl(a,r,n,t),{inputs:[0]})},Ef=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ge({exclusive:t,reverse:r})}}),Yl,Jl,eu,zf,Cf,T_=se(()=>{Se(),Be(),st(),Me(),Yl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Jl=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},eu=(e,t)=>{let r,a,n,i,s,o,l=t.format==="NHWC",u=t.blocksize,p=t.mode==="DCR";l?([r,a,n,i]=e.dims,s=p?[r,a,n,u,u,i/u**2]:[r,a,n,i/u**2,u,u],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,u,u,i/u**2,a,n]:[r,i/u**2,u,u,a,n],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,m=e.dataType,_=X("a",m,h),$=ge("output",m,h),v=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(_,$)}

  ${Jl(o,h,_,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:y=>{let b=l?[r,a*u,n*u,i/u**2]:[r,i/u**2,a*u,n*u],S=F.size(b),k=f.dims,T=F.sortBasedOnPerm(k,o);return{outputs:[{dims:b,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ye(k,T)]}},getShaderSource:v}},zf=(e,t)=>{Yl(e.inputs),e.compute(eu(e.inputs[0],t))},Cf=e=>Ge({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ma,aa,Gi,tu,ru,au,iu,Fi,nu,Af,Of,I_=se(()=>{Se(),Be(),st(),Me(),Ma="[a-zA-Z]|\\.\\.\\.",aa="("+Ma+")+",Gi="^"+aa+"$",tu="("+aa+",)*"+aa,ru="^"+tu+"$",au=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},iu=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(ru)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,s)=>{let o=e[s].dims.slice();if(!i.match(RegExp(Gi)))throw new Error("Invalid LHS term");let l=this.processTerm(i,!0,o,s);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,s])=>s.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(aa)))throw new Error("Invalid RHS");(n=a.match(RegExp(Ma,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(i);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,s=[],o=0;if(!e.match(RegExp(Gi))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ma,"g")),u=new au(a);return l==null||l.forEach((p,f)=>{if(p==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let h=n-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let _=String.fromCharCode(48+m);u.addSymbol(_,f+m),this.addSymbol(_,r[o++],a)}}else u.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],a)}),u}},Fi=e=>e+"_max",nu=(e,t,r,a)=>{let n=e.map(u=>u.length).map((u,p)=>X(`input${p}`,t,u)),i=F.size(a),s=ge("output",t,a.length),o=[...r.symbolToInfo.keys()].filter(u=>!r.rhs.symbolToIndices.has(u)),l=u=>{let p=[],f="var prod = 1.0;",h="var sum = 0.0;",m="sum += prod;",_=[],$=[],v=[],y=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,T)=>{var I;if(r.rhs.symbolToIndices.has(T)){let A=(I=r.rhs.symbolToIndices.get(T))==null?void 0:I[0];A!==void 0&&r.lhs.forEach((O,C)=>{if(k.inputIndices.includes(C)){let W=O.symbolToIndices.get(T);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(ae=>{p.push(`${n[C].indicesSet(`input${C}Indices`,ae,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,O)=>{if(k.inputIndices.includes(O)){let C=A.symbolToIndices.get(T);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(W=>{_.push(`${n[O].indicesSet(`input${O}Indices`,W,`${T}`)}`)}),y.push(`prod *= ${n[O].getByIndices(`input${O}Indices`)};`)}}),$.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Fi(T)}; ${T}++) {`),v.push("}")});let S=b?[...p,`let sum = ${n.map((k,T)=>k.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...p,h,...$,..._,f,...y,m,...v];return`
            ${u.registerUniforms(o.map(k=>({name:`${Fi(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((k,T)=>`var input${T}Indices: ${n[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let u=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var h;return{type:12,data:((h=r.symbolToInfo.get(f))==null?void 0:h.dimValue)||0}});u.push({type:12,data:i});let p=e.map((f,h)=>[...ye(f)]).reduce((f,h)=>f.concat(h),u);return p.push(...ye(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}},getShaderSource:l}},Af=(e,t)=>{let r=new iu(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,s)=>i.dims);e.compute(nu(n,e.inputs[0].dataType,r,a))},Of=e=>{let t=e.equation.replace(/\s+/g,"");return Ge({equation:t})}}),su,ji,ou,lu,Bf,E_=se(()=>{Se(),Be(),Me(),su=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ji=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},ou=(e,t)=>e.length>t.length?ji(e,t):ji(t,e),lu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=ou(t,r),n=e[0].dataType,i=n===9||F.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=i||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(F.size(a)/o),u=f=>{let h=X("input",n,t.length,s),m=ge("output",n,a.length,o),_;if(n===9){let $=(v,y,b="")=>`
          let outputIndices${y} = ${m.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${h.broadcastedIndicesToOffset(`outputIndices${y}`,m)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${v}[${y}] = ${b}(${h.getByOffset(`index${y}`)}[component${y}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,m)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},p=[{type:12,data:l},...ye(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},Bf=e=>{su(e.inputs),e.compute(lu(e.inputs),{inputs:[0]})}}),uu,Nf,z_=se(()=>{Se(),Be(),Me(),Zn(),uu=e=>{let t=e[0].dataType,r=F.size(e[0].dims),a=F.size(e[1].dims),n=a%4===0,i=s=>{let o=X("x",t,[1],4),l=X("bias",t,[1],4),u=ge("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,h=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,l,u)}

    ${kn(_t(t))}

    ${s.mainStart(Rr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",Sn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Rr/4)}})}},Nf=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Jc(e):e.compute(uu(e.inputs))}}),du,pu,Df,Rf,C_=se(()=>{Se(),Be(),st(),Me(),du=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},pu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=F.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(i,1,...a);let o=r[i],l=e[0].dataType===9?4:1,u=Math.ceil(F.size(s)/l),p=[{type:12,data:u},{type:6,data:o},{type:12,data:i},...ye(e[0].dims,e[1].dims,s)],f=h=>{let m=X("data",e[0].dataType,e[0].dims.length,l),_=X("inputIndices",e[1].dataType,e[1].dims.length),$=ge("output",e[0].dataType,s.length,l),v=b=>{let S=a.length,k=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let T=0;T<S;T++)k+=`${S>1?`indicesIndices${b}[${T}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${T}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let T=0,I=0;T<n;T++)T===i?(k+=`${n>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = u32(idx${b});`,I+=S):(k+=`${n>1?`dataIndices${b}[${T}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${I}]`:`outputIndices${b}`};`,I++);return k},y;if(e[0].dataType===9){let b=(S,k,T="")=>`
          let outputIndices${k} = ${$.offsetToIndices(`outputOffset + ${k}u`)};
          ${v(k)};
          let offset${k} = ${m.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${T}(${m.getByOffset(`index${k}`)}[component${k}]);
        `;y=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else y=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${m.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,$)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${y}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},Df=e=>Ge({axis:e.axis}),Rf=(e,t)=>{let r=e.inputs;du(r),e.compute(pu(e.inputs,t))}}),cu,Mf,Pf,A_=se(()=>{Se(),Be(),Me(),cu=(e,t,r,a,n,i,s,o,l)=>{let u=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],p=[i];u.push(...ye(t.dims,p));let f=h=>{let m=X("indices_data",t.dataType,t.dims.length),_=ge("input_slice_offsets_data",12,1,1),$=[m,_],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(v).declareVariables(...$)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Mf=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,s=i[i.length-1],o=F.sizeToDimension(i,i.length-1),l=F.sizeFromDimension(a,t.batchDims+s),u=F.sizeToDimension(a,t.batchDims),p=F.sizeFromDimension(a,t.batchDims),f=o/u,h=new Array(s),m=l;for(let k=0;k<s;++k)h[s-1-k]=m,m*=a[t.batchDims+s-1-k];let _=cu(e,r[1],h,t.batchDims,a,o,f,p,s),$=t.batchDims+s;if($>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=i.slice(0,-1).concat(a.slice($)),y=F.size(v),b=[{type:12,data:y},{type:12,data:l},...ye(r[0].dims,_.dims,v)],S=k=>{let T=X("data",r[0].dataType,r[0].dims.length),I=X("slice_offsets",12,_.dims.length),A=ge("output",r[0].dataType,v.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,I,A)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],_]})},Pf=e=>({batchDims:e.batch_dims,cacheKey:""})}),fu,hu,Uf,Vf,O_=se(()=>{Se(),Be(),st(),Me(),fu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/a)===i.dims[l]:o===i.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((o,l)=>o===i.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hu=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=F.normalizeAxis(t.gatherAxis,n),s=F.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(i,1,...a);let l=F.size(o),u=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...ye(...e.map((m,_)=>m.dims),o)],h=m=>{let _=X("data",e[0].dataType,e[0].dims.length),$=X("inputIndices",e[1].dataType,e[1].dims.length),v=X("scales",e[2].dataType,e[2].dims.length),y=e.length>3?X("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=ge("output",u,o.length),S=[_,$,v];y&&S.push(y);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(k).declareVariables(...S,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${v.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${v.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${v.getByIndices("scale_indices")};
        ${y?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${y.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${y.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${_t(u)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},Uf=(e,t)=>{let r=e.inputs;fu(r,t),e.compute(hu(e.inputs,t))},Vf=e=>Ge({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),mu,gu,Wf,qf,B_=se(()=>{Se(),Be(),st(),Me(),mu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,s=e[1].dataType,o=F.normalizeAxis(t.axis,n),l=r[o],u=i.slice(0),p=F.size(u),f=X("input",a,n),h=X("indicesInput",s,i.length),m=ge("output",a,u.length),_=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return _.push(...ye(r,i,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:_}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,m)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Wf=e=>Ge({axis:e.axis}),qf=(e,t)=>{let r=e.inputs;mu(r),e.compute(gu(e.inputs,t))}}),_u,bu,Lf,Hf,N_=se(()=>{Se(),Be(),Me(),_u=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,s]=Vp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),o=[n,i];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(i/l),p=Math.ceil(n/l),f=!0,h=F.size(o),m=[{type:12,data:f?u:h},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ye(e[2].dims)),_.push("rank")),m.push(...ye(o));let $=y=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=X("a",e[0].dataType,e[0].dims),T=X("b",e[1].dataType,e[1].dims),I=k.type.value,A=null,O=[k,T];e.length===3&&(A=X("c",e[2].dataType,e[2].dims.length),O.push(A));let C=ge("output",e[0].dataType,o.length);O.push(C);let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${y.registerUniforms(W).declareVariables(...O)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${I}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=y=>{let b=X("a",e[0].dataType,e[0].dims),S=X("b",e[1].dataType,e[1].dims),k=null,T=[b,S];e.length===3&&(k=X("c",e[2].dataType,e[2].dims.length),T.push(k));let I=ge("output",e[0].dataType,o.length);T.push(I);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],O="",C="";t.transA&&t.transB?(C=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(C=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(C=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(C=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,O="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let W=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${y.registerUniforms(A).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${y.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${C}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${O}
      }
      workgroupBarrier();
    }

    ${W}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:u*p},programUniforms:m}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:$}},Lf=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Hf=(e,t)=>{_u(e.inputs),e.compute(bu(e.inputs,t))}}),qt,Qt,fr,hr,yu,$u,wu,vu,xu,ku,Su,Tu,Gf,Ff,D_=se(()=>{Se(),Be(),st(),Me(),[qt,Qt,fr,hr]=[0,1,2,3],yu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},$u=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,wu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,vu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,ku=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${qt}] = batch;
     indices[${Qt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${fr}] = u32(r);
            indices[${hr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${fr}] = u32(clamp(r, 0, H - 1));
          indices[${hr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${fr}] = gs_reflect(r, border[1], border[3]);
          indices[${hr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Su=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${qt}], indices[${Qt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${qt}], indices[${Qt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${qt}], indices[${Qt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${qt}], indices[${Qt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${qt}], indices[${Qt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${qt}], indices[${Qt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Tu=(e,t)=>{let r=X("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=X("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[qt,Qt,fr,hr]=[0,3,1,2]);let s=ge("output",e[0].dataType,i.length),o=r.type.value,l=F.size(i),u=[{type:12,data:l},...ye(e[0].dims,a,i)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${$u}
  ${wu(o)}
  ${vu(t)}
  ${xu(t)}
  ${ku(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${fr}]);
      let W_in = i32(uniforms.x_shape[${hr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${qt}], indices[${fr}], indices[${hr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Su(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=F.size(i);return{outputs:[{dims:i,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:u}},getShaderSource:p}},Gf=(e,t)=>{yu(e.inputs),e.compute(Tu(e.inputs,t))},Ff=e=>Ge({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),yt,Iu,jf,Ki,Eu,pa,Kf,Zf=se(()=>{Se(),Be(),st(),Gn(),Kn(),Me(),dr(),yt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Iu=(e,t)=>{let r=e[0],a=yt(e,1),n=yt(e,2),i=yt(e,3),s=yt(e,4),o=yt(e,5),l=yt(e,6),u=yt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,$=0,v=Math.floor(h/t.numHeads);if(l&&u&&F.size(l.dims)&&F.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],$=l.dims[2]}else if(l&&F.size(l.dims)||u&&F.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(a&&F.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');y=2,m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,m=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}if(i&&F.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+m,S=0;if(s&&F.size(s.dims)>0){S=8;let A=s.dims;throw A.length===1?A[0]===p?S=1:A[0]===3*p+2&&(S=3):A.length===2&&A[0]===p&&A[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,T=h;if(n&&F.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(m!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(m!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let I=!1;if(s&&F.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&F.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:I,passPastInKv:k,qkvFormat:y}},jf=e=>Ge({...e}),Ki=Ge({perm:[0,2,1,3]}),Eu=(e,t,r,a,n,i,s)=>{let o=[a,n,i],l=F.size(o),u=[{type:12,data:l},{type:12,data:s},{type:12,data:i}],p=f=>{let h=ge("qkv_with_bias",t.dataType,o),m=X("qkv",t.dataType,o),_=X("bias",r.dataType,o),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(m,_,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},pa=(e,t,r,a,n,i,s,o)=>{let l=i;if(s&&F.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Eu(e,i,s,t,a,r*n,o),l=l.reshape([t,a,r,n]),r===1||a===1?l:e.compute(St(l,Ki.perm),{inputs:[l],outputs:[-1]})[0]}else return i.dims.length===3&&(l=i.reshape([t,a,r,n])),r===1||a===1?l:e.compute(St(l,Ki.perm),{inputs:[l],outputs:[-1]})[0]},Kf=(e,t)=>{let r=Iu(e.inputs,t),a=e.inputs[0],n=yt(e.inputs,1),i=yt(e.inputs,2),s=yt(e.inputs,3),o=yt(e.inputs,4),l=yt(e.inputs,5),u=yt(e.inputs,6),p=yt(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&i&&n.dims.length===4&&i.dims.length===4,h=pa(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(f)return ha(e,h,n,i,o,void 0,u,p,l,r);if(!n||!i)throw new Error("key and value must be provided");let m=pa(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=pa(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);ha(e,h,m,_,o,void 0,u,p,l,r)}}),zu,Cu,Au,Ou,Cn,Qf,Xf,Yf=se(()=>{Se(),Be(),st(),Me(),zu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Cu=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),Ge({numOutputs:a,axis:t.axis,splitSizes:r})},Au=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${_e("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ou=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Cn=(e,t)=>{let r=e[0].dims,a=F.size(r),n=e[0].dataType,i=F.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=X("input",n,r.length),l=new Array(t.numOutputs),u=[],p=[],f=0,h=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let $=r.slice();$[i]=t.splitSizes[_],p.push($),s[_]=ge(`output${_}`,n,$.length),u.push({dims:p[_],dataType:e[0].dataType})}h.push({type:12,data:l},...ye(r,...p));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${Au(l.length)}
  ${Ou(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${_e("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},Qf=(e,t)=>{zu(e.inputs);let r=e.inputs.length===1?t:Cu(e.inputs,t);e.compute(Cn(e.inputs,r),{inputs:[0]})},Xf=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ge({axis:t,numOutputs:a,splitSizes:r})}}),Bu,Za,Jf,eh=se(()=>{Se(),Be(),st(),Me(),Bu=(e,t)=>{let[r,a,n,i]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!F.areEqual(a.dims,[])&&!F.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!F.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],u=r.dims[r.dims.length-2],p=n.dims[0],f=F.sizeFromDimension(r.dims,1)/u,h=o===0?n.dims[1]*2:f/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(u!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(u>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Za=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,s=e[0].dims[0],o=F.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],u=o/l,p=e[2].dims[1],f=n===0?p*2:u/a,h=new Array(s,l,u/f,f-p),m=F.computeStrides(h),_=[{type:1,data:i},{type:12,data:h},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,u,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...ye(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=v=>{let y=X("input",e[0].dataType,e[0].dims.length),b=X("position_ids",e[1].dataType,e[1].dims.length),S=X("cos_cache",e[2].dataType,e[2].dims.length),k=X("sin_cache",e[3].dataType,e[3].dims.length),T=ge("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${v.declareVariables(y,b,S,k,T)}

        ${v.mainStart(Rr)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",ge("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${y.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${y.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${y.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${y.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",y.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ge({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(h)/Rr)},programUniforms:_})}},Jf=(e,t)=>{Bu(e.inputs,t),e.compute(Za(e.inputs,t))}}),Nu,Du,Zi,Ru,th,R_=se(()=>{st(),Se(),Kn(),Zf(),Yf(),dr(),eh(),Me(),Nu=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],u=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=u,h=0,m=!a||a.dims.length===0,_=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=_*t.numHeads);let $=i&&i.dims.length!==0,v=s&&s.dims.length!==0;if($&&i.dims.length===4&&i.dims[0]===l&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if($&&v){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=i.dims[2]}else if($||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let b=0,S=!1,k=t.kvNumHeads?_*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:u,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:y}},Du=Ge({perm:[0,2,1,3]}),Zi=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(St(a,Du.perm),{inputs:[a],outputs:[-1]})[0]),a},Ru=(e,t,r,a)=>{let n=7,i=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],u=p=>{let f=X("seq_lens",r.dataType,r.dims),h=X("total_seq_lens",a.dataType,a.dims),m=ge("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(f,h,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},th=(e,t)=>{var k;let r=Nu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,u=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Ge({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,m,_]=!n&&!i?e.compute(Cn([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],$,v;if(t.doRotary){let T=e.compute(Ru(r.batchSize,r.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],I=e.inputs[7],A=e.inputs[8],O=Ge({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[h,T,I,A],W=[-1];$=e.compute(Za(C,O),{inputs:C,outputs:W})[0],C.splice(0,1,m);let ae=Ge({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});v=e.compute(Za(C,ae),{inputs:C,outputs:W})[0]}let y=pa(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:h,void 0,0),b=Zi(e,t.doRotary?v:m,r),S=Zi(e,_,r);ha(e,y,b,S,void 0,void 0,s,o,void 0,r,l,u)}}),Qi,Mu,Pu,rh,M_=se(()=>{Se(),Be(),dr(),Me(),Qi=(e,t,r,a,n,i,s,o)=>{let l=it(i),u=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=n*s,h=64;f===1&&(h=256);let m=[n,s,i/l],_=[n,s,2],$=["rank","type","type"],v=[];v.push(...ye(m,_));let y=b=>{let S=X("x",t.dataType,3,l),k=X("scale",r.dataType,r.dims),T=X("bias",a.dataType,a.dims),I=ge("output",1,3,2),A=[S,k,T,I];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${b.declareVariables(...A)}
  ${b.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ur("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ur("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:v}),getShaderSource:y},{inputs:[t,r,a],outputs:[-1]})[0]},Mu=(e,t,r)=>{let a=t[0].dims,n=a,i=2,s=a[0],o=a[1],l=F.sizeFromDimension(a,i),u=it(l),p=F.size(n)/u,f=Qi(e,t[0],t[1],t[2],s,l,o,r.epsilon),h=[s,o,l/u],m=[s,o],_=["type","none"],$=v=>{let y=X("x",t[0].dataType,h.length,u),b=X("scale_shift",1,m.length,2),S=ge("output",t[0].dataType,h.length,u),k=[y,b,S];return`
  ${v.registerUniform("output_size","u32").declareVariables(...k)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${y.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ye(h,m,h)]}),getShaderSource:$},{inputs:[t[0],f]})},Pu=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],s=a[a.length-1],o=F.sizeFromDimension(a,1)/s,l=it(s),u=F.size(n)/l,p=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,m=[0,a.length-1];for(let y=0;y<a.length-2;y++)h=h||a[y+1]!==1,m.push(y+1);h=h&&a[a.length-1]!==1;let _=h?e.compute(St(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(y,b)=>a[m[b]])),$=Qi(e,_,t[1],t[2],i,o,s,r.epsilon),v=y=>{let b=ct(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=A=>{let O=A===0?"x":"y",C=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${C}(scale.${O}))`;case 2:return`vec2<${b}>(${C}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${b}>(${C}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=X("input",t[0].dataType,t[0].dims,l),I=ge("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${y.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:v},{inputs:[t[0],$]})},rh=(e,t)=>{t.format==="NHWC"?Pu(e,e.inputs,t):Mu(e,e.inputs,t)}}),Uu,Vu,ah,P_=se(()=>{Se(),Be(),Me(),Uu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Vu=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],s=!a&&e[2],o=n,l=F.normalizeAxis(t.axis,n.length),u=F.sizeToDimension(n,l),p=F.sizeFromDimension(n,l),f=F.size(i.dims),h=s?F.size(s.dims):0;if(f!==p||s&&h!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let m=[];for(let T=0;T<n.length;++T)T<l?m.push(n[T]):m.push(1);let _=it(p),$=["type","type"],v=[{type:12,data:u},{type:1,data:p},{type:12,data:Math.floor(p/_)},{type:1,data:t.epsilon}];s&&$.push("type");let y=r>1,b=r>2,S=T=>{let I=ct(e[0].dataType),A=[X("x",e[0].dataType,e[0].dims,_),X("scale",i.dataType,i.dims,_)];s&&A.push(X("bias",s.dataType,s.dims,_)),A.push(ge("output",e[0].dataType,o,_)),y&&A.push(ge("mean_data_output",1,m)),b&&A.push(ge("inv_std_output",1,m));let O=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(O).declareVariables(...A)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${wn("f32",_)};
    var mean_square_vector = ${wn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Br(I,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ur("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ur("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Br(I,_,"x[j + offset]")};
      let f32scale = ${Br(I,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Br(I,_,"bias[j]")}`:""}
      );
    }

    ${y?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:o,dataType:e[0].dataType}];return y&&k.push({dims:m,dataType:1}),b&&k.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:$},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:v}),getShaderSource:S}},ah=(e,t)=>{Uu(e.inputs),e.compute(Vu(e.inputs,t,e.outputCount))}}),Wu,ih,U_=se(()=>{Be(),Jn(),es(),Wu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},ih=e=>{Wu(e.inputs);let t=Dr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Yn(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=F.size(e.inputs[0].dims.slice(0,-2)),s=F.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,i,a]),l=e.inputs[1].reshape([1,a,r]),u=[1,i,r],p=[o,l];e.compute(Ka(p,{activation:""},t,u),{inputs:p})}else e.compute(Ka(e.inputs,{activation:""},t))}}}),qu,Lu,Hu,nh,sh,V_=se(()=>{Se(),Be(),st(),Me(),qu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!F.areEqual(s.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(F.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,u=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(F.size(l)!==u)throw new Error("zeroPoints input size error.")}},Lu=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,o=r.slice(0,a-2),l=F.size(o),u=e[1].dims[2]/4,p=e[0].dataType,f=it(t.k),h=it(u),m=it(s),_=o.concat([n,s]),$=n>1&&s/m%2===0?2:1,v=F.size(_)/m/$,y=64,b=[],S=[l,n,i/f],k=F.convertShape(e[1].dims).slice();k.splice(-1,1,u/h),b.push(...ye(S)),b.push(...ye(k)),b.push(...ye(e[2].dims)),e.length===4&&b.push(...ye(F.convertShape(e[3].dims)));let T=[l,n,s/m];b.push(...ye(T));let I=A=>{let O=S.length,C=X("a",e[0].dataType,O,f),W=X("b",12,k.length,h),ae=X("scales",e[2].dataType,e[2].dims.length),J=[C,W,ae],Q=e.length===4?X("zero_points",12,e[3].dims.length):void 0;Q&&J.push(Q);let G=T.length,M=ge("output",e[0].dataType,G,m),R=ct(e[0].dataType),Y=(()=>{switch(f){case 1:return`array<${R}, 8>`;case 2:return`mat4x2<${R}>`;case 4:return`mat2x4<${R}>`;default:throw new Error(`${f}-component is not supported.`)}})(),K=()=>{let U=`
          // reuse a data
            var input_offset = ${C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${C.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let ee=0;ee<m*$;ee++)U+=`
            b_value = ${h===1?`b${ee}_data`:`b${ee}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(H,V)=>`${R}(b_value_lower[${V}]), ${R}(b_value_upper[${V}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Y}(${Array.from({length:8},(H,V)=>`(b_quantized_values[${V}] - ${Q?`zero_point${ee}`:"zero_point"}) * scale${ee}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${Q?`zero_point${ee}`:"zero_point"}`).join(",")})) * scale${ee};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(ee/m)}]${m>1?`[${ee%m}]`:""} += ${Array.from({length:8/f},(H,V)=>`${f===1?`a_data[${V}] * b_dequantized_values[${V}]`:`dot(a_data[${V}], b_dequantized_values[${V}])`}`).join(" + ")};
          `;return U},ie=()=>{let U=`
            var col_index = col * ${m};
            ${Q?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${R}(8);`}
            `;for(let ee=0;ee<m*$;ee++)U+=`
            let scale${ee} = ${ae.getByOffset("col_index * nBlocksPerCol + block")};
            ${Q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ee} = ${R}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},le=()=>{let U=`col_index = col * ${m};`;for(let ee=0;ee<m*$;ee++)U+=`
            let b${ee}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,U};return`
        var<workgroup> workgroup_shared: array<${M.type.value}, ${$*y}>;
        ${A.declareVariables(...J,M)}
        ${A.mainStart([y,1,1])}
          let output_indices = ${M.offsetToIndices(`(global_idx / ${y}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${y}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${ie()}
            for (var word: u32 = 0; word < ${u}; word += ${h}) {
              ${le()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${K()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${M.type.value} = ${M.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${y}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${M.setByIndices(`${M.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${m};${$};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:I}},Hu=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,o=r.slice(0,a-2),l=F.size(o),u=e[1].dims[2]/4,p=e[0].dataType,f=it(t.k),h=it(u),m=o.concat([n,s]),_=128,$=s%8===0?8:s%4===0?4:1,v=_/$,y=v*h*8,b=y/f,S=y/t.blockSize,k=F.size(m)/$,T=[],I=[l,n,i/f],A=F.convertShape(e[1].dims).slice();A.splice(-1,1,u/h),T.push(...ye(I)),T.push(...ye(A)),T.push(...ye(e[2].dims)),e.length===4&&T.push(...ye(F.convertShape(e[3].dims)));let O=[l,n,s];T.push(...ye(O));let C=W=>{let ae=I.length,J=X("a",e[0].dataType,ae,f),Q=X("b",12,A.length,h),G=X("scales",e[2].dataType,e[2].dims.length),M=[J,Q,G],R=e.length===4?X("zero_points",12,e[3].dims.length):void 0;R&&M.push(R);let Y=O.length,K=ge("output",e[0].dataType,Y),ie=ct(e[0].dataType),le=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${J.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${K.type.value}, ${v}>, ${$}>;
        ${W.declareVariables(...M,K)}
        ${W.mainStart([v,$,1])}
          let output_indices = ${K.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${J.getByIndices(`${J.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${J.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${R?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${R.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ie}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ie}(8);`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Q.getByIndices(`${Q.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${le()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ie}>(${Array.from({length:4},(U,ee)=>`${ie}(b_value_lower[${ee}]), ${ie}(b_value_upper[${ee}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ie}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,ee)=>`${`dot(a_data${ee}, b_dequantized_values[${ee}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${K.setByIndices(`${K.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${v};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:k},programUniforms:T}),getShaderSource:C}},nh=(e,t)=>{qu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Hu(e.inputs,t)):e.compute(Lu(e.inputs,t))},sh=e=>Ge(e)}),Gu,Fu,ju,Ku,Zu,Qu,Xu,Yu,oh,W_=se(()=>{Se(),Be(),Me(),Gu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Fu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${_e("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${_e("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${_e("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},ju=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${_e("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${_e("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${_e("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${_e("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ku=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${_e("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${_e("uniforms.x_shape",n,t)})) {
                  k = i32(${_e("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${_e("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Zu=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${_e("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${_e("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${_e("uniforms.x_shape",n,t)})) {
                  k -= i32(${_e("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${_e("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Qu=(e,t,r)=>{switch(r.mode){case 0:return Fu(e,t,r.pads.length);case 1:return ju(e,t,r.pads.length);case 2:return Ku(e,t,r.pads.length);case 3:return Zu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Xu=(e,t)=>{let r=F.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=F.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...ye(e[0].dims,r));let o=["rank"],l=u=>{let p=ge("output",e[0].dataType,r.length),f=X("x",e[0].dataType,a.length),h=f.type.value,m=Qu(p,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?h:"f32"}),`
            ${u.registerUniforms(_).declareVariables(f,p)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(r)/64)},programUniforms:i}),getShaderSource:l}},Yu=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)i[Number(o[l])]=Number(r[l]),i[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>i[Number(l)]=Number(o));let s=[];return i.forEach(o=>s.push(o)),{mode:t.mode,value:a,pads:s}}else return t},oh=(e,t)=>{Gu(e.inputs);let r=Yu(e.inputs,t);e.compute(Xu(e.inputs,r),{inputs:[0]})}}),ia,Xi,Yi,Ji,en,Ju,ed,tn,rn,lh,uh,an,dh,ph,nn,ch,fh,hh,mh,q_=se(()=>{Pt(),Se(),Be(),Me(),ia=e=>{if(et.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Xi=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=i?t.dilations.slice():[],u=t.pads.slice();Fa.adjustPoolAttributes(r,n,s,o,l,u);let p=Fa.computePoolOutputShape(r,n,o,l,s,u,t.autoPad),f=Object.assign({},t);i?Object.assign(f,{kernelShape:s,strides:o,pads:u,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:u,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[f,a?h:p]},Yi=(e,t)=>{let r=t.format==="NHWC",a=F.size(e),n=F.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],u=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(u+p);i.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];h=!!($+v),i.push({type:12,data:m},{type:12,data:_},{type:12,data:$},{type:12,data:v}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=F.computeStrides(t.kernelShape);i.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((u,p)=>u+p);return[i,s,!!l,!1,!1]}},Ji=(e,t,r,a,n,i,s,o,l,u,p,f)=>{let h=n.format==="NHWC",m=t.type.value,_=ge("output",t.type.tensor,a);if(n.kernelShape.length<=2){let $="",v="",y="",b=r-(h?2:1);if(p?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let S=r-(h?3:2);f?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,y=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${v}
              ${$}
              ${y}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=n.kernelShape.length,v=n.pads.length,y="";return u?y=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:y=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${_e("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${_e("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${_e("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${_e("uniforms.pads","j - 2u",v)};
                  ${y}
              }
              ${s}

              output[global_idx] = value;
            }`}},en=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ju=e=>`${en(e)};${e.countIncludePad}`,ed=e=>`${en(e)};${e.storageOrder};${e.dilations}`,tn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),rn=(e,t,r,a)=>{let[n,i]=Xi(t,a,r),s=X("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",u="";n.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,h,m,_]=Yi(i,n);p.push(...ye(t.dims,i));let $=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${h};${m};${_}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(i)/64)},programUniforms:p}),getShaderSource:v=>Ji(v,s,t.dims.length,i.length,n,l,u,0,f,h,m,_)}},lh=e=>{let t=e.count_include_pad!==0,r=tn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Ju(a)}},uh=(e,t)=>{ia(e.inputs),e.compute(rn("AveragePool",e.inputs[0],!1,t))},an={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},dh=e=>{let t=e.format;return{format:t,...an,cacheKey:t}},ph=(e,t)=>{ia(e.inputs),e.compute(rn("GlobalAveragePool",e.inputs[0],!0,t))},nn=(e,t,r,a)=>{let[n,i]=Xi(t,a,r),s=`
      value = max(x_val, value);
    `,o="",l=X("x",t.dataType,t.dims.length),u=["rank"],[p,f,h,m,_]=Yi(i,n);return p.push(...ye(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${h};${m};${_}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(i)/64)},programUniforms:p}),getShaderSource:$=>Ji($,l,t.dims.length,i.length,n,s,o,t.dataType===10?-65504:-1e5,f,h,m,_)}},ch=(e,t)=>{ia(e.inputs),e.compute(nn("MaxPool",e.inputs[0],!1,t))},fh=e=>{let t=e.storage_order,r=e.dilations,a=tn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:ed(n)}},hh=e=>{let t=e.format;return{format:t,...an,cacheKey:t}},mh=(e,t)=>{ia(e.inputs),e.compute(nn("GlobalMaxPool",e.inputs[0],!0,t))}}),td,rd,gh,_h,L_=se(()=>{Se(),Be(),st(),Me(),td=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},rd=(e,t)=>{let r=F.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,s=e[1].dataType,o=F.size(i),l=a===3||a===2,u=l?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(F.size(f.dims)/4)]:f.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,_=m===!1&&p.length===1,$=it(o),v=m&&(!l||$===4),y=v?$:1,b=v&&!l?$:1,S=X("input",l?12:a,u.length,b),k=X("scale",s,p.length),T=f?X("zero_point",l?12:a,h.length):void 0,I=ge("output",s,i.length,y),A=[S,k];T&&A.push(T);let O=[u,p];f&&O.push(h);let C=[{type:12,data:o/y},{type:12,data:r},{type:12,data:t.blockSize},...ye(...O,i)],W=ae=>{let J=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ae.registerUniforms(J).declareVariables(...A,I)}
      ${ae.mainStart()}
          ${ae.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${y===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?m?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:_?l?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/y/64),y:1,z:1},programUniforms:C})}},gh=(e,t)=>{td(e.inputs,t),e.compute(rd(e.inputs,t))},_h=e=>Ge({axis:e.axis,blockSize:e.blockSize})}),ad,id,bh,H_=se(()=>{Pt(),Se(),Me(),ad=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},id=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],s=n,o=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...ye(i)],l=u=>{let p=ge("output",a,i.length),f=p.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${u.registerUniforms(h).declareVariables(p)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},bh=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),et.webgpu.validateInputContent&&ad(t,r,a),e.compute(id(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),nd,sn,on,sd,yh,$h,G_=se(()=>{Se(),Be(),st(),Me(),nd=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},sn=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,on=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${nd(e.reduction,"output[data_offset + i]","value",t)}
      }`,sd=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,s=Math.ceil(F.size(a)/i),o=a[a.length-1],l=F.sizeFromDimension(r,o),u=F.sizeFromDimension(a,0)/o,p=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...ye(e[1].dims,e[2].dims,n)],f=h=>{let m=X("indices",e[1].dataType,e[1].dims.length),_=X("updates",e[2].dataType,e[2].dims.length,i),$=t.reduction!=="none"&&t.reduction!==""?jp("output",e[0].dataType,n.length):ge("output",e[0].dataType,n.length,i);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,$)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${u}; i = i + 1) {
      for (var j = i + 1; j < ${u}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${u}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${sn(r.length,!1)}
      }
      ${on(t,$.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${sn(r.length,!0)}
  }
  ${on(t,$.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f}},yh=e=>Ge({reduction:e.reduction}),$h=(e,t)=>{e.compute(sd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),od,ld,ud,ln,dd,pd,cd,fd,hd,md,gd,_d,un,bd,yd,$d,wd,vd,wh,vh,F_=se(()=>{Se(),Be(),st(),Me(),od=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ld=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},ud=(e,t,r,a,n,i)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],u=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>i.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>a.push(p)),a.length!==0&&a.length!==u&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");od(a,t),t.axes.length>0&&ld(a,t.axes,u).forEach((p,f)=>a[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==u&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},ln=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,dd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ln("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ln("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",pd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",cd=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,s)=>{a[i]=n[s],a[s+r]=n[t.length+s]}),a):n},fd=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,s)=>n[i]=r[s])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,s)=>Math.round(i*t[s]))}return n},hd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,s)=>n[s]=Math.round(i*t[s]))),n},md=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${_e("uniforms.scales","i",a)};
        var roi_low = ${_e("uniforms.roi","i",n)};
        var roi_hi = ${_e("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${_e("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${_e("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,gd=(e,t,r,a,n,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${_e("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${_e("uniforms.roi","i",i)};
          var roi_hi = ${_e("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${_e("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${_e("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,_d=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${_e("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,un=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",bd=(e,t,r,a,n)=>{let[i,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${un(e,l,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${s}];
      var col:${u} = originalIndices[${o}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},yd=(e,t,r,a,n,i,s,o,l,u)=>{let p=r.length===2,[f,h]=p?[0,1]:[2,3],m=e.type.value,_=$=>{let v=$===f?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",$)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[$]},
        ${a[$]}, ${r[$]}, ${i[$]}, ${i[$]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[$]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${m} = originalIdx + ${m}(i);
          if (${v} < 0 || ${v} >= ${r[$]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${v} = max(0, min(${v}, ${r[$]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",$,`u32(${v})`)};
          data[i + 1] = ${$===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(h)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},$d=(e,t,r,a,n)=>{let[i,s,o,l,u]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${un(e,u,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},wd=(e,t,r,a,n,i)=>{let s=e.dims,o=cd(i,t.axes,s.length),l=fd(s,a,n,t.axes),u=a.slice();a.length===0&&(u=s.map((b,S)=>b===0?1:l[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=hd(s,u,t)));let p=ge("output",e.dataType,l.length),f=X("input",e.dataType,s.length),h=F.size(l),m=s.length===l.length&&s.every((b,S)=>b===l[S]),_=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,v=f.type.value,y=b=>`
      ${m?"":`
      ${dd(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${_d(f,s)};
              ${pd(t.nearestMode,r,v)};
              ${gd(f,p,s,l,u.length,o.length,_)};
              `;case"linear":return`
              ${md(p,s,l,u.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${bd(f,p,s,_,$)}`;if(s.length===3||s.length===5)return`${$d(f,p,s,_,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${yd(f,p,s,l,u,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${u.length>0?t.mode==="cubic"?u:u.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:u},{type:1,data:o},...ye(s,l)]})}},vd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},wh=(e,t)=>{let r=[],a=[],n=[],i=vd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ud(e.inputs,t,i,r,a,n),e.compute(wd(e.inputs[0],t,i,r,a,n),{inputs:[0]})},vh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,u=e.nearestMode===""?"simple":e.nearestMode;return Ge({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),xd,kd,xh,j_=se(()=>{Se(),Be(),Me(),xd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},kd=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,s=F.size(i),o=i,l=s,u=i.slice(-1)[0],p=a?i.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,m=a&&r>1,_=a&&r>2,$=r>3,v=64,y=it(u),b=[{type:12,data:l},{type:12,data:y},{type:12,data:u},{type:1,data:t.epsilon}],S=T=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[X("x",e[0].dataType,e[0].dims,y),X("skip",e[1].dataType,e[1].dims,y),X("gamma",e[2].dataType,e[2].dims,y)];f&&A.push(X("beta",e[3].dataType,e[3].dims,y)),h&&A.push(X("bias",e[4].dataType,e[4].dims,y)),A.push(ge("output",e[0].dataType,o,y)),m&&A.push(ge("mean_output",1,p)),_&&A.push(ge("inv_std_output",1,p)),$&&A.push(ge("input_skip_bias_sum",e[0].dataType,o,y));let O=ct(e[0].dataType),C=ct(1,y);return`

      ${T.registerUniforms(I).declareVariables(...A)}
      var<workgroup> sum_shared : array<${C}, ${v}>;
      var<workgroup> sum_squared_shared : array<${C}, ${v}>;

      ${T.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":O+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Br(O,y,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ur("sum",y)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ur("square_sum",y)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${O}(mean)`}) *
            ${O}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:o,dataType:e[0].dataType}];return r>1&&k.push({dims:p,dataType:1}),r>2&&k.push({dims:p,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${y};${m};${_};${$}`,inputDependencies:e.map((T,I)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:b})}},xh=(e,t)=>{xd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(kd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Sd,na,Td,dn,Id,Ed,kh,Sh,K_=se(()=>{Se(),Be(),st(),Me(),Sd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},na=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Td=(e,t)=>{if(e.length>1){let r=na(e,1),a=na(e,2),n=na(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Ge({starts:r,ends:a,axes:n})}else return t},dn=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},Id=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${_e("uniforms.input_shape","i",r.length)};
            let steps_i = ${_e("uniforms.steps","i",r.length)};
            let signs_i = ${_e("uniforms.signs","i",r.length)};
            let starts_i = ${_e("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ed=(e,t)=>{let r=e[0].dims,a=F.size(r),n=t.axes.length>0?F.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=na(e,4);i.forEach(y=>y!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let s=t.starts.map((y,b)=>dn(y,b,r,n,i)),o=t.ends.map((y,b)=>dn(y,b,r,n,i));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let y=0;y<r.length;++y)n.includes(y)||(s.splice(y,0,0),o.splice(y,0,r[y]),i.splice(y,0,1));let l=i.map(y=>Math.sign(y));i.forEach((y,b,S)=>{if(y<0){let k=(o[b]-s[b])/y,T=s[b],I=T+k*i[b];s[b]=I,o[b]=T,S[b]=-y}});let u=r.slice(0);n.forEach((y,b)=>{u[y]=Math.ceil((o[y]-s[y])/i[y])});let p={dims:u,dataType:e[0].dataType},f=ge("output",e[0].dataType,u.length),h=X("input",e[0].dataType,e[0].dims.length),m=F.size(u),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:i.length}],$=[{type:12,data:m},{type:12,data:s},{type:6,data:l},{type:12,data:i},...ye(e[0].dims,u)],v=y=>`
      ${y.registerUniforms(_).declareVariables(h,f)}
        ${Id(h,f,r)}
        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:$})}},kh=(e,t)=>{Sd(e.inputs,t);let r=Td(e.inputs,t);e.compute(Ed(e.inputs,r),{inputs:[0]})},Sh=e=>{let t=e.starts,r=e.ends,a=e.axes;return Ge({starts:t,ends:r,axes:a})}}),zd,Cd,Th,Ih,Z_=se(()=>{Se(),Be(),st(),dr(),Me(),zd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Cd=(e,t)=>{let r=e.inputs[0],a=r.dims,n=F.size(a),i=a.length,s=F.normalizeAxis(t.axis,i),o=s<a.length-1,l,u=[];o?(u=Array.from({length:i},(A,O)=>O),u[s]=i-1,u[i-1]=s,l=e.compute(St(r,u),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[i-1],h=n/f,m=it(f),_=f/m,$=64;h===1&&($=256);let v=(A,O)=>O===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:O===2?`max(${A}.x, ${A}.y)`:O===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,y=X("x",l.dataType,l.dims,m),b=ge("result",l.dataType,l.dims,m),S=y.type.value,k=ct(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=A=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(y,b)}
      ${A.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${v("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${ur("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${m};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:_}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(St(I,u),{inputs:[I]})},Th=(e,t)=>{zd(e.inputs),Cd(e,t)},Ih=e=>Ge({axis:e.axis})}),pn,Ad,Od,Bd,Eh,Q_=se(()=>{Se(),Be(),Me(),pn=e=>Array.from(e.getBigInt64Array(),Number),Ad=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(pn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Od=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Bd=(e,t)=>{let r=e[0].dims,a=t??pn(e[1]),n=Od(r,a),i=F.size(n),s=e[0].dataType,o=X("input",s,r.length),l=ge("output",s,n.length),u=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ye(e[0].dims,n)]}),getShaderSource:u}},Eh=e=>{Ad(e.inputs),e.compute(Bd(e.inputs),{inputs:[0]})}}),Nd,Dd,zh,X_=se(()=>{Se(),Be(),Me(),Nd=(e,t,r,a,n)=>{let i=ge("output_data",n,r.length,4),s=X("a_data",t[1].dataType,t[1].dims.length,4),o=X("b_data",t[2].dataType,t[2].dims.length,4),l=X("c_data",t[0].dataType,t[0].dims.length,4),u,p=(f,h,m)=>`select(${h}, ${f}, ${m})`;if(!a)u=i.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,m,_="")=>{let $=`a_data[index_a${m}][component_a${m}]`,v=`b_data[index_b${m}][component_b${m}]`,y=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${i.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,i)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,i)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,i)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${h}[${m}] = ${_}(${p($,v,y)});
          `};n===9?u=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},Dd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(F.areEqual(t,r)&&F.areEqual(r,a)),s=t,o=F.size(t);if(i){let u=Dr.calcShape(Dr.calcShape(t,r,!1),a,!1);if(!u)throw new Error("Can't perform where op on the given tensors");s=u,o=F.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>Nd(u,e,s,i,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ye(a,t,r,s)]})}},zh=e=>{e.compute(Dd(e.inputs))}}),Ch,Y_=se(()=>{c_(),Kn(),f_(),h_(),m_(),g_(),__(),v_(),k_(),S_(),T_(),I_(),E_(),z_(),C_(),A_(),O_(),B_(),N_(),D_(),R_(),M_(),P_(),U_(),V_(),Zf(),W_(),q_(),L_(),H_(),G_(),jn(),F_(),eh(),j_(),K_(),Z_(),Yf(),Q_(),dr(),Zn(),X_(),Ch=new Map([["Abs",[vc]],["Acos",[xc]],["Acosh",[kc]],["Add",[nf]],["ArgMax",[bc,xn]],["ArgMin",[_c,xn]],["Asin",[Sc]],["Asinh",[Tc]],["Atan",[Ic]],["Atanh",[Ec]],["Attention",[yc]],["AveragePool",[uh,lh]],["BatchNormalization",[$c]],["BiasAdd",[wc]],["BiasSplitGelu",[af]],["Cast",[Cc,zc]],["Ceil",[Oc]],["Clip",[Ac]],["Concat",[mf,gf]],["Conv",[zn,En]],["ConvTranspose",[Tf,Sf]],["Cos",[Bc]],["Cosh",[Nc]],["CumSum",[If,Ef]],["DepthToSpace",[zf,Cf]],["DequantizeLinear",[gh,_h]],["Div",[sf]],["Einsum",[Af,Of]],["Elu",[Dc,da]],["Equal",[of]],["Erf",[Rc]],["Exp",[Mc]],["Expand",[Bf]],["FastGelu",[Nf]],["Floor",[Pc]],["FusedConv",[zn,En]],["Gather",[Rf,Df]],["GatherElements",[qf,Wf]],["GatherBlockQuantized",[Uf,Vf]],["GatherND",[Mf,Pf]],["Gelu",[Uc]],["Gemm",[Hf,Lf]],["GlobalAveragePool",[ph,dh]],["GlobalMaxPool",[mh,hh]],["Greater",[pf]],["GreaterOrEqual",[ff]],["GridSample",[Gf,Ff]],["GroupQueryAttention",[th]],["HardSigmoid",[jc,Fc]],["InstanceNormalization",[rh]],["LayerNormalization",[ah]],["LeakyRelu",[Vc,da]],["Less",[cf]],["LessOrEqual",[hf]],["Log",[tf]],["MatMul",[ih]],["MatMulNBits",[nh,sh]],["MaxPool",[ch,fh]],["Mul",[lf]],["MultiHeadAttention",[Kf,jf]],["Neg",[qc]],["Not",[Wc]],["Pad",[oh]],["Pow",[uf]],["QuickGelu",[rf,da]],["Range",[bh]],["Reciprocal",[Lc]],["ReduceMin",[cc]],["ReduceMean",[oc]],["ReduceMax",[pc]],["ReduceSum",[hc]],["ReduceProd",[fc]],["ReduceL1",[lc]],["ReduceL2",[uc]],["ReduceLogSum",[gc]],["ReduceLogSumExp",[dc]],["ReduceSumSquare",[mc]],["Relu",[Hc]],["Resize",[wh,vh]],["RotaryEmbedding",[Jf]],["ScatterND",[$h,yh]],["Sigmoid",[Gc]],["Sin",[Kc]],["Sinh",[Zc]],["Slice",[kh,Sh]],["SkipLayerNormalization",[xh]],["Split",[Qf,Xf]],["Sqrt",[Qc]],["Softmax",[Th,Ih]],["Sub",[df]],["Tan",[Xc]],["Tanh",[Yc]],["ThresholdedRelu",[ef,da]],["Tile",[Eh]],["Transpose",[Zp,Qp]],["Where",[zh]]])}),Ah,J_=se(()=>{Pt(),Jt(),Me(),Ah=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){Ht(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of t)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of r)o.push({binding:o.length,resource:{buffer:u.buffer}});n&&o.push({binding:o.length,resource:n});let l=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Mt(e.programInfo.name)}dispose(){}build(e,t){Ht(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{r.features.has(u.feature)&&a.push(`enable ${u.extension};`)});let n=Kp(t,this.backend.device.limits),i=e.getShaderSource(n),s=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,o=r.createShaderModule({code:s,label:e.name});qe("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Mt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,s=Math.ceil(Math.sqrt(i));if(s>n){if(s=Math.ceil(Math.cbrt(i)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Oh={};Fr(Oh,{WebGpuBackend:()=>Bh});var Rd,Md,Pd,Bh,e0=se(()=>{Pt(),Se(),Jt(),Lp(),d_(),Y_(),J_(),Rd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Md=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Rd(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Pd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Bh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new Pd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Fp(this),this.programManager=new Ah(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ln(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ht(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],s=i.kernelId,o=this.kernels.get(s),l=o.kernelType,u=o.kernelName,p=i.programName,f=i.inputTensorViews,h=i.outputTensorViews,m=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let $=Number(m-this.queryTimeBase),v=Number(_-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(y=>({dims:y.dims,dataType:Xt(y.dataType)})),outputsMetadata:h.map(y=>({dims:y.dims,dataType:Xt(y.dataType)})),kernelId:s,kernelType:l,kernelName:u,programName:p,startTime:$,endTime:v});else{let y="";f.forEach((S,k)=>{y+=`input[${k}]: [${S.dims}] | ${Xt(S.dataType)}, `});let b="";h.forEach((S,k)=>{b+=`output[${k}]: [${S.dims}] | ${Xt(S.dataType)}, `}),`${s}${l}${u}${p}${y}${b}`,v-$}La("GPU",`${p}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Mt()}run(e,t,r,a,n,i){Ht(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:o,dispatchGroup:l,programUniforms:u}=e.getRunData(t),p=r.length===0?o.map((b,S)=>S):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],h=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(p[b])||p[b]<-3||p[b]>=i)throw new Error(`Invalid output index: ${p[b]}`);if(p[b]===-3)continue;let S=p[b]===-1,k=p[b]===-2,T=S||k?n(o[b].dataType,o[b].dims):a(p[b],o[b].dataType,o[b].dims);if(f.push(T),T.data===0)continue;let I=this.gpuDataManager.get(T.data);if(!I)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(I),k){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(I)}h.push(I)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Mt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(u){let b=0,S=[];u.forEach(A=>{let O=typeof A.data=="number"?[A.data]:A.data;if(O.length===0)return;let C=A.type===10?2:4,W,ae;A.type===10?(ae=O.length>4?16:O.length>2?8:O.length*C,W=O.length>4?16:C*O.length):(ae=O.length<=2?O.length*C:16,W=16),b=Math.ceil(b/ae)*ae,S.push(b);let J=A.type===10?8:4;b+=O.length>4?Math.ceil(O.length/J)*W:O.length*C});let k=16;b=Math.ceil(b/k)*k;let T=new ArrayBuffer(b);u.forEach((A,O)=>{let C=S[O],W=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(T,C,W.length).set(W);else if(A.type===12)new Uint32Array(T,C,W.length).set(W);else if(A.type===10)new Uint16Array(T,C,W.length).set(W);else if(A.type===1)new Float32Array(T,C,W.length).set(W);else throw new Error(`Unsupported uniform type: ${Xt(A.type)}`)});let I=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,T,0,b),this.gpuDataManager.release(I.id),m={offset:0,size:b,buffer:I.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),$=_[1]===1&&_[2]===1,v=Md(e,t,$),y=this.programManager.getArtifact(v);if(y||(y=this.programManager.build(e,_),this.programManager.setArtifact(v,y),qe("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),u&&y.uniformVariablesInfo){if(u.length!==y.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${u.length} in program "${y.programInfo.name}".`);for(let b=0;b<u.length;b++){let S=u[b],k=S.type,T=typeof S.data=="number"?1:S.data.length,[I,A]=y.uniformVariablesInfo[b];if(k!==I||T!==A)throw new Error(`Uniform variable ${b} mismatch: expect type ${I} with size ${A}, got type ${k} with size ${T} in program "${y.programInfo.name}".`)}}if(qe("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(y,s,h,_,m),Mt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=Ch.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,s=a.kernelEntry,o=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),qe("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(u){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${u}`)),1}finally{l&&r.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${n}] ${i}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await $n(this,e,t);return Hn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){qe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){qe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){qe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Nh={};Fr(Nh,{init:()=>Dh});var Pa,Ud,Dh,t0=se(()=>{Se(),Jt(),Be(),u_(),Pa=class Rh{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new Rh(this.module,this.dataType,this.data,t)}},Ud=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let s=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let o=[];for(let l=0;l<s;l++){let u=Number(e.getValue(a*n++,i)),p=Number(e.getValue(a*n++,"*")),f=Number(e.getValue(a*n++,i)),h=[];for(let m=0;m<f;m++)h.push(Number(e.getValue(a*n++,i)));o.push(new Pa(e,u,p,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(o,l,u)=>new Pa(this.module,l,this.output(o,u),u),i=(o,l)=>{let u=yr(o,l);if(!u)throw new Error(`Unsupported data type: ${o}`);let p=u>0?this.backend.gpuDataManager.create(u).id:0;return new Pa(this.module,o,p,l)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(i+a*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Dh=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(e0(),fa(Oh)).WebGpuBackend,s=new i;await s.initialize(r,a),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,u,p=!1)=>{if(p)qe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),s.memcpy(Number(o),Number(l));else{qe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));s.upload(Number(l),f)}},async(o,l,u)=>{qe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>s.createKernel(o,Number(l),u,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,u,p)=>{qe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let f=new Ud(t,s,Number(l));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new Gp(r);n("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,o,l,u,p)=>i.ensureTensor(s,o,l,u,p),(s,o)=>{i.uploadTensor(s,o)},async(s,o)=>i.downloadTensor(s,o)])}}}),Vd,ts,rs,ir,Wd,cn,Qa,as,is,fn,ns,ss,os,Mh=se(()=>{s_(),o_(),Se(),kr(),Un(),Up(),Vd=(e,t)=>{Ye()._OrtInit(e,t)!==0&&Fe("Can't initialize onnxruntime.")},ts=async e=>{Vd(e.wasm.numThreads,Ga(e.logLevel))},rs=async(e,t)=>{var r,a;(a=(r=Ye()).asyncInit)==null||a.call(r);{let n=(t0(),fa(Nh)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:o}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await n("webgpu",Ye(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await n("webnn",Ye(),e)}}},ir=new Map,Wd=e=>{let t=Ye(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&Fe("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},cn=(e,t)=>{let r=Ye(),a=r.stackSave(),n=0;try{let i=r.PTR_SIZE,s=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,s,s+i)!==0&&Fe("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+i,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let u=r.HEAPU32[n/4+1],p=[];for(let f=0;f<u;f++){let h=Number(r.getValue(n+8+f*i,"*"));p.push(h!==0?r.UTF8ToString(h):Number(r.getValue(n+8+(f+u)*i,"*")))}return[o,l,p]}finally{r.stackRestore(a),n!==0&&r._OrtFree(n)}},Qa=e=>{let t=Ye(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},as=async(e,t)=>{var f,h,m,_;let r,a,n=Ye();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Qa(e);let i=0,s=0,o=0,l=[],u=[],p=[];try{if([s,l]=await Pp(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let O=[];for(let C of t.externalData){let W=typeof C=="string"?C:C.path;O.push(qn(typeof C=="string"?C:C.data).then(ae=>{n.mountExternalData(W,ae)}))}await Promise.all(O)}for(let O of(t==null?void 0:t.executionProviders)??[])if((typeof O=="string"?O:O.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof O!="string"){let C=O,W=C==null?void 0:C.context,ae=C==null?void 0:C.gpuDevice,J=C==null?void 0:C.deviceType,Q=C==null?void 0:C.powerPreference;W?n.currentContext=W:ae?n.currentContext=await n.webnnCreateMLContext(ae):n.currentContext=await n.webnnCreateMLContext({deviceType:J,powerPreference:Q})}else n.currentContext=await n.webnnCreateMLContext();break}i=await n._OrtCreateSession(r,a,s),(f=n.webgpuOnCreateSession)==null||f.call(n,i),i===0&&Fe("Can't create a session."),(h=n.jsepOnCreateSession)==null||h.call(n),n.currentContext&&(n.webnnRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[$,v]=Wd(i),y=!!(t!=null&&t.enableGraphCapture),b=[],S=[],k=[],T=[],I=[];for(let O=0;O<$;O++){let[C,W,ae]=cn(i,O);C===0&&Fe("Can't get an input name."),u.push(C);let J=n.UTF8ToString(C);b.push(J),k.push(W===0?{name:J,isTensor:!1}:{name:J,isTensor:!0,type:Xt(W),shape:ae})}for(let O=0;O<v;O++){let[C,W,ae]=cn(i,O+$);C===0&&Fe("Can't get an output name."),p.push(C);let J=n.UTF8ToString(C);S.push(J),T.push(W===0?{name:J,isTensor:!1}:{name:J,isTensor:!0,type:Xt(W),shape:ae});{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let Q=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[J])??"cpu",G=n.webnnIsGraphOutput;if(Q==="cpu"&&G&&G(i,J)){I.push("ml-tensor-cpu-output");continue}if(Q!=="cpu"&&Q!=="cpu-pinned"&&Q!=="gpu-buffer"&&Q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Q}.`);if(y&&Q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(Q)}}let A=null;return I.some(O=>O==="gpu-buffer"||O==="ml-tensor"||O==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(i),o===0&&Fe("Can't create IO binding."),A={handle:o,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(O=>O==="ml-tensor-cpu-output"?"ml-tensor":O).map(O=>bn(O))}),ir.set(i,[i,u,p,A,y,!1]),[i,b,S,k,T]}catch($){throw u.forEach(v=>n._OrtFree(v)),p.forEach(v=>n._OrtFree(v)),o!==0&&n._OrtReleaseBinding(o)!==0&&Fe("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&Fe("Can't release session."),$}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Fe("Can't release session options."),l.forEach($=>n._free($)),(_=n.unmountExternalData)==null||_.call(n)}},is=e=>{var l,u,p;let t=Ye(),r=ir.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Fe("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(u=t.webnnOnReleaseSession)==null||u.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),n.forEach(f=>t._OrtFree(f)),i.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(a)!==0&&Fe("Can't release session."),ir.delete(e)},fn=async(e,t,r,a,n,i,s=!1)=>{if(!e){t.push(0);return}let o=Ye(),l=o.PTR_SIZE,u=e[0],p=e[1],f=e[3],h=f,m,_;if(u==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let y=e[2].gpuBuffer;_=yr(br(u),p);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=b(a,i,y,_)}}else if(f==="ml-tensor"){let y=e[2].mlTensor;_=yr(br(u),p);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=b(a,y,br(u),p)}else{let y=e[2];if(Array.isArray(y)){_=l*y.length,m=o._malloc(_),r.push(m);for(let b=0;b<y.length;b++){if(typeof y[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(m+b*l,Rt(y[b],r),"*")}}else{let b=o.webnnIsGraphInput,S=o.webnnIsGraphOutput;if(u!=="string"&&b&&S){let k=o.UTF8ToString(n);if(b(a,k)||S(a,k)){let T=br(u);_=yr(T,p),h="ml-tensor";let I=o.webnnCreateTemporaryTensor,A=o.webnnUploadTensor;if(!I||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let O=await I(a,T,p);A(O,new Uint8Array(y.buffer,y.byteOffset,y.byteLength)),m=O}else _=y.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,_),m)}else _=y.byteLength,m=o._malloc(_),r.push(m),o.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,_),m)}}let $=o.stackSave(),v=o.stackAlloc(4*p.length);try{p.forEach((b,S)=>o.setValue(v+S*l,b,l===4?"i32":"i64"));let y=o._OrtCreateTensor(br(u),m,_,v,p.length,bn(h));y===0&&Fe(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(y)}finally{o.stackRestore($)}},ns=async(e,t,r,a,n,i)=>{var ae,J,Q,G;let s=Ye(),o=s.PTR_SIZE,l=ir.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let u=l[0],p=l[1],f=l[2],h=l[3],m=l[4],_=l[5],$=t.length,v=a.length,y=0,b=[],S=[],k=[],T=[],I=s.stackSave(),A=s.stackAlloc($*o),O=s.stackAlloc($*o),C=s.stackAlloc(v*o),W=s.stackAlloc(v*o);try{[y,b]=Mp(i);for(let K=0;K<$;K++)await fn(r[K],S,T,e,p[t[K]],t[K],m);for(let K=0;K<v;K++)await fn(n[K],k,T,e,f[a[K]],$+a[K],m);for(let K=0;K<$;K++)s.setValue(A+K*o,S[K],"*"),s.setValue(O+K*o,p[t[K]],"*");for(let K=0;K<v;K++)s.setValue(C+K*o,k[K],"*"),s.setValue(W+K*o,f[a[K]],"*");if(h&&!_){let{handle:K,outputPreferredLocations:ie,outputPreferredLocationsEncoded:le}=h;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);for(let U=0;U<$;U++){let ee=t[U];await s._OrtBindInput(K,p[ee],S[U])!==0&&Fe(`Can't bind input[${U}] for session=${e}.`)}for(let U=0;U<v;U++){let ee=a[U];(ae=n[U])!=null&&ae[3]?s._OrtBindOutput(K,f[ee],k[U],0)!==0&&Fe(`Can't bind pre-allocated output[${U}] for session=${e}.`):s._OrtBindOutput(K,f[ee],0,le[ee])!==0&&Fe(`Can't bind output[${U}] to ${ie[U]} for session=${e}.`)}ir.set(e,[u,p,f,h,m,!0])}(J=s.jsepOnRunStart)==null||J.call(s,u),(Q=s.webnnOnRunStart)==null||Q.call(s,u);let M;h?M=await s._OrtRunWithBinding(u,h.handle,v,C,y):M=await s._OrtRun(u,O,A,$,W,v,C,y),M!==0&&Fe("failed to call OrtRun().");let R=[],Y=[];for(let K=0;K<v;K++){let ie=Number(s.getValue(C+K*o,"*"));if(ie===k[K]){R.push(n[K]);continue}let le=s.stackSave(),U=s.stackAlloc(4*o),ee=!1,H,V=0;try{s._OrtGetTensorData(ie,U,U+o,U+2*o,U+3*o)!==0&&Fe(`Can't access output tensor data on index ${K}.`);let P=o===4?"i32":"i64",E=Number(s.getValue(U,P));V=s.getValue(U+o,"*");let ue=s.getValue(U+o*2,"*"),Ce=Number(s.getValue(U+o*3,P)),ve=[];for(let oe=0;oe<Ce;oe++)ve.push(Number(s.getValue(ue+oe*o,P)));s._OrtFree(ue)!==0&&Fe("Can't free memory for tensor dims.");let Ae=ve.reduce((oe,ce)=>oe*ce,1);H=Xt(E);let We=h==null?void 0:h.outputPreferredLocations[a[K]];if(H==="string"){if(We==="gpu-buffer"||We==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let oe=[];for(let ce=0;ce<Ae;ce++){let Ue=s.getValue(V+ce*o,"*"),Ke=s.getValue(V+(ce+1)*o,"*"),Ve=ce===Ae-1?void 0:Ke-Ue;oe.push(s.UTF8ToString(Ue,Ve))}R.push([H,ve,oe,"cpu"])}else if(We==="gpu-buffer"&&Ae>0){let oe=s.jsepGetBuffer;if(!oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ce=oe(V),Ue=yr(E,Ae);if(Ue===void 0||!Vn(H))throw new Error(`Unsupported data type: ${H}`);ee=!0,R.push([H,ve,{gpuBuffer:ce,download:s.jsepCreateDownloader(ce,Ue,H),dispose:()=>{s._OrtReleaseTensor(ie)!==0&&Fe("Can't release tensor.")}},"gpu-buffer"])}else if(We==="ml-tensor"&&Ae>0){let oe=s.webnnEnsureTensor,ce=s.webnnIsGraphInputOutputTypeSupported;if(!oe||!ce)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(yr(E,Ae)===void 0||!Wn(H))throw new Error(`Unsupported data type: ${H}`);if(!ce(e,H,!1))throw new Error(`preferredLocation "ml-tensor" for ${H} output is not supported by current WebNN Context.`);let Ue=await oe(e,V,E,ve,!1);ee=!0,R.push([H,ve,{mlTensor:Ue,download:s.webnnCreateMLTensorDownloader(V,H),dispose:()=>{s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ie)}},"ml-tensor"])}else if(We==="ml-tensor-cpu-output"&&Ae>0){let oe=s.webnnCreateMLTensorDownloader(V,H)(),ce=R.length;ee=!0,Y.push((async()=>{let Ue=[ce,await oe];return s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ie),Ue})()),R.push([H,ve,[],"cpu"])}else{let oe=Xa(H),ce=new oe(Ae);new Uint8Array(ce.buffer,ce.byteOffset,ce.byteLength).set(s.HEAPU8.subarray(V,V+ce.byteLength)),R.push([H,ve,ce,"cpu"])}}finally{s.stackRestore(le),H==="string"&&V&&s._free(V),ee||s._OrtReleaseTensor(ie)}}h&&!m&&(s._OrtClearBoundOutputs(h.handle)!==0&&Fe("Can't clear bound outputs."),ir.set(e,[u,p,f,h,m,!1]));for(let[K,ie]of await Promise.all(Y))R[K][2]=ie;return R}finally{(G=s.webnnOnRunEnd)==null||G.call(s,u),s.stackRestore(I),S.forEach(M=>s._OrtReleaseTensor(M)),k.forEach(M=>s._OrtReleaseTensor(M)),T.forEach(M=>s._free(M)),y!==0&&s._OrtReleaseRunOptions(y),b.forEach(M=>s._free(M))}},ss=e=>{let t=Ye(),r=ir.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&Fe("Can't get an profile file name."),t._OrtFree(n)},os=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),nr,$t,Ar,sa,oa,Ua,hn,Va,mr,gr,qd,Ph,Uh,Vh,Wh,qh,Lh,Hh,Gh=se(()=>{Pt(),Mh(),kr(),Mn(),nr=()=>!!et.wasm.proxy&&typeof document<"u",Ar=!1,sa=!1,oa=!1,Va=new Map,mr=(e,t)=>{let r=Va.get(e);r?r.push(t):Va.set(e,[t])},gr=()=>{if(Ar||!sa||oa||!$t)throw new Error("worker not ready")},qd=e=>{switch(e.data.type){case"init-wasm":Ar=!1,e.data.err?(oa=!0,hn[1](e.data.err)):(sa=!0,hn[0]()),Ua&&(URL.revokeObjectURL(Ua),Ua=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Va.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ph=async()=>{if(!sa){if(Ar)throw new Error("multiple calls to 'initWasm()' detected.");if(oa)throw new Error("previous call to 'initWasm()' failed.");if(Ar=!0,nr())return new Promise((e,t)=>{$t==null||$t.terminate(),Dp().then(([r,a])=>{try{$t=a,$t.onerror=i=>t(i),$t.onmessage=qd,hn=[e,t];let n={type:"init-wasm",in:et};!n.in.wasm.wasmPaths&&(r||_n)&&(n.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.CLPRrI3A.wasm",import.meta.url).href,import.meta.url).href}),$t.postMessage(n),Ua=r}catch(n){t(n)}},t)});try{await Pn(et.wasm),await ts(et),sa=!0}catch(e){throw oa=!0,e}finally{Ar=!1}}},Uh=async e=>{if(nr())return gr(),new Promise((t,r)=>{mr("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:et}};$t.postMessage(a)});await rs(et,e)},Vh=async e=>nr()?(gr(),new Promise((t,r)=>{mr("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};$t.postMessage(a,[e.buffer])})):Qa(e),Wh=async(e,t)=>{if(nr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return gr(),new Promise((r,a)=>{mr("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),$t.postMessage(n,i)})}else return as(e,t)},qh=async e=>{if(nr())return gr(),new Promise((t,r)=>{mr("release",[t,r]);let a={type:"release",in:e};$t.postMessage(a)});is(e)},Lh=async(e,t,r,a,n,i)=>{if(nr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return gr(),new Promise((s,o)=>{mr("run",[s,o]);let l=r,u={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:i}};$t.postMessage(u,os(l))})}else return ns(e,t,r,a,n,i)},Hh=async e=>{if(nr())return gr(),new Promise((t,r)=>{mr("end-profiling",[t,r]);let a={type:"end-profiling",in:e};$t.postMessage(a)});ss(e)}}),mn,Ld,Fh,r0=se(()=>{Pt(),Gh(),Se(),Rn(),Up(),mn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ld=e=>{switch(e[3]){case"cpu":return new Lt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return Lt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!Wn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return Lt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Fh=class{async fetchModelAndCopyToWasmMemory(e){return Vh(await qn(e))}async loadModel(e,t){Ht();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Wh(r,t),Mt()}async dispose(){return qh(this.sessionId)}async run(e,t,r){Ht();let a=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],m=f[1],_=this.inputNames.indexOf(h);if(_===-1)throw new Error(`invalid input '${h}'`);a.push(m),n.push(_)});let i=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],m=f[1],_=this.outputNames.indexOf(h);if(_===-1)throw new Error(`invalid output '${h}'`);i.push(m),s.push(_)});let o=a.map((f,h)=>mn(f,()=>`input "${this.inputNames[n[h]]}"`)),l=i.map((f,h)=>f?mn(f,()=>`output "${this.outputNames[s[h]]}"`):null),u=await Lh(this.sessionId,n,o,s,l,r),p={};for(let f=0;f<u.length;f++)p[this.outputNames[s[f]]]=i[f]??Ld(u[f]);return Mt(),p}startProfiling(){}endProfiling(){Hh(this.sessionId)}}}),jh={};Fr(jh,{OnnxruntimeWebAssemblyBackend:()=>On,initializeFlags:()=>An,wasmBackend:()=>Kh});var An,On,Kh,a0=se(()=>{Pt(),Gh(),r0(),An=()=>{(typeof et.wasm.initTimeout!="number"||et.wasm.initTimeout<0)&&(et.wasm.initTimeout=0);let e=et.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),et.wasm.simd=!1),typeof et.wasm.proxy!="boolean"&&(et.wasm.proxy=!1),typeof et.wasm.trace!="boolean"&&(et.wasm.trace=!1),typeof et.wasm.numThreads!="number"||!Number.isInteger(et.wasm.numThreads)||et.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)et.wasm.numThreads=1;else{let t=typeof navigator>"u"?qg("node:os").cpus().length:navigator.hardwareConcurrency;et.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},On=class{async init(e){An(),await Ph(),await Uh(e)}async createInferenceSessionHandler(e,t){let r=new Fh;return await r.loadModel(e,t),r}},Kh=new On});Pt();Pt();Pt();var i0="1.22.0";{let e=(a0(),fa(jh)).wasmBackend;Or("webgpu",e,5),Or("webnn",e,5),Or("cpu",e,10),Or("wasm",e,10)}Object.defineProperty(et.versions,"web",{value:i0,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e,t,r){const a=e.slice();return a[10]=t[r],a}function Gd(e){let t,r,a=e[1].name+"",n,i,s,o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',l,u,p,f,h,m,_=e[3].t("Close")+"",$,v,y;function b(T,I){return T[2].length?s0:n0}let S=b(e),k=S(e);return{c(){t=L("div"),r=L("div"),n=ke(a),i=me(),s=L("button"),s.innerHTML=o,l=me(),u=L("div"),p=L("div"),k.c(),f=me(),h=L("div"),m=L("button"),$=ke(_),this.h()},l(T){t=q(T,"DIV",{class:!0});var I=j(t);r=q(I,"DIV",{class:!0});var A=j(r);n=xe(A,a),A.forEach(z),i=he(I),s=q(I,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),$r(s)!=="svelte-1yw1f3d"&&(s.innerHTML=o),I.forEach(z),l=he(T),u=q(T,"DIV",{class:!0});var O=j(u);p=q(O,"DIV",{class:!0});var C=j(p);k.l(C),C.forEach(z),f=he(O),h=q(O,"DIV",{class:!0});var W=j(h);m=q(W,"BUTTON",{class:!0,type:!0});var ae=j(m);$=xe(ae,_),ae.forEach(z),W.forEach(z),O.forEach(z),this.h()},h(){D(r,"class","text-lg font-medium self-center"),D(s,"class","self-center"),D(s,"aria-label","Close"),D(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),D(p,"class","mb-2"),D(m,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),D(m,"type","button"),D(h,"class","flex justify-end pt-3"),D(u,"class","px-5 pb-4 dark:text-gray-200")},m(T,I){pe(T,t,I),B(t,r),B(r,n),B(t,i),B(t,s),pe(T,l,I),pe(T,u,I),B(u,p),k.m(p,null),B(u,f),B(u,h),B(h,m),B(m,$),v||(y=[dt(s,"click",e[5]),dt(m,"click",e[5])],v=!0)},p(T,I){I&2&&a!==(a=T[1].name+"")&&Re(n,a),S===(S=b(T))&&k?k.p(T,I):(k.d(1),k=S(T),k&&(k.c(),k.m(p,null))),I&8&&_!==(_=T[3].t("Close")+"")&&Re($,_)},d(T){T&&(z(t),z(l),z(u)),k.d(),v=!1,Hr(y)}}}function n0(e){let t,r="-";return{c(){t=L("span"),t.textContent=r},l(a){t=q(a,"SPAN",{"data-svelte-h":!0}),$r(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,n){pe(a,t,n)},p:pt,d(a){a&&z(t)}}}function s0(e){let t,r=lr(e[2]),a=[];for(let n=0;n<r.length;n+=1)a[n]=Fd(Hd(e,r,n));return{c(){t=L("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){t=q(n,"DIV",{class:!0});var i=j(t);for(let s=0;s<a.length;s+=1)a[s].l(i);i.forEach(z),this.h()},h(){D(t,"class","flex flex-wrap gap-1 mt-1")},m(n,i){pe(n,t,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(t,null)},p(n,i){if(i&4){r=lr(n[2]);let s;for(s=0;s<r.length;s+=1){const o=Hd(n,r,s);a[s]?a[s].p(o,i):(a[s]=Fd(o),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},d(n){n&&z(t),sp(a,n)}}}function Fd(e){let t,r=e[10].tag+"",a,n,i,s,o=e[10].count+"",l,u,p;return{c(){t=L("span"),a=ke(r),n=me(),i=L("span"),s=ke("("),l=ke(o),u=ke(")"),p=me(),this.h()},l(f){t=q(f,"SPAN",{class:!0});var h=j(t);a=xe(h,r),n=he(h),i=q(h,"SPAN",{class:!0});var m=j(i);s=xe(m,"("),l=xe(m,o),u=xe(m,")"),m.forEach(z),p=he(h),h.forEach(z),this.h()},h(){D(i,"class","text-gray-500"),D(t,"class","px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs")},m(f,h){pe(f,t,h),B(t,a),B(t,n),B(t,i),B(i,s),B(i,l),B(i,u),B(t,p)},p(f,h){h&4&&r!==(r=f[10].tag+"")&&Re(a,r),h&4&&o!==(o=f[10].count+"")&&Re(l,o)},d(f){f&&z(t)}}}function o0(e){let t,r=e[1]&&Gd(e);return{c(){r&&r.c(),t=or()},l(a){r&&r.l(a),t=or()},m(a,n){r&&r.m(a,n),pe(a,t,n)},p(a,n){a[1]?r?r.p(a,n):(r=Gd(a),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(a){a&&z(t),r&&r.d(a)}}}function l0(e){let t,r,a;function n(s){e[8](s)}let i={size:"sm",$$slots:{default:[o0]},$$scope:{ctx:e}};return e[0]!==void 0&&(i.show=e[0]),t=new up({props:i}),Vr.push(()=>Wr(t,"show",n)),{c(){ze(t.$$.fragment)},l(s){Ee(t.$$.fragment,s)},m(s,o){Ie(t,s,o),a=!0},p(s,[o]){const l={};o&8206&&(l.$$scope={dirty:o,ctx:s}),!r&&o&1&&(r=!0,l.show=s[0],qr(()=>r=!1)),t.$set(l)},i(s){a||(te(t.$$.fragment,s),a=!0)},o(s){re(t.$$.fragment,s),a=!1},d(s){Te(t,s)}}}function u0(e,t,r){let a,n,{show:i=!1}=t,{model:s=null}=t,{feedbacks:o=[]}=t,{onClose:l=()=>{}}=t;const u=Lr("i18n");sr(e,u,m=>r(3,n=m));const p=()=>{r(0,i=!1),l()},f=(m,_,$=5)=>{const v=new Map;return _.filter(y=>y.data.model_id===m).forEach(y=>{(y.data.tags||[]).forEach(b=>{v.set(b,(v.get(b)||0)+1)})}),Array.from(v.entries()).sort((y,b)=>b[1]-y[1]).slice(0,$).map(([y,b])=>({tag:y,count:b}))};function h(m){i=m,r(0,i)}return e.$$set=m=>{"show"in m&&r(0,i=m.show),"model"in m&&r(1,s=m.model),"feedbacks"in m&&r(6,o=m.feedbacks),"onClose"in m&&r(7,l=m.onClose)},e.$$.update=()=>{e.$$.dirty&66&&r(2,a=s?f(s.id,o):[])},[i,s,a,n,u,p,o,l,h]}class d0 extends Mr{constructor(t){super(),Pr(this,t,u0,l0,Ur,{show:0,model:1,feedbacks:6,onClose:7})}}const{Map:p0}=_g;function jd(e,t,r){const a=e.slice();return a[10]=t[r],a[38]=r,a}function c0(e){let t,r,a,n,i,s,o,l,u;return a=new Sg({props:{className:"size-3"}}),{c(){t=L("div"),r=L("div"),ze(a.$$.fragment),n=me(),i=L("input"),this.h()},l(p){t=q(p,"DIV",{class:!0});var f=j(t);r=q(f,"DIV",{class:!0});var h=j(r);Ee(a.$$.fragment,h),h.forEach(z),n=he(f),i=q(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(z),this.h()},h(){D(r,"class","self-center ml-1 mr-3"),D(i,"class","w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"),D(i,"placeholder",s=e[9].t("Search")),D(t,"class","flex flex-1")},m(p,f){pe(p,t,f),B(t,r),Ie(a,r,null),B(t,n),B(t,i),uo(i,e[2]),o=!0,l||(u=[dt(i,"input",e[17]),dt(i,"focus",e[18])],l=!0)},p(p,f){(!o||f[0]&512&&s!==(s=p[9].t("Search")))&&D(i,"placeholder",s),f[0]&4&&i.value!==p[2]&&uo(i,p[2])},i(p){o||(te(a.$$.fragment,p),o=!0)},o(p){re(a.$$.fragment,p),o=!1},d(p){p&&z(t),Te(a),l=!1,Hr(u)}}}function Kd(e){let t,r,a,n;return a=new kg({}),{c(){t=L("div"),r=L("div"),ze(a.$$.fragment),this.h()},l(i){t=q(i,"DIV",{class:!0});var s=j(t);r=q(s,"DIV",{class:!0});var o=j(r);Ee(a.$$.fragment,o),o.forEach(z),s.forEach(z),this.h()},h(){D(r,"class","m-auto"),D(t,"class","absolute top-0 bottom-0 left-0 right-0 flex")},m(i,s){pe(i,t,s),B(t,r),Ie(a,r,null),n=!0},i(i){n||(te(a.$$.fragment,i),n=!0)},o(i){re(a.$$.fragment,i),n=!1},d(i){i&&z(t),Te(a)}}}function f0(e){let t,r,a,n,i,s=e[9].t("RK")+"",o,l,u,p,f,h,m,_=e[9].t("Model")+"",$,v,y,b,S,k,T,I=e[9].t("Rating")+"",A,O,C,W,ae,J,Q,G=e[9].t("Won")+"",M,R,Y,K,ie,le,U,ee=e[9].t("Lost")+"",H,V,P,E,ue,Ce,ve=[],Ae=new p0,We,oe,ce,Ue;const Ke=[g0,m0],Ve=[];function Je(fe,De){return fe[3]==="rating"?0:1}u=Je(e),p=Ve[u]=Ke[u](e);const at=[$0,y0],tt=[];function Tt(fe,De){return fe[3]==="name"?0:1}y=Tt(e),b=tt[y]=at[y](e);const wt=[k0,x0],ft=[];function $e(fe,De){return fe[3]==="rating"?0:1}C=$e(e),W=ft[C]=wt[C](e);const Oe=[E0,I0],je=[];function nt(fe,De){return fe[3]==="won"?0:1}Y=nt(e),K=je[Y]=Oe[Y](e);const lt=[O0,A0],Ne=[];function Gt(fe,De){return fe[3]==="lost"?0:1}P=Gt(e),E=Ne[P]=lt[P](e);let It=lr(e[8]);const Ft=fe=>fe[10].id;for(let fe=0;fe<It.length;fe+=1){let De=jd(e,It,fe),ot=Ft(De);Ae.set(ot,ve[fe]=Zd(ot,De))}return{c(){t=L("table"),r=L("thead"),a=L("tr"),n=L("th"),i=L("div"),o=ke(s),l=me(),p.c(),f=me(),h=L("th"),m=L("div"),$=ke(_),v=me(),b.c(),S=me(),k=L("th"),T=L("div"),A=ke(I),O=me(),W.c(),ae=me(),J=L("th"),Q=L("div"),M=ke(G),R=me(),K.c(),ie=me(),le=L("th"),U=L("div"),H=ke(ee),V=me(),E.c(),ue=me(),Ce=L("tbody");for(let fe=0;fe<ve.length;fe+=1)ve[fe].c();this.h()},l(fe){t=q(fe,"TABLE",{class:!0});var De=j(t);r=q(De,"THEAD",{class:!0});var ot=j(r);a=q(ot,"TR",{class:!0});var rt=j(a);n=q(rt,"TH",{scope:!0,class:!0});var vt=j(n);i=q(vt,"DIV",{class:!0});var Ct=j(i);o=xe(Ct,s),l=he(Ct),p.l(Ct),Ct.forEach(z),vt.forEach(z),f=he(rt),h=q(rt,"TH",{scope:!0,class:!0});var jt=j(h);m=q(jt,"DIV",{class:!0});var pr=j(m);$=xe(pr,_),v=he(pr),b.l(pr),pr.forEach(z),jt.forEach(z),S=he(rt),k=q(rt,"TH",{scope:!0,class:!0});var ma=j(k);T=q(ma,"DIV",{class:!0});var Tr=j(T);A=xe(Tr,I),O=he(Tr),W.l(Tr),Tr.forEach(z),ma.forEach(z),ae=he(rt),J=q(rt,"TH",{scope:!0,class:!0});var ga=j(J);Q=q(ga,"DIV",{class:!0});var Ir=j(Q);M=xe(Ir,G),R=he(Ir),K.l(Ir),Ir.forEach(z),ga.forEach(z),ie=he(rt),le=q(rt,"TH",{scope:!0,class:!0});var jr=j(le);U=q(jr,"DIV",{class:!0});var cr=j(U);H=xe(cr,ee),V=he(cr),E.l(cr),cr.forEach(z),jr.forEach(z),rt.forEach(z),ot.forEach(z),ue=he(De),Ce=q(De,"TBODY",{class:!0});var Kr=j(Ce);for(let Er=0;Er<ve.length;Er+=1)ve[Er].l(Kr);Kr.forEach(z),De.forEach(z),this.h()},h(){D(i,"class","flex gap-1.5 items-center"),D(n,"scope","col"),D(n,"class","px-3 py-1.5 cursor-pointer select-none w-3"),D(m,"class","flex gap-1.5 items-center"),D(h,"scope","col"),D(h,"class","px-3 py-1.5 cursor-pointer select-none"),D(T,"class","flex gap-1.5 items-center justify-end"),D(k,"scope","col"),D(k,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),D(Q,"class","flex gap-1.5 items-center justify-end"),D(J,"scope","col"),D(J,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),D(U,"class","flex gap-1.5 items-center justify-end"),D(le,"scope","col"),D(le,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),D(a,"class",""),D(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),D(Ce,"class",""),D(t,"class",We="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(e[5]?"opacity-20":""))},m(fe,De){pe(fe,t,De),B(t,r),B(r,a),B(a,n),B(n,i),B(i,o),B(i,l),Ve[u].m(i,null),B(a,f),B(a,h),B(h,m),B(m,$),B(m,v),tt[y].m(m,null),B(a,S),B(a,k),B(k,T),B(T,A),B(T,O),ft[C].m(T,null),B(a,ae),B(a,J),B(J,Q),B(Q,M),B(Q,R),je[Y].m(Q,null),B(a,ie),B(a,le),B(le,U),B(U,H),B(U,V),Ne[P].m(U,null),B(t,ue),B(t,Ce);for(let ot=0;ot<ve.length;ot+=1)ve[ot]&&ve[ot].m(Ce,null);oe=!0,ce||(Ue=[dt(n,"click",e[19]),dt(h,"click",e[20]),dt(k,"click",e[21]),dt(J,"click",e[22]),dt(le,"click",e[23])],ce=!0)},p(fe,De){(!oe||De[0]&512)&&s!==(s=fe[9].t("RK")+"")&&Re(o,s);let ot=u;u=Je(fe),u===ot?Ve[u].p(fe,De):(Qe(),re(Ve[ot],1,1,()=>{Ve[ot]=null}),Xe(),p=Ve[u],p?p.p(fe,De):(p=Ve[u]=Ke[u](fe),p.c()),te(p,1),p.m(i,null)),(!oe||De[0]&512)&&_!==(_=fe[9].t("Model")+"")&&Re($,_);let rt=y;y=Tt(fe),y===rt?tt[y].p(fe,De):(Qe(),re(tt[rt],1,1,()=>{tt[rt]=null}),Xe(),b=tt[y],b?b.p(fe,De):(b=tt[y]=at[y](fe),b.c()),te(b,1),b.m(m,null)),(!oe||De[0]&512)&&I!==(I=fe[9].t("Rating")+"")&&Re(A,I);let vt=C;C=$e(fe),C===vt?ft[C].p(fe,De):(Qe(),re(ft[vt],1,1,()=>{ft[vt]=null}),Xe(),W=ft[C],W?W.p(fe,De):(W=ft[C]=wt[C](fe),W.c()),te(W,1),W.m(T,null)),(!oe||De[0]&512)&&G!==(G=fe[9].t("Won")+"")&&Re(M,G);let Ct=Y;Y=nt(fe),Y===Ct?je[Y].p(fe,De):(Qe(),re(je[Ct],1,1,()=>{je[Ct]=null}),Xe(),K=je[Y],K?K.p(fe,De):(K=je[Y]=Oe[Y](fe),K.c()),te(K,1),K.m(Q,null)),(!oe||De[0]&512)&&ee!==(ee=fe[9].t("Lost")+"")&&Re(H,ee);let jt=P;P=Gt(fe),P===jt?Ne[P].p(fe,De):(Qe(),re(Ne[jt],1,1,()=>{Ne[jt]=null}),Xe(),E=Ne[P],E?E.p(fe,De):(E=Ne[P]=lt[P](fe),E.c()),te(E,1),E.m(U,null)),De[0]&8448&&(It=lr(fe[8]),ve=lp(ve,De,Ft,1,fe,It,Ae,Ce,bg,Zd,null,jd)),(!oe||De[0]&32&&We!==(We="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(fe[5]?"opacity-20":"")))&&D(t,"class",We)},i(fe){oe||(te(p),te(b),te(W),te(K),te(E),oe=!0)},o(fe){re(p),re(b),re(W),re(K),re(E),oe=!1},d(fe){fe&&z(t),Ve[u].d(),tt[y].d(),ft[C].d(),je[Y].d(),Ne[P].d();for(let De=0;De<ve.length;De+=1)ve[De].d();ce=!1,Hr(Ue)}}}function h0(e){let t,r=e[9].t("No models found")+"",a;return{c(){t=L("div"),a=ke(r),this.h()},l(n){t=q(n,"DIV",{class:!0});var i=j(t);a=xe(i,r),i.forEach(z),this.h()},h(){D(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(n,i){pe(n,t,i),B(t,a)},p(n,i){i[0]&512&&r!==(r=n[9].t("No models found")+"")&&Re(a,r)},i:pt,o:pt,d(n){n&&z(t)}}}function m0(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function g0(e){let t,r,a,n;const i=[b0,_0],s=[];function o(l,u){return l[4]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function _0(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function b0(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function y0(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function $0(e){let t,r,a,n;const i=[v0,w0],s=[];function o(l,u){return l[4]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function w0(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function v0(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function x0(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function k0(e){let t,r,a,n;const i=[T0,S0],s=[];function o(l,u){return l[4]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function S0(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function T0(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function I0(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function E0(e){let t,r,a,n;const i=[C0,z0],s=[];function o(l,u){return l[4]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function z0(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function C0(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function A0(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function O0(e){let t,r,a,n;const i=[N0,B0],s=[];function o(l,u){return l[4]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function B0(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function N0(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function D0(e){let t,r,a;return{c(){t=L("img"),this.h()},l(n){t=q(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){var n,i,s;Nr(t.src,r=((s=(i=(n=e[10])==null?void 0:n.info)==null?void 0:i.meta)==null?void 0:s.profile_image_url)??"/favicon.png")||D(t,"src",r),D(t,"alt",a=e[10].name),D(t,"class","size-5 rounded-full object-cover shrink-0")},m(n,i){pe(n,t,i)},p(n,i){var s,o,l;i[0]&256&&!Nr(t.src,r=((l=(o=(s=n[10])==null?void 0:s.info)==null?void 0:o.meta)==null?void 0:l.profile_image_url)??"/favicon.png")&&D(t,"src",r),i[0]&256&&a!==(a=n[10].name)&&D(t,"alt",a)},d(n){n&&z(t)}}}function R0(e){let t,r;return{c(){t=L("video"),this.h()},l(a){t=q(a,"VIDEO",{src:!0,class:!0}),j(t).forEach(z),this.h()},h(){var a,n,i;Nr(t.src,r=(i=(n=(a=e[10])==null?void 0:a.info)==null?void 0:n.meta)==null?void 0:i.profile_image_url)||D(t,"src",r),D(t,"class","size-5 rounded-full object-cover shrink-0"),t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0},m(a,n){pe(a,t,n)},p(a,n){var i,s,o;n[0]&256&&!Nr(t.src,r=(o=(s=(i=a[10])==null?void 0:i.info)==null?void 0:s.meta)==null?void 0:o.profile_image_url)&&D(t,"src",r)},d(a){a&&z(t)}}}function M0(e){let t,r=(e[10].stats.won/e[10].stats.count*100).toFixed(1)+"",a,n,i,s,o=e[10].stats.won+"",l;return{c(){t=L("span"),a=ke(r),n=ke("%"),i=me(),s=L("span"),l=ke(o),this.h()},l(u){t=q(u,"SPAN",{class:!0});var p=j(t);a=xe(p,r),n=xe(p,"%"),p.forEach(z),i=he(u),s=q(u,"SPAN",{class:!0});var f=j(s);l=xe(f,o),f.forEach(z),this.h()},h(){D(t,"class","hidden group-hover:inline"),D(s,"class","group-hover:hidden")},m(u,p){pe(u,t,p),B(t,a),B(t,n),pe(u,i,p),pe(u,s,p),B(s,l)},p(u,p){p[0]&256&&r!==(r=(u[10].stats.won/u[10].stats.count*100).toFixed(1)+"")&&Re(a,r),p[0]&256&&o!==(o=u[10].stats.won+"")&&Re(l,o)},d(u){u&&(z(t),z(i),z(s))}}}function P0(e){let t;return{c(){t=ke("-")},l(r){t=xe(r,"-")},m(r,a){pe(r,t,a)},p:pt,d(r){r&&z(t)}}}function U0(e){let t,r=(e[10].stats.lost/e[10].stats.count*100).toFixed(1)+"",a,n,i,s,o=e[10].stats.lost+"",l;return{c(){t=L("span"),a=ke(r),n=ke("%"),i=me(),s=L("span"),l=ke(o),this.h()},l(u){t=q(u,"SPAN",{class:!0});var p=j(t);a=xe(p,r),n=xe(p,"%"),p.forEach(z),i=he(u),s=q(u,"SPAN",{class:!0});var f=j(s);l=xe(f,o),f.forEach(z),this.h()},h(){D(t,"class","hidden group-hover:inline"),D(s,"class","group-hover:hidden")},m(u,p){pe(u,t,p),B(t,a),B(t,n),pe(u,i,p),pe(u,s,p),B(s,l)},p(u,p){p[0]&256&&r!==(r=(u[10].stats.lost/u[10].stats.count*100).toFixed(1)+"")&&Re(a,r),p[0]&256&&o!==(o=u[10].stats.lost+"")&&Re(l,o)},d(u){u&&(z(t),z(i),z(s))}}}function V0(e){let t;return{c(){t=ke("-")},l(r){t=xe(r,"-")},m(r,a){pe(r,t,a)},p:pt,d(r){r&&z(t)}}}function Zd(e,t){var H;let r,a,n,i=(((H=t[10])==null?void 0:H.rating)!=="-"?t[38]+1:"-")+"",s,o,l,u,p,f,h,m,_=t[10].name+"",$,v,y,b=t[10].rating+"",S,k,T,I,A,O,C,W,ae,J;function Q(V,P){var E,ue,Ce,ve;return P[0]&256&&(f=null),f==null&&(f=!!((ve=(Ce=(ue=(E=V[10])==null?void 0:E.info)==null?void 0:ue.meta)==null?void 0:Ce.profile_image_url)!=null&&ve.endsWith(".mp4"))),f?R0:D0}let G=Q(t,[-1,-1]),M=G(t);function R(V,P){return V[10].stats.won==="-"?P0:M0}let Y=R(t),K=Y(t);function ie(V,P){return V[10].stats.lost==="-"?V0:U0}let le=ie(t),U=le(t);function ee(){return t[24](t[10])}return{key:e,first:null,c(){r=L("tr"),a=L("td"),n=L("div"),s=ke(i),o=me(),l=L("td"),u=L("div"),p=L("div"),M.c(),h=me(),m=L("div"),$=ke(_),v=me(),y=L("td"),S=ke(b),k=me(),T=L("td"),I=L("div"),K.c(),A=me(),O=L("td"),C=L("div"),U.c(),W=me(),this.h()},l(V){r=q(V,"TR",{class:!0});var P=j(r);a=q(P,"TD",{class:!0});var E=j(a);n=q(E,"DIV",{class:!0});var ue=j(n);s=xe(ue,i),ue.forEach(z),E.forEach(z),o=he(P),l=q(P,"TD",{class:!0});var Ce=j(l);u=q(Ce,"DIV",{class:!0});var ve=j(u);p=q(ve,"DIV",{class:!0});var Ae=j(p);M.l(Ae),Ae.forEach(z),h=he(ve),m=q(ve,"DIV",{class:!0});var We=j(m);$=xe(We,_),We.forEach(z),ve.forEach(z),Ce.forEach(z),v=he(P),y=q(P,"TD",{class:!0});var oe=j(y);S=xe(oe,b),oe.forEach(z),k=he(P),T=q(P,"TD",{class:!0});var ce=j(T);I=q(ce,"DIV",{class:!0});var Ue=j(I);K.l(Ue),Ue.forEach(z),ce.forEach(z),A=he(P),O=q(P,"TD",{class:!0});var Ke=j(O);C=q(Ke,"DIV",{class:!0});var Ve=j(C);U.l(Ve),Ve.forEach(z),Ke.forEach(z),W=he(P),P.forEach(z),this.h()},h(){D(n,"class","line-clamp-1"),D(a,"class","px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit"),D(p,"class","shrink-0"),D(m,"class","font-medium text-gray-800 dark:text-gray-200 pr-4"),D(u,"class","flex items-center gap-2"),D(l,"class","px-3 py-1.5 flex flex-col justify-center"),D(y,"class","px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max"),D(I,"class","w-10"),D(T,"class","px-3 py-1.5 text-right font-semibold text-green-500"),D(C,"class","w-10"),D(O,"class","px-3 py-1.5 text-right font-semibold text-red-500"),D(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"),this.first=r},m(V,P){pe(V,r,P),B(r,a),B(a,n),B(n,s),B(r,o),B(r,l),B(l,u),B(u,p),M.m(p,null),B(u,h),B(u,m),B(m,$),B(r,v),B(r,y),B(y,S),B(r,k),B(r,T),B(T,I),K.m(I,null),B(r,A),B(r,O),B(O,C),U.m(C,null),B(r,W),ae||(J=dt(r,"click",ee),ae=!0)},p(V,P){var E;t=V,P[0]&256&&i!==(i=(((E=t[10])==null?void 0:E.rating)!=="-"?t[38]+1:"-")+"")&&Re(s,i),G===(G=Q(t,P))&&M?M.p(t,P):(M.d(1),M=G(t),M&&(M.c(),M.m(p,null))),P[0]&256&&_!==(_=t[10].name+"")&&Re($,_),P[0]&256&&b!==(b=t[10].rating+"")&&Re(S,b),Y===(Y=R(t))&&K?K.p(t,P):(K.d(1),K=Y(t),K&&(K.c(),K.m(I,null))),le===(le=ie(t))&&U?U.p(t,P):(U.d(1),U=le(t),U&&(U.c(),U.m(C,null)))},d(V){V&&z(r),M.d(),K.d(),U.d(),ae=!1,J()}}}function W0(e){let t,r,a,n,i,s,o=e[9].t("Leaderboard")+"",l,u,p,f,h,m=e[1].length+"",_,$,v,y,b,S,k,T,I,A,O,C,W,ae,J=e[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"",Q,G,M=e[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"",R,Y;function K(V){e[16](V)}let ie={model:e[7],feedbacks:e[0],onClose:e[14]};e[6]!==void 0&&(ie.show=e[6]),t=new d0({props:ie}),Vr.push(()=>Wr(t,"show",K)),y=new Gr({props:{content:e[9].t("Re-rank models by topic similarity"),$$slots:{default:[c0]},$$scope:{ctx:e}}});let le=e[5]&&Kd();const U=[h0,f0],ee=[];function H(V,P){return(V[1]??[]).length===0?0:1}return T=H(e),I=ee[T]=U[T](e),{c(){ze(t.$$.fragment),a=me(),n=L("div"),i=L("div"),s=L("div"),l=ke(o),u=me(),p=L("div"),f=me(),h=L("span"),_=ke(m),$=me(),v=L("div"),ze(y.$$.fragment),b=me(),S=L("div"),le&&le.c(),k=me(),I.c(),A=me(),O=L("div"),C=L("div"),W=L("div"),ae=ke("ⓘ "),Q=ke(J),G=me(),R=ke(M),this.h()},l(V){Ee(t.$$.fragment,V),a=he(V),n=q(V,"DIV",{class:!0});var P=j(n);i=q(P,"DIV",{class:!0});var E=j(i);s=q(E,"DIV",{class:!0});var ue=j(s);l=xe(ue,o),ue.forEach(z),u=he(E),p=q(E,"DIV",{class:!0}),j(p).forEach(z),f=he(E),h=q(E,"SPAN",{class:!0});var Ce=j(h);_=xe(Ce,m),Ce.forEach(z),E.forEach(z),$=he(P),v=q(P,"DIV",{class:!0});var ve=j(v);Ee(y.$$.fragment,ve),ve.forEach(z),P.forEach(z),b=he(V),S=q(V,"DIV",{class:!0});var Ae=j(S);le&&le.l(Ae),k=he(Ae),I.l(Ae),Ae.forEach(z),A=he(V),O=q(V,"DIV",{class:!0});var We=j(O);C=q(We,"DIV",{class:!0});var oe=j(C);W=q(oe,"DIV",{class:!0});var ce=j(W);ae=xe(ce,"ⓘ "),Q=xe(ce,J),ce.forEach(z),G=he(oe),R=xe(oe,M),oe.forEach(z),We.forEach(z),this.h()},h(){D(s,"class","gap-1"),D(p,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),D(h,"class","text-lg font-medium text-gray-500 dark:text-gray-300 mr-1.5"),D(i,"class","flex md:self-center text-lg font-medium px-0.5 shrink-0 items-center"),D(v,"class","flex space-x-2"),D(n,"class","mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between"),D(S,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5"),D(W,"class","line-clamp-1"),D(C,"class","text-right"),D(O,"class","text-gray-500 text-xs mt-1.5 w-full flex justify-end")},m(V,P){Ie(t,V,P),pe(V,a,P),pe(V,n,P),B(n,i),B(i,s),B(s,l),B(i,u),B(i,p),B(i,f),B(i,h),B(h,_),B(n,$),B(n,v),Ie(y,v,null),pe(V,b,P),pe(V,S,P),le&&le.m(S,null),B(S,k),ee[T].m(S,null),pe(V,A,P),pe(V,O,P),B(O,C),B(C,W),B(W,ae),B(W,Q),B(C,G),B(C,R),Y=!0},p(V,P){const E={};P[0]&128&&(E.model=V[7]),P[0]&1&&(E.feedbacks=V[0]),!r&&P[0]&64&&(r=!0,E.show=V[6],qr(()=>r=!1)),t.$set(E),(!Y||P[0]&512)&&o!==(o=V[9].t("Leaderboard")+"")&&Re(l,o),(!Y||P[0]&2)&&m!==(m=V[1].length+"")&&Re(_,m);const ue={};P[0]&512&&(ue.content=V[9].t("Re-rank models by topic similarity")),P[0]&516|P[1]&256&&(ue.$$scope={dirty:P,ctx:V}),y.$set(ue),V[5]?le?P[0]&32&&te(le,1):(le=Kd(),le.c(),te(le,1),le.m(S,k)):le&&(Qe(),re(le,1,1,()=>{le=null}),Xe());let Ce=T;T=H(V),T===Ce?ee[T].p(V,P):(Qe(),re(ee[Ce],1,1,()=>{ee[Ce]=null}),Xe(),I=ee[T],I?I.p(V,P):(I=ee[T]=U[T](V),I.c()),te(I,1),I.m(S,null)),(!Y||P[0]&512)&&J!==(J=V[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"")&&Re(Q,J),(!Y||P[0]&512)&&M!==(M=V[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"")&&Re(R,M)},i(V){Y||(te(t.$$.fragment,V),te(y.$$.fragment,V),te(le),te(I),Y=!0)},o(V){re(t.$$.fragment,V),re(y.$$.fragment,V),re(le),re(I),Y=!1},d(V){V&&(z(a),z(n),z(b),z(S),z(A),z(O)),Te(t,V),Te(y),le&&le.d(),ee[T].d()}}}const Qd="TaylorAI/bge-micro-v2";function q0(e,t,r){let a,n,i;sr(e,xg,H=>r(28,n=H)),$g.backends.onnx.wasm.wasmPaths="/wasm/";const s=Lr("i18n");sr(e,s,H=>r(9,i=H));let o=null,l=null,{feedbacks:u=[]}=t,p=[],f="",h=new Map,m=!0,_,$="rating",v="desc";function y(H){$===H?r(4,v=v==="asc"?"desc":"asc"):(r(3,$=H),r(4,v=H==="name"?"asc":"desc"))}let b=!1,S=null;const k=H=>{r(6,b=!0),r(7,S=H)},T=()=>{r(6,b=!1),r(7,S=null)},I=async(H=new Map)=>{const V=A(u,H);r(1,p=n.filter(P=>{var E,ue;return(P==null?void 0:P.owned_by)!=="arena"&&(((ue=(E=P==null?void 0:P.info)==null?void 0:E.meta)==null?void 0:ue.hidden)??!1)!==!0}).map(P=>{const E=V.get(P.id);return{...P,rating:E?Math.round(E.rating):"-",stats:{count:E?E.won+E.lost:0,won:E?E.won.toString():"-",lost:E?E.lost.toString():"-"}}}).sort((P,E)=>P.rating==="-"&&E.rating!=="-"?1:E.rating==="-"&&P.rating!=="-"?-1:P.rating!=="-"&&E.rating!=="-"?E.rating-P.rating:P.name.localeCompare(E.name))),r(5,m=!1)};function A(H,V){const P=new Map,E=32;function ue(Ae){return P.get(Ae)||{rating:1e3,won:0,lost:0}}function Ce(Ae,We,oe){const ce=ue(Ae);ce.rating+=We,oe===1?ce.won++:oe===0&&ce.lost++,P.set(Ae,ce)}function ve(Ae,We,oe,ce){const Ue=1/(1+Math.pow(10,(We-Ae)/400));return E*(oe-Ue)*ce}return H.forEach(Ae=>{const We=Ae.data.model_id,oe=ue(We);let ce;switch(Ae.data.rating.toString()){case"1":ce=1;break;case"-1":ce=0;break;default:return}const Ue=f!==""?V.get(Ae.id)||0:1;(Ae.data.sibling_model_ids||[]).forEach(Ve=>{const Je=ue(Ve),at=ve(oe.rating,Je.rating,ce,Ue),tt=ve(Je.rating,oe.rating,1-ce,Ue);Ce(We,at,ce),Ce(Ve,tt,1-ce)})}),P}const O=(H,V)=>{if(H.length!==V.length)throw new Error("Vectors must be the same length");let P=0,E=0,ue=0;for(let Ce=0;Ce<H.length;Ce++)P+=H[Ce]*V[Ce],E+=H[Ce]**2,ue+=V[Ce]**2;return E=Math.sqrt(E),ue=Math.sqrt(ue),E===0||ue===0?0:P/(E*ue)},C=(H,V)=>{let P=0;for(const E of V.values()){const ue=O(H,E);P=Math.max(P,ue)}return P},W=async()=>{window.tokenizer||(window.tokenizer=await wg.from_pretrained(Qd)),window.model||(window.model=await vg.from_pretrained(Qd)),o=window.tokenizer,r(10,l=window.model);const H=new Set(u.flatMap(V=>V.data.tags||[]));await J(Array.from(H))},ae=async H=>{const V=await o(H);return(await l(V)).last_hidden_state.mean(1).ort_tensor.data},J=async H=>{const V=new Map;for(const P of H)h.has(P)||h.set(P,await ae(P)),V.set(P,h.get(P));return V},Q=async()=>{if(r(5,m=!0),f.trim()===""){I();return}clearTimeout(_),_=setTimeout(async()=>{const H=await ae(f),V=new Map;for(const P of u){const E=P.data.tags||[],ue=await J(E),Ce=C(H,ue);V.set(P.id,Ce)}I(V)},1500)};op(async()=>{I()});function G(H){b=H,r(6,b)}function M(){f=this.value,r(2,f)}const R=()=>{W()},Y=()=>y("rating"),K=()=>y("name"),ie=()=>y("rating"),le=()=>y("won"),U=()=>y("lost"),ee=H=>k(H);return e.$$set=H=>{"feedbacks"in H&&r(0,u=H.feedbacks)},e.$$.update=()=>{e.$$.dirty[0]&4&&Q(),e.$$.dirty[0]&26&&r(8,a=[...p].sort((H,V)=>{let P,E;return $==="name"?(P=H.name,E=V.name,v==="asc"?P.localeCompare(E):E.localeCompare(P)):$==="rating"?(P=H.rating==="-"?-1/0:H.rating,E=V.rating==="-"?-1/0:V.rating,v==="asc"?P-E:E-P):$==="won"?(P=H.stats.won==="-"?-1/0:Number(H.stats.won),E=V.stats.won==="-"?-1/0:Number(V.stats.won),v==="asc"?P-E:E-P):$==="lost"?(P=H.stats.lost==="-"?-1/0:Number(H.stats.lost),E=V.stats.lost==="-"?-1/0:Number(V.stats.lost),v==="asc"?P-E:E-P):0}))},[u,p,f,$,v,m,b,S,a,i,l,s,y,k,T,W,G,M,R,Y,K,ie,le,U,ee]}class L0 extends Mr{constructor(t){super(),Pr(this,t,q0,W0,Ur,{feedbacks:0},null,[-1,-1])}}function H0(e){let t;const r=e[4].default,a=cg(r,e,e[7],null);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,i){a&&a.m(n,i),t=!0},p(n,i){a&&a.p&&(!t||i&128)&&fg(a,r,n,n[7],t?mg(r,n[7],i,null):hg(n[7]),null)},i(n){t||(te(a,n),t=!0)},o(n){re(a,n),t=!1},d(n){a&&a.d(n)}}}function G0(e){let t,r;return t=new Gr({props:{content:e[1].t("More"),$$slots:{default:[H0]},$$scope:{ctx:e}}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&2&&(i.content=a[1].t("More")),n&128&&(i.$$scope={dirty:n,ctx:a}),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function F0(e){let t,r,a,n=e[1].t("Delete")+"",i,s;return t=new Mg({props:{strokeWidth:"2"}}),{c(){ze(t.$$.fragment),r=me(),a=L("div"),i=ke(n),this.h()},l(o){Ee(t.$$.fragment,o),r=he(o),a=q(o,"DIV",{class:!0});var l=j(a);i=xe(l,n),l.forEach(z),this.h()},h(){D(a,"class","flex items-center")},m(o,l){Ie(t,o,l),pe(o,r,l),pe(o,a,l),B(a,i),s=!0},p(o,l){(!s||l&2)&&n!==(n=o[1].t("Delete")+"")&&Re(i,n)},i(o){s||(te(t.$$.fragment,o),s=!0)},o(o){re(t.$$.fragment,o),s=!1},d(o){o&&(z(r),z(a)),Te(t,o)}}}function j0(e){let t,r;return t=new Bg({props:{class:"flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",$$slots:{default:[F0]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&130&&(i.$$scope={dirty:n,ctx:a}),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function K0(e){let t,r,a;return r=new Ng({props:{class:"w-full max-w-[150px] rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",sideOffset:-2,side:"bottom",align:"start",transition:Dg,$$slots:{default:[j0]},$$scope:{ctx:e}}}),{c(){t=L("div"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"DIV",{slot:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"slot","content")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p(n,i){const s={};i&131&&(s.$$scope={dirty:i,ctx:n}),r.$set(s)},i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function Z0(e){let t,r,a;function n(s){e[6](s)}let i={$$slots:{content:[K0],default:[G0]},$$scope:{ctx:e}};return e[0]!==void 0&&(i.show=e[0]),t=new Rg({props:i}),Vr.push(()=>Wr(t,"show",n)),t.$on("change",Q0),{c(){ze(t.$$.fragment)},l(s){Ee(t.$$.fragment,s)},m(s,o){Ie(t,s,o),a=!0},p(s,[o]){const l={};o&131&&(l.$$scope={dirty:o,ctx:s}),!r&&o&1&&(r=!0,l.show=s[0],qr(()=>r=!1)),t.$set(l)},i(s){a||(te(t.$$.fragment,s),a=!0)},o(s){re(t.$$.fragment,s),a=!1},d(s){Te(t,s)}}}const Q0=e=>{};function X0(e,t,r){let a,{$$slots:n={},$$scope:i}=t;const{saveAs:s}=dp,o=pg(),l=Lr("i18n");sr(e,l,h=>r(1,a=h));let u=!1;const p=()=>{o("delete"),r(0,u=!1)};function f(h){u=h,r(0,u)}return e.$$set=h=>{"$$scope"in h&&r(7,i=h.$$scope)},[u,a,o,l,n,p,f,i]}class Y0 extends Mr{constructor(t){super(),Pr(this,t,X0,Z0,Ur,{})}}function Xd(e,t,r){const a=e.slice();return a[7]=t[r],a}function Yd(e){var ue,Ce,ve,Ae,We;let t,r,a,n=e[2].t("Feedback Details")+"",i,s,o,l='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',u,p,f,h,m,_=e[2].t("Rating")+"",$,v,y,b,S=(((ve=(Ce=(ue=e[1])==null?void 0:ue.data)==null?void 0:Ce.details)==null?void 0:ve.rating)??"-")+"",k,T,I,A,O=e[2].t("Reason")+"",C,W,ae,J,Q=(((We=(Ae=e[1])==null?void 0:Ae.data)==null?void 0:We.reason)||"-")+"",G,M,R,Y,K,ie,le=e[2].t("Close")+"",U,ee,H;function V(oe,ce){var Ue,Ke,Ve,Je;return(Ke=(Ue=oe[1])==null?void 0:Ue.data)!=null&&Ke.tags&&((Je=(Ve=oe[1])==null?void 0:Ve.data)!=null&&Je.tags.length)?eb:J0}let P=V(e),E=P(e);return{c(){t=L("div"),r=L("div"),a=L("div"),i=ke(n),s=me(),o=L("button"),o.innerHTML=l,u=me(),p=L("div"),f=L("div"),h=L("div"),m=L("div"),$=ke(_),v=me(),y=L("div"),b=L("span"),k=ke(S),T=me(),I=L("div"),A=L("div"),C=ke(O),W=me(),ae=L("div"),J=L("span"),G=ke(Q),M=me(),R=L("div"),E.c(),Y=me(),K=L("div"),ie=L("button"),U=ke(le),this.h()},l(oe){t=q(oe,"DIV",{});var ce=j(t);r=q(ce,"DIV",{class:!0});var Ue=j(r);a=q(Ue,"DIV",{class:!0});var Ke=j(a);i=xe(Ke,n),Ke.forEach(z),s=he(Ue),o=q(Ue,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),$r(o)!=="svelte-1cxmfa"&&(o.innerHTML=l),Ue.forEach(z),u=he(ce),p=q(ce,"DIV",{class:!0});var Ve=j(p);f=q(Ve,"DIV",{class:!0});var Je=j(f);h=q(Je,"DIV",{class:!0});var at=j(h);m=q(at,"DIV",{class:!0});var tt=j(m);$=xe(tt,_),tt.forEach(z),v=he(at),y=q(at,"DIV",{class:!0});var Tt=j(y);b=q(Tt,"SPAN",{});var wt=j(b);k=xe(wt,S),wt.forEach(z),Tt.forEach(z),at.forEach(z),T=he(Je),I=q(Je,"DIV",{class:!0});var ft=j(I);A=q(ft,"DIV",{class:!0});var $e=j(A);C=xe($e,O),$e.forEach(z),W=he(ft),ae=q(ft,"DIV",{class:!0});var Oe=j(ae);J=q(Oe,"SPAN",{});var je=j(J);G=xe(je,Q),je.forEach(z),Oe.forEach(z),ft.forEach(z),M=he(Je),R=q(Je,"DIV",{class:!0});var nt=j(R);E.l(nt),nt.forEach(z),Y=he(Je),K=q(Je,"DIV",{class:!0});var lt=j(K);ie=q(lt,"BUTTON",{class:!0,type:!0});var Ne=j(ie);U=xe(Ne,le),Ne.forEach(z),lt.forEach(z),Je.forEach(z),Ve.forEach(z),ce.forEach(z),this.h()},h(){D(a,"class","text-lg font-medium self-center"),D(o,"class","self-center"),D(o,"aria-label","Close"),D(r,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),D(m,"class","mb-1 text-xs text-gray-500"),D(y,"class","flex-1"),D(h,"class","flex flex-col w-full mb-2"),D(A,"class","mb-1 text-xs text-gray-500"),D(ae,"class","flex-1"),D(I,"class","flex flex-col w-full mb-2"),D(R,"class","mb-2"),D(ie,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),D(ie,"type","button"),D(K,"class","flex justify-end pt-3"),D(f,"class","flex flex-col w-full"),D(p,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(oe,ce){pe(oe,t,ce),B(t,r),B(r,a),B(a,i),B(r,s),B(r,o),B(t,u),B(t,p),B(p,f),B(f,h),B(h,m),B(m,$),B(h,v),B(h,y),B(y,b),B(b,k),B(f,T),B(f,I),B(I,A),B(A,C),B(I,W),B(I,ae),B(ae,J),B(J,G),B(f,M),B(f,R),E.m(R,null),B(f,Y),B(f,K),B(K,ie),B(ie,U),ee||(H=[dt(o,"click",e[4]),dt(ie,"click",e[4])],ee=!0)},p(oe,ce){var Ue,Ke,Ve,Je,at;ce&4&&n!==(n=oe[2].t("Feedback Details")+"")&&Re(i,n),ce&4&&_!==(_=oe[2].t("Rating")+"")&&Re($,_),ce&2&&S!==(S=(((Ve=(Ke=(Ue=oe[1])==null?void 0:Ue.data)==null?void 0:Ke.details)==null?void 0:Ve.rating)??"-")+"")&&Re(k,S),ce&4&&O!==(O=oe[2].t("Reason")+"")&&Re(C,O),ce&2&&Q!==(Q=(((at=(Je=oe[1])==null?void 0:Je.data)==null?void 0:at.reason)||"-")+"")&&Re(G,Q),P===(P=V(oe))&&E?E.p(oe,ce):(E.d(1),E=P(oe),E&&(E.c(),E.m(R,null))),ce&4&&le!==(le=oe[2].t("Close")+"")&&Re(U,le)},d(oe){oe&&z(t),E.d(),ee=!1,Hr(H)}}}function J0(e){let t,r="-";return{c(){t=L("span"),t.textContent=r},l(a){t=q(a,"SPAN",{"data-svelte-h":!0}),$r(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,n){pe(a,t,n)},p:pt,d(a){a&&z(t)}}}function eb(e){var n,i;let t,r=lr((i=(n=e[1])==null?void 0:n.data)==null?void 0:i.tags),a=[];for(let s=0;s<r.length;s+=1)a[s]=Jd(Xd(e,r,s));return{c(){t=L("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=q(s,"DIV",{class:!0});var o=j(t);for(let l=0;l<a.length;l+=1)a[l].l(o);o.forEach(z),this.h()},h(){D(t,"class","flex flex-wrap gap-1 mt-1")},m(s,o){pe(s,t,o);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(t,null)},p(s,o){var l,u;if(o&2){r=lr((u=(l=s[1])==null?void 0:l.data)==null?void 0:u.tags);let p;for(p=0;p<r.length;p+=1){const f=Xd(s,r,p);a[p]?a[p].p(f,o):(a[p]=Jd(f),a[p].c(),a[p].m(t,null))}for(;p<a.length;p+=1)a[p].d(1);a.length=r.length}},d(s){s&&z(t),sp(a,s)}}}function Jd(e){let t,r=e[7]+"",a;return{c(){t=L("span"),a=ke(r),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);a=xe(i,r),i.forEach(z),this.h()},h(){D(t,"class","px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs")},m(n,i){pe(n,t,i),B(t,a)},p(n,i){i&2&&r!==(r=n[7]+"")&&Re(a,r)},d(n){n&&z(t)}}}function tb(e){let t,r=e[1]&&Yd(e);return{c(){r&&r.c(),t=or()},l(a){r&&r.l(a),t=or()},m(a,n){r&&r.m(a,n),pe(a,t,n)},p(a,n){a[1]?r?r.p(a,n):(r=Yd(a),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(a){a&&z(t),r&&r.d(a)}}}function rb(e){let t,r,a;function n(s){e[6](s)}let i={size:"sm",$$slots:{default:[tb]},$$scope:{ctx:e}};return e[0]!==void 0&&(i.show=e[0]),t=new up({props:i}),Vr.push(()=>Wr(t,"show",n)),{c(){ze(t.$$.fragment)},l(s){Ee(t.$$.fragment,s)},m(s,o){Ie(t,s,o),a=!0},p(s,[o]){const l={};o&1030&&(l.$$scope={dirty:o,ctx:s}),!r&&o&1&&(r=!0,l.show=s[0],qr(()=>r=!1)),t.$set(l)},i(s){a||(te(t.$$.fragment,s),a=!0)},o(s){re(t.$$.fragment,s),a=!1},d(s){Te(t,s)}}}function ab(e,t,r){let a;const n=Lr("i18n");sr(e,n,p=>r(2,a=p));let{show:i=!1}=t,{selectedFeedback:s=null}=t,{onClose:o=()=>{}}=t;const l=()=>{r(0,i=!1),o()};function u(p){i=p,r(0,i)}return e.$$set=p=>{"show"in p&&r(0,i=p.show),"selectedFeedback"in p&&r(1,s=p.selectedFeedback),"onClose"in p&&r(5,o=p.onClose)},[i,s,a,n,l,o,u]}class ib extends Mr{constructor(t){super(),Pr(this,t,ab,rb,Ur,{show:0,selectedFeedback:1,onClose:5})}}function ep(e,t,r){const a=e.slice();return a[27]=t[r],a}function tp(e){let t,r,a;return r=new Gr({props:{content:e[7].t("Export"),$$slots:{default:[nb]},$$scope:{ctx:e}}}),{c(){t=L("div"),ze(r.$$.fragment)},l(n){t=q(n,"DIV",{});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z)},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p(n,i){const s={};i&128&&(s.content=n[7].t("Export")),i&1073741824&&(s.$$scope={dirty:i,ctx:n}),r.$set(s)},i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function nb(e){let t,r,a,n,i;return r=new Cg({props:{className:"size-3"}}),{c(){t=L("button"),ze(r.$$.fragment),this.h()},l(s){t=q(s,"BUTTON",{class:!0});var o=j(t);Ee(r.$$.fragment,o),o.forEach(z),this.h()},h(){D(t,"class","p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1")},m(s,o){pe(s,t,o),Ie(r,t,null),a=!0,n||(i=dt(t,"click",e[17]),n=!0)},p:pt,i(s){a||(te(r.$$.fragment,s),a=!0)},o(s){re(r.$$.fragment,s),a=!1},d(s){s&&z(t),Te(r),n=!1,i()}}}function sb(e){let t,r,a,n,i,s=e[7].t("User")+"",o,l,u,p,f,h,m,_=e[7].t("Models")+"",$,v,y,b,S,k,T,I=e[7].t("Result")+"",A,O,C,W,ae,J,Q,G=e[7].t("Updated At")+"",M,R,Y,K,ie,le,U="",ee,H,V=[],P=new Map,E,ue,Ce;const ve=[ub,lb],Ae=[];function We($e,Oe){return $e[2]==="user"?0:1}u=We(e),p=Ae[u]=ve[u](e);const oe=[fb,cb],ce=[];function Ue($e,Oe){return $e[2]==="model_id"?0:1}y=Ue(e),b=ce[y]=oe[y](e);const Ke=[_b,gb],Ve=[];function Je($e,Oe){return $e[2]==="rating"?0:1}C=Je(e),W=Ve[C]=Ke[C](e);const at=[wb,$b],tt=[];function Tt($e,Oe){return $e[2]==="updated_at"?0:1}Y=Tt(e),K=tt[Y]=at[Y](e);let wt=lr(e[6]);const ft=$e=>$e[27].id;for(let $e=0;$e<wt.length;$e+=1){let Oe=ep(e,wt,$e),je=ft(Oe);P.set(je,V[$e]=rp(je,Oe))}return{c(){t=L("table"),r=L("thead"),a=L("tr"),n=L("th"),i=L("div"),o=ke(s),l=me(),p.c(),f=me(),h=L("th"),m=L("div"),$=ke(_),v=me(),b.c(),S=me(),k=L("th"),T=L("div"),A=ke(I),O=me(),W.c(),ae=me(),J=L("th"),Q=L("div"),M=ke(G),R=me(),K.c(),ie=me(),le=L("th"),le.innerHTML=U,ee=me(),H=L("tbody");for(let $e=0;$e<V.length;$e+=1)V[$e].c();this.h()},l($e){t=q($e,"TABLE",{class:!0});var Oe=j(t);r=q(Oe,"THEAD",{class:!0});var je=j(r);a=q(je,"TR",{class:!0});var nt=j(a);n=q(nt,"TH",{scope:!0,class:!0});var lt=j(n);i=q(lt,"DIV",{class:!0});var Ne=j(i);o=xe(Ne,s),l=he(Ne),p.l(Ne),Ne.forEach(z),lt.forEach(z),f=he(nt),h=q(nt,"TH",{scope:!0,class:!0});var Gt=j(h);m=q(Gt,"DIV",{class:!0});var It=j(m);$=xe(It,_),v=he(It),b.l(It),It.forEach(z),Gt.forEach(z),S=he(nt),k=q(nt,"TH",{scope:!0,class:!0});var Ft=j(k);T=q(Ft,"DIV",{class:!0});var fe=j(T);A=xe(fe,I),O=he(fe),W.l(fe),fe.forEach(z),Ft.forEach(z),ae=he(nt),J=q(nt,"TH",{scope:!0,class:!0});var De=j(J);Q=q(De,"DIV",{class:!0});var ot=j(Q);M=xe(ot,G),R=he(ot),K.l(ot),ot.forEach(z),De.forEach(z),ie=he(nt),le=q(nt,"TH",{scope:!0,class:!0,"data-svelte-h":!0}),$r(le)!=="svelte-twvnjj"&&(le.innerHTML=U),nt.forEach(z),je.forEach(z),ee=he(Oe),H=q(Oe,"TBODY",{class:!0});var rt=j(H);for(let vt=0;vt<V.length;vt+=1)V[vt].l(rt);rt.forEach(z),Oe.forEach(z),this.h()},h(){D(i,"class","flex gap-1.5 items-center justify-end"),D(n,"scope","col"),D(n,"class","px-3 py-1.5 cursor-pointer select-none w-3"),D(m,"class","flex gap-1.5 items-center"),D(h,"scope","col"),D(h,"class","px-3 pr-1.5 cursor-pointer select-none"),D(T,"class","flex gap-1.5 items-center justify-end"),D(k,"scope","col"),D(k,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),D(Q,"class","flex gap-1.5 items-center justify-end"),D(J,"scope","col"),D(J,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),D(le,"scope","col"),D(le,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),D(a,"class",""),D(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),D(H,"class",""),D(t,"class","w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded-sm")},m($e,Oe){pe($e,t,Oe),B(t,r),B(r,a),B(a,n),B(n,i),B(i,o),B(i,l),Ae[u].m(i,null),B(a,f),B(a,h),B(h,m),B(m,$),B(m,v),ce[y].m(m,null),B(a,S),B(a,k),B(k,T),B(T,A),B(T,O),Ve[C].m(T,null),B(a,ae),B(a,J),B(J,Q),B(Q,M),B(Q,R),tt[Y].m(Q,null),B(a,ie),B(a,le),B(t,ee),B(t,H);for(let je=0;je<V.length;je+=1)V[je]&&V[je].m(H,null);E=!0,ue||(Ce=[dt(n,"click",e[18]),dt(h,"click",e[19]),dt(k,"click",e[20]),dt(J,"click",e[21])],ue=!0)},p($e,Oe){(!E||Oe&128)&&s!==(s=$e[7].t("User")+"")&&Re(o,s);let je=u;u=We($e),u===je?Ae[u].p($e,Oe):(Qe(),re(Ae[je],1,1,()=>{Ae[je]=null}),Xe(),p=Ae[u],p?p.p($e,Oe):(p=Ae[u]=ve[u]($e),p.c()),te(p,1),p.m(i,null)),(!E||Oe&128)&&_!==(_=$e[7].t("Models")+"")&&Re($,_);let nt=y;y=Ue($e),y===nt?ce[y].p($e,Oe):(Qe(),re(ce[nt],1,1,()=>{ce[nt]=null}),Xe(),b=ce[y],b?b.p($e,Oe):(b=ce[y]=oe[y]($e),b.c()),te(b,1),b.m(m,null)),(!E||Oe&128)&&I!==(I=$e[7].t("Result")+"")&&Re(A,I);let lt=C;C=Je($e),C===lt?Ve[C].p($e,Oe):(Qe(),re(Ve[lt],1,1,()=>{Ve[lt]=null}),Xe(),W=Ve[C],W?W.p($e,Oe):(W=Ve[C]=Ke[C]($e),W.c()),te(W,1),W.m(T,null)),(!E||Oe&128)&&G!==(G=$e[7].t("Updated At")+"")&&Re(M,G);let Ne=Y;Y=Tt($e),Y===Ne?tt[Y].p($e,Oe):(Qe(),re(tt[Ne],1,1,()=>{tt[Ne]=null}),Xe(),K=tt[Y],K?K.p($e,Oe):(K=tt[Y]=at[Y]($e),K.c()),te(K,1),K.m(Q,null)),Oe&5312&&(wt=lr($e[6]),Qe(),V=lp(V,Oe,ft,1,$e,wt,P,H,yg,rp,null,ep),Xe())},i($e){if(!E){te(p),te(b),te(W),te(K);for(let Oe=0;Oe<wt.length;Oe+=1)te(V[Oe]);E=!0}},o($e){re(p),re(b),re(W),re(K);for(let Oe=0;Oe<V.length;Oe+=1)re(V[Oe]);E=!1},d($e){$e&&z(t),Ae[u].d(),ce[y].d(),Ve[C].d(),tt[Y].d();for(let Oe=0;Oe<V.length;Oe+=1)V[Oe].d();ue=!1,Hr(Ce)}}}function ob(e){let t,r=e[7].t("No feedbacks found")+"",a;return{c(){t=L("div"),a=ke(r),this.h()},l(n){t=q(n,"DIV",{class:!0});var i=j(t);a=xe(i,r),i.forEach(z),this.h()},h(){D(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(n,i){pe(n,t,i),B(t,a)},p(n,i){i&128&&r!==(r=n[7].t("No feedbacks found")+"")&&Re(a,r)},i:pt,o:pt,d(n){n&&z(t)}}}function lb(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function ub(e){let t,r,a,n;const i=[pb,db],s=[];function o(l,u){return l[3]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function db(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function pb(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function cb(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function fb(e){let t,r,a,n;const i=[mb,hb],s=[];function o(l,u){return l[3]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function hb(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function mb(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function gb(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function _b(e){let t,r,a,n;const i=[yb,bb],s=[];function o(l,u){return l[3]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function bb(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function yb(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function $b(e){let t,r,a;return r=new mt({props:{className:"size-2"}}),{c(){t=L("span"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"SPAN",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","invisible")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function wb(e){let t,r,a,n;const i=[xb,vb],s=[];function o(l,u){return l[3]==="asc"?0:1}return r=o(e),a=s[r]=i[r](e),{c(){t=L("span"),a.c(),this.h()},l(l){t=q(l,"SPAN",{class:!0});var u=j(t);a.l(u),u.forEach(z),this.h()},h(){D(t,"class","font-normal")},m(l,u){pe(l,t,u),s[r].m(t,null),n=!0},p(l,u){let p=r;r=o(l),r!==p&&(Qe(),re(s[p],1,1,()=>{s[p]=null}),Xe(),a=s[r],a||(a=s[r]=i[r](l),a.c()),te(a,1),a.m(t,null))},i(l){n||(te(a),n=!0)},o(l){re(a),n=!1},d(l){l&&z(t),s[r].d()}}}function vb(e){let t,r;return t=new Yt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function xb(e){let t,r;return t=new mt({props:{className:"size-2"}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function kb(e){let t,r,a,n;return{c(){t=L("div"),r=L("img"),this.h()},l(i){t=q(i,"DIV",{class:!0});var s=j(t);r=q(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(z),this.h()},h(){var i,s,o,l;Nr(r.src,a=((s=(i=e[27])==null?void 0:i.user)==null?void 0:s.profile_image_url)??"/user.gif")||D(r,"src",a),D(r,"alt",n=(l=(o=e[27])==null?void 0:o.user)==null?void 0:l.name),D(r,"class","size-5 rounded-full object-cover shrink-0"),D(t,"class","shrink-0")},m(i,s){pe(i,t,s),B(t,r)},p(i,s){var o,l,u,p;s&64&&!Nr(r.src,a=((l=(o=i[27])==null?void 0:o.user)==null?void 0:l.profile_image_url)??"/user.gif")&&D(r,"src",a),s&64&&n!==(n=(p=(u=i[27])==null?void 0:u.user)==null?void 0:p.name)&&D(r,"alt",n)},d(i){i&&z(t)}}}function Sb(e){var n;let t,r=((n=e[27].data)==null?void 0:n.model_id)+"",a;return{c(){t=L("div"),a=ke(r),this.h()},l(i){t=q(i,"DIV",{class:!0});var s=j(t);a=xe(s,r),s.forEach(z),this.h()},h(){D(t,"class","text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5")},m(i,s){pe(i,t,s),B(t,a)},p(i,s){var o;s&64&&r!==(r=((o=i[27].data)==null?void 0:o.model_id)+"")&&Re(a,r)},i:pt,o:pt,d(i){i&&z(t)}}}function Tb(e){var o;let t,r=((o=e[27].data)==null?void 0:o.model_id)+"",a,n,i,s;return i=new Gr({props:{content:e[27].data.sibling_model_ids.join(", "),$$slots:{default:[zb]},$$scope:{ctx:e}}}),{c(){t=L("div"),a=ke(r),n=me(),ze(i.$$.fragment),this.h()},l(l){t=q(l,"DIV",{class:!0});var u=j(t);a=xe(u,r),u.forEach(z),n=he(l),Ee(i.$$.fragment,l),this.h()},h(){D(t,"class","font-semibold text-gray-600 dark:text-gray-400 flex-1")},m(l,u){pe(l,t,u),B(t,a),pe(l,n,u),Ie(i,l,u),s=!0},p(l,u){var f;(!s||u&64)&&r!==(r=((f=l[27].data)==null?void 0:f.model_id)+"")&&Re(a,r);const p={};u&64&&(p.content=l[27].data.sibling_model_ids.join(", ")),u&1073742016&&(p.$$scope={dirty:u,ctx:l}),i.$set(p)},i(l){s||(te(i.$$.fragment,l),s=!0)},o(l){re(i.$$.fragment,l),s=!1},d(l){l&&(z(t),z(n)),Te(i,l)}}}function Ib(e){let t=e[27].data.sibling_model_ids.join(", ")+"",r;return{c(){r=ke(t)},l(a){r=xe(a,t)},m(a,n){pe(a,r,n)},p(a,n){n&64&&t!==(t=a[27].data.sibling_model_ids.join(", ")+"")&&Re(r,t)},d(a){a&&z(r)}}}function Eb(e){let t=e[27].data.sibling_model_ids.slice(0,2).join(", ")+"",r,a,n=e[7].t("and {{COUNT}} more",{COUNT:e[27].data.sibling_model_ids.length-2})+"",i;return{c(){r=ke(t),a=ke(", "),i=ke(n)},l(s){r=xe(s,t),a=xe(s,", "),i=xe(s,n)},m(s,o){pe(s,r,o),pe(s,a,o),pe(s,i,o)},p(s,o){o&64&&t!==(t=s[27].data.sibling_model_ids.slice(0,2).join(", ")+"")&&Re(r,t),o&192&&n!==(n=s[7].t("and {{COUNT}} more",{COUNT:s[27].data.sibling_model_ids.length-2})+"")&&Re(i,n)},d(s){s&&(z(r),z(a),z(i))}}}function zb(e){let t;function r(i,s){return i[27].data.sibling_model_ids.length>2?Eb:Ib}let a=r(e),n=a(e);return{c(){t=L("div"),n.c(),this.h()},l(i){t=q(i,"DIV",{class:!0});var s=j(t);n.l(s),s.forEach(z),this.h()},h(){D(t,"class","text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1")},m(i,s){pe(i,t,s),n.m(t,null)},p(i,s){a===(a=r(i))&&n?n.p(i,s):(n.d(1),n=a(i),n&&(n.c(),n.m(t,null)))},d(i){i&&z(t),n.d()}}}function Cb(e){let t,r;return t=new Bn({props:{type:"error",content:e[7].t("Lost")}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&128&&(i.content=a[7].t("Lost")),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function Ab(e){let t,r;return t=new Bn({props:{type:"muted",content:e[7].t("Draw")}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&128&&(i.content=a[7].t("Draw")),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function Ob(e){let t,r;return t=new Bn({props:{type:"info",content:e[7].t("Won")}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&128&&(i.content=a[7].t("Won")),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function Bb(e){let t,r,a;return r=new Pg({}),{c(){t=L("button"),ze(r.$$.fragment),this.h()},l(n){t=q(n,"BUTTON",{class:!0});var i=j(t);Ee(r.$$.fragment,i),i.forEach(z),this.h()},h(){D(t,"class","self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl")},m(n,i){pe(n,t,i),Ie(r,t,null),a=!0},p:pt,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){re(r.$$.fragment,n),a=!1},d(n){n&&z(t),Te(r)}}}function rp(e,t){var H,V;let r,a,n,i,s,o,l,u,p,f,h,m,_,$,v,y,b,S,k,T,I=gn(t[27].updated_at*1e3).fromNow()+"",A,O,C,W,ae,J,Q,G;i=new Gr({props:{content:(V=(H=t[27])==null?void 0:H.user)==null?void 0:V.name,$$slots:{default:[kb]},$$scope:{ctx:t}}});const M=[Tb,Sb],R=[];function Y(P,E){var ue;return(ue=P[27].data)!=null&&ue.sibling_model_ids?0:1}p=Y(t),f=R[p]=M[p](t);const K=[Ob,Ab,Cb],ie=[];function le(P,E){return E&64&&($=null),E&64&&(v=null),E&64&&(y=null),$==null&&($=P[27].data.rating.toString()==="1"),$?0:(v==null&&(v=P[27].data.rating.toString()==="0"),v?1:(y==null&&(y=P[27].data.rating.toString()==="-1"),y?2:-1))}~(b=le(t,-1))&&(S=ie[b]=K[b](t));function U(...P){return t[22](t[27],...P)}W=new Y0({props:{$$slots:{default:[Bb]},$$scope:{ctx:t}}}),W.$on("delete",U);function ee(){return t[23](t[27])}return{key:e,first:null,c(){r=L("tr"),a=L("td"),n=L("div"),ze(i.$$.fragment),s=me(),o=L("td"),l=L("div"),u=L("div"),f.c(),h=me(),m=L("td"),_=L("div"),S&&S.c(),k=me(),T=L("td"),A=ke(I),O=me(),C=L("td"),ze(W.$$.fragment),ae=me(),this.h()},l(P){r=q(P,"TR",{class:!0});var E=j(r);a=q(E,"TD",{class:!0});var ue=j(a);n=q(ue,"DIV",{class:!0});var Ce=j(n);Ee(i.$$.fragment,Ce),Ce.forEach(z),ue.forEach(z),s=he(E),o=q(E,"TD",{class:!0});var ve=j(o);l=q(ve,"DIV",{class:!0});var Ae=j(l);u=q(Ae,"DIV",{class:!0});var We=j(u);f.l(We),We.forEach(z),Ae.forEach(z),ve.forEach(z),h=he(E),m=q(E,"TD",{class:!0});var oe=j(m);_=q(oe,"DIV",{class:!0});var ce=j(_);S&&S.l(ce),ce.forEach(z),oe.forEach(z),k=he(E),T=q(E,"TD",{class:!0});var Ue=j(T);A=xe(Ue,I),Ue.forEach(z),O=he(E),C=q(E,"TD",{class:!0});var Ke=j(C);Ee(W.$$.fragment,Ke),Ke.forEach(z),ae=he(E),E.forEach(z),this.h()},h(){D(n,"class","flex justify-center"),D(a,"class","py-0.5 text-right font-semibold"),D(u,"class","flex flex-col h-full"),D(l,"class","flex flex-col items-start gap-0.5 h-full"),D(o,"class","py-1 pl-3 flex flex-col"),D(_,"class","flex justify-end"),D(m,"class","px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max"),D(T,"class","px-3 py-1 text-right font-medium"),D(C,"class","px-3 py-1 text-right font-semibold"),D(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"),this.first=r},m(P,E){pe(P,r,E),B(r,a),B(a,n),Ie(i,n,null),B(r,s),B(r,o),B(o,l),B(l,u),R[p].m(u,null),B(r,h),B(r,m),B(m,_),~b&&ie[b].m(_,null),B(r,k),B(r,T),B(T,A),B(r,O),B(r,C),Ie(W,C,null),B(r,ae),J=!0,Q||(G=dt(r,"click",ee),Q=!0)},p(P,E){var We,oe;t=P;const ue={};E&64&&(ue.content=(oe=(We=t[27])==null?void 0:We.user)==null?void 0:oe.name),E&1073741888&&(ue.$$scope={dirty:E,ctx:t}),i.$set(ue);let Ce=p;p=Y(t),p===Ce?R[p].p(t,E):(Qe(),re(R[Ce],1,1,()=>{R[Ce]=null}),Xe(),f=R[p],f?f.p(t,E):(f=R[p]=M[p](t),f.c()),te(f,1),f.m(u,null));let ve=b;b=le(t,E),b===ve?~b&&ie[b].p(t,E):(S&&(Qe(),re(ie[ve],1,1,()=>{ie[ve]=null}),Xe()),~b?(S=ie[b],S?S.p(t,E):(S=ie[b]=K[b](t),S.c()),te(S,1),S.m(_,null)):S=null),(!J||E&64)&&I!==(I=gn(t[27].updated_at*1e3).fromNow()+"")&&Re(A,I);const Ae={};E&1073741824&&(Ae.$$scope={dirty:E,ctx:t}),W.$set(Ae)},i(P){J||(te(i.$$.fragment,P),te(f),te(S),te(W.$$.fragment,P),J=!0)},o(P){re(i.$$.fragment,P),re(f),re(S),re(W.$$.fragment,P),J=!1},d(P){P&&z(r),Te(i),R[p].d(),~b&&ie[b].d(),Te(W),Q=!1,G()}}}function ap(e){let t,r,a=e[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"",n,i,s,o,l;return o=new Gr({props:{content:e[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included."),$$slots:{default:[Nb]},$$scope:{ctx:e}}}),{c(){t=L("div"),r=L("div"),n=ke(a),i=me(),s=L("div"),ze(o.$$.fragment),this.h()},l(u){t=q(u,"DIV",{class:!0});var p=j(t);r=q(p,"DIV",{class:!0});var f=j(r);n=xe(f,a),f.forEach(z),i=he(p),s=q(p,"DIV",{class:!0});var h=j(s);Ee(o.$$.fragment,h),h.forEach(z),p.forEach(z),this.h()},h(){D(r,"class","line-clamp-1 text-gray-500 text-xs"),D(s,"class","flex space-x-1 ml-auto"),D(t,"class","flex flex-col justify-end w-full text-right gap-1")},m(u,p){pe(u,t,p),B(t,r),B(r,n),B(t,i),B(t,s),Ie(o,s,null),l=!0},p(u,p){(!l||p&128)&&a!==(a=u[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"")&&Re(n,a);const f={};p&128&&(f.content=u[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included.")),p&1073741952&&(f.$$scope={dirty:p,ctx:u}),o.$set(f)},i(u){l||(te(o.$$.fragment,u),l=!0)},o(u){re(o.$$.fragment,u),l=!1},d(u){u&&z(t),Te(o)}}}function Nb(e){let t,r,a=e[7].t("Share to Open WebUI Community")+"",n,i,s,o,l,u,p;return o=new Ag({props:{className:"size-3",strokeWidth:"3"}}),{c(){t=L("button"),r=L("div"),n=ke(a),i=me(),s=L("div"),ze(o.$$.fragment),this.h()},l(f){t=q(f,"BUTTON",{class:!0});var h=j(t);r=q(h,"DIV",{class:!0});var m=j(r);n=xe(m,a),m.forEach(z),i=he(h),s=q(h,"DIV",{class:!0});var _=j(s);Ee(o.$$.fragment,_),_.forEach(z),h.forEach(z),this.h()},h(){D(r,"class","self-center mr-2 font-medium line-clamp-1"),D(s,"class","self-center"),D(t,"class","flex text-xs items-center px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition")},m(f,h){pe(f,t,h),B(t,r),B(r,n),B(t,i),B(t,s),Ie(o,s,null),l=!0,u||(p=dt(t,"click",e[24]),u=!0)},p(f,h){(!l||h&128)&&a!==(a=f[7].t("Share to Open WebUI Community")+"")&&Re(n,a)},i(f){l||(te(o.$$.fragment,f),l=!0)},o(f){re(o.$$.fragment,f),l=!1},d(f){f&&z(t),Te(o),u=!1,p()}}}function ip(e){let t,r,a;function n(s){e[25](s)}let i={count:e[0].length,perPage:10};return e[1]!==void 0&&(i.page=e[1]),t=new Og({props:i}),Vr.push(()=>Wr(t,"page",n)),{c(){ze(t.$$.fragment)},l(s){Ee(t.$$.fragment,s)},m(s,o){Ie(t,s,o),a=!0},p(s,o){const l={};o&1&&(l.count=s[0].length),!r&&o&2&&(r=!0,l.page=s[1],qr(()=>r=!1)),t.$set(l)},i(s){a||(te(t.$$.fragment,s),a=!0)},o(s){re(t.$$.fragment,s),a=!1},d(s){Te(t,s)}}}function Db(e){let t,r,a,n,i,s=e[7].t("Feedback History")+"",o,l,u,p,f,h=e[0].length+"",m,_,$,v,y,b,S,k,T,I;function A(M){e[16](M)}let O={selectedFeedback:e[5],onClose:e[11]};e[4]!==void 0&&(O.show=e[4]),t=new ib({props:O}),Vr.push(()=>Wr(t,"show",A));let C=e[0].length>0&&tp(e);const W=[ob,sb],ae=[];function J(M,R){return(M[0]??[]).length===0?0:1}y=J(e),b=ae[y]=W[y](e);let Q=e[0].length>0&&ap(e),G=e[0].length>10&&ip(e);return{c(){ze(t.$$.fragment),a=me(),n=L("div"),i=L("div"),o=ke(s),l=me(),u=L("div"),p=me(),f=L("span"),m=ke(h),_=me(),C&&C.c(),$=me(),v=L("div"),b.c(),S=me(),Q&&Q.c(),k=me(),G&&G.c(),T=or(),this.h()},l(M){Ee(t.$$.fragment,M),a=he(M),n=q(M,"DIV",{class:!0});var R=j(n);i=q(R,"DIV",{class:!0});var Y=j(i);o=xe(Y,s),l=he(Y),u=q(Y,"DIV",{class:!0}),j(u).forEach(z),p=he(Y),f=q(Y,"SPAN",{class:!0});var K=j(f);m=xe(K,h),K.forEach(z),Y.forEach(z),_=he(R),C&&C.l(R),R.forEach(z),$=he(M),v=q(M,"DIV",{class:!0});var ie=j(v);b.l(ie),ie.forEach(z),S=he(M),Q&&Q.l(M),k=he(M),G&&G.l(M),T=or(),this.h()},h(){D(u,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),D(f,"class","text-lg font-medium text-gray-500 dark:text-gray-300"),D(i,"class","flex md:self-center text-lg font-medium px-0.5"),D(n,"class","mt-0.5 mb-2 gap-1 flex flex-row justify-between"),D(v,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5")},m(M,R){Ie(t,M,R),pe(M,a,R),pe(M,n,R),B(n,i),B(i,o),B(i,l),B(i,u),B(i,p),B(i,f),B(f,m),B(n,_),C&&C.m(n,null),pe(M,$,R),pe(M,v,R),ae[y].m(v,null),pe(M,S,R),Q&&Q.m(M,R),pe(M,k,R),G&&G.m(M,R),pe(M,T,R),I=!0},p(M,[R]){const Y={};R&32&&(Y.selectedFeedback=M[5]),!r&&R&16&&(r=!0,Y.show=M[4],qr(()=>r=!1)),t.$set(Y),(!I||R&128)&&s!==(s=M[7].t("Feedback History")+"")&&Re(o,s),(!I||R&1)&&h!==(h=M[0].length+"")&&Re(m,h),M[0].length>0?C?(C.p(M,R),R&1&&te(C,1)):(C=tp(M),C.c(),te(C,1),C.m(n,null)):C&&(Qe(),re(C,1,1,()=>{C=null}),Xe());let K=y;y=J(M),y===K?ae[y].p(M,R):(Qe(),re(ae[K],1,1,()=>{ae[K]=null}),Xe(),b=ae[y],b?b.p(M,R):(b=ae[y]=W[y](M),b.c()),te(b,1),b.m(v,null)),M[0].length>0?Q?(Q.p(M,R),R&1&&te(Q,1)):(Q=ap(M),Q.c(),te(Q,1),Q.m(k.parentNode,k)):Q&&(Qe(),re(Q,1,1,()=>{Q=null}),Xe()),M[0].length>10?G?(G.p(M,R),R&1&&te(G,1)):(G=ip(M),G.c(),te(G,1),G.m(T.parentNode,T)):G&&(Qe(),re(G,1,1,()=>{G=null}),Xe())},i(M){I||(te(t.$$.fragment,M),te(C),te(b),te(Q),te(G),I=!0)},o(M){re(t.$$.fragment,M),re(C),re(b),re(Q),re(G),I=!1},d(M){M&&(z(a),z(n),z($),z(v),z(S),z(k),z(T)),Te(t,M),C&&C.d(),ae[y].d(),Q&&Q.d(M),G&&G.d(M)}}}function Rb(e,t,r){let a,n,i;const{saveAs:s}=dp;gn.extend(Tg);const o=Lr("i18n");sr(e,o,G=>r(7,i=G));let{feedbacks:l=[]}=t,u=1,p="updated_at",f="desc";function h(G){p===G?r(3,f=f==="asc"?"desc":"asc"):(r(2,p=G),G==="user"||G==="model_id"?r(3,f="asc"):r(3,f="desc")),r(1,u=1)}let m=!1,_=null;const $=G=>{r(4,m=!0),r(5,_=G)},v=()=>{r(4,m=!1),r(5,_=null)},y=async G=>{await Ig(localStorage.token,G).catch(R=>(hi.error(R),null))&&r(0,l=l.filter(R=>R.id!==G))},b=async()=>{hi.success(i.t("Redirecting you to Open WebUI Community"));const G=l.map(K=>{const{snapshot:ie,user:le,...U}=K;return U}),M="https://openwebui.com",R=await window.open(`${M}/leaderboard`,"_blank"),Y=K=>{K.origin===M&&K.data==="loaded"&&(R.postMessage(JSON.stringify(G),"*"),window.removeEventListener("message",Y))};window.addEventListener("message",Y,!1)},S=async()=>{const G=await Eg(localStorage.token).catch(M=>(hi.error(M),null));if(G){let M=new Blob([JSON.stringify(G)],{type:"application/json"});s(M,`feedback-history-export-${Date.now()}.json`)}};function k(G){m=G,r(4,m)}const T=()=>{S()},I=()=>h("user"),A=()=>h("model_id"),O=()=>h("rating"),C=()=>h("updated_at"),W=(G,M)=>{y(G.id)},ae=G=>$(G),J=async()=>{b()};function Q(G){u=G,r(1,u)}return e.$$set=G=>{"feedbacks"in G&&r(0,l=G.feedbacks)},e.$$.update=()=>{e.$$.dirty&13&&r(15,n=[...l].sort((G,M)=>{var K,ie;let R,Y;switch(p){case"user":return R=((K=G.user)==null?void 0:K.name)||"",Y=((ie=M.user)==null?void 0:ie.name)||"",f==="asc"?R.localeCompare(Y):Y.localeCompare(R);case"model_id":return R=G.data.model_id||"",Y=M.data.model_id||"",f==="asc"?R.localeCompare(Y):Y.localeCompare(R);case"rating":return R=G.data.rating,Y=M.data.rating,f==="asc"?R-Y:Y-R;case"updated_at":return R=G.updated_at,Y=M.updated_at,f==="asc"?R-Y:Y-R;default:return 0}})),e.$$.dirty&32770&&r(6,a=n.slice((u-1)*10,u*10))},[l,u,p,f,m,_,a,i,o,h,$,v,y,b,S,n,k,T,I,A,O,C,W,ae,J,Q]}class Mb extends Mr{constructor(t){super(),Pr(this,t,Rb,Db,Ur,{feedbacks:0})}}function np(e){let t,r,a,n,i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg>',s,o,l=e[3].t("Leaderboard")+"",u,p,f,h,m,_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg>',$,v,y=e[3].t("Feedbacks")+"",b,S,k,T,I,A,O,C,W;const ae=[Ub,Pb],J=[];function Q(G,M){return G[0]==="leaderboard"?0:G[0]==="feedbacks"?1:-1}return~(I=Q(e))&&(A=J[I]=ae[I](e)),{c(){t=L("div"),r=L("div"),a=L("button"),n=L("div"),n.innerHTML=i,s=me(),o=L("div"),u=ke(l),f=me(),h=L("button"),m=L("div"),m.innerHTML=_,$=me(),v=L("div"),b=ke(y),k=me(),T=L("div"),A&&A.c(),this.h()},l(G){t=q(G,"DIV",{class:!0});var M=j(t);r=q(M,"DIV",{id:!0,class:!0});var R=j(r);a=q(R,"BUTTON",{id:!0,class:!0});var Y=j(a);n=q(Y,"DIV",{class:!0,"data-svelte-h":!0}),$r(n)!=="svelte-ujm47k"&&(n.innerHTML=i),s=he(Y),o=q(Y,"DIV",{class:!0});var K=j(o);u=xe(K,l),K.forEach(z),Y.forEach(z),f=he(R),h=q(R,"BUTTON",{id:!0,class:!0});var ie=j(h);m=q(ie,"DIV",{class:!0,"data-svelte-h":!0}),$r(m)!=="svelte-1fzwrf2"&&(m.innerHTML=_),$=he(ie),v=q(ie,"DIV",{class:!0});var le=j(v);b=xe(le,y),le.forEach(z),ie.forEach(z),R.forEach(z),k=he(M),T=q(M,"DIV",{class:!0});var U=j(T);A&&A.l(U),U.forEach(z),M.forEach(z),this.h()},h(){D(n,"class","self-center mr-2"),D(o,"class","self-center"),D(a,"id","leaderboard"),D(a,"class",p="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),D(m,"class","self-center mr-2"),D(v,"class","self-center"),D(h,"id","feedbacks"),D(h,"class",S="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),D(r,"id","users-tabs-container"),D(r,"class","tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"),D(T,"class","flex-1 mt-1 lg:mt-0 overflow-y-scroll"),D(t,"class","flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4")},m(G,M){pe(G,t,M),B(t,r),B(r,a),B(a,n),B(a,s),B(a,o),B(o,u),B(r,f),B(r,h),B(h,m),B(h,$),B(h,v),B(v,b),B(t,k),B(t,T),~I&&J[I].m(T,null),O=!0,C||(W=[dt(a,"click",e[6]),dt(h,"click",e[7])],C=!0)},p(G,M){(!O||M&8)&&l!==(l=G[3].t("Leaderboard")+"")&&Re(u,l),(!O||M&1&&p!==(p="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(G[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&D(a,"class",p),(!O||M&8)&&y!==(y=G[3].t("Feedbacks")+"")&&Re(b,y),(!O||M&1&&S!==(S="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(G[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&D(h,"class",S);let R=I;I=Q(G),I===R?~I&&J[I].p(G,M):(A&&(Qe(),re(J[R],1,1,()=>{J[R]=null}),Xe()),~I?(A=J[I],A?A.p(G,M):(A=J[I]=ae[I](G),A.c()),te(A,1),A.m(T,null)):A=null)},i(G){O||(te(A),O=!0)},o(G){re(A),O=!1},d(G){G&&z(t),~I&&J[I].d(),C=!1,Hr(W)}}}function Pb(e){let t,r;return t=new Mb({props:{feedbacks:e[2]}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&4&&(i.feedbacks=a[2]),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function Ub(e){let t,r;return t=new L0({props:{feedbacks:e[2]}}),{c(){ze(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,n){Ie(t,a,n),r=!0},p(a,n){const i={};n&4&&(i.feedbacks=a[2]),t.$set(i)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){re(t.$$.fragment,a),r=!1},d(a){Te(t,a)}}}function Vb(e){let t,r,a=e[1]&&np(e);return{c(){a&&a.c(),t=or()},l(n){a&&a.l(n),t=or()},m(n,i){a&&a.m(n,i),pe(n,t,i),r=!0},p(n,[i]){n[1]?a?(a.p(n,i),i&2&&te(a,1)):(a=np(n),a.c(),te(a,1),a.m(t.parentNode,t)):a&&(Qe(),re(a,1,1,()=>{a=null}),Xe())},i(n){r||(te(a),r=!0)},o(n){re(a),r=!1},d(n){n&&z(t),a&&a.d(n)}}}function Wb(e,t,r){let a,n;sr(e,gg,h=>r(5,a=h));const i=Lr("i18n");sr(e,i,h=>r(3,n=h));let s;const o=h=>{const m=document.getElementById(h);m&&m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};let l=!1,u=[];op(async()=>{r(2,u=await zg(localStorage.token)),r(1,l=!0);const h=document.getElementById("users-tabs-container");h&&h.addEventListener("wheel",function(m){m.deltaY!==0&&(h.scrollLeft+=m.deltaY)}),o(s)});const p=()=>{po("/admin/evaluations/leaderboard")},f=()=>{po("/admin/evaluations/feedbacks")};return e.$$.update=()=>{if(e.$$.dirty&32){const h=a.url.pathname.split("/"),m=h[h.length-1];r(0,s=["leaderboard","feedbacks"].includes(m)?m:"leaderboard")}e.$$.dirty&1&&s&&o(s)},[s,l,u,n,i,a,p,f]}class by extends Mr{constructor(t){super(),Pr(this,t,Wb,Vb,Ur,{})}}export{by as E};
//# sourceMappingURL=Dvkltl_5.js.map
