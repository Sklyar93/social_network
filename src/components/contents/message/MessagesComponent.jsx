import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import Messages from './Messages'

const MessagesComponent = withAuthRedirectComponent(Messages)

export default MessagesComponent