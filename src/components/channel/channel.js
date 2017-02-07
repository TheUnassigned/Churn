/** @jsx h */
import { h, Component } from 'preact'
import Player from '../player/player'
import Sidebar from '../sidebar/sidebar'
import styles from './channel.css'

class Channel extends Component {

  render (props, state) {
    return (
      <div class={styles.container}>
        <div class={styles.player}>
          <Player />
        </div>
        <div class={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Channel
