define(['underscore', 'jquery'], function (_, $) {
    var APPLICATION_ID = 'rvURgFTVX1C3DPDMy7bV6UINn0fCcZ2vHiw1YPZ0',
        JAVASCRIPT_KEY = 'zvHjhV5CJ9CIXqiHa2rc5j0yy0Sg1p5RLU5rd7D3';

    $.ajaxPrefilter(function (options) {
        options.headers = options.headers || {};
        _.extend(options.headers, {
            'X-Parse-Application-Id': APPLICATION_ID,
            'X-Parse-JavaScript-Key': JAVASCRIPT_KEY
        });
    });
});
