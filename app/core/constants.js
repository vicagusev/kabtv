(function(angular, undefined) {
'use strict';

angular.module('app.core')

.constant('API_BASE', 'http://dev.kab.tv/api/')

.constant('HELP_IMAGE_BASE', 'http://live.kab.tv/button.php?image=tech')

.constant('CLIP_ON_FINISH_EVENT', 'the player is end')

;
})(angular);