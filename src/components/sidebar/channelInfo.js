/** @jsx h */
import { h } from 'preact'
import styles from './channelInfo.css'

const ChannelInfo = ({ channelInfo }) => (
  <div class={styles.wrap} style={{backgroundImage: `url(${channelInfo.logo_url})`}}>
    <div class={styles.content}>
      <p class={styles.blurb}>{channelInfo.blurb}</p>
    </div>
  </div>
)

export default ChannelInfo
