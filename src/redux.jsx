import { combineReducers } from 'redux'
import admin from './reducers/admin.jsx'
import tableList from './reducers/tableList'
import editData from './reducers/editData'
export default combineReducers(
	{
		admin,
		tableList,
		editData
	}
)
