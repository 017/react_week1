import React from 'react';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function(properties) {
  const {} = properties;
  return (
    <footer class="site-footer fixed-bottom bg-dark text-white mt-5 pt-2 border-top border-warning">
      <div class="container pt-2 mt-2">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Insert witty footer quote here</p>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons list-unstyled">
              <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a class="dribbble" href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}