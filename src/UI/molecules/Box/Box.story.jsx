import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import Box from './Box';
import AnimatedLink from '../AnimatedLink';
import '../../../antd.g.css';

import BoxDivider from '../../atoms/BoxDivider';

module.exports = ({ storiesOf }) => (
  storiesOf('Box', module)
    .add('Default', () => (
      <ThemeInjector>
        <Box padded>
          <Box.Header>
            Box Header
          </Box.Header>
          <Box.Body>
            This is the body of box component.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur, quasi nam.
          </Box.Body>
          <Box.Footer>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('DefaultBadged', () => (
      <ThemeInjector>
        <Box padded>
          <Box.Header>
            Box Header
          </Box.Header>
          <Box.Badge pill primary>
            Badge
          </Box.Badge>
          <Box.Body>
            This is the body of box component.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tenetur, quasi nam.
          </Box.Body>
          <Box.Footer>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('HeaderLight', () => (
      <ThemeInjector>
        <Box>
          <Box.Header padded paint="light">
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('BodyLight', () => (
      <ThemeInjector>
        <Box>
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded paint="light">
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('WithDivider', () => (
      <ThemeInjector>
        <Box>
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Divider />
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('NoBackground', () => (
      <ThemeInjector>
        <Box paint="nobackground">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('TransparentBox', () => (
      <ThemeInjector>
        <Box paint="transparent">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('BlackHeader', () => (
      <ThemeInjector>
        <Box>
          <Box.Header padded paint="dark">
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('BlackBody', () => (
      <ThemeInjector>
        <Box>
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded paint="dark">
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('Black', () => (
      <ThemeInjector>
        <Box paint="dark">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('Blue', () => (
      <ThemeInjector>
        <Box paint="primary">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('Aqua', () => (
      <ThemeInjector>
        <Box paint="info">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('GreenDivided', () => (
      <ThemeInjector>
        <Box paint="success">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <BoxDivider />
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('YellowDivided', () => (
      <ThemeInjector>
        <Box paint="warning">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <BoxDivider />
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
    .add('RedDivided', () => (
      <ThemeInjector>
        <Box paint="danger">
          <Box.Header padded>
            Box Header
          </Box.Header>
          <BoxDivider />
          <Box.Body padded>
          This is the body of box component.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur, quasi nam.
          Nisi assumenda nulla consequatur perferendis, voluptatum,
          laborum provident eos amet quos, ullam possimus facilis quasi?
          Magnam optio voluptates ipsam.
          </Box.Body>
          <Box.Footer padded>
            <AnimatedLink
              href="//google.com"
              target="_blank"
              icon="arrow-right"
            >
              Link
            </AnimatedLink>
          </Box.Footer>
        </Box>
      </ThemeInjector>
    ))
);
