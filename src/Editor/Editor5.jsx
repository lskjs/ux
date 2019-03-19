import React, { Component } from 'react';
import { Block, Mark } from 'slate';
import { Editor } from 'slate-react';
import MDSerializer from 'slate-md-serializer';
import HTMLSerializer from 'slate-html-serializer';

import Bold from 'react-icons2/mdi/format-bold';
import Italic from 'react-icons2/mdi/format-italic';
import Underline from 'react-icons2/mdi/format-underline';
import Code from 'react-icons2/mdi/code-tags';
import Strikethrough from 'react-icons2/mdi/format-strikethrough';
import Heading1 from 'react-icons2/mdi/format-header-1';
import Heading2 from 'react-icons2/mdi/format-header-2';
import Heading3 from 'react-icons2/mdi/format-header-3';
import Heading4 from 'react-icons2/mdi/format-header-4';
import Heading5 from 'react-icons2/mdi/format-header-5';
import Heading6 from 'react-icons2/mdi/format-header-6';
import Paragraph from 'react-icons2/mdi/format-paragraph';
import Quote from 'react-icons2/mdi/format-quote-open';
import OrderedList from 'react-icons2/mdi/format-list-numbers';
import BulletedList from 'react-icons2/mdi/format-list-bulleted';

import { Button, Icon, Toolbar, EditorWrapper } from './components';
import renderMark from './renderMark';
import renderNode from './renderNode';
import jsonToValue from './jsonToValue';

const defaultValue = jsonToValue(require('./initialValue'));
const mdSerializer = new MDSerializer();
const DEFAULT_NODE = 'paragraph';

const rules = [
  {
    serialize(obj, children) {
      if (obj.object === 'block') {
        return <p className={obj.data.get('className')}>{children}</p>;
      }
      if (obj.object === 'string') {
        return children.split('\n').reduce((array, text, i) => {
          if (i !== 0) array.push(<br key={i} />);
          array.push(text);
          return array;
        }, []);
      }
      return <div>unsupported</div>;
    },
  },
];

const htmlSerializer = new HTMLSerializer({ rules });

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || defaultValue,
    };
    this.editor = React.createRef();
  }
  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.current.toggleMark(type);
  }
  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { current } = editor;
    const { value } = current;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'ordered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        current
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('ordered-list');
      } else {
        current.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some((block) => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        current
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('ordered-list');
      } else if (isList) {
        current
          .unwrapBlock(type === 'bulleted-list' ? 'ordered-list' : 'bulleted-list')
          .wrapBlock(type);
      } else {
        current.setBlocks('list-item').wrapBlock(type);
      }
    }
  }
  getMarkdown = () => mdSerializer.serialize(this.state.value);
  getHTML = () => htmlSerializer.serialize(this.state.value);
  hasMark = (type) => {
    const { value } = this.state;
    return value.activeMarks.some(mark => mark.type == type);
  }
  hasBlock = (type) => {
    const { value } = this.state;
    return value.blocks.some(node => node.type == type);
  }
  handleChange = ({ value }) => {
    this.setState({ value }, () => {
      const values = {
        html: this.getHTML(),
        markdown: this.getMarkdown(),
      };
      if (this.props.onChange) {
        this.props.onChange(values);
      }
    });
  }
  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  }
  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list', 'ordered-list'].includes(type)) {
      const { value: { document, blocks } } = this.state;
      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  }
  render() {
    const { onChange, ...props } = this.props;
    return (
      <EditorWrapper>
        <Toolbar>
          {this.renderMarkButton('bold', <Bold />)}
          {this.renderMarkButton('italic', <Italic />)}
          {this.renderMarkButton('underlined', <Underline />)}
          {this.renderMarkButton('deleted', <Strikethrough />)}
          {this.renderMarkButton('code', <Code />)}
          {this.renderBlockButton('paragraph', <Paragraph />)}
          {this.renderBlockButton('heading1', <Heading1 />)}
          {this.renderBlockButton('heading2', <Heading2 />)}
          {this.renderBlockButton('heading3', <Heading3 />)}
          {this.renderBlockButton('heading4', <Heading4 />)}
          {this.renderBlockButton('heading5', <Heading5 />)}
          {this.renderBlockButton('heading6', <Heading6 />)}
          {this.renderBlockButton('block-quote', <Quote />)}
          {this.renderBlockButton('ordered-list', <OrderedList />)}
          {this.renderBlockButton('bulleted-list', <BulletedList />)}
        </Toolbar>
        <Editor
          ref={this.editor}
          value={this.state.value}
          renderMark={renderMark}
          renderNode={renderNode}
          onChange={this.handleChange}
              // decorateNode={this.decorateNode}
          {...props}
        />
      </EditorWrapper>
    );
  }
}

export default RichEditor;
