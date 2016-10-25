import A from './A'

module.exports = ({ storiesOf, action }) => {
  return storiesOf('General/A', module)
    .add('default', () => {
      return <A href='//google.com' />
    })
}
