import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import store from './redux/state'
import App from './components/App'
import 'normalize.css'


const renderEntireTree = (state) =>{
ReactDom.render(
	<BrowserRouter>
		<App state ={store.getState()} dispatch ={store.dispatch.bind(store)} />
	</BrowserRouter>,
	document.getElementById('root')

)
}

renderEntireTree(store.getState())
store.subscriber(renderEntireTree)