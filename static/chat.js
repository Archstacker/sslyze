$(document).ready(function() {
    updater.start();
    waitForSocketConnection(updater.socket, function() {
        updater.socket.send(test_domain);
    });
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

function waitForSocketConnection(socket, callback){
    setTimeout(
        function(){
            if (socket.readyState === 1) {
                if(callback !== undefined){
                    callback();
                }
                return;
            } else {
                waitForSocketConnection(socket,callback);
            }
        }, 5);
};
