import React from 'react';

export default function(properties) {
  const { clickHandler, placeHolder } = properties;
  return (
    <div class="container w-100 h-100 bg-dark text-white d-flex align-items-baseline border border-primary rounded-lg p-5">
      <form class="col-md-6">
      <div class="form-group">
        <label for="emailLabel">Email</label>
        <input type="email" class="form-control bg-dark text-white" id={placeHolder} aria-describedby="emailHelp" placeholder="Enter Email" />
      </div>
      <div class="form-group">
        <label for="passwordLabel">Password</label>
        <input type="password" class="form-control bg-dark text-primary" id={placeHolder} aria-describedby="emailHelp" placeholder="Enter Password" />
      </div>
      <button type="submit" class="btn btn-primary" onClick={clickHandler}>Submit</button>
      </form>
      <div class="container col-md-6 nav-fill bg-dark text-white p-4 m-4 rounded-lg border border-warning">
        <div class="row">
          <div class="p-2 m-2">
            <h6>LOG IN</h6>
            <p class="text-justify">Hurry up and log in!</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}