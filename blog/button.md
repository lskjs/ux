## LSK Button

React component for buttons creation

[![LSK logo](https://badgen.net/badge/icon/MADE%20BY%20LSK?icon=zeit&label&color=red&labelColor=red)](https://github.com/lskjs)
[![NPM version](https://badgen.net/npm/v/@lskjs/button)](https://www.npmjs.com/package/@lskjs/button)
[![Package size](https://badgen.net/bundlephobia/minzip/@lskjs/button)](https://bundlephobia.com/result?p=@lskjs/button)
[![License LSK](https://badgen.net/npm/license/@lskjs/button)](https://github.com/lskjs/lskjs/blob/master/LICENSE)
[![Chat on Telegram](https://img.shields.io/badge/Chat%20on-Telegram-brightblue.svg)](https://t.me/lskjs)

<!-- <p align="center">
  <img width="460" height="300" src="http://www.fillmurray.com/460/300">
</p> -->
-----


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them


### Installing


```sh
npm i @lskjs/button
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc




https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Button.js

appearance // atlas
variants = [ // bootstrap
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



views = [
   transparent
   text
  
]

alternatives = [
  normal,
  outline,
  empty // link
]

shape = [
  circle
]

sizes = [xs, sm, md, lg, xl]

states = [ active, focusable, disabled] 

colors={{}}

## Examples

```jsx
 <Button variant="primary">Primary</Button>
 <Button variant="outline-secondary">Secondary</Button>
 <Button as="input" type="submit" value="Submit" />
 <Button size="lg">Lg</Button>
 <Button block>Block button</Button>
 <Button active>Active button</Button>
 <Button disabled>Disabled button</Button>
 <Button type="primary" shape="circle" icon={<SearchOutlined />} />
 ```
   
## Theme
1. change variants colors
2. new variants from theme

## HOCS

withFetch
withState
withRipple

## Inspired by
- https://react-bootstrap.netlify.com/components/buttons/#buttons
- https://atlaskit.atlassian.com/packages/core/button
- http://elemental-ui.com/buttons
- https://reakit.io/docs/button/
- https://ant.design/components/button/

## Cases

### Loading button

-lsk-lsk-lsk-

### Icon button

-lsk-lsk-lsk-

### Stateful button

-lsk-lsk-lsk-

## Next features
- ButtonGroup
- Dropdown
- Menu
