# LSK T
 
> React components for internationalization

[![LSK logo](https://badgen.net/badge/icon/MADE%20BY%20LSK?icon=zeit&label&color=red&labelColor=red)](https://github.com/lskjs)
[![NPM version](https://badgen.net/npm/v/@lskjs/t)](https://www.npmjs.com/package/@lskjs/t)
[![Package size](https://badgen.net/bundlephobia/minzip/@lskjs/t)](https://bundlephobia.com/result?p=@lskjs/t)
[![License LSK](https://badgen.net/npm/license/@lskjs/t)](https://github.com/lskjs/lskjs/blob/master/LICENSE)
[![Chat on Telegram](https://img.shields.io/badge/Chat%20on-Telegram-brightblue.svg)](https://t.me/lskjs)

## Just press on t and take a result from @lskjs/t. Or in reverse.
<!-- <p align="center"> -->
![](/blog/images/t.png)

<!-- ## Getting Started -->
## Installation and usage

The easiest way to use is to install it from npm and build it into your app with Webpack.

```bash
npm install @lskjs/t
```

Then use it in your app:

```jsx
import t from '@lskjs/t';

const App = (
  <>
    <T name="page.header.title" />
    <T name="page.header.subtitle" />
  </>
);
```

_For more examples and usage, please refer_

- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#lskjs/t)
- [Storybook](https://lskjs.github.io/ux/?path=/story/t-t)


## Examples

```jsx
import T from '@lskjs/t/T';
import withT from '@lskjs/t/withT';

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

See the [more examples](https://lskjs.github.io/ux/?path=/story/t) in Storybook.
# More info

## Links

- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#lskjs/t)
- [Docs](https://lskjs.github.io/ux/styleguide/t)
- [Storybook](https://lskjs.github.io/ux/?path=/story/t)
- [Changelog](./CHANGELOG.md)

## Contact
- [Email](mailto:hi@isuvorov.com)
- [Telegram chat](https://t.me/lskjs)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://isuvorov.com"><img src="https://avatars2.githubusercontent.com/u/1056977?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Igor Suvorov</b></sub></a><br /><a href="lskjs/lskjs///commits?author=isuvorov" title="Code">💻</a> <a href="#design-isuvorov" title="Design">🎨</a> <a href="#ideas-isuvorov" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details


## Inspired by
- i18next
- mobx
- mobx-provider


## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request



