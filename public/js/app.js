'use strict';

var app = angular.module("PortfolioApp", [])
.controller("HomeController", [function() {
  var vm = this;

  var positions = [];
  $(document).ready(function() {
    var setPositions = function() {
      positions = [];
      for (var i = 0; i < $(".page").length; i++) {
        $("#page" + i).css("height", $(window).height());
        positions.push($("#page" + i).position().top);
      }
      var closest = $("body").height();
      var index;
      for (var i = 0; i < positions.length; i++) {
        if (Math.abs($(window).scrollTop() - positions[i]) < closest) {
          closest = Math.abs($(window).scrollTop() - positions[i]);
          index = i;
        }
      }
      $('html, body').animate({
        scrollTop: $("#page" + index).offset().top
      }, 400);
    }
    $(document).on("scrollstop", function() {
      setPositions();
    });
    setPositions();
  });



      // if (vm.location < $("body").scrollTop()) {
      //   console.log(vm.location);
      //   console.log($("body").scrollTop());
      //   for (var i = 0; i < positions.length; i++) {
      //     if (positions[i] > vm.location) {
      //       vm.goal = i;
      //       break;
      //     }
      //   }

        // move = setInterval(function() {
        //   if ($("body").scrollTop() >= vm.goal) {
        //     $(window).scrollTop(vm.goal);
        //     vm.location = vm.goal;
        //   }
        //   else {
        //     $(window).scrollTop($("body").scrollTop() + 10);
        //   }
        // }, 1);
      // }
      // else if (vm.location > $("body").scrollTop()) {
      //   for (var i = positions.length; i > -1; i--) {
      //     if (positions[i] < vm.location) {
      //       vm.goal = i;
      //       break;
      //     }
      //   }
        // move = setInterval(function() {
        //   if ($("body").scrollTop() <= vm.goal) {
        //     $(window).scrollTop(vm.goal);
        //     vm.location = vm.goal;
        //   }
        //   else {
        //     $(window).scrollTop($("body").scrollTop() - 10);
        //   }
        // }, 1);
      // }
      // console.log(vm.goal);
      // $('html, body').animate({
      //   scrollTop: $("#page" + vm.goal).offset().top
      // }, 600, function() {
      //   vm.location = $("body").scrollTop();
      // });

  // });




  // $(window).scroll(function() {
  //
  //   if (vm.location < $("body").scrollTop()) {
  //     if ($("body").scrollTop() >= vm.vm.goal) {
  //       $(window).scrollTop(vm.goal);
  //
  //       clearInterval(move);
  //       move = null;
  //       vm.location = $("body").scrollTop();
  //     }
  //   }
  //   else if (vm.location > $("body").scrollTop()) {
  //     if ($("body").scrollTop() <= vm.goal) {
  //       $(window).scrollTop(vm.goal);
  //       clearInterval(move);
  //       move = null;
  //       vm.location = $("body").scrollTop();
  //     }
  //   }
  // });


  if ($(window).width() <= 1000) {
    vm.phone = true;
  }
}]);
