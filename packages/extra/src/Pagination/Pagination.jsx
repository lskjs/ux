import React from 'react';
import { Nav, Ul, Li, PaginationBtn } from './Pagination.styles';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default class Pagination extends React.Component {
	state = {
		total: this.props.total || 0,
		pageSize: this.props.pageSize || 10,
    currentPage: this.props.currentPage,
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.currentPage!==prevState.currentPage){
      return { currentPage: nextProps.currentPage};
    }
    else return null;
  }

	render() {
    const pageNumbers = [];
    const maxPageNumber = Math.ceil(this.state.total / this.state.pageSize);
    for (let i = 1; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }
    
    return (
      <Nav>  
        <Ul>
          <Li>
            <PaginationBtn onClick={() => this.props.handleChange('prev')}>
              <FaAngleLeft />
            </PaginationBtn>
          </Li>
            { pageNumbers.map(number => (
              <Li key={number} >
                <PaginationBtn 
                  onClick={() => this.props.handleChange('number', number)}
                  current={ this.state.currentPage === number }
                >
                  {number}
                </PaginationBtn>
              </Li>
            )) }
            <Li>
              <PaginationBtn onClick={() => this.props.handleChange('next', '', maxPageNumber)}>
                <FaAngleRight />
              </PaginationBtn>
            </Li>
        </Ul>
      </Nav>
    );
	};
}