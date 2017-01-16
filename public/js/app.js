'use strict';

var app = angular.module("PortfolioApp", [])
.controller("HomeController", [function() {
  var vm = this;

  var positions = [];

  var location = $(window).scrollTop();
  var move = null;
  var goal, time;

  for (var i = 0; i < $(".page").length; i++) {
    $("#page" + i).css("height", $(window).height());
    positions.push($("#page" + i).position().top - $("#page0").position().top);
  }

  $(document).on("scrollstart", function() {
    console.log("hello");
    clearInterval(move);
    time = Date.now();
      if (location < $(window).scrollTop()) {
        for (var i = 0; i < positions.length; i++) {
          if (positions[i] > location) {
            goal = positions[i];
            break;
          }
        }
        move = setInterval(function() {
          if ($(window).scrollTop() >= goal) {
            $(window).scrollTop(goal);
            location = goal;
          }
          else {
            $(window).scrollTop($(window).scrollTop() + 10);
          }
        }, 1);
      }
      else if (location > $(window).scrollTop()) {
        for (var i = positions.length; i > -1; i--) {
          if (positions[i] < location  && time > Date.now() - 100) {
            goal = positions[i];
            break;
          }
        }
        move = setInterval(function() {
          if ($(window).scrollTop() <= goal) {
            $(window).scrollTop(goal);
            location = goal;
          }
          else {
            $(window).scrollTop($(window).scrollTop() - 10);
          }
        }, 1);
      }
  });

  $(document).on("scrollstop", function() {
    console.log("goodbye");
    clearInterval(move);
  });

  // $(window).scroll(function() {
  //
  //   if (location < $(window).scrollTop()) {
  //     if ($(window).scrollTop() >= goal) {
  //       $(window).scrollTop(goal);
  //
  //       clearInterval(move);
  //       move = null;
  //       location = $(window).scrollTop();
  //     }
  //   }
  //   else if (location > $(window).scrollTop()) {
  //     if ($(window).scrollTop() <= goal) {
  //       $(window).scrollTop(goal);
  //       clearInterval(move);
  //       move = null;
  //       location = $(window).scrollTop();
  //     }
  //   }
  // });


  if ($(window).width() <= 1000) {
    vm.phone = true;
  }
}]);
