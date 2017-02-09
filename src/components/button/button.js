/** @jsx h */
import { h } from 'preact'
import styles from './button.css'

const Button = ({ link, text }) => (
  <a href={link} class={styles.btn}>{text}</a>
)

export default Button
