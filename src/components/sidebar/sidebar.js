/** @jsx h */
import { h } from 'preact'
import Button from '../button/button'
import ChannelTile from '../channel/channelTile'
import VideoListing from '../video/videoListing'
import styles from './sidebar.css'

const Sidebar = ({ channelInfo, activeVideo, onUpdateActiveVideo }) => (
  <div class={styles.sidebar}>
    <div class={styles.header}>
      <img class={styles.logo} src='http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/logo.png' alt='Churn TV' />
      <div class={styles.button}>
        <Button link='/' text='More channels' />
      </div>
    </div>
    <ChannelTile channel={channelInfo} />
    <div class={styles.videoList}>
      {channelInfo.recent_videos.map(video => {
        return (
          <div class={styles.videoListItem}>
            <VideoListing video={video} isActive={activeVideo === video.youtube_id} onSelect={onUpdateActiveVideo} />
          </div>
        )
      })}
    </div>
  </div>
)

export default Sidebar
