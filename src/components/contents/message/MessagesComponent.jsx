import React from 'react'
import {compose} from 'redux'
import {withAuthRedirectComponent} from '../../../hoc/AuthRedirect'
import Messages from './Messages'

const MessagesComponent = compose(withAuthRedirectComponent)(Messages)

export default MessagesComponent
