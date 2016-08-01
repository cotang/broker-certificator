/**
 * Script.js
 */

jQuery(document).ready(function($){   

    /* залипание меню в header */
    var pageHeaderHeight = $(".page-header").height();
    $('.page').css("padding-top", pageHeaderHeight + "px");


    /* одинаковая высота у we-work-for__items */
    var weWorkForMaxHeight = 0;
    var weWorkForItem = $(".we-work-for__item");
    $(weWorkForItem).each(function(){
     if ( $(this).height() > weWorkForMaxHeight ) 
     {
      weWorkForMaxHeight = $(this).height();
     }
    });
    $(weWorkForItem).height(weWorkForMaxHeight);

    /* одинаковая высота у tariffs__items */
    var tariffsMaxHeight = 0;
    var tariffsItem = $(".tariffs__item");
    $(tariffsItem).each(function(){
     if ( $(this).height() > tariffsMaxHeight ) 
     {
      tariffsMaxHeight = $(this).height();
     }
    });
    $(tariffsItem).height(tariffsMaxHeight);


    /* списки в форме application */
	var appCountryInput = $('.form-application__country input');
	var appCountryList = $('.form-application__country-list');
    $(appCountryInput).on('click', function(e) { 
        e.preventDefault(); 
        $(appCountryList).show();   
    });  
    $(appCountryList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var appCountryText = $(this).text();
            $(appCountryInput).val(appCountryText);
            $(this).closest(appCountryList).mouseleave();
    });  

    var appRegionInput = $('.form-application__region input');
    var appRegionList = $('.form-application__region-list');    
    $(appRegionInput).on('click', function(e) { 
        e.preventDefault(); 
        $(appRegionList).show();   
    });  
    $(appRegionList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var appRegionText = $(this).text();
            $(appRegionInput).val(appRegionText);
            $(this).closest(appRegionList).mouseleave();
    });

    /* списки в форме question */
	var qCountryInput = $('.form-question__country input');
	var qCountryList = $('.form-question__country-list');	
    $(qCountryInput).on('click', function(e) { 
        e.preventDefault(); 
        $(qCountryList).show();   
    });  
    $(qCountryList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var qCountryText = $(this).text();
            $(qCountryInput).val(qCountryText);
            $(this).closest(qCountryList).mouseleave();
    });  

    var qRegionInput = $('.form-question__region input');
    var qRegionList = $('.form-question__region-list');
    $(qRegionInput).on('click', function(e) { 
        e.preventDefault(); 
        $(qRegionList).show();   
    });  
    $(qRegionList).mouseleave(function(){
            $(this).fadeOut('normal');
    }).find('li').click(function(){
            var qRegionText = $(this).text();
            $(qRegionInput).val(qRegionText);
            $(this).closest(qRegionList).mouseleave();
    });

});


