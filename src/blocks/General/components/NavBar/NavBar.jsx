import React, {Component} from 'react'
import importcss from 'importcss'

@importcss(require('./NavBar.css'))
export default class NavBar extends Component {
  render() {
    return <div styleName='root'>
      <nav className="navbar navbar-inverse navbar-fixed-top" >
        <div className="container">
          <div className="navbar-header">
            <button type="button"  className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img src="/layout/logo.png" style={{height: '100%'}}/></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/" style={{color:'white'}}>Главная</a>
              </li>
              <li className={this.props.active === 'shedule' ? 'active' : ''}>
                <a href="/shedule" style={{color:'white'}}>Расписание</a>
              </li>
              <li className={this.props.active === 'maps' ? 'active' : ''}>
                <a href="/maps" style={{color:'white'}}>Навигация</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     <div styleName='empty'></div>
    </div>
  }
}
