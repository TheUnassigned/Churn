/** @jsx h */
import { h } from 'preact'
import styles from './videoListing.css'

const VideoListing = props => {
  const video = props.video
  return (
    <article class={styles.wrap} onClick={() => props.onSelect(video.youtube_id)} style={{backgroundImage: `url(https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg)`}}>
      <header class={styles.header}>
        <h1 class={styles.title}>
          {video.title}
          <span class={styles.duration}> - {video.duration}</span>
        </h1>
      </header>
      {props.isActive && <span class={styles.isActive}>Playing</span>}
    </article>
  )
}

export default VideoListing
