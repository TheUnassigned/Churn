/** @jsx h */
import { h, Component } from 'preact'
import Channel from '../channel/channel'
import Channels from '../channels/channels'
import styles from './app.css'
import findIndex from 'lodash/findIndex'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeVideo: 0,
      activeChannel: 0,
      channels: [
        {
          slug: 'testchannel',
          title: 'Test Channel',
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unum dolor adispes ordinente.',
          logo_url: 'http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/channel.png',
          external_url: '',
          external_facebook: '',
          external_twitter: '',
          external_instagram: '',
          total_videos: 5,
          recent_videos: [
            {
              channel_position: 0,
              youtube_id: '8LSwyqBLsZ0',
              title: '17 Types of Ah-Liens',
              duration: '0:34'
            },
            {
              channel_position: 1,
              youtube_id: 'Dws45IJ_8Io',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 2,
              youtube_id: 'kvji3CYA51E',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 3,
              youtube_id: 'SGYhsHH1404',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 4,
              youtube_id: 'vy_Ca_sCVjs',
              title: 'Merry Christmas',
              duration: '0:18'
            }
          ],
          videos: ['8LSwyqBLsZ0', 'Dws45IJ_8Io', 'kvji3CYA51E', 'SGYhsHH1404', 'vy_Ca_sCVjs']
        },
        {
          slug: 'testchannel2',
          title: 'Another Channel',
          blurb: 'Sed unum dolor adispes ordinente. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          logo_url: 'http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/channel.png',
          external_url: '',
          external_facebook: '',
          external_twitter: '',
          external_instagram: '',
          total_videos: 5,
          recent_videos: [
            {
              channel_position: 0,
              youtube_id: 'Dws45IJ_8Io',
              title: '17 Types of Ah-Liens',
              duration: '0:34'
            },
            {
              channel_position: 1,
              youtube_id: '8LSwyqBLsZ0',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 2,
              youtube_id: 'kvji3CYA51E',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 3,
              youtube_id: 'SGYhsHH1404',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 4,
              youtube_id: 'vy_Ca_sCVjs',
              title: 'Merry Christmas',
              duration: '0:18'
            }
          ],
          videos: ['8LSwyqBLsZ0', 'Dws45IJ_8Io', 'kvji3CYA51E', 'SGYhsHH1404', 'vy_Ca_sCVjs']
        },
        {
          slug: 'testchannel',
          title: '9Gag',
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unum dolor adispes ordinente.',
          logo_url: 'http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/channel.png',
          external_url: '',
          external_facebook: '',
          external_twitter: '',
          external_instagram: '',
          total_videos: 5,
          recent_videos: [
            {
              channel_position: 0,
              youtube_id: 'kvji3CYA51E',
              title: 'Channel 3',
              duration: '0:34'
            },
            {
              channel_position: 1,
              youtube_id: 'Dws45IJ_8Io',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 2,
              youtube_id: '8LSwyqBLsZ0',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 3,
              youtube_id: 'SGYhsHH1404',
              title: 'Test',
              duration: '0:34'
            },
            {
              channel_position: 4,
              youtube_id: 'vy_Ca_sCVjs',
              title: 'Merry Christmas',
              duration: '0:18'
            }
          ],
          videos: ['8LSwyqBLsZ0', 'Dws45IJ_8Io', 'kvji3CYA51E', 'SGYhsHH1404', 'vy_Ca_sCVjs']
        }
      ]
    }

    this.handleUpdateActiveVideo = this.handleUpdateActiveVideo.bind(this)
    this.handleVideoEnded = this.handleVideoEnded.bind(this)
  }

  handleUpdateActiveVideo (newId) {
    const newActiveVideo = findIndex(this.state.channels[this.state.activeChannel].recent_videos, { 'youtube_id': newId })
    this.setState({
      activeVideo: newActiveVideo
    })
  }

  handleVideoEnded () {
    this.setState({
      activeVideo: this.state.activeVideo + 1
    })
  }

  render (props, state) {
    const activeChannel = state.channels[state.activeChannel]
    return (
      <div>
        {/*
        <Channel
          channel={activeChannel}
          activeVideo={state.activeVideo}
          handleUpdateActiveVideo={this.handleUpdateActiveVideo}
          handleVideoEnded={this.handleVideoEnded}
          />
        */}
        <Channels
          channels={state.channels}
          />

      </div>
    )
  }
}

export default App
