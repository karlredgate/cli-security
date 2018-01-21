// Copyright 2017 Karl Redgate, All Rights Reserved
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = AppSecTool;

const Tool = require('tool');
const util = require('util');
const Noi = require('noi');
const { AppSecConfiguration } = Noi;

util.inherits( AppSecTool, Tool );

function die( message ) {
    console.error( message );
    process.exit( -1 );
}

function AppSecTool( handlers ) {
    Tool.call( this, handlers ); // super constructor
    this.option( ["--config",  "-C"], null );
    this.option( ["--version", "-V"], null );
}

function config_or_error() {
    var list = AppSecConfiguration.config_list();
    if ( list.length > 1 ) die("Must specify a config");
    return list[0];
}

AppSecTool.prototype.validate = function () {
    if ( this.settings.config === null ) {
        this.settings.config = config_or_error();
    }
}

/* vim: set autoindent expandtab sw=4 syntax=javascript: */
