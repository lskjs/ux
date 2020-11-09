import React from 'react';
import Story from '@lskjs/dev/Story';
import random from 'lodash/random';
import Chat from './Chat';

const rndNum = random(99);

const avatarImg = `https://randomuser.me/api/portraits/men/${rndNum}.jpg`;

const serverMessages = [
  {
    createdAt: Date.now() + 100,
    content: {
      text: 'Соня видится с Натой только ночью.....',
    },
    user: { _id: 1, name: 'Ингвар Суворов', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 100,
    content: {
      text: 'Ок',
    },
    user: { _id: 1, name: 'Ингвар Суворов', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 100,
    content: {
      text: 'Братишки как дела?',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 100,
    content: {
      text:
        'У знакомого на 6s перестала работать подсветка экрана, когда он маски в инстаграме открыл и тел нагрелся сильна',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 1000,
    content: {
      text: 'Шо там такое в этих масках, братишки? Ни разу не открывал',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 3000,
    content: {
      text: 'Вышел из чата всего неделю назад, а уже научился nodejsу',
    },
    user: { _id: 3, name: 'Гришота Кусок', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 7000,
    content: {
      text: 'Это же братишка злой, а не я -- смотрите сообщения братишки после этого :)',
    },
    user: { _id: 4, name: 'Анорик', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 11000,
    content: {
      text: '@immuzov мы все знаем что это ты написал',
    },
    user: { _id: 5, name: 'Pavel E', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 13000,
    content: {
      text: 'Что именно?',
    },
    user: { _id: 6, name: 'Immuzov', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 15000,
    content: {
      text: 'http://www.durgasoft.com/',
    },
    user: { _id: 7, name: 'Artem', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 20000,
    content: {
      text:
        'Dear mobility officers in this letter I explain my intention and passion to be chosen for the student mobility program. I have chosen this certain university because the mix of subjects presented within the program really suits me hereby the interaction between financial accounting, business planning and financial markets course enables me to achieve the perception of business nature and its place in the world economy. Also this coherence partially provides me the ability to be employed in one of the top-notch investment funds what is one of my objectives in life. I can state that I match requirements related to being a student of the 3rd best business school in the Czech Republic (FBE) due to the fact of my diligence and zeal as well as confident level of English (B2). Moreover I have skills of analysis and visualizing data in Excel what is necessary to be a competent financier. Besides during my study I learned how to work provided short deadlines and quickly analyze the data. I am looking forward to be a participant of program in purpose to ameliorate my proficiency in finance and become closer to my target – create an investment fund until my 35. I chose this goal pursuant my preferences in life and the possibility to improve level of people’s life – make them richer. To gain the ability to be chosen I was preparing to the commission for 2 weeks and will do my best during the program.',
    },
    user: { _id: 3, name: 'Левый чел', avatar: avatarImg },
  },
  {
    createdAt: Date.now() + 25000,
    content: {
      text: 'ХУЙ СЕБЕ ПОФИКСИ УЁБАК',
    },
    user: { _id: 2, name: 'Сева Слева', avatar: avatarImg },
  },
];

class ChatComponent extends React.Component {
  state = {
    messages: [],
  };

  constructor() {
    super();
    serverMessages.forEach((serverMessage) => {
      const { messages } = this.state;
      const timeout = serverMessage.createdAt - Date.now();
      setTimeout(() => {
        // this.state.messages.push(serverMessage);
        this.setState({
          messages: [...messages, serverMessage],
        });
      }, timeout);
    });
  }
  render() {
    const { messages } = this.state;
    return <Chat items={messages} userId={2} />;
  }
}

export default ({ storiesOf }) => {
  return storiesOf('chat/Chat').add('Chat', () => (
    <Story>
      <ChatComponent />
    </Story>
  ));
};
