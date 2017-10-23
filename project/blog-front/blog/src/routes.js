import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Post from './components/Post'
import NotFound from './components/NotFound'

import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav'
import SvgIcon from 'react-icons-kit'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { ic_info_outline } from 'react-icons-kit/md/ic_info_outline'
const SideNav = withRR4()

class Routes extends Component {
  render () {
    return (
      <Router {...this.props}>
        <div>
          <div style={{ display: 'flex', padding: 16, background: '#2c3e50' }}>
            <div style={{ width: 40, height: 40 }}>
              <img
                src="https://rodrwan.github.io/static/assets/profile3.jpg"
                style={{ borderRadius: '30px', width: 40, height: 40 }}
                alt="jujijuji"
              />
            </div>
            <div style={{ paddingLeft: 6, paddingTop: 6 }}>
              <div style={{ fontSize: 12, fontWeight: 'bold', color: '#E5E5E5' }}>
                  {' '}Rod Fuenzalida{' '}
              </div>
              <div style={{ fontSize: 11, color: '#E5E5E5' }}> Ninja Developer </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{background: '#2c3e50', color: '#FFF', width: 220, height: 'auto'}}>
              <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='home' default='home'>
                <Nav id='home'>
                  <NavIcon><SvgIcon size={20} icon={ic_home}/></NavIcon>
                  <NavText> Home </NavText>
                </Nav>
                <Nav id="about">
                  <NavIcon><SvgIcon size={20} icon={ic_info_outline}/></NavIcon>
                  <NavText> About </NavText>
                </Nav>
              </SideNav>
            </div>
            <div style={{width:"100%"}}>
              <Switch>
                <Route exact path="/home" component={App} />
                <Route path="/about" component={About} />
                <Route path="/posts/:id" component={Post} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default Routes
