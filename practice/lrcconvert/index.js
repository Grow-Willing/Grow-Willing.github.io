let text=$("#text")[0];
let output=$("#output")[0];
$("#convert")[0].onclick=()=>{
	if(!text.value)return ;
	let list=text.value.replaceAll(/\n?\[re:.*\]\n\[ve:.*\]\n?/g,"").trim();
	list=list.split("\n");
	let time;
	let returnvalue="";
	let lastindex=0;
	let timelist=[],tag=0;
	list.forEach((value,index)=>{
		if(/(?<=\[)\d{2}:\d{2}\.\d{2}(?=\])/.test(value)){
			let timetriple=value.match(/(?<=\[)\d{2}:\d{2}\.\d{2}(?=\])/)[0].split(/(:|\.)/).filter(el=>!/(:|\.)/.test(el));
			timelist.push(timetriple.map((value)=>parseInt(value)));
		}
	})
	console.log(timelist);
	list=list.map((value,index)=>{
		if(/(?<=\[)\d{2}:\d{2}\.\d{2}(?=\])/.test(value)){
			let timetriple;
			if(tag==timelist.length-1){
				timetriple=timelist[tag];
				timetriple[1]+=5;
				timetriple[0]+=timetriple[1]>=60?1:0;
				timetriple[1]-=timetriple[1]>=60?60:0;
			}else if(tag>0&&timelist[tag].toString()==timelist[tag-1].toString()){
				timetriple=Array.from(timelist[tag+1]);
				timetriple[2]-=1;
				if(timetriple[2]<0){
					timetriple[1]-=1;
					timetriple[2]+=100;
				}
				if(timetriple[1]<0){
					timetriple[0]-=1;
					timetriple[1]+=60;
				}
			}else{
				timetriple=timelist[tag];
			}
			tag++;
			return `[${timetriple[0].toString().padStart(2,"0")}:${timetriple[1].toString().padStart(2,"0")}.${timetriple[2].toString().padStart(2,"0")}]${value.substr(10)}`;
		}else{
			return value;
		};
	});
	returnvalue=list.join("\n");
	output.innerText=returnvalue;
	new ClipboardJS(`#copy`,{
		text:()=>returnvalue
	});
}