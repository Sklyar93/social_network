import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import store from './redux/redux-store'
import MyContext from './redux/context'
import App from './components/App'
import 'normalize.css'


const rerenderEntireTree = () =>{
ReactDom.render(
	<BrowserRouter>
		<MyContext.Provider value = {store}>
			<App />
		</MyContext.Provider>
	</BrowserRouter>,
document.getElementById('root')
)
}

rerenderEntireTree()
store.subscribe(() => {
    rerenderEntireTree();
})