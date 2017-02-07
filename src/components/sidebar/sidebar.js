/** @jsx h */
import { h } from 'preact'
import Button from '../button/button'
import ChannelInfo from './channelInfo'
import ChannelVideos from './channelVideos'
import styles from './sidebar.css'

const Sidebar = props => {
  return (
    <div class={styles.sidebar}>
      <div class={styles.header}>
        <img class={styles.logo} src='http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/logo.png' alt='Churn TV' />
        <div class={styles.button}>
          <Button link='/' text='More channels' />
        </div>
      </div>
      <ChannelInfo channelInfo={props.channelInfo} />
      <ChannelVideos channelInfo={props.channelInfo} />
    </div>
  )
}

export default Sidebar
