import React, { Component } from 'react';
import { Editor } from 'slate-react';
import MDSerializer from 'slate-md-serializer';
import HTMLSerializer from 'slate-html-serializer';
import renderMark from './renderMark';
import renderNode from './renderNode';

const mdSerializer = new MDSerializer();

const rules = [
  {
    serialize(obj, children) {
      if (obj.object === 'block') {
        return <p className={obj.data.get('className')}>{children}</p>
      }
      if (obj.object === 'string') {
        return children.split('\n').reduce((array, text, i) => {
          if (i !== 0) array.push(<br key={i} />)
          array.push(text)
          return array;
        }, []);
      }
    },
  },
];

const htmlSerializer = new HTMLSerializer({ rules });

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }
  getMarkdown = () => mdSerializer.serialize(this.editor.current.state.value);
  getHTML = () => htmlSerializer.serialize(this.editor.current.state.value);
  getValue = () => this.editor.current.state.value;
  handleChange = (value) => {
    const values = {
      html: this.getHTML(),
      markdown: this.getMarkdown(),
      value,
    };
    if (this.props.onChange) {
      this.props.onChange(values);
    }
  }
  render() {
    const { initialValue, onChange, ...props } = this.props;
    return (
      <Editor
        ref={this.editor}
        defaultValue={initialValue}
        renderMark={renderMark}
        renderNode={renderNode}
        onChange={this.handleChange}
            // decorateNode={this.decorateNode}
        {...props}
      />
    );
  }
}
export default RichEditor;
