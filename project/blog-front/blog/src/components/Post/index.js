import React, { Component } from 'react'
import classnames from 'classnames'
import { Parser } from 'html-to-react'

const htmlToReactParser = new Parser()

export default class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {},
      error: {},
      loading: 0,
    }
  }
  componentWillMount() {
    const { match } = this.props
    this.setState({ loading: 1 })
    // TÚ CÓDIGO VA AQUÍ
  }

  render () {
    const { post, error, loading } = this.state
    const { className } = this.props

    return (
      <div className={classnames('Post', className)} style={{padding: "20px"}}>
        {((loading && !post.title) ? (<div>Loading...</div>): (''))}
        {(post.title && !error.message) ? (
          <div>
            <h1>
              {post.title.rendered}
            </h1>
            <div class="ArticleCopy">
              {htmlToReactParser.parse(post.content.rendered)}
            </div>
          </div>
        ) : (<div>{error.message}</div>)
        }
      </div>
    )
  }
}
