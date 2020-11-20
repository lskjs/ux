import React from 'react';
import { Nav, Ul, Li, PaginationBtn } from './Pagination.styles';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default class Pagination extends React.Component {
	state = {
		total: this.props.total || 0,
		pageSize: this.props.pageSize || 10,
    currentPage: this.props.currentPage,
    disabled: this.props.disabled || false,
    hideOnSinglePage: this.props.hideOnSinglePage,
    showTotal: this.props.showTotal
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.currentPage!==prevState.currentPage){
      return { currentPage: nextProps.currentPage};
    }
    else return null;
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
              onClick={() => this.props.handleChange('prev')}
              disabled={this.props.disabled}
            >
              <FaAngleLeft />
            </PaginationBtn>
          </Li>
            { pageNumbers.map(number => (
              <Li key={number} >
                <PaginationBtn 
                  onClick={() => this.props.handleChange('number', number)}
                  current={ this.state.currentPage === number }
                  disabled={this.props.disabled}
                >
                  {number}
                </PaginationBtn>
              </Li>
            )) }
            <Li>
              <PaginationBtn 
                onClick={() => this.props.handleChange('next', '', maxPageNumber)}
                disabled={this.props.disabled}
              >
                <FaAngleRight />
              </PaginationBtn>
            </Li>
        </Ul>
      </Nav>
    );
	};
}