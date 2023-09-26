import React from 'react'
import { Link } from 'react-router-dom'
export const Error = () => {
      return (
            <>
                  <div id="notfound">
                        <div class="notfound">
                              <div class="notfound-404">
                                    <h1 id='404'>404</h1>
                                    <h2 id="not_found">Page not found</h2>
                              </div>
                              <Link id="link_error" to="/">Homepage</Link>
                        </div>
                  </div>
            </>
      )
}
