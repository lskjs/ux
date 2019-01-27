import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import debounce from 'lodash-decorators/debounce';
import SelectStore from './SelectStore';
import ProtoListStore from './ProtoListStore';

export default class PageListStore extends ProtoListStore {
  @observable filter = {};
  @observable showFilter = false;
  @observable tab = null;
  @observable sort = {};
  @observable search = '';
  @observable fetched = false;

  constructor(...args) {
    super(...args);
    if (!this.selectStore) this.selectStore = new SelectStore();
  }

  setStateAndUpdate(state) {
    this.setState(state);
    this.update();
  }

  @debounce(50)
  async update() {
    await this.fetch();
    this.fetched = true;
  }

  /**
   * Getters and map
   */
  getVisibleItems() {
    const items = this.items || [];
    if (!this.cachable) {
      return items;
    }
    return items.slice(this.skip, this.skip + this.limit);
  }

  map(...args) {
    return this.getVisibleItems().map(...args);
  }

  /**
   * Pages
   */

  getCurrentPage() {
    return Math.floor(this.skip / this.limit) + 1;
  }
  // from 1
  // null если count === null
  getTotalPages() {
    if (this.count === null) return null;
    return Math.floor(this.count / this.limit) + 1;
  }
  /**
    * @param {Number} page - page from 1
    */
  @autobind
  setPage(page) {
    this.setStateAndUpdate({
      skip: Math.floor((page - 1) * this.limit),
    });
  }

  /**
   * Handlers
   */

  @autobind
  setTab(tab) {
    this.setStateAndUpdate({
      tab,
      skip: 0,
    });
  }

  @autobind
  setLimit(limit) {
    this.setStateAndUpdate({
      limit,
    });
  }

  @autobind
  setFilter(values) {
    this.setStateAndUpdate({
      filter: values,
      skip: 0,
    });
  }

  @autobind
  toggleFilter() {
    this.setState({
      showFilter: !this.showFilter,
    });
  }

  @autobind
  setSearch(search) {
    this.setStateAndUpdate({
      search,
      skip: 0,
    });
  }

  @autobind
  handleChangeLimit(limit) {
    this.setStateAndUpdate({
      limit,
    });
  }

  @autobind
  clearFilter() {
    this.setStateAndUpdate({
      filter: {},
      search: '',
      skip: 0,
    });
  }

  @autobind
  removeTag(key) {
    this.setStateAndUpdate({
      filter: {
        ...this.filter,
        [key]: undefined,
      },
      skip: 0,
    });
  }

  /**
   * Пока выбирается только одно поле
   * Первый клик - равен -1, те сортирвка по возрастанию (возможно нужно вторым аргументов задавать)
   * @param {String} field - поле для которого инверсируют сортировку
   */
  @autobind
  toggleSort(field) {
    // пока только одна сортировка
    const value = this.sort && this.sort[field];
    this.setStateAndUpdate({
      sort: {
        [field]: value === 1 ? -1 : 1,
      },
      skip: 0,
    });
  }
}
