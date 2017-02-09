/** @jsx h */
import { h } from 'preact'
import styles from './channelTile.css'

const ChannelTile = ({ channel }) => {
  return (
    <div class={styles.wrap} style={{backgroundImage: `url(${channel.logo_url})`}}>
      <div class={styles.overlay}>
        <div class={styles.content}>
          <h2 class={styles.title}>{channel.title}</h2>
          <p class={styles.blurb}>{channel.blurb}</p>
        </div>
      </div>
    </div>
  )
}

export default ChannelTile
