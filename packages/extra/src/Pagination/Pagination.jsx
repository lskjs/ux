import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Nav, Ul, Li, PaginationBtn } from './Pagination.styles';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total || 0,
      pageSize: this.props.pageSize || 10,
      currentPage: this.props.currentPage,
      disabled: this.props.disabled || false,
      hideOnSinglePage: this.props.hideOnSinglePage,
      showTotal: this.props.showTotal
    };
    this.handleArrows = this.handleArrows.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ( nextProps.currentPage !== prevState.currentPage ) {
      return { 
        currentPage: nextProps.currentPage
      };
    }
    else return null;
  }

  handleArrows(typeOfButton, maxPageNumber) {
    let page = this.state.currentPage;
    if (typeOfButton === 'prev') {
      if (this.state.currentPage > 1) {
        this.setState({ currentPage: this.state.currentPage - 1 });
        page--;
      }
    } else if (typeOfButton === 'next') {
      if (this.state.currentPage < maxPageNumber) {
        this.setState({ currentPage: this.state.currentPage + 1 });
        page++;
      }
    }
    return this.props.handleChange(page);
  }

  render() {
    if (this.state.hideOnSinglePage === true && this.state.total <= this.state.pageSize) {
      return null;
    }

    const pageNumbers = [];
    const maxPageNumber = Math.ceil(this.state.total / this.state.pageSize);
    for (let i = 1; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }

    let totalText = null;
    if (this.state.showTotal) {
      totalText = (
        <Li>
          {this.props.showTotal(this.state.total)}
        </Li>
      );
    }
  
    return (
      <Nav>  
        <Ul>
          {totalText}
          <Li>
            <PaginationBtn 
              onClick={() => this.handleArrows('prev')}
              disabled={this.props.disabled || !(this.state.currentPage > 1)}
            >
              <FaAngleLeft />
            </PaginationBtn>
          </Li>
            { pageNumbers.map(number => (
              <Li key={number} >
                <PaginationBtn 
                  onClick={() => this.props.handleChange(number)}
                  current={ this.state.currentPage === number }
                  disabled={this.props.disabled}
                >
                  {number}
                </PaginationBtn>
              </Li>
            )) }
            <Li>
              <PaginationBtn 
                onClick={() => this.handleArrows('next', maxPageNumber)}
                disabled={this.props.disabled || !(this.state.currentPage < maxPageNumber)}
              >
                <FaAngleRight />
              </PaginationBtn>
            </Li>
        </Ul>
      </Nav>
    );
  };
}