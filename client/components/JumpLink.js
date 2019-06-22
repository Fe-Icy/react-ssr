import React, {Component} from 'react'
import {withRouter} from 'react-router'

class JumpLink extends Component {
  handleClick = () => {
    // to 为相对链接，href 为绝对地址
    const {
      to, 
      history, 
      href, 
      onClick,
      disabled,
      blank
    } = this.props
    if(onClick) {
      onClick()
    }
    if(disabled) return
    if(to) {
      history.push(to)
    }
    if(href) {
      if(blank) {
        window.open(href, '__blank')
      } else {
        window.location.href = href
      }
    }
  }

  render() {
    const {children, className} = this.props
    return (
      <div onClick={this.handleClick} className={className}>
        {children}
      </div>
    )
  }
}

export default withRouter(JumpLink)

