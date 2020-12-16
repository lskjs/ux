import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Nav, Ul, Li, PaginationBtn, Input, GoTo } from './Pagination.styles';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total || 0,
      pageSize: this.props.pageSize || 10,
      currentPage: this.props.currentPage || 1,
      disabled: this.props.disabled || false,
      hideOnSinglePage: this.props.hideOnSinglePage || false,
      showTotal: this.props.showTotal || false,
      showJumper: this.props.showJumper || false,
      jumperNumber: (Math.ceil(this.props.total / this.props.pageSize) <=3) ? 1 : 5,
      goTo: this.props.goTo || false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArrows = this.handleArrows.bind(this);
    this.jumperClick = this.jumperClick.bind(this);
    this.handleGoTO = this.handleGoTO.bind(this);
  }

  handleChange(number) {
    const { onChange } = this.props; 
    this.setState({ currentPage: number });
    if (onChange) onChange(number);
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
    return this.handleChange(page);
  }

  jumperClick(typeOfButton, maxPageNumber) {
    let page = this.state.currentPage;
    if (typeOfButton === 'prev') {
      if (this.state.currentPage > 1) {
        if (this.state.currentPage - this.state.jumperNumber <= 0){
          this.setState({ currentPage: this.state.currentPage - 1 });
          page = page - 1;
        } else {
          this.setState({ currentPage: this.state.currentPage - this.state.jumperNumber });
          page = page - this.state.jumperNumber;
        }
      }
    } else if (typeOfButton === 'next') {
      if (this.state.currentPage < maxPageNumber) {
        if (this.state.currentPage + this.state.jumperNumber >= maxPageNumber){
          this.setState({ currentPage: this.state.currentPage +  1 });
          page = page + 1;
        } else {
          this.setState({ currentPage: this.state.currentPage + this.state.jumperNumber });
          page = page + this.state.jumperNumber;
        }
      }
    }
    return this.handleChange(page);
  }

  handleGoTO = (e) => {
    const currentInputValue = Number(document.getElementById('goToInput').value);
    if (e.type === 'click') {
      this.handleChange(currentInputValue);
    }
  };

  render() {
    if (this.state.hideOnSinglePage === true && this.state.total <= this.state.pageSize) {
      return null;
    }

    let pageNumbers = [];
    const maxPageNumber = Math.ceil(this.state.total / this.state.pageSize);
    for (let i = 1; i <= maxPageNumber; i++) {
      pageNumbers.push(i);
    }

    let jumperPrev = null;
    let jumperNext = null;
    let firstBtn = null;
    let lastBtn = null;

    if (this.state.showJumper && (maxPageNumber >= 5)){ 

      jumperPrev = (
        <Li>
          <PaginationBtn onClick={() => this.jumperClick('prev')}>
          ...
          </PaginationBtn>
        </Li>
      );

      jumperNext = (
        <Li>
          <PaginationBtn onClick={() => this.jumperClick('next', maxPageNumber)}>
          ...
          </PaginationBtn>  
        </Li>
      );

      firstBtn = (
        <Li>
          <PaginationBtn 
            onClick={() => this.handleChange(1)}
            current={this.state.currentPage === 1}
            disabled={this.props.disabled}
          >
            {1}
          </PaginationBtn>
        </Li>
      );

      lastBtn = (
        <Li>
          <PaginationBtn 
            onClick={() => this.handleChange(maxPageNumber)}
            current={this.state.currentPage === maxPageNumber}
            disabled={this.props.disabled}
          >
            {maxPageNumber}
          </PaginationBtn>
        </Li>
      );
  
      let rePageNumbers = [];
      
      // C = 1
      if (this.state.currentPage === 1){
        rePageNumbers.push(pageNumbers[1],  pageNumbers[2], pageNumbers[3]);
      } 
      // C = max
      else if (this.state.currentPage === maxPageNumber){
        rePageNumbers.push(pageNumbers[pageNumbers.length - 4], pageNumbers[pageNumbers.length - 3],  pageNumbers[pageNumbers.length - 2]);
      } 
      // C + 1 = max
      else if (this.state.currentPage + 1 === maxPageNumber){
        rePageNumbers.push(pageNumbers[this.state.currentPage - 2], pageNumbers[this.state.currentPage - 1]);
      }
      // C + 2 = max
      else if (this.state.currentPage + 2 === maxPageNumber){
        rePageNumbers.push(pageNumbers[this.state.currentPage - 1], pageNumbers[this.state.currentPage]);
      } 
      // C - 1 = min
      else if (this.state.currentPage - 1 === 1){
        rePageNumbers.push(pageNumbers[this.state.currentPage - 1], pageNumbers[this.state.currentPage]);
      } 
      // C - 2 = min
      else if (this.state.currentPage - 2 === 1){
        rePageNumbers.push(pageNumbers[this.state.currentPage - 2], pageNumbers[this.state.currentPage - 1], pageNumbers[this.state.currentPage]);
      } 
      // regular case
      else {
        rePageNumbers.push( pageNumbers[this.state.currentPage - 1], pageNumbers[this.state.currentPage], pageNumbers[this.state.currentPage + 1] );
      }

      pageNumbers = rePageNumbers;
    }

    let totalText = null;
    if (this.state.showTotal) {
      totalText = (
        <Li>
          {this.props.showTotal(this.state.total)}
        </Li>
      );
    }

    let goTo = null;
    if (this.state.goTo){
      goTo = (
        <Li>
          <Input id="goToInput" type="number" min="1" max={maxPageNumber} placeholder="Page number" />
          <GoTo type="button" onClick={(e) => this.handleGoTO(e)}>
            <FaAngleRight />
          </GoTo>
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
          {firstBtn}
          {jumperPrev}
            {pageNumbers.map(number => (
              <Li key={number}>
                <PaginationBtn 
                  onClick={() => this.handleChange(number)}
                  current={this.state.currentPage === number}
                  disabled={this.props.disabled}
                >
                  {number}
                </PaginationBtn>
              </Li>
            ))}
            {jumperNext}
            {lastBtn}
            <Li>
              <PaginationBtn 
                onClick={() => this.handleArrows('next', maxPageNumber)}
                disabled={this.props.disabled || !(this.state.currentPage < maxPageNumber)}
              >
                <FaAngleRight />
              </PaginationBtn>
            </Li>
            {goTo}
        </Ul>
      </Nav>
    );
  };
}