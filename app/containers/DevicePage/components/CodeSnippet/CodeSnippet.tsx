import * as React from 'react'
import { useState } from 'react'
import styles from './style.scss'

interface Props {
  template: string
  params: any
}

const CodeSnippet = (props: Props) => {

  let code = props.template
  Object.keys(props.params).forEach((paramName) => {
    code = code.replaceAll(`{${paramName}}`, props.params[paramName])
  })

  return <pre className={styles.container}>
      {code}
    </pre>
}

export default CodeSnippet;
