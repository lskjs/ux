import React, { Component } from 'react'
import importcss from 'importcss'

@importcss(require('./Layout.global.css'))
export default class Layout extends Component {
  constructor() {
    super()
  }
  render() {
    return <div styleName="layout" className="app-inner2">
      {this.props.children}
    </div>
  }
}
