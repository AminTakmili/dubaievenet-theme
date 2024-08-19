
(function ($) {
    var timer;
    var timeout = 1000;
    const base_url = "https://irconcerts.com";



    /* ******* mobile search icon **********/
    $('.mobile-search-icon').click(function(){
        if($('.mobile-search-icon').hasClass("open")){
            $('.mobile-search-icon').removeClass('open');
            $('.search-block').addClass('hidden');
            $('.mobile-nav-logo').removeClass('hidden');
            $('.mobile-search-icon .icon-search').removeClass('hidden');
            $('.mobile-search-icon .close-search').addClass('hidden');
        }else{
            $('.mobile-search-icon').addClass('open');
            $('.search-block').removeClass('hidden');
            $('.mobile-nav-logo').addClass('hidden');
            $('.mobile-search-icon .icon-search').addClass('hidden');
            $('.mobile-search-icon .close-search').removeClass('hidden');
            $('.search-form input').focus();
        }
      
    });

    /* ******* Desktop search **********/

    $('.desktop-search input').keyup(function (event) {

        var input = $(this);
        clearTimeout(timer);

        $('.search-form .search-icon').removeClass('hidden');
        $('.search-form .close').addClass('hidden');
        $('.search-form .searching').addClass('hidden');

        if (input.val() && input.val().length > 2) {
           
            timer = setTimeout(function () {
                /*===========================================*/
                let requestData = {
                    keyword: input.val(),
                    per_page: 20,
                    page: 1
                }

                $('.search-form .search-result').html("");
                $('.search-form .search-icon').addClass('hidden');
                $('.search-form .searching').removeClass('hidden');

                $.get(base_url + "/wp-json/custom/v1/search", requestData, function (data, status) {

                    // $('.search-form .search-icon').removeClass('hidden');
                    $('.search-form .searching').addClass('hidden');
                    $('.search-form .close').removeClass('hidden');

                    if(data.artists &&  data.artists.length){
                        artistsItem(data.artists);
                    }
                    if(data.categories &&  data.categories.length){
                        catrgoryItem(data.categories);
                    }
                    if(data.products && data.products.length){
                        productItem(data.products);
                    }

                    if(!data.artists.length && !data.categories.length && !data.products.length){
                        $('.search-form .search-result').append("<p class='text-sm p-2 text-gray-600'>موردی یافت نشد</p>")
                    }
                  
                });

                /*===========================================*/
            }, timeout);
        }else{
            $('.search-form .search-result').html("");
           
        }
    });





    //
    function productItem(data) {

        $('.search-form .search-result').append('<div class="concerts"></div>');
        //.reverse()
        data.reverse().forEach((item) => {
            
            var html = '<a href="'+item.link+'" class="concert-item '+item.event_status+'">\
                            <img class="img" src="'+item.images.thumbnail+'" alt="'+item.title+'">\
                            <div class="info">\
                                <div class="name">'+item.title+'</div>\
                                <div class="date">'+item.event_date_fa+'</div>\
                                <div class="status '+item.event_status+'">'+(item.event_status == 'expired' ? 'برگزار شده' : 'پیش رو')+'</div>\
                            </div>\
                        </a>';
            $('.search-form .search-result .concerts').append(html);
        });
    }

    function catrgoryItem(data) {
        $('.search-form .search-result').append('<div class="city"></div>');
        //.reverse()
        data.reverse().forEach((item) => {
            var html = ' <a href="'+item.link+'" class="city-item">\
                            <img class="img" src="'+item.images.thumbnail+'" alt="'+item.name+'">\
                            <div class="name">'+item.name+'</div>\
                        </a>';
            $('.search-form .search-result .city').append(html);
        });

    }

    function artistsItem(data) {

        $('.search-form .search-result').append('<div class="artists"></div>');
        //.reverse()
        data.reverse().forEach((item) => {
            var html = ' <a href="'+item.link+'" class="artist-item">\
                           <img class="img" src="'+item.images.thumbnail+'" alt="'+item.name+'">\
                            <div class="name">'+item.name+'</div>\
                        </a>';
            $('.search-form .search-result .artists').append(html);
        });

    }

    $('.search-form .close').click(function () {
        $('.search-form .search-result').html("");
        $('.search-form .search-icon').removeClass('hidden');
        $('.search-form .close').addClass('hidden');
        $('.search-form .searching').addClass('hidden');
        $('.search-form input').val("");
    });


})(jQuery);

