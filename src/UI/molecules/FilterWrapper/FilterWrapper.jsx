import React, { PureComponent } from 'react';
import StatefulButton from '../../../StatefulButton';
import Button from '../../../Button';
import Modal, { Title, Footer, Content } from '../Modal';

class FilterWrapper extends PureComponent {
  render() {
    return (
      <Modal
        size="small"
        innerRef={(modal) => { this.modal = modal; }}
        trigger={trigger}
        onOpen={this.handleOpen}
        onChange={onChange && this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <Title>{title}</Title>
        <Content>
          <div style={{ height: 200 }}>
            <div id="root-widget" style={{ height: 200 }} />
          </div>
        </Content>
        <Footer>
          <StatefulButton
            paint="primary"
            id="submit-button"
            onClick={this.handleSubmit}
            componentClass={Button}
          >
            Подтвердить
          </StatefulButton>
          <Button
            paint="primary"
            view="text"
            onClick={() => this.modal.close()}
          >
            Отменить
          </Button>
        </Footer>
      </Modal>
    );
  }
}

export default FilterWrapper;
