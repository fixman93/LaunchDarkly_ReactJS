import { Component } from 'react'

// hoc
import asTogglesConsumer from '../../hoc/asTogglesConsumer'

class ToggleRouter extends Component {
  render() {
    const { toggleName, flags, children, offFallback, ldClient, testV } = this.props
    console.log('name', testV)
    ldClient && ldClient.identify({ key: "test", country: "ttt" }).then(res => {
      console.log('res', toggleName, res)
      // newVal = res
    })
    .catch(e => {
      console.log('e', e)
    })
    // console.log('dsadsada', newVal, checkUser)
    return flags[toggleName] ? children : offFallback
  }
}

export default asTogglesConsumer(ToggleRouter)
