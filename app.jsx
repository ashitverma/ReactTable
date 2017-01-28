/*********************************************************************************************************

* File Name      : app.jsx

* Project        : Interview Test  

* Description    : This component is used to lunch the landing page of the Test student app.

* Modification Log

* Date                 Author                               Description

* -------------------------------------------------------------------------

* January 22, 2016       Ashit Verma             Created

* -------------------------------------------------------------------------

* Copyright (c) 2017

*******************************************************************************************************/

"use strict";

var React   = require('react');
var ReactDOM = require('react-dom');

var TestApp = require('./components/TestApp.jsx');

ReactDOM.render(<TestApp />, document.getElementById('page'));

