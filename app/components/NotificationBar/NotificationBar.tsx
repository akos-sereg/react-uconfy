import * as React from 'react'
import {useState} from "react"
import styles from './style.scss'

type Props = {
  handle: NotificationListener,
  onClose?: Function
};

export class NotificationListener {
  handler: Function
  message: string

  showMessage(text: string) {
    this.message = text
    if (this.handler) {
      this.handler(text)
    }
  }

  subscribe(handler: Function) {
    this.handler = handler

    if (this.message) {
      // in case showMessage was called already, executing handler, so that message can be displayed
      this.handler(this.message)
      this.message = null
    }
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
    if (props.onClose) {
      try {
        props.onClose()
      } catch (error) {
        console.log('Consumer component threw an error')
        console.error(error)
      }
    }
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
