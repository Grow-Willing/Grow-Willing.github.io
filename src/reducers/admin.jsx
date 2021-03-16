const init={
	name:"admin name"
}

export default function reducer(state=init,action) {
    switch (action.type) {
		case "更新管理员信息":
			return action.param;
        default:
            return state;
	}
}
export  function updateAdminList(param){
    return {
		type:"更新管理员信息",
		param:param
    }
}
export  function getAdmin(param){
    return dispatch =>{
        fetch("http://localhost:8080/adminListData",{
			method: 'POST',
			headers: {
				'content-type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({"limit":null,"offset":null,"order":null,"sort":null,"search":null,"extras":{"roleId":param}})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			if(response.rows&&response.rows.length>0){
				dispatch(updateAdminList(response.rows[0]));
			}
		})
		.catch(error => console.error('Error:', error));
    }
}