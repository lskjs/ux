# LSK – Button

> React component for buttons creation

[![LSK logo](https://badgen.net/badge/icon/MADE%20BY%20LSK?icon=zeit&label&color=red&labelColor=red)](https://github.com/lskjs)
[![NPM version](https://badgen.net/npm/v/@lskjs/button)](https://www.npmjs.com/package/@lskjs/button)
[![Package size](https://badgen.net/bundlephobia/minzip/@lskjs/button)](https://bundlephobia.com/result?p=@lskjs/button)
[![License LSK](https://badgen.net/npm/license/@lskjs/button)](https://github.com/lskjs/lskjs/blob/master/LICENSE)
[![Chat on Telegram](https://img.shields.io/badge/Chat%20on-Telegram-brightblue.svg)](https://t.me/lskjs)

## Just press on Button and take a result from @lskjs/button. Or in reverse.
<!-- <p align="center"> -->
![](/blog/images/button.png)

<!-- ## Getting Started -->
## Installation and usage

The easiest way to use is to install it from npm and build it into your app with Webpack.

```bash
npm install @lskjs/button
```

Then use it in your app:

```jsx
import Button from '@lskjs/button';

const App = (
  <Button variant="primary">Primary button</Button>
);
```

_For more examples and usage, please refer_

- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#2-%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D1%83-lskjsbutton-%D0%BD%D0%B0-cra-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3)

- [Storybook](https://lskjs.github.io/ux/?path=/story/button-button--paint)


## Props
- appearance // atlas
- variants = [ // bootstrap
  default
  primary
  secondary
  success
  warning
  danger
  info
  light
  dark
]
- views = [
   transparent
   text
]
- alternatives = [
  normal,
  outline,
  empty // link
]

- shape = [
  circle
]

- sizes = [xs, sm, md, lg, xl]

 - states = [ active, focusable, disabled] 

- colors={{}}

See the [props documentation](https://lskjs.github.io/ux/styleguide/button) for complete documentation on the props react-select supports.

## Examples

```jsx
import Button from '@lskjs/button/Button';
import ButtonGroup from '@lskjs/button/ButtonGroup';

export default () => (
  <ButtonGroup>
    <Button variant="primary">Primary button</Button>
    <Button variant="outline-secondary">Secondary Button</Button>
    <Button as="input" type="submit" value="Submit Button" />
    <Button size="lg">Large Button</Button>
    <Button block>Block Button</Button>
    <Button active>Active Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
  </ButtonGroup>
)
 ```

See the [more examples](https://lskjs.github.io/ux/?path=/story/button-button--paint) in Storybook.

# Details
   
## Theme
1. change variants colors
2. new variants from theme

## HOCS
пока нету но скоро будет

- withFetch
- withState
- withRipple

## Cases

### Loading button
```js
// TODO: 
```

### Icon button
```js
// TODO: 
```

### Stateful button
```js
// TODO: 
```

## Next features
- ButtonGroup
- Dropdown
- Menu


# More info

## Links

- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#2-%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D1%83-lskjsbutton-%D0%BD%D0%B0-cra-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3)
- [Docs](https://lskjs.github.io/ux/styleguide/button)
- [Storybook](https://lskjs.github.io/ux/?path=/story/button-button--paint)
- [Changelog](./CHANGELOG.md)
- Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Contact
- [Email](mailto:hi@isuvorov.com)
- [Telegram chat](https://t.me/lskjs)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://isuvorov.com.com"><img src="https://avatars2.githubusercontent.com/u/1056977?v=4" width="100px;" alt=""/><br /><sub><b>Igor Suvorov</b></sub></a><br /><a href="#question-isuvorov" title="Answering Questions">💬</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Code">💻</a> <a href="#design-isuvorov" title="Design">🎨</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Documentation">📖</a> <a href="#example-isuvorov" title="Examples">💡</a> <a href="#ideas-isuvorov" title="Ideas, Planning, & Feedback">🤔</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/pulls?q=is%3Apr+reviewed-by%3Aisuvorov" title="Reviewed Pull Requests">👀</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Tests">⚠️</a> <a href="#a11y-isuvorov" title="Accessibility">️️️️♿️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


## Inspired by
- https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Button.js
- https://react-bootstrap.netlify.com/components/buttons/#buttons
- https://atlaskit.atlassian.com/packages/core/button
- http://elemental-ui.com/buttons
- https://reakit.io/docs/button/
- https://ant.design/components/button/


## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


