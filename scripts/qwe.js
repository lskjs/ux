async module(name) {
  if (this.modules[name]) {
    reutrn this.modules[name]
  }


  const module =  await this.modules[name]()
  await module.startOnce()
  return module;
}


router({uapp}) {


  const i18 = uapp.module('i18');
  const db = uapp.module('db');


  return page.component(PageView, { i18, db })
}




Winget() {
  render() {
    const { i18 } = this.props;
    await i18
  }

}








class Uapp {

  getModules() {
   return {
     appstate: () => import('./modules/appstate'),
     i18: () => import('./modules/i18'),
     db: () => require('./modules/db').default,
   }
  }

  this.modaules =  this.getModules();

  async init() {

    this.ьщ(this.db);

    const { db, i18 } = await this.modules('db', 'i18')



    {
      const { db, i18 } = await this.modules('db', 'i18')

    }

    (await this.db()).asfd



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

//
// loader: {
//   Bar: () => import('./Bar'),
//     i18n: () => fetch('./i18n/bar.json').then(res => res.json()),
// },
//
//
//
// await


const ChannelPage = Loadable.Map({
  loader: {
    Bar: () => import('./Bar'), //1000
    i18n: () => fetch('./i18n/bar.json').then(res => res.json()), // 10000
  },
  loading: Loading,
  delay: 200,
  render: ChannelPageView,
  // render(loaded, props) {
  //   let Bar = loaded.Bar.default;
  //   let i18n = loaded.i18n;
  //   return <Bar {...props} i18n={i18n}/>;
  // }
});





const render = ({ listStore, i18, admin }) => (
  <Page>
    <List listStore={listStore} />


    <Router
      router={({uapp}) => {
        const i18 = uapp.module('i18');
        return {i18};

      }}
      loading={Loading}
      component={Component}
    />
    {/*  <>*/}

    {/*  <Widget i18={i18} admin={admin}/>*/}
    {/*</Router>*/}
  </Page>
)


















<Page asdasd={123qwe}>



</Page>

Page {

  const {i18} = this.props
  return (
    <Provider i18={i18}>

    </Provider>
  )
}


@inject('uapp')
({ uapp }) => {
  const {uapp} = this.props;
  const Widget = Loadable.Map({
    loader: pick(uapp.modules, ['i18']),
    render({ i18, Bar }, props) {
      let Bar = Bar.default;
      let i18n = i18n;
      return <Bar {...props} i18n={i18n}/>;
    }
  });

  return (
    <Page>
      <Widget />
    </Page>
  )
}




const Page = () => Loadable.Map({
  loader: pick(uapp.modules, ['i18']),
  render({ i18, Bar }, props) {
    let Bar = Bar.default;
    let i18n = i18n;
    return <Bar {...props} i18n={i18n}/>;
  }
});

















