import React from 'react'

// components
import Nav from './components/Nav'

//hoc
import withTogglesProvider from './hoc/withTogglesProvider'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
    </div>
  )
}

export default withTogglesProvider(App)
