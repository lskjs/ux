import { Component } from 'react'
import importcss from 'importcss'

@importcss(require('./Slides.css'))
export default class Slides extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}
