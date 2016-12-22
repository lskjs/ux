import React, { Component } from 'react'
// import { markdown } from 'markdown'
import MarkdownIt from 'markdown-it'
import MarkdownItEmoji from 'markdown-it-emoji'
import hljs from 'highlight.js'

const md = (new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (_) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
}))
.use(MarkdownItEmoji)

// const demo = require('raw!./demo.md');
// function mdToHtml(str) {
//   return markdown.toHTML(str)
// }

function getHtml(obj = '', type = null) {
  // return md.render(demo);
  if (type === 'md') return md.render(obj)
  if (obj.__md) return md.render(obj.__md)
  if (typeof obj === 'string') {
    if (obj.substr(0, 3) === '@md') {
      return md.render(obj.substr(3))
    }
    if (obj.substr(0, 4) === '#!md') {
      return md.render(obj.substr(4))
    }
    return obj
  }
  return 'HZ ???'
}

export default class InnerHtml extends Component { //eslint-disable-line
  render() {
    const content = this.props.content || this.props.children
    return <div className='InnerHtml' dangerouslySetInnerHTML={ { __html: getHtml(content, this.props.type) } } />
  }
}
