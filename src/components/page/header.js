/** @jsx h */
import { h } from 'preact'
import page from './page.css'
import styles from './header.css'

const Header = props => {
  return (
    <div>
      <div class={styles.header}>
        <div class={page.pageWidth}>
          <img class={styles.logo} src='http://newchurn.s3-website-ap-southeast-2.amazonaws.com/img/logo.png' alt='Churn TV' />
        </div>
      </div>
      <div class={styles.headerGap} />
    </div>
  )
}

export default Header
