(function($){var masthead,menuToggle,siteNavContain,siteNavigation;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':!1}).append(twentyseventeenScreenReaderText.icon).append($('<span />',{'class':'screen-reader-text',text:twentyseventeenScreenReaderText.expand}));container.find('.menu-item-has-children > a, .page_item_has_children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on').attr('aria-expanded','true').find('.screen-reader-text').text(twentyseventeenScreenReaderText.collapse);container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.dropdown-toggle').click(function(e){var _this=$(this),screenReaderSpan=_this.find('.screen-reader-text');e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===twentyseventeenScreenReaderText.expand?twentyseventeenScreenReaderText.collapse:twentyseventeenScreenReaderText.expand)})}
initMainNavigation($('.main-navigation'));masthead=$('#masthead');menuToggle=masthead.find('.menu-toggle');siteNavContain=masthead.find('.main-navigation');siteNavigation=masthead.find('.main-navigation > div > ul');(function(){if(!menuToggle.length){return}
menuToggle.attr('aria-expanded','false');menuToggle.on('click.twentyseventeen',function(){siteNavContain.toggleClass('toggled-on');$(this).attr('aria-expanded',siteNavContain.hasClass('toggled-on'))})})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return}
function toggleFocusClassTouchScreen(){if('none'===$('.menu-toggle').css('display')){$(document.body).on('touchstart.twentyseventeen',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus')}});siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').on('touchstart.twentyseventeen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus')}})}else{siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').unbind('touchstart.twentyseventeen')}}
if('ontouchstart' in window){$(window).on('resize.twentyseventeen',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen()}
siteNavigation.find('a').on('focus.twentyseventeen blur.twentyseventeen',function(){$(this).parents('.menu-item, .page_item').toggleClass('focus')})})()})(jQuery)
;