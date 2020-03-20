import setting from "./setting.js";
let listcontent=document.getElementById('listcontent'),
	clickall=document.getElementById('clickall'),
	lilist=[];
function createfunction({icon,link,insteadicon,insteadlink,releaselink,releaseicon}) {
	let li=document.createElement("li");
	li.classList.add("link_list");
	let img=document.createElement("img");
	img.referrerPolicy="no-referrer";
	img.src=icon;
	img.onerror=(e)=>{
		if(!(insteadicon&&insteadicon.length)&&!(insteadlink&&insteadlink.length)){
			e.target.onerror=null;
			a.setAttribute("avaiable",false);
		}
		try {
			if(insteadicon.length){
				img.src=insteadicon[0];
				insteadicon=[];
				insteadicon.shift();
			}else{
				img.src=releaseicon;
			}
		} catch (error) {};
		try {
			if(insteadlink.length){
				a.href=insteadlink[0];
				a.innerText=insteadlink[0];
				insteadlink.shift();
				a.dataset.href=insteadlink[0]||releaselink;
			}else{
				a.href=releaselink;
				a.innerText=releaselink;
			}
		} catch (error) {};
		sort();
		rendenr(listcontent);
	}
	img.alt="icon";
	img.classList.add("link_icon");
	li.appendChild(img);
	let a=document.createElement("a");
	a.href=link;
	a.dataset.href=insteadlink;
	a.target="_blank";
	a.innerText=link;
	a.setAttribute("avaiable",true);
	li.appendChild(a);
	lilist.push(li);
}
setting.map((value,index)=>{
	createfunction(value);
})

clickall.onclick=()=>{
	let list=listcontent.querySelectorAll(`a[avaiable="true"]`);
	console.log(list);
	list.forEach((value,key)=>{
		value.click();
	});
};
sort();
rendenr(listcontent);

function sort(descending=true){
	lilist.sort((before,after)=>{
		let beforea=before.querySelector("a");
		let aftera=after.querySelector("a");
		if(beforea.href>aftera.href)return descending?1:-1;
		return descending?-1:1;
	})
}
function rendenr(target) {
	let buffer=target.cloneNode();
	lilist.map((value,index)=>{
		buffer.appendChild(value);
	})
	target.parentNode.replaceChild(buffer,target);
	listcontent=buffer;
}