/** @jsx h */
import { h, Component } from 'preact'
import Player from '../player/player'
import styles from './style.css'

class Channel extends Component {

  render (props, state) {
    return (
      <div class={styles.container}>
        <div class={styles.player}>
          <Player />
        </div>
        <div class={styles.sidebar}>

        </div>
      </div>
    )
  }
}

export default Channel
