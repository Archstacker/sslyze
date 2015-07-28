$(document).ready(function() {
    updater.start();
});

var updater = {
    socket: null,

    start: function() {
        var url = "ws://" + location.host + "/chatsocket";
        updater.socket = new WebSocket(url);
        updater.socket.onmessage = function(event) {
            console.log(event.data)
        }
    },

};
