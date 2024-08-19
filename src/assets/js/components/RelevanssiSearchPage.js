(function ($) {

    if ($("#searchPage").length) {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const key = urlParams.get('q');
        ProductAppendCLass = "desProductSearch";
        blogAppendClass = "desBlogSearch";
        // console.log(key);
        $('*.search-key,#search-key').text(key);

        if (key !== null && key.length > 2) {

            let requestData = {
                keyword: key,
                type: "product,post",
                per_page: "20"
            }
            $.get("https://dubai-discount.com/wp-json/relevanssi/v1/search/", requestData, function (data, status) {
                $('#loading-search').addClass('hidden')
                $('.mobile-search .search-icon').removeClass('hidden');
                $('.mobile-search .searching').addClass('hidden');

                //console.log(data);
                $('#product-rows .rows').prepend('<h2 class="lg:text-2xl text-base mt-6 mb-3 font-semibold text-blue col-span-full	' + ProductAppendCLass + '">محصولات</h2>');
                $('#blog-rows .rows').prepend('<h2 class="lg:text-2xl text-base mt-6 mb-3 font-semibold text-blue col-span-full	' + blogAppendClass + '">مقالات</h2>');


                data.reverse().forEach((item) => {
                    if (item.type == "product") {
                        console.log(item.type)
                        productItemPage(item, ProductAppendCLass);
                    } else if (item.type == "post") {
                        console.log(item.type)
                        BlogItemPage(item, blogAppendClass)
                    }
                });

                if (!data.length) {
                    $('#not-respond').removeClass('hidden')
                }
            });
            // $.post("https://mili.dubaidiscount.ir/milisearch/get_product.php",
            //     { key: key },
            //     function (data, status) {

            //         $('#loading-search').addClass('hidden')
            //         //console.log(data);
            //         if (data.products.length) {
            //             $('#product-rows').prepend('<h2 class="lg:text-2xl text-base mt-6 mb-3 font-semibold text-blue">محصولات</h2>');
            //             data.products.forEach(productItemPage);
            //         }
            //         if (data.blogs.length) {

            //             $('#blog-rows').prepend('<h2 class="lg:text-2xl text-base mt-6 mb-3 font-semibold text-blue">مقالات</h2>');
            //             $('#blog-rows').prepend('<hr class="mt-8">')
            //             data.blogs.forEach(BlogItemPage);
            //         }

            //         if (!data.products.length && !data.blogs.length) {
            //             $('#not-respond').removeClass('hidden')
            //         }
            //         //alert("Data: " + data + "\nStatus: " + status);
            //     });
        }

    }

    function productItemPage(item, appendClass) {

        var searchRes2 = "";
        item.regular_price = parseInt(item.regular_price);
        item.price = parseInt(item.price);


        searchRes2 = '<div class="product-card">\
                <a class="img" href="' + item.link + '" title="' + item.post_title + '">\
                    <img  src="'+ item.product_images.large + '" class="lg:h-92 h-72" alt="' + item.title.rendered + '">\
                </a>\
                <div class="info">\
                    <h2 class="pr_name"><a href="https://dubaidiscount.ir/product/' + item.post_name + '">' + item.title.rendered + '</a></h2>\
                    <div class="price"> از <b>' + item.price.toLocaleString('en-US') + ' </b> تومان </div>\
                </div>\
            </div> ';
        $(searchRes2).insertAfter('.' + appendClass);
    }


    function BlogItemPage(item, appendClass) {

        var base_url = window.location.origin;
        searchRes2 = '<div class="blog-card w-full transition-all duration-300">\
                            <a class="img" href="'+ decodeURI(item.link) + '" ><img class="transition-all duration-300 " src="' + item.thumbnails.large + '"  alt="' + item.title.rendered + '" ></a>\
                            <h2 class="title"><a href="/blog.html" class="title">  '+ item.title.rendered + ' </a></h2>\
                        </div>';
        $(searchRes2).insertAfter('.' + appendClass);

    }
})(jQuery);