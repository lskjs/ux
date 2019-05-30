export default function createUappMock({ locale }) {
  const user = {};
  const api = {
    fetch: (...args) => console.log('api.get', ...args),
  };
  const t = a => (a === 'locale' ? locale : a);
  const i18 = { t };
  const config = {};
  const uapp = {
    i18,
    user,
    t,
    config,
    api,
    isAdmin: () => true,
    getCalculation: () => ({
      feeRate: 0.2,
    }),
    modules: {
      upload: {
        uploadFile: async e => ({ url: '//picsum.photos/1280/720/?random' }),
        // uploadFile: async e => ({ url: e.name }),
      },
      billing: {
        stores: {
          Transactions: {
            getCardTokenSign: () => {},
          },
        },
      },
    },
    onError: e => console.error(e),
    provide: () => ({
      t,
      config,
      i18,
      user,
      uapp,
      api,
    }),
  };
  return uapp;
}
