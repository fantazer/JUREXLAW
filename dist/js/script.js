$(document).ready(function(){$(".table_tarif td").each(function(){"+"==$(this).text().replace(/(^\s+|\s+$)/g,"")&&($(this).empty(),$(this).append('<span class="table_tarif__plus">+</span>')),"-"!=$(this).text().replace(/(^\s+|\s+$)/g,"")&&"—"!=$(this).text().replace(/(^\s+|\s+$)/g,"")||($(this).empty(),$(this).append('<span class="table_tarif__minus">-</span>'))}),$(".slider-main").owlCarousel({items:1,dots:!1,singleItem:!0,nav:!0,loop:!0,navText:['<i class="fa fa-arrow-circle-o-left"></i>','<i class="fa fa-arrow-circle-o-right"></i>']}),$(".clients_slider").owlCarousel({items:6,dots:!1,singleItem:!0,nav:!0,margin:20,loop:!0,autoplay:!0,responsive:{0:{items:2},768:{items:4},960:{items:6}},navText:['<i class="fa fa-arrow-circle-o-left"></i>','<i class="fa fa-arrow-circle-o-right"></i>']});var e=500;$(window).scroll(function(){var a=$(this).scrollTop();if(a>=e){$(".header").addClass("shrink");var s=$(".header").height();$("body").css("paddingTop",s)}else $(".header").removeClass("shrink"),$("body").css("paddingTop",0)});var a=function(e,a){$(e).click(function(e){e.stopPropagation(),$(a).slideToggle("fast")}),$(a).on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(a).hide()})};a(".header__toggle",".header__nav"),$(window).width()<=768&&a(".list-service__toggle",".list-service__wrap"),$(".table").stacktable(),$(".table_tarif").stacktable(),$.scrollUp({scrollName:"arrow-top",scrollDistance:500,scrollFrom:"top",scrollSpeed:600,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"вверх",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647})});