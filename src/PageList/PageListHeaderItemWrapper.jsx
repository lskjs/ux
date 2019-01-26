
import React, { Component } from 'react';
import { ListTableHeader } from './PageList.styles';
import DEV from '../DEV';
import { contextToProps } from './PageListContext';

@contextToProps('HeaderItem')
class PageListHeaderItemWrapper extends Component {
  render() {
    let { children } = this.props;

    if (!children) {
      const { HeaderItem } = this.props;
      // console.log({ HeaderItem });
      if (!HeaderItem) return <DEV json="!HeaderItem" />;
      children = <HeaderItem />;
    }
    return (
      <ListTableHeader>
        {children}
      </ListTableHeader>
    );
  }
}

export default PageListHeaderItemWrapper;


// import React, { Component } from 'react';

// import DEV from '../DEV';
// import { ListTableHeader } from './PageList.styles';
// import { Consumer } from './PageListContext';

// export const contextToProps = Context => Component => props => (
//   <Context.Consumer>{context => <Component {...context} {...props} />}</Context.Consumer>
// );

// class PageListHeaderItem extends Component {
//   render() {
//     return (
//       <Consumer>
//         {({ pageList }) => {
//           let { children } = this.props;
//           if (!children) {
//             const {
//               HeaderItem = pageList.props.HeaderItem,
//             } = this.props;
//             if (!HeaderItem) return <DEV json="!HeaderItem" />;
//             children = <HeaderItem />;
//           }
//           return (
//             <ListTableHeader>
//               {children}
//             </ListTableHeader>
//           );
//         }}
//       </Consumer>
//     );
//   }
// }


// export default PageListHeaderItem;


// import React, { Component } from 'react';

// import DEV from '../DEV';
// import { ListTableHeader } from './PageList.styles';
// import { Consumer } from './PageListContext';
// import { inject } from 'mobx-react';

// @inject('HeaderItem')
// class PageListHeaderItem extends Component {
//   render() {
//     let { children, HeaderItem } = this.props;
//     if (!children) {
//       if (!HeaderItem) return <DEV json="!HeaderItem" />;
//       children = <HeaderItem />;
//     }
//     return (
//       <ListTableHeader>
//         {children}
//       </ListTableHeader>
//     );
//   }
// }


// export default PageListHeaderItem;
