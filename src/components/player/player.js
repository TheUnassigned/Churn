/** @jsx h */
import { h, Component } from 'preact'
import styles from './player.css'

const YT_API_src = 'https://www.youtube.com/iframe_api'

class Player extends Component {
  constructor (props) {
    super(props)
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  componentDidMount () {
    const _this = this

    // create promise player on api load and ready
    _this.player = new Promise(resolve => {
      window.onYouTubeIframeAPIReady = () => {
        const _player = new window.YT.Player('player', {
          videoId: this.props.activeVideo,
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
            color: 'white',
            disablekb: 1,
            autohide: 1,
            iv_load_policy: 3
          },
          events: {
            'onReady': e => resolve(_player),
            'onStateChange': _this.onPlayerStateChange
          }
        })
      }
    })

    // Load YouTube api
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = YT_API_src
    document.body.appendChild(script)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.activeVideo !== this.props.activeVideo) {
      this.player.then(p => p.loadVideoById(this.props.activeVideo, 0))
    }
  }

  onPlayerStateChange (e) {
    if (e.data === YT.PlayerState.ENDED) {
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
