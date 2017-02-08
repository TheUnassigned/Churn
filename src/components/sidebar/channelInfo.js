/** @jsx h */
import { h } from 'preact'
import styles from './channelInfo.css'

const ChannelInfo = props => {
  const info = props.channelInfo;
  return (
    <div class={styles.wrap} style={{backgroundImage: `url(${info.logo_url})`}}>
      <div class={styles.content}>
        <p class={styles.blurb}>{info.blurb}</p>
      </div>
    </div>
  )
}

export default ChannelInfo
