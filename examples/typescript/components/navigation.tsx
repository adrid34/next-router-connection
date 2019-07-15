import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { push, replace, goBack, goForward, prefetch } from 'connected-next-router'
import { connect } from 'react-redux'

type DispatchProps = {
  push: (...args: unknown[]) => void;
  replace: (...args: unknown[]) => void;
  prefetch: (...args: unknown[]) => void;
  goBack: () => void;
  goForward: () => void;
}

const Navigation = (props: DispatchProps) => (
  <div>
    <h2>Navigation</h2>
    <ul>
      <li>
        <h3>Navigation with Redux actions</h3>
        <ul>
          <li>
            <a
              href="about"
              onClick={e => {
                e.preventDefault()
                props.push({ pathname: '/about', query: { foo: 'bar' } })
              }}
            >
              Push /about
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault()
                props.replace('/blog/[postId]', '/blog/2')
              }}
            >
              Replace /blog/2
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                props.goBack()
              }}
            >
              Go Back
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                props.goForward()
              }}
            >
              Go Forward
            </a>
          </li>
        </ul>
      </li>
      <li>
        <h3>Navigation with Link</h3>
        <ul>
          <li>
            <Link href={{ pathname: '/' }}>
              <a>Push /</a>
            </Link>
          </li>
          <li>
            <Link href="/about?foo=bar" replace>
              <a>Replace /about</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/[postId]" as="/blog/3">
              <a>Push /blog/3</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <h3>Navigation with Router</h3>
        <ul>
          <li>
            <a
              href="about"
              onClick={e => {
                e.preventDefault()
                Router.push('/about?foo=bar')
              }}
            >
              Push /about
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault()
                Router.replace({ pathname: '/' })
              }}
            >
              Replace /
            </a>
          </li>
          <li>
            <a
              href="/blog/1"
              onClick={e => {
                e.preventDefault()
                Router.push('/blog/[postId]', '/blog/1')
              }}
            >
              Push /blog/1
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <h2>Prefetching</h2>
    <ul>
      <li>
        <a
          href="about"
          onClick={e => {
            e.preventDefault()
            props.prefetch('/about')
          }}
        >
          Prefetch /about
        </a>
      </li>
    </ul>
  </div>
)

export default connect(
  null,
  { push, replace, goBack, goForward, prefetch }
)(Navigation)
