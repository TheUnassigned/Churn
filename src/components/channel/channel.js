/** @jsx h */
import { h, Component } from 'preact'
import Player from '../player/player'
import Sidebar from '../sidebar/sidebar'
import styles from './channel.css'

const Channel = props => {
  const activeVideo = props.channel.recent_videos[props.activeVideo].youtube_id
  return (
    <div class={styles.container}>
      <div class={styles.player}>
        <Player
          activeVideo={activeVideo}
          onVideoEnded={props.handleVideoEnded}
          />
      </div>
      <div class={styles.sidebar}>
        <Sidebar
          channelInfo={props.channel}
          activeVideo={activeVideo}
          onUpdateActiveVideo={props.handleUpdateActiveVideo}
          />
      </div>
    </div>
  )
}

export default Channel
