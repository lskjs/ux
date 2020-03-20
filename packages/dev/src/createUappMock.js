export default function createUappMock(params = {}) {
  const uapp = {
    i18: { t: a => a },
    auth: { session: { user: {} } },
    t: a => a,
    config: {},
    api: {
      fetch: (...args) => console.log('api.get', ...args), // eslint-disable-line no-console
    },
    onError: e => console.error(e), // eslint-disable-line no-console
    ...params,
  };
  uapp.provide = () => ({ uapp, app: uapp, ...uapp });
  console.log(12312312312, uapp.provide());

  return uapp;
}
