import React from 'react';
import Story from '@lskjs/dev/Story';
import Message from './Message';

export default ({ storiesOf }: { storiesOf: any }) =>
  storiesOf('chat').add('<Message />', () => (
    <Story>
      <Message
        authorName="Andy Warhole"
        time="21:40"
        text="Wonderful chat."
        isRightDir
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <Message
        authorName="Dim Dymich"
        time="21:45"
        text="How are you, guys? I've never been such happy like today!"
        showTitle
        showAvatar
        avatar="https://randomuser.me/api/portraits/men/2.jpg"
      />
      <Message
        authorName="Andy Warhole"
        time="21:40"
        text="Feeling great!"
        isRightDir
        avatar="https://randomuser.me/api/portraits/men/3.jpg"
      />
      <Message
        authorName="Phil Winters"
        time="21:42"
        text="Dear mobility officers in this letter I explain my intention and passion to be chosen for the student mobility program. I have chosen this certain university because the mix of subjects presented within the program really suits me hereby the interaction between financial accounting, business planning and financial markets course enables me to achieve the perception of business nature and its place in the world economy. Also this coherence partially provides me the ability to be employed in one of the top-notch investment funds what is one of my objectives in life. I can state that I match requirements related to being a student of the 3rd best business school in the Czech Republic (FBE) due to the fact of my diligence and zeal as well as confident level of English (B2). Moreover I have skills of analysis and visualizing data in Excel what is necessary to be a competent financier. Besides during my study I learned how to work provided short deadlines and quickly analyze the data. I am looking forward to be a participant of program in purpose to ameliorate my proficiency in finance and become closer to my target – create an investment fund until my 35. I chose this goal pursuant my preferences in life and the possibility to improve level of people’s life – make them richer. To gain the ability to be chosen I was preparing to the commission for 2 weeks and will do my best during the program."
        showTitle
        showAvatar
        avatar="https://randomuser.me/api/portraits/men/4.jpg"
      />
      <Message
        authorName="Dim Dymich"
        time="21:45"
        text="Let's go drunk 2morrrow! Catalina sucks!!!"
        showTitle
        showAvatar
        avatar="https://randomuser.me/api/portraits/men/5.jpg"
      />
    </Story>
  ));
