(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Playlist', Playlist);


    Playlist.$inject = ['$rootScope', '$location', '$translate', 'dataservice', 'config'];


    function Playlist($rootScope, $location, $translate, dataservice, config) {
        var vm = this, playListObj = {};
        vm.currentPlayListItem = {};
        vm.runNextItem = runNextItem;
        _refresh();

        $rootScope.$on("the player is end", runNextItem);
        function _refresh() {
            dataservice.getPlaylist(config.lang.key).then(function (reqData) {
                if (!reqData)
                    return;

                playListObj = buildPlayList(reqData);
                runNextItem();
            });
        }

        function buildPlayList(listData) {
            var _playListObj = {}, _playedPlayList = [], _playedPlayListName = 'playedPlayList' + config.lang.key;

            if (!localStorage.getItem(_playedPlayListName))
                localStorage.setItem(_playedPlayListName, '')

            if (listData.date == new Date().getDate()) {
                _playedPlayList = localStorage.getItem(_playedPlayListName).split(',');
            }
            angular.forEach(listData.list, function (_item, _id) {
                _playListObj[_item.id] = _item;
            });
            angular.forEach(_playedPlayList, function (_id) {
                delete _playListObj[_id];
            });
            return _playListObj;
        }


        function runNextItem() {
            var _playedPlayListName = 'playedPlayList' + config.lang.key;
            var _item = getRandomItem();
            if (!_item) {
                localStorage.setItem(_playedPlayListName, '');
                _refresh();
                return;
            }
            //add to deleted in the localStorage
            var _playedPlayList = localStorage.getItem(_playedPlayListName);
            localStorage.setItem(_playedPlayListName, _playedPlayList + ',' + _item.id);

            delete playListObj[_item.id];
            vm.currentPlayListItem = _item;
        }

        function getRandomItem() {
            var item, _counter = 0;
            var _randomNum = Math.floor(Math.random() * (Object.keys(playListObj).length - 1));
            angular.forEach(playListObj, function (_item) {
                if (_randomNum == _counter)
                    item = angular.copy(_item);
                _counter++;
            });
            return item;
        }
    }
}())