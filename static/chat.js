$(document).ready(function() {
    updater.start();
});

var updater = {
    socket: null,

    start: function() {
        var url = "ws://" + location.host + "/chatsocket";
        updater.socket = new WebSocket(url);
        updater.socket.onmessage = function(event) {
            var data=JSON.parse(event.data);
            $("#"+data[0]).append(data[1])
        }
    },

};
