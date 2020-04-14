/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import Story from '@lskjs/dev/Story';
import { injectGlobal } from 'emotion';

// import Image from '@lskjs/image';
// import Tag from '@lskjs/tag/Tag';
import { Article, H1, H2, P, Hr, Blockquote, Code, Pre } from '.';
import resetcss from './resetcss';

const ArticleInfo = Article;
const A = 'a';
const Image = () => null;
const Tag = () => null;

export default ({ storiesOf }) => {
  storiesOf('typo/Typo', module)
    .add('Article 1', () => {
      injectGlobal(resetcss());
      /* eslint-disable prettier/prettier */
      return (
        <Story>
          <Article>
            <ArticleInfo>
              <H1>Getting Started With React.js — Part 1</H1>
              <H2>Laying the groundwork for your first React application</H2>
              <A href="https://medium.com/better-programming/getting-started-with-react-js-part-1-59598ef17780">https://medium.com/better-programming/getting-started-with-react-js-part-1-59598ef17780</A>
            </ArticleInfo>
            <P>In this piece, we’ll understand what React is, how it works, and why it’s used. We’ll also build our first React application. Since understanding React.js will take time if you’re new to it, we’ll lay most of the groundwork in this part and use that knowledge, along with more, to build our first React.js application in the next part.</P>
            <Hr />
            <H1>React.js in Layman’s Terms</H1>
            <H2>What is React?</H2>
            <P>First, let’s understand what React is. It’s a JavaScript library for DOM manipulation that handles navigation through HTML5 push state. To put it simply, it’s a view library that uses components to change content on the page without refreshing, the core principle behind single-page applications. It was developed by Facebook in 2013 and can be used for mobile, web, and VR applications. The reason why it’s so popular today is the strong community of developers who make open source packages for it, updating it with new and great features.</P>
            <H2>Should you learn React?</H2>
            <P>Yes, if you’re a front-end developer, you should be familiar with at least one popular front-end framework.</P>
            <H2>When should you learn React?</H2>
            <P>Novice developers often make the mistake of jumping into complex frameworks without understanding the concepts behind them. If you have a basic knowledge of HTML and CSS, a good grasp of key JavaScript concepts (such as advanced array methods, promises, callbacks, async, await, etc.), and are familiar with DOM manipulation, only then you should decide to learn a front-end framework. Also, knowledge of programming fundamentals, familiarity with syntax, understanding of functional programming, and object-oriented programming will come in handy while learning these things.</P>
            <Hr />
            <H2>Create React App</H2>
            <P>We can also use <Code>create-react-app</Code> without installing it. Simply run:</P>
            <Pre>
              npx create-react-app todo-list
              cd todo-list
              npm start
            </Pre>
            <H1>What We’ll Build Today</H1>
            <P>We’ll make a simple to-do list application where we can add and delete items from a list. While building this application, we’ll learn about states, components, virtual DOM, props, and some other basic concepts of React to get you started with it.</P>
            <P>Heads up: If you want to know if it’s the right time for you to start learning a framework, here’s a challenge: Try creating this application using pure vanilla JavaScript. Should be a cakewalk. If you’re able to do it, then you’re good to go ahead. Otherwise, you must first brush up your knowledge of JavaScript and JavaScript DOM.</P>
            <iframe src="https://giphy.com/embed/LMhly3Yf7Ur7WYOrO3" width="480" height="366" frameBorder="0" className="giphy-embed" allowFullScreen />
            <H2 />
            <P />
            <div>
              <Tag>JavaScript</Tag>
              <Tag>Reactjs</Tag>
              <Tag>React</Tag>
              <Tag>Web Development</Tag>
              <Tag>Programming</Tag>
            </div>
          </Article>
        </Story>
      );
      /* eslint-enable prettier/prettier */
    })
    /* eslint-disable prettier/prettier */
    .add('Article 2', () => (
      <Story>
        <Article>
          <link href="https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2.css" rel="stylesheet" />
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" /> */}
          <Image
            src="https://miro.medium.com/max/5000/1*Z4FQ2qjqaQGKX1GlD77bOg.png"
            placeholder="https://miro.medium.com/max/200/1*Z4FQ2qjqaQGKX1GlD77bOg.png?q=20"
            width="2500"
            height="600"
            role="presentation"
          />
          <H1>Why can’t we read anymore?</H1>
          Or, can books save us from what digital does to our brains?
          <div>
            Author
            <a href="https://medium.com/@arturkornakov/5-%D0%B8%D0%B4%D0%B5%D0%B9-vue-js-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5-%D0%B2%D1%8B-%D0%BF%D0%BE%D0%BB%D1%8E%D0%B1%D0%B8%D1%82%D0%B5-%D0%B4%D0%B0%D0%B6%D0%B5-%D0%B5%D1%81%D0%BB%D0%B8-react-%D0%B2%D0%B0%D1%81-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E-%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-33bcbeba2916#.ql864n1w6">
              source
            </a>
          </div>
          <P>
            В основе любой популярной библиотеки лежит идея, которая отличает её от остальных. В Angular — это директивы и
            two-way data-binding, в React — компонентный подход, Virtual DOM, однонаправленный поток данных, SSR; Polymer
            приносит будущие web components в современные браузеры. Некоторые библиотеки делают упор на быстродействие,
            пытаясь выкинуть из популярных всю ненужную шелуху (Inferno, Preact), другие, по мнению их авторов, впитывают в
            себя самое лучшее из разных подходов. Vue.js как раз из последних.
            <br />
            Досконально изучать каждый не имеет смысла (и не хватит времени), но понимание идей, лежащих в основе
            популярных, поможет вам выбрать подходящий инструмент под ваши задачи.
          </P>
          <H2>Vue.js?</H2>
          <P>
            На что похож Vue при первом знакомстве?
            <br />
            Те, кто использовал React и Angular, сразу увидят много общего — компонентный подход, lifecycle методы,
            unidirectional data-flow c передачей props вниз по дереву, virtual DOM, директивы, vuex (redux-like), vue
            router. Такая схожесть, при наличии опыта работы с одной из библиотек, позволит вам быстро понять, почему многие
            выбирают именно Vue.
          </P>
          <Image
            src="https://miro.medium.com/max/2450/1*Dx_jN9L8UMcYPiY-9kwQRA.jpeg"
            placeholder="https://miro.medium.com/max/60/1*Dx_jN9L8UMcYPiY-9kwQRA.jpeg?q=20"
            width="2500"
            height="600"
            role="presentation"
          />
          <P>
            В этой заметке я постарался осветить основные идеи Vue.js, которые показались мне интересными или
            отличительными, при этом намерено не затрагивая вопросы быстродействия, коммьюнити или эко-системы.
          </P>
          <Hr />
          <H2>1. Реактивность</H2>
          <P>
            Реактивность — это когда данные внутри приложения напрямую связаны с данными в отображении и их изменение в
            любой части мгновенно влияет на перерисовку отображения.
            <br />
            Как реализуется реактивность в React? Кратко говоря, все данные, которые мы используем в приложении хранятся в
            {' '}
            <strong>state</strong>
            {' '}
            и
            <strong>props</strong>
            , при необходимости изменить данные, мы изменяем их через
            {' '}
            <strong>setState</strong>
            , дальше React определяет какие части приложения зависели от измененных данных и
            перерисовывает их.
          </P>
          {/* https://medium.com/@hughmcguire/why-can-t-we-read-anymore-503c38c131fe */}
          <Blockquote>
            <P>
              Smokers who are the most optimistic about their ability to resist temptation are the most likely to relapse
              four months later, and overoptimistic dieters are the least likely to lose weight. (Kelly McGonigal: The
              Willpower Instinct)
            </P>
          </Blockquote>
        </Article>
      </Story>
    ));
    /* eslint-enable prettier/prettier */
};
