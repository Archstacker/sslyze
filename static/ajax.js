$(document).ready(function() {
    updater.poll();
});

var updater = {
    errorSleepTime: 500,
    cursor: null,

    poll: function() {
        var args = ''
        $.ajax({url: "updates", type: "POST", dataType: "text",
                data: $.param(args), success: updater.onSuccess,
                error: updater.onError});
    },

    onSuccess: function(response) {
        console.log(response);
        window.setTimeout(updater.poll, 0);
    },

    onError: function(response) {
        updater.errorSleepTime *= 2;
        console.log("Poll error; sleeping for", updater.errorSleepTime, "ms");
        window.setTimeout(updater.poll, updater.errorSleepTime);
    },

};
