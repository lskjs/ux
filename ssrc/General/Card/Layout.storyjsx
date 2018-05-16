import Card from '../Card'
import A from '../A'
import { Button, FormControl, InputGroup, OverlayTrigger, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import RcSlider from 'rc-slider'
import Icons from '../Icons'

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Layout', module)

    .add('A', () => (
      <A href='/auth/signup'>
         Забыли пароль? default
      </A>
    ))
    .add('A primary', () => (
      <A href='/auth/signup' bsStyle='primary'>
         Забыли пароль? primary
      </A>
    ))
    .add('A secondary', () => (
      <A href='/auth/signup' bsStyle='secondary'>
         Забыли пароль? secondary
      </A>
    ))

    .add('Login', () => (
      <div>
        <Card wrap title='Войти в Skill Branch'>
          <form>
            <FormGroup
              controlId="formBasicText"
              // validationState='success'
            >
              <InputGroup>
                <InputGroup.Addon>
                  <Icons.email />
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  placeholder="Email"
                />
              </InputGroup>
              <FormControl.Feedback />
              {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
            </FormGroup>
            <FormGroup
              controlId="formBasicText"
              // validationState='success'
            >
              <InputGroup>
                <InputGroup.Addon>
                  <Icons.lock />
                </InputGroup.Addon>
                <FormControl
                  type="text"
                  placeholder="Пароль"
                  type='password'
                />
                {/* <HelpBlocsk>Validation is based on string length.</HelpBlock> */}
              </InputGroup>
              <FormControl.Feedback />
              {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
            </FormGroup>

            <Button bsStyle='primary' block type='submit'>
              Регистрация
            </Button>
          </form>
          <br />
          <p className='text-center'>
            <A href='/auth/signup' bsStyle='secondary'>
               Забыли пароль?
            </A>
          </p>
        </Card>
        <br />
        <Card wrap>
          Впервые на Skill Branch?
          &nbsp;
          <A href='/signup'>
             Создайте аккаунт
          </A>
        </Card>
      </div>
    ))

    .add('Signup', () => (
      <div>
        <Card wrap title='Регистрация'>
          <FormControl
             type="text"
             placeholder="Имя"
           />
          <br/>
          <FormControl
             type="text"
             placeholder="Фамилия"
           />
           <br/>
          <FormControl
            type="text"
            placeholder="Телефон"
          />
          <br/>
          <FormControl
             type="text"
             placeholder="Email"
          />
          <br/>
          <FormControl
             type="text"
             placeholder="Пароль"
          />
          <br/>
          <FormControl
             type="text"
             placeholder="Повторите пароль"
          />
          <br />
          <br />
          <Button bsStyle='primary' block>
            Регистрация
          </Button>
          <br />
          <p className='text-center'>
            <A href='/auth/forget' bsStyle='secondary'>
               Забыли пароль
            </A>
          </p>
        </Card>
        <br />
        <Card wrap>
          Впервые на Skill Branch?
          &nbsp;
          <A href='/signup'>
             Создайте аккаунт
          </A>
        </Card>
      </div>
    ))
    .add('modal inner', () => (
      <div className="task-modal-body">
        <div className="tmb-timer">
          <div className="tmb-timer-head">Лучшее время</div>
          <div className="tmb-timer-info">
            <div className="tti-count">8 часов</div>
            {/* <OverlayTrigger placement="top" overlay={tooltip}> */}
              <div className="tti-help">?</div>
            {/* </OverlayTrigger> */}
          </div>
        </div>
        <div className="tmb-range">
          <div className="tmb-range-head">
            Прогназируемое время выполнения
          </div>
          <div className="tmb-range-info">
            <div className="tri-slider">
              <RcSlider
                min={0}
                max={72}
                // value={this.state.value}
                // onChange={this.onSliderChange}
                tipTransitionName="rc-slider-tooltip-zoom-down"
              />
            </div>
            <div className="tri-times">
              <div className="rtit left">0</div>
              <div className="rtit center">32</div>
              <div className="rtit right">72</div>
            </div>
          </div>
        </div>
      </div>
    ))
    // .add('Sample 2', () => (
    //   <Card
    //     link="http://vk.com"
    //     image='//cdn.mgbeta.ru/inessa/iq/1.jpg'
    //     title='Окружающий мир'
    //     subtitle='Братья наши меньшие'
    //     />
    // ))
    // .add('Without subtitle', () => (
    //   <Card
    //     link="http://vk.com"
    //     image='//cdn.mgbeta.ru/inessa/iq/1.jpg'
    //     title='Окружающий мир'
    //     />
    // ))
    // .add('Without title', () => (
    //   <Card
    //     link="http://vk.com"
    //     image='//cdn.mgbeta.ru/inessa/iq/1.jpg'
    //     subtitle='Окружающий мир'
    //     />
    // ))
    // .add('Without link', () => (
    //   <Card
    //     image='//cdn.mgbeta.ru/inessa/iq/1.jpg'
    //     title='Окружающий мир'
    //     subtitle='Окружающий мир'
    //     />
    // ))
}
