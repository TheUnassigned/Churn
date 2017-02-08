/** @jsx h */
import { h, Component } from 'preact'
import Channels from '../channels/channels'
import styles from './app.css'

class App extends Component {

  render (props, state) {
    return (
      <div>
        <Channels />
      </div>
    )
  }
}

export default App
