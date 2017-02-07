/** @jsx h */
import { h, Component } from 'preact'
import Player from '../player/player'
import Sidebar from '../sidebar/sidebar'
import styles from './channel.css'

class Channel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slug: 'testchannel',
      title: 'Test Channel',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unum dolor adispes ordinente.',
      logo_url: '',
      external_url: '',
      external_facebook: '',
      external_twitter: '',
      external_instagram: '',
      total_videos: 5,
      recent_videos: '',
      videos: ''
    }
  }

  render (props, state) {
    return (
      <div class={styles.container}>
        <div class={styles.player}>
          <Player />
        </div>
        <div class={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Channel
