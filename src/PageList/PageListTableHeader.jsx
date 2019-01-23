import React, { Component } from 'react';

import { ListTableHeader } from './_List.styles';

class PageListTableHeader extends Component {
  render() {
    const {
      HeaderItem,
      // columnsSize,
    } = this.props;
    return (
      <ListTableHeader>
        <HeaderItem />
      </ListTableHeader>
    );
  }
}

export default PageListTableHeader;


// <ListTableHeader>

// <Row
//   gap={24}
//   height={48}
// >
//   {cols.map((col, i) => {
//   return (
//     <Col
//       index={i}
//     >
//       <HeaderTitle>
//         <If condition={col.isSortable}>
//           {/* <ArrowWrapper>
//             {this.getArrow(col.key)}
//           </ArrowWrapper> */}
//         </If>
//         {col.title}
//       </HeaderTitle>
//     </Col>
//     );
//   })
// }
// </Row>
// </ListTableHeader>
