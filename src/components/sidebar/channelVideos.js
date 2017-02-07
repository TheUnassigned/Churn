/** @jsx h */
import { h } from 'preact'
import styles from './channelVideos.css'

const ChannelVideos = props => {
  const videos = props.channelInfo.videos
  return (
    <div class={styles.wrap}>
      {videos.map(video => {
        return <div>{video}</div>
      })}
    </div>
  )
}

export default ChannelVideos
