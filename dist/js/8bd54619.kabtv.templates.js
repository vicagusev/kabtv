angular.module('kabtv').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/audioPlayer.html',
    "<div class=audioPlayer><div class=play ng-class=playOnOff ng-click=togglePlay()></div><div class=mute ng-class=muteOnOff ng-click=toggleMute()></div><div class=volume><div class=volumeRail></div></div></div>"
  );


  $templateCache.put('views/cliplist.html',
    "<div><select ng-model=selectedClipList ng-options=\"item.name for item in clipListes\" class=selectTag><option value=\"\" ng-hide=\"selectedClipList.id == item.id\">{{selectedClipList.title}}</option></select><div class=clipListContainer><div ng-repeat=\"item in clipList\" class=item><div ng-click=runClip(item) class=\"cont clearfix\"><img ng-src={{item.image_url}} title={{item.title}} class=\"clipImage toL\"><h5>{{item.title}}</h5><p>{{item.description}}</p></div><div class=clipData>{{item.duration}}</div></div></div></div>"
  );


  $templateCache.put('views/footer.html',
    "<footer id=footer class=toL><nav><a ng-href={{data.url}} ng-repeat=\"data in footMenuData\">{{data.caption}}</a></nav></footer>"
  );


  $templateCache.put('views/header.html',
    "<header id=header><div class=\"tree toL\"><img src=./images/tree.gif></div><div class=whiteWrappwer><a href=\"./\" class=\"logoTop toL\"><img ng-src=./images/kab_tv_{{Lang.toLowerCase()}}.gif></a><div id=help-e class=toR><a href=\"http://live.kab.tv/client.php?locale=he&style=silver_he&group=3\" target=_blank onclick=\"if(navigator.userAgent.toLowerCase().indexOf('opera') != -1 && window.event.preventDefault) window.event.preventDefault();this.newWindow = window.open('http://live.kab.tv/client.php?locale=he&style=silver_he&group=3&url='+escape(document.location.href)+'&referrer='+escape(document.referrer), 'mibew', 'toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width=640,height=480,resizable=1');this.newWindow.focus();this.newWindow.opener=window;return false\"><img ng-src={{helpImage}} border=0 width=226 height=50></a> </div><nav class=headLangNav><a ng-repeat=\"data in topMenuData\" ng-href={{data.url}} ng-class=currentLang(data.language)>{{data.caption}}</a></nav></div><nav class=headLinksNav><a ng-repeat=\"data in linksList\" ng-href={{data.url}} title={{data.title}}>{{data.caption}}</a></nav></header>"
  );


  $templateCache.put('views/onload.html',
    "<div class=\"{{dir}} allContent\"><div class=container><div kabtv-header></div><div kabtv-nav></div><div class=\"content clearfix\"><div kabtv-clip-list class=\"aside toR clipList clearfix\">111</div><div kabtv-tabs class=\"aside toL clearfix\">222</div><div class=mid ng-view></div></div><div kabtv-footer class=footer></div></div></div>"
  );


  $templateCache.put('views/playerClip.html',
    "<div class=clearfix><div class=backToOnLine ng-click=getStream()>{{ 'PLAYER_BACK_TO_LIVE' | translate}}</div><div id=player></div><a ng-show=showFullScreen class=\"textToRight fullScreenButton\" ng-click=gofs()><img src=images/fs.gif alt=\"{{ 'PLAYER_FULLSCREEN' | translate}}\" width=14 height=14> {{ 'PLAYER_FULLSCREEN' | translate}}</a><div class=\"playerPanel playerDescription\"><span class=clipTitle>{{playerData.title}}</span><div id=clip-save-button><a ng-href={{playerData.download_url}} class=\"downloadIcon clipIconBig\"><img src=images/save-big.gif title=\"{{ 'VOD_DOWNLOAD' | translate}}\">{{ 'VOD_DOWNLOAD' | translate}}</a></div><p>{{playerData.description}}</p><br><div id=addthis-toolbox class=\"addthis_toolbox addthis_default_style addthis_16x16_style\"><a class=addthis_button_facebook></a> <a class=addthis_button_twitter></a> <a class=addthis_button_google_plusone_share></a> <a class=addthis_button_email></a></div></div></div>"
  );


  $templateCache.put('views/playerStream.html',
    "<div class=clearfix><div class=tabs><div ng-click=switchVideoAudio(true) class=\"tabBtn {{isVideo? 'select': '';}}\">{{'PLAYER_VIDEO' | translate}}</div><div ng-click=switchVideoAudio(false) class=\"{{isVideo? '':'select';}} tabBtn\">{{'PLAYER_AUDIO' | translate}}</div><div class=broadcastTime translate=PLAYER_BROADCAST_TIME translate-value-time={{broadcastTime}}></div></div><div id=player></div><a ng-show=showFullScreen class=fullScreenButton ng-click=gofs()><img src=images/fs.gif alt=\"{{ 'PLAYER_FULLSCREEN' | translate}}\" width=14 height=14> {{ 'PLAYER_FULLSCREEN' | translate}}</a><div class=playerPanel><a ng-repeat=\"item in playerData | filter:videoFilter\" class=\"langs {{(Lang == item.language) ? 'selected': '';}}\" ng-click=switchPlayerLang(item.language)>{{item.language}}</a></div></div>"
  );


  $templateCache.put('views/tabs.html',
    "<div class=tabs id=asideTabIframe><div ng-repeat=\"item in tabs\" class=\"tabBtn {{currentTab == item ? 'select': '';}}\" ng-click=switchTab(item)>{{item | translate}}</div><div ng-switch=currentTab class=forIframe><div kabtv-updates ng-switch-when=TAB_UPDATES class=updates></div><iframe ng-switch-when=TAB_SCHEDULE ng-src={{currentTabUrl}} frameborder=0></iframe><iframe ng-switch-when=TAB_QUESTIONS ng-src={{currentTabUrl}} frameborder=0 scrolling=no></iframe><iframe ng-switch-when=TAB_SKETCHES ng-src={{currentTabUrl}} frameborder=0></iframe></div></div>"
  );


  $templateCache.put('views/updates.html',
    "<div ng-repeat=\"update in updates\" class=\"item claerfix\"><h5 ng-bind-html=update.title></h5><div class=description ng-bind-html=update.description></div><a ng-href={{update.url}} class=\"url textToR\" ng-bind-html=update.url_caption></a></div>"
  );

}]);
