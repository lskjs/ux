class Uapp {

  getModules() {
   return {
     appstate: () => import('./modules/appstate'),
     i18: () => import('./modules/i18'),
   }
  }

  provide() {
    return {
      ...super.provide(),
      i18: this.modules.i18
    }
  }
}


async injectAndAwait(props) {
  const i18 = await props.i18;
  const res = {};
  if (!i18.runned) {
    await i18.run();
    res.i18 = i18;
  }
  return res;
}

@injectAndAwait('i18')
class Component {
  render() {
    const {i18} = this.props;
    return <div />
  }

}
