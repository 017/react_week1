import React from 'react';

export default function(properties) {
  const { clickHandler, placeHolder } = properties;
  return (
    <div class="container bg-dark text-warning rounded border border-primary p-2 mt-4 mb-4">
      <ul class="nav justify-content-center p-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  )
}