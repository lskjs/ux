import React from 'react';
import { Nav, Li } from './Pagination.styles';

export default class Pagination extends React.Component {
	state = {
		total: this.props.total || 0,
		pageSize: this.props.pageSize || 10,
    currentPage: this.props.currentPage,
  };

  componentDidUpdate(prevProps) {
    const newProps = this.props.currentPage;
    if(prevProps.currentPage !== newProps) {
      this.setState((state, props) => ({
        currentPage: this.props.currentPage,
      }));
    }
  }

	render() {
    const pageNumbers = [];
    const maxPageNumber = Math.ceil(this.state.total / this.state.pageSize);
    for (let i = 1; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }
    
    return (
      <Nav>
        <ul>
          <li>
            <a onClick={(e) => this.props.clickPrev(e)} href='#'>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
              </svg>
            </a>
          </li>
            { pageNumbers.map(number => (
              <Li key={number} current={ this.state.currentPage === number } >
                <a onClick={(e) => this.props.paginate(e, number)} href='#'>
                  {number}
                </a>
              </Li>
            )) }
            <li>
              <a onClick={(e) => this.props.clickNext(e, maxPageNumber)} href='#'>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                </svg>
              </a>
            </li>
        </ul>
      </Nav>
    );
	};
}