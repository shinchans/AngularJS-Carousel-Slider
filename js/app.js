/* ==============================================================================================
 Description: AngularJS Carousel Slider+Navigation Control
 This source code may be modified in any way to fit requirements.
 Author: Babajide Adegbenro
 ================================================================================================= */

/* general settings */
'use strict';

var app = angular.module('galleryApp', ['ngAnimate', 'ngTouch']);
    app.controller('galleryControl', function ($scope, $http) {
        $http.get("images.json").success(function(response){$scope.photos = response.images;});

        // initial image index
        $scope._Index = 0;

        // if a current image is the same as requested image
        $scope.isActive = function (index) {
            return $scope._Index === index;
        };

        // show prev image
        $scope.showPrev = function () {
            $scope._Index = Math.max(0, $scope._Index - 1);
        };

        // show next image
        $scope.showNext = function () {
            $scope._Index = Math.min($scope.photos.length-1, $scope._Index + 1);
        };

        // show a certain image
        $scope.showPhoto = function (index) {
            $scope._Index = index;
        };
    });
