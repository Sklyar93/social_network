import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import store from './redux/redux-store'
import {Provider} from 'react-redux'
import App from './components/App'
import 'normalize.css'


ReactDOM.render(
	<BrowserRouter>
		<Provider store = {store}>
			<App />
		</Provider>
	</BrowserRouter>,
document.getElementById('root')
)

