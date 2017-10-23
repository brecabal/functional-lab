import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    //
    // TÚ CÓDIGO VA AQUÍ
    //
  }

  render() {
    const { className } = this.props
    const { posts } = this.state

    return (
      <div className={classnames('App', className)}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {(posts.length === 0) ?
            (<div>Loading...</div>) :
          (<div>
            <ul className="postlist">
            {posts.map((post, idx) => (
              <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title.rendered}</Link></li>
            ))}
            </ul>
          </div>)
          }
        </div>
      </div>
    );
  }
}

export default App;
