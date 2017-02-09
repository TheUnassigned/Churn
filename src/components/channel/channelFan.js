/** @jsx h */
import { h } from 'preact'
import ChannelTile from './channelTile'
import styles from './channelFan.css'

const ChannelFan = ({ channel }) => {
  const vid1 = channel.recent_videos[0]
  const vid2 = channel.recent_videos[1]
  const vid3 = channel.recent_videos[2]
  const vid4 = channel.recent_videos[3]
  return (
    <div class={styles.wrap}>

      <div class={styles.item}>
        <div class={[styles.cover, styles.coverLeft, styles.cover1].join(' ')}>
          <img src={`https://img.youtube.com/vi/${vid1.youtube_id}/mqdefault.jpg`} title={vid1.title} />
        </div>
      </div>

      <div class={styles.item}>
        <div class={[styles.cover, styles.coverLeft, styles.cover2].join(' ')}>
          <img src={`https://img.youtube.com/vi/${vid2.youtube_id}/mqdefault.jpg`} title={vid2.title} />
        </div>
      </div>

      <div class={styles.item}>
        <div class={[styles.cover, styles.coverChannel].join(' ')}>
          {/* <ChannelTile channel={channel} /> */}
          <img src={channel.logo_url} title={channel.title} />
        </div>
      </div>

      <div class={styles.item}>
        <div class={[styles.cover, styles.coverRight, styles.cover3].join(' ')}>
          <img src={`https://img.youtube.com/vi/${vid3.youtube_id}/mqdefault.jpg`} title={vid3.title} />
        </div>
      </div>

      <div class={styles.item}>
        <div class={[styles.cover, styles.coverRight, styles.cover4].join(' ')}>
          <img src={`https://img.youtube.com/vi/${vid4.youtube_id}/mqdefault.jpg`} title={vid4.title} />
        </div>
      </div>

    </div>
  )
}

export default ChannelFan
