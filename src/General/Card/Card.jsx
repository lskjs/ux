import React, { Component } from 'react';
import Link from '../Link';
import importcss from 'importcss';

@importcss(require('./Card.css'))
export default class Card extends Component {
  render() {
    let children = this.props.children
    if (this.props.wrap) {
      children = <CardContent>
        {children}
      </CardContent>
    }
    const { title, header } = this.props;
    return (
      <div styleName="card">
        <If condition={this.props.corner}>
          <span style={{position:'absolute', right: 30, top: 25}}>
            {this.props.corner}
          </span>
        </If>
        {title && <div styleName="card-title">{title}</div>}
        {children}
      </div>
    );

  }
}

@importcss(require('./Card.css'))
export class CardSeparator extends Component {
  render() {
    return <div styleName="separator"/>
  }
}
Card.Separator = CardSeparator


@importcss(require('./Card.css'))
export class CardContent extends Component {
  render() {
    return <div styleName="card-text">
      {this.props.children}
    </div>
  }
}
Card.Content = CardContent


@importcss(require('./Card.css'))
export class CardItem extends Component {
  render() {
    return <div styleName="card-text">
      {this.props.children}
    </div>
  }
}
Card.Item = CardItem

@importcss(require('./Card.css'))
export class CardPhoto extends Component {
  render() {
    return <div styleName="card-photo" style={{ backgroundImage: `url(${this.props.image})` }}>
      {this.props.children}
      <div styleName="cp-username">{this.props.title}</div>
    </div>

  }
}
Card.Photo = CardPhoto

@importcss(require('./Card.css'))
export class CardNumber extends Component {
  render() {
    return <div styleName="cr-item">
      <div styleName="cri-head">{this.props.title}</div>
      <div styleName="cri-val">{this.props.value}</div>
    </div>
  }
}
Card.Number = CardNumber

@importcss(require('./Card.css'))
export class CardNumbers extends Component {
  render() {
    return <div styleName="card-rating">
      <If condition={this.props.items}>
        <For each="item" index="idx" of={this.props.items}>
          <CardNumber key={idx} {...item} />
        </For>
      </If>
      {this.props.children}
    </div>
  }
}
Card.Numbers = CardNumbers


@importcss(require('./Card.css'))
export class CardButtons extends Component {
  render() {
    return <div styleName="card-buttons">
      { this.props.children }
      {/* <For each="item" index="idx" of={this.props.items}>
      <For each="item" index="idx" of={this.props.items}>
         <span key={ idx }>{ item }</span>
         <span key={ idx + '_2' }>Static Text</span>
      </For> */}
    </div>
  }
}
Card.Item = CardItem



@importcss(require('./Card.css'))
class PostCard extends Component {
  render() {
    const { id, title, text, header, likes, onLike } = this.props;
    return (
      <div styleName="card">
        <div styleName="card-photo" style={{ backgroundImage: `url(${header.image})` }}>
          <div styleName="cp-username">{header.title}</div>
        </div>
        <div styleName="card-text">
          {text}
        </div>
        <div styleName="separator large"/>
        <div styleName="card-footer">
          <Link to={`/review/${id}`} styleName="cf-more">Просмотр...</Link>
          <button onClick={onLike} styleName="cf-likes">
            <div styleName="cfl-count">{likes}</div>
            <div styleName="cfl-heart"/>
          </button>
        </div>
      </div>
    );
  }
}
