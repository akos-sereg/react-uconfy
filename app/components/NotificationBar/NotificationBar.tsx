import * as React from 'react'
import {useState} from "react"
import styles from './style.scss'

type Props = {
  handle: NotificationListener
};

export class NotificationListener {
  handler: Function

  showMessage(text: string) {
    if (this.handler) {
      this.handler(text)
    } else {
      // wait until component gets rendered and handler is subscribed
      const self = this
      setTimeout(() => {
        if (self.handler) {
          self.handler(text)
        }
      }, 500)
    }
  }

  subscribe(handler: Function) {
    this.handler = handler
  }
}

const NotificationBar = (props: Props) => {

  const [isDisplayed, setDisplayed] = useState(false)
  const [message, setMessage] = useState('')

  props.handle.subscribe((text: string) => {
    setMessage(text)
    setDisplayed(true)
  })

  const handleClose = (e: any) => {
    e.preventDefault()
    setDisplayed(false)
  }

  return (
    <div>
      <div className={`alert alert-warning ${isDisplayed ? '' : styles.hidden} ${styles.messagePanel}`} role="alert">
        {message}
        <a href={'#'} onClick={handleClose}>x</a>
      </div>
    </div>
  );
};

export default NotificationBar;
