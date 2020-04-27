import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import store from './redux/redux-store'
import App from './components/App'
import 'normalize.css'


const rerenderEntireTree = (state) =>{
ReactDom.render(
	<BrowserRouter>
		<App state ={store.getState()} dispatch ={store.dispatch.bind(store)}/>
	</BrowserRouter>,
	document.getElementById('root')

)
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})