const init={
	title:[],
	data:[],
	loading:false,
	requestURL:null
}
export default function reducer(state=init,action) {
    switch (action.type) {
        case "更新表格内容":
			{
				if(!action.param){
					let {title,data,requestURL}=state;
					return {title,data,loading:false,requestURL};
				}
				let {title,data,requestURL}=action.param;
				return {title,data,loading:false,requestURL};
			}
		case "重载表格内容":
			{
				let {title,data,requestURL}=state;
				return {
					title,
					data,
					loading:true,
					requestURL
				};
			}
        default:
            return state;
    }
}
export function updateTableList(param) {
    return {
		type:"更新表格内容",
		param:param
    }
}
export function getTableList(requestURL) {
    return dispatch =>{
        fetch(`http://localhost:8080/${requestURL}`,{
			method: 'POST',
			headers: {
				'content-type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({"limit":null,"offset":null,"order":null,"sort":null,"search":null,"extras":{"roleId":0}})
		}).then(res =>res.json())
		.then(response => {
			if(response.rows&&response.rows.length>0){
				let key=Object.keys(response.rows[0]),
					title=key.map((value)=>{
						return {
							title: value.toUpperCase(),
							dataIndex: value,
							align: 'center'
						};
					});
				dispatch(updateTableList({
					title,
					data:response.rows,
					requestURL
				}));
			}
		})
		.catch(error =>{
			setTimeout(() => {
				dispatch(updateTableList());
			}, 5000);
		});
    }
}
export function reloadTableList() {
    return {
		type:"重载表格内容"
    }
}