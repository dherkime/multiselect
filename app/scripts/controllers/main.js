'use strict';

var myApp = angular.module('myApp', [ 'multi-select' ]).
    constant('_', window._); //use LoDash


/**
 * @ngdoc function
 * @name multiselectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the multiselectApp
 */
angular.module('multiselectApp', [ 'multi-select' ])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.resultData = [];

        // Modern web browsers
        $scope.modernWebBrowsers = [
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',
                name: 'Opera',
                maker: '(Opera Software)',
                ticked: true,
                highlighted: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',
                name: 'Internet Explorer',
                maker: '(Microsoft)',
                ticked: false,
                highlighted: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',
                name: 'Firefox',
                maker: '(Mozilla Foundation)',
                ticked: true,
                highlighted: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',
                name: 'Safari',
                maker: '(Apple)',
                ticked: false,
                highlighted: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',
                name: 'Chrome',
                maker: '(Google)',
                ticked: true,
                highlighted: false    }
        ];

        $scope.modernWebBrowsers2       = angular.copy( $scope.modernWebBrowsers );
        $scope.modernWebBrowsersDemo    = angular.copy( $scope.modernWebBrowsers );

        $scope.singleWebBrowsers = [
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',
                name: 'Opera',
                maker: '(Opera Software)',
                ticked: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',
                name: 'Internet Explorer',
                maker: '(Microsoft)',
                ticked: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',
                name: 'Firefox',
                maker: '(Mozilla Foundation)',
                ticked: true
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',
                name: 'Safari',
                maker: '(Apple)',
                ticked: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',
                name: 'Chrome',
                maker: '(Google)',
                ticked: false
            }
        ];


        // Old web browsers
        $scope.oldWebBrowsers = [
            {
                icon: '<img class="multiSelect" src="http://www.ucdmc.ucdavis.edu/apps/error/nojavascript/images/netscape_icon.jpg" />',
                name: 'Netscape Navigator',
                maker: '(Netscape Corporation)',
                ticked: true
            },
            {
                icon: '<img class="multiSelect" src="http://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Amaya_logo_65x50.png/48px-Amaya_logo_65x50.png" />',
                name: 'Amaya',
                maker: '(Inria & W3C)',
                ticked: true
            },
            {
                icon: '<img class="multiSelect" src="http://upload.wikimedia.org/wikipedia/commons/8/8c/WorldWideWeb_Icon.png" />',
                name: 'WorldWideWeb Nexus',
                maker: '(Tim Berners-Lee)',
                ticked: false
            }
        ];

        // Demo of granular controls
        $scope.granWebBrowsers = [
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',
                name: 'Opera',
                maker: '(Opera Software)',
                ticked: true,
                checkboxDisabled: true
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',
                name: 'Internet Explorer',
                maker: '(Microsoft)',
                ticked: false,
                checkboxDisabled: true
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',
                name: 'Firefox',
                maker: '(Mozilla Foundation)',
                ticked: true,
                checkboxDisabled: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',
                name: 'Safari',
                maker: '(Apple)',
                ticked: false,
                checkboxDisabled: false
            },
            {
                icon: '<img class="multiSelect" src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',
                name: 'Chrome',
                maker: '(Google)',
                ticked: true,
                checkboxDisabled: false
            }
        ];

        /////////////
        //  Dynamic
        /////////////

        $scope.granDisabled = false;

        $scope.switchSource = function( data ) {
            $scope.dynamicData = angular.copy( $scope[ data ] );
        }

        $scope.switchSource( 'modernWebBrowsers' );

        $scope.removeHost = function( url ) {
            if ( url ) {
                var r = /[^/\\]+(?:jpg|gif|png)/gi;
                return '[...]/' + url.match( r )[0] + '...';
            }
        }

        $scope.open = function() {
            console.log( 'multi-select: on-open' );
        }

        $scope.close = function() {
            console.log( 'multi-select: on-close' );
        }

        $scope.focus = function() {
            console.log( 'multi-select: on-focus' );
        }

        $scope.blur = function() {
            console.log( 'multi-select: on-blur' );
        }
    });
