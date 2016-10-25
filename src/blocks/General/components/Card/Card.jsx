import React, { Component } from 'react';
import Link from '../Link';

export default class Card extends Component {
  render() {
    let children = this.props.children
    if (this.props.wrap) {
      children = <CardContent>
        {children}
      </CardContent>
    }
    return <DefaultCard {...this.props} children={children} />
  }
}

export class CardSeparator extends Component {
  render() {
    return <div className="separator"/>
  }
}
Card.Separator = CardSeparator


export class CardContent extends Component {
  render() {
    return <div className="card-text">
      {this.props.children}
    </div>
  }
}
Card.Content = CardContent


export class CardItem extends Component {
  render() {
    return <div className="card-text">
      {this.props.children}
    </div>
  }
}
Card.Item = CardItem

export class CardButtons extends Component {
  render() {
    return <div className="card-buttons">
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




class DefaultCard extends Component {
  render() {
    const { children, title, header } = this.props;
    return (
      <div className="card">
        {title && <div className="card-title">{title}</div>}
        {children}
      </div>
    );
  }
}
