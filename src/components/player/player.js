/** @jsx h */
import { h } from 'preact'
import styles from './player.css'

const Player = props => {
  return (
    <div class={styles.player}>
      <div id='player' />
    </div>
  )
}

export default Player
