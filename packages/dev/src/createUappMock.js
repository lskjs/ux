export default function createUappMock({ locale }) {
  const auth = { session: { user: {} } };
  const api = {
    fetch: (...args) => console.log('api.get', ...args),
  };
  const t = a => (a === 'locale' ? locale : a);
  const i18 = { t };
  const config = {};
  const uapp = {
    i18,
    auth,
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
      config,
      i18,
      auth,
      uapp,
      api,
    }),
  };
  return uapp;
}
