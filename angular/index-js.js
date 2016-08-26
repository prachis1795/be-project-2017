angular.module("mainModule", [])
  .controller("mainController", function ('$scope', '$http')
  {
    // Initialization
    $scope.onKeyDownResult = "";
    $scope.onKeyUpResult = "";
    $scope.onKeyPressResult = "";
    $scope.eventKeyCode = "";
    $scope.altKey = "";
    pressTime = 0;
    releaseTime = 0;
    holdTime = 0;
    data = "";
    response = "";

    // Utility functions

    var getKeyboardEventResult = function (keyEvent, keyEventDesc)
    {

      return /*keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + " " + */{"Meta_Key": keyEvent.metaKey, 
      "Shift_Key":keyEvent.shiftKey, "Control_Key":keyEvent.ctrlKey, 
      "Alt_Key":keyEvent.altKey, "Char_Code":keyEvent.charCode,
      "TimeStamp": keyEvent.timeStamp, "Character":String.fromCharCode(event.keyCode), 
      "Presstime":pressTime ,"Releasetime":releaseTime,
      "Holdtime": (releaseTime - pressTime )/* + ")"*/};
    };

    // Event handlers
    $scope.onKeyDown = function ($event) {
      pressTime = event.timeStamp;
      $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
      data = $scope.onKeyDownResult;
      response = $http({
        method: 'POST',
        url: window.location.href +"/index-php.php"
        /*data:{
          email: "email",
          pass: "password"
        }*/
      }).then(function successCallback() {
        console.log("success");

      }, function errorCallback() {

      });
    };

    $scope.onKeyUp = function ($event) {
      releaseTime = event.timeStamp;
      $scope.onKeyUpResult = getKeyboardEventResult($event, "Key up");
      data = $scope.onKeyUpResult;
      response = $http({
        method: 'POST',
        url: window.location.href +"/index-php.php",
      }).then(function successCallback() {

      }, function errorCallback() {

      });
    };

    $scope.onKeyPress = function ($event) {
      $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
      data = $scope.onKeyUpResult;
      response = $http({
        method: 'POST',
        url: window.location.href +"/index-php.php"
      }).then(function successCallback() {

      }, function errorCallback() {

      });
    };


var colorSpan = element(by.css('span'));

it('should check ng-style', function() {
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
  element(by.css('input[value=\'set color\']')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
  element(by.css('input[value=clear]')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
});

  });

/*
var colorSpan = element(by.css('span'));

it('should check ng-style', function() {
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
  element(by.css('input[value=\'set color\']')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
  element(by.css('input[value=clear]')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
});*/