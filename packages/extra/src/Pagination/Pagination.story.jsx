import React from 'react';
import Pagination from './Pagination';

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "1 sunt aut facere ",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "2 qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "3 ea molestias",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "4 eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "5 nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "6 dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  }
];

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: this.props.pageSize,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number){
    this.setState((state, props) => ({
      currentPage: number,
    }));
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.pageSize;
    const indexOfFirstPost = indexOfLastPost - this.state.pageSize;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div>
          <div>
            {currentPosts.map(post => (
              <div key={post.id}>
                <b>{post.title}</b>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
          <Pagination 
            total={posts.length} 
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            handleChange={this.handleChange}
          />
        </div>
    );
  }
}

export default ({ storiesOf }) => { 
  storiesOf('extra/Pagination', module)
  .add('Default', () => (
    <Parent pageSize={2} />
  ))
  .add('Disabled', () => (
    <Pagination disabled total={posts.length} pageSize={2} />
  ))
  .add('hideOnSinglePage', () => (
    <Pagination total={1} hideOnSinglePage />
  ))
  .add('showTotal', () => (
    <Pagination total={50} showTotal={total => `Total ${total} pages`} />
  ))
}