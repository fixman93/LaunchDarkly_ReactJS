import React, { Component } from 'react'
import { withLDProvider } from 'launchdarkly-react-client-sdk'

export default function(WrappedComponent) {
  const WrappedComponentWithToggles = withLDProvider(
    {
      clientSideID: '5e6b5244991b6d0aa71724ef',
      user: {
        key: "test",
        name: "123"
      },
      options: { streaming: true }
    }
  )(WrappedComponent)

  return class extends Component {
    render() {
      return <WrappedComponentWithToggles {...this.props} />
    }
  }
}
