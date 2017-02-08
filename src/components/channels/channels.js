/** @jsx h */
import { h, Component } from 'preact'
import Header from '../page/header'
import Hero from '../page/hero'
import Footer from '../page/footer'
import page from '../page/page.css'
import styles from './channels.css'

class Channels extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeVideo: 0,
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
        videos: ['8LSwyqBLsZ0','Dws45IJ_8Io','kvji3CYA51E','SGYhsHH1404','vy_Ca_sCVjs']
      }
    }
  }

  render (props, state) {
    return (
      <div class={page.container}>
        <div class={page.header}>
          <Header />
        </div>
        <div class={page.hero}>
          <Hero />
        </div>
        <div class={page.main}>
          <div class={styles.favourites}>
            <div class={page.section}>
              <div class={page.pageWidth}>
                <h2 class={page.sectionTitle}>Our favourite channels</h2>

              </div>
            </div>
          </div>
          <div class={styles.more}>
            <div class={page.section}>
              <div class={page.pageWidth}>
                <h2 class={page.sectionTitle}>More channels</h2>

              </div>
            </div>
          </div>
        </div>
        <div class={page.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Channels
