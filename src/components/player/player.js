/** @jsx h */
import { h, Component } from 'preact'
import styles from './player.css'

class Player extends Component {
  constructor (props) {
    super(props)

    this.player
    this.YT_API_src = 'https://www.youtube.com/iframe_api'

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  componentDidMount () {
    const _this = this

    // Load YouTube api
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = _this.YT_API_src
    document.body.appendChild(script)

    // Create player
    window.onYouTubeIframeAPIReady = () => {
      _this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: this.props.activeVideo,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          showinfo: 0,
          color: 'white'
        },
        events: {
          'onReady': _this.onPlayerReady,
          'onStateChange': _this.onPlayerStateChange
        }
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.activeVideo !== this.props.activeVideo) {
      this.player.loadVideoById(this.props.activeVideo, 0)
    }
  }

  onPlayerReady (e) {
    e.target.playVideo()
  }

  onPlayerStateChange (e) {
    if (e.data == YT.PlayerState.ENDED) {
      this.props.onVideoEnded()
    }
  }

  render (props, state) {
    return (
      <div class={styles.player}>
        <div id='player' />
      </div>
    )
  }
}

export default Player
