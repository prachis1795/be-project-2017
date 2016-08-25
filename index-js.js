angular.module("mainModule", [])
  .controller("mainController", function ($scope)
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
    // Utility functions

    var getKeyboardEventResult = function (keyEvent, keyEventDesc)
    {

      return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + " " + "Meta Key : " +
       (keyEvent.metaKey) + " " + "Shift Key : " + (keyEvent.shiftKey) +  " " +"Control Key : " 
      + (keyEvent.ctrlKey) + " " +"Alt Key : " + (keyEvent.altKey) + " " +"Char Code : " + 
      (keyEvent.charCode) + " " + "TimeStamp : " +  (keyEvent.timeStamp) +" " + "Character : " +  
      (String.fromCharCode(event.keyCode)) + "" + "Presstime : " + 
      pressTime + "" + "Releasetime : " + releaseTime + "" + "Holdtime : " + (releaseTime - pressTime ) + ")";
    };

    // Event handlers
    $scope.onKeyDown = function ($event) {
      pressTime = event.timeStamp;
      $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
    };

    $scope.onKeyUp = function ($event) {
      releaseTime = event.timeStamp;
      $scope.onKeyUpResult = getKeyboardEventResult($event, "Key up");
    };

    $scope.onKeyPress = function ($event) {
      $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
    };
  });


  var colorSpan = element(by.css('span'));

it('should check ng-style', function() {
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
  element(by.css('input[value=\'set color\']')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
  element(by.css('input[value=clear]')).click();
  expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
});