import setting from "./setting.js";
let listcontent=document.getElementById('listcontent');
function createfunction({icon,link,insteadicon,insteadlink,releaselink,releaseicon}) {
	let li=document.createElement("li");
	li.classList.add("link_list");
	let img=document.createElement("img");
	img.referrerPolicy="no-referrer";
	img.src=icon;
	img.onerror=(e)=>{
		insteadicon.length?(()=>{
			img.src=insteadicon[0];
			insteadicon=[];
			insteadicon.shift();
		})():img.src=releaseicon;
		insteadlink.length?(()=>{
			a.href=insteadlink[0];
			a.innerText=insteadlink[0];
			insteadlink.shift();
			a.dataset.href=insteadlink[0]||releaselink;
		})():(()=>{
			a.href=releaselink;
			a.innerText=releaselink;
		})();
		e.target.onerror=null;
	}
	img.alt="icon";
	img.classList.add("link_icon");
	li.appendChild(img);
	let a=document.createElement("a");
	a.href=link;
	a.dataset.href=insteadlink;
	a.target="_blank";
	a.innerText=link;
	li.appendChild(a);
	listcontent.appendChild(li);
}
setting.map((value,index)=>{
	createfunction(value);
	console.log(index);
})