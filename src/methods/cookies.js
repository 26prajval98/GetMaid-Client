export default function setCookie(cvalue, hrs) {
    var d = new Date();
    d.setTime(d.getTime() + (hrs*60*60*1000));
    var token = "token"
    var expires = "expires="+ d.toUTCString();
    document.cookie = token + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteAll(){
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}

window.logout = deleteAll

export {
    getCookie,
    deleteAll
}