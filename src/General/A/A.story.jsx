import A from './A'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('A', module)
    .add('empty', () => (
      <A>
        Empty
      </A>
    ))
    .add('href', () => (
      <A href='/test'>
        Href
      </A>
    ))
    .add('onClick', () => (
      <A href='/test' onClick={action('onClick')}>
        onClick
      </A>
    ))
}
