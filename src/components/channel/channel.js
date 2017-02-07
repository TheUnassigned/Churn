/** @jsx h */
import { h, Component } from 'preact'
import Player from '../player/player'
import Sidebar from '../sidebar/sidebar'
import styles from './channel.css'

class Channel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      channelInfo: {
        slug: 'testchannel',
        title: 'Test Channel',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unum dolor adispes ordinente.',
        logo_url: 'http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/channel.png',
        external_url: '',
        external_facebook: '',
        external_twitter: '',
        external_instagram: '',
        total_videos: 5,
        recent_videos: '',
        videos: ['8LSwyqBLsZ0','Dws45IJ_8Io','kvji3CYA51E','SGYhsHH1404','iSBbMhd43o']
      }
    }
  }

  render (props, state) {
    return (
      <div class={styles.container}>
        <div class={styles.player}>
          <Player />
        </div>
        <div class={styles.sidebar}>
          <Sidebar channelInfo={state.channelInfo} />
        </div>
      </div>
    )
  }
}

export default Channel
