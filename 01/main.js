var Speaker = (function () {
    function Speaker() {
    }
    Speaker.prototype.hi = function (nombre) {
        var message = 'Hola ' + nombre;
        return message;
    };
    return Speaker;
})();
var speaker = new Speaker();
var greeting = speaker.hi("juan");
console.log(greeting);
