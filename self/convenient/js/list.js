import setting from "./setting.js";
let listcontent=document.getElementById('listcontent');
function createfunction(icon,link) {
	let li=document.createElement("li");
	li.classList.add("link_list");
	let img=document.createElement("img");
	img.referrerPolicy="no-referrer";
	img.src=icon;
	img.alt="icon";
	img.classList.add("link_icon");
	li.appendChild(img);
	let a=document.createElement("a");
	a.href=link;
	a.target="_blank";
	a.innerText=link;
	li.appendChild(a);
	listcontent.appendChild(li);
}
setting.map((value,index)=>{
	createfunction(value.icon,value.link);
	console.log(index);
})