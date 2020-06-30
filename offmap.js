var onlineIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var offlineIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ping(eflist, ip, callback) {
    if (!this.inUse) {
        this.status = 'unchecked';
        this.inUse = true;
        this.callback = callback;
        this.ip = ip;
        var _that = this;
        this.img = new Image();
        this.img.onload = function () {
            _that.inUse = false;
            _that.callback(eflist, 'responded', 0);
        };
        this.img.onerror = function (e) {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(eflist, 'responded', e);
            }
        };
        this.start = new Date().getTime();
        this.img.src = "http://" + ip;
        this.timer = setTimeout(function () {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(eflist, 'timeout', 0);
            }
        }, 1500);
    }
}

class OffMap {
    constructor(mapobject, pingLocationList) {
        for (var i = 0; i < pingLocationList.length; i++) {
            new ping(i, pingLocationList[i].pingsite, function(eflist, status, e){
                var mpstatus = "<span style=\"color:red;\">Offline</p>";
                var targeticon = offlineIcon;
    
                if (status == "responded") {
                    mpstatus = "<span style=\"color:green;\">Online</p>";
                    targeticon = onlineIcon;
                }

                var mp = L.marker(pingLocationList[eflist].location, {icon: targeticon}).addTo(mapobject);
                mp.bindPopup("<b>"+pingLocationList[eflist].formatname+"</b><br>"+pingLocationList[eflist].formalname+" is "+mpstatus)
            });
        }
    }
}
