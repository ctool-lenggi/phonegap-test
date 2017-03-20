/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        window.open = cordova.InAppBrowser.open;

        var isMenuOpen = false;
        document.getElementById('menuIcon').addEventListener('click', function (event) {
            document.getElementById('menu').setAttribute('style', (isMenuOpen ? 'display:none' : 'display:block'));
            isMenuOpen = !isMenuOpen;
        }, false);

        var isUserMenuOpen = false;
        document.getElementById('bookingIcon').addEventListener('click', function (event) {
            document.getElementById('userMenu').setAttribute('style', (isUserMenuOpen ? 'display:none' : 'display:block'));
            isUserMenuOpen = !isUserMenuOpen;
        }, false);

        var parentElement = document.getElementById('header');
        parentElement.setAttribute('style', 'background-color:#fff;');

        var socialMedias = document.getElementById('socialMedias');
        var externalLinks = socialMedias.querySelectorAll('.externalLink');
        for (var i = 0; i < externalLinks.length; i++){
            var item = externalLinks[i];
            item.addEventListener('click', function (event) {
                event.preventDefault();
                window.open(this.getAttribute('href'), '_system', 'location=yes');
            }, false);
        }

        document.getElementById('loginButton').addEventListener('click', function (event) {
            window.open('user.html');
        }, false);

        console.log('Received Event: ' + id);
    }
};
