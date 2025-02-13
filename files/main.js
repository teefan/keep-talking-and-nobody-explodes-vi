$(document).ready(function () {
    // Fill in page footers:
    var $page = $(".page");
    var $noPageCount = $(".no-page-count");

    var pageCount = $page.length();

    pageCount -= $noPageCount.length();

    var currentPage = 0;
    var currentBG = 1;

    $page.each(function () {
        if ($(this).hasClass("no-page-count") === false) {
            currentPage++;

            $(".page-footer", $(this)).each(function (index) {
                if ($(this).hasClass("no-auto-footer") === false) {
                    $(this).html("Trang " + currentPage + " trên " + pageCount);
                }
            });

            // pages without page count are the main body
            $(this).addClass('page-bg-0' + currentBG);

            currentBG++

            if (currentBG > 7) {
                currentBG = 1;
            }
        }
    });
});
