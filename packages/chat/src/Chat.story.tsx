import React from 'react';
import Story from '@lskjs/dev/Story';
import ChatExample, { ChatItemType } from './ChatExample';

const getAvatar = () => `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 1000 % 7)}.jpg`;

const items: ChatItemType[] = [
  {
    createdAt: new Date(Date.now() + 100),
    content: {
      text: 'Соня видится с Натой только ночью.....',
    },
    user: { _id: 1, name: 'Ингвар Суворов', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 200),
    content: {
      text: 'Ок',
    },
    user: { _id: 1, name: 'Ингвар Суворов', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 300),
    content: {
      text: 'Братишки как дела?',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 400),
    content: {
      text:
        'У знакомого на 6s перестала работать подсветка экрана, когда он маски в инстаграме открыл и тел нагрелся сильна',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 1000),
    content: {
      text: 'Шо там такое в этих масках, братишки? Ни разу не открывал',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 3000),
    content: {
      text: 'Вышел из чата всего неделю назад, а уже научился nodejsу',
    },
    user: { _id: 3, name: 'Гришота Кусок', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 7000),
    content: {
      text: 'Это же братишка злой, а не я -- смотрите сообщения братишки после этого :)',
    },
    user: { _id: 4, name: 'Анорик', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 11000),
    content: {
      text: '@immuzov мы все знаем что это ты написал',
    },
    user: { _id: 5, name: 'Pavel E', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 13000),
    content: {
      text: 'Что именно?',
    },
    user: { _id: 6, name: 'Immuzov', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 15000),
    content: {
      text: 'http://www.durgasoft.com/',
    },
    user: { _id: 7, name: 'Artem', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 20000),
    content: {
      text:
        'Dear mobility officers in this letter I explain my intention and passion to be chosen for the student mobility program. I have chosen this certain university because the mix of subjects presented within the program really suits me hereby the interaction between financial accounting, business planning and financial markets course enables me to achieve the perception of business nature and its place in the world economy. Also this coherence partially provides me the ability to be employed in one of the top-notch investment funds what is one of my objectives in life. I can state that I match requirements related to being a student of the 3rd best business school in the Czech Republic (FBE) due to the fact of my diligence and zeal as well as confident level of English (B2). Moreover I have skills of analysis and visualizing data in Excel what is necessary to be a competent financier. Besides during my study I learned how to work provided short deadlines and quickly analyze the data. I am looking forward to be a participant of program in purpose to ameliorate my proficiency in finance and become closer to my target – create an investment fund until my 35. I chose this goal pursuant my preferences in life and the possibility to improve level of people’s life – make them richer. To gain the ability to be chosen I was preparing to the commission for 2 weeks and will do my best during the program.',
    },
    user: { _id: 3, name: 'Левый чел', avatar: getAvatar() },
  },
  {
    createdAt: new Date(Date.now() + 25000),
    content: {
      text: 'ХУЙ СЕБЕ ПОФИКСИ УЁБАК',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: getAvatar() },
  },
];


export default ({ storiesOf }: any) => {
  return storiesOf('chat').add('ChatExample', () => (
    <Story>
      <ChatExample items={items} userId={2} />
    </Story>
  ));
};
