import React from 'react';
import Image from './Image';
import ThemeInjector from '../../../ThemeInjector';
import '../../../styles/lib/antd.g.css';


module.exports = ({ storiesOf }) => (
  storiesOf('ui/Image', module)
    .add('default', () => (
      <ThemeInjector>
        <Image
          src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375"
        />
      </ThemeInjector>
    ))
);
