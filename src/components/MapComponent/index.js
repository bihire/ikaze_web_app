import React, { useEffect } from 'react'
import L from 'leaflet'
import { DirectionsBus } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Modernizr from 'modernizr'
import 'leaflet/dist/leaflet.css'
import './map.scss'

const MapComponent = () =>{
    // const [count, setCount] = useState(100);

    useEffect(() => {
        var mymap = L.map('mapid', {
            center: [-1.97825, 30.105],
            zoom: 13,
            zoomControl: true,
            scrollWheelZoom: false
        });
        // var isTouchDeivce = Modernizr.touchevents || navigator.maxTouchPoints

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            maxNativeZoom: 17,
            id: 'mapbox/streets-v11',
            detectRetina: true,
            accessToken: 'pk.eyJ1IjoiYmloaXJlIiwiYSI6ImNrNWp3MTR1ajA3N2UzamxiNHc0ZDUzM3oifQ.AsRTvbbpXohJoL05JXvhFQ'
        }).addTo(mymap);

        // let mapmarkers1 = []
        // let mapmarkers2 = []
        // let mapmarkers3 = []

        // var source = new EventSource('/topic/bus-lines');
        // source.addEventListener('message', function (e) {
        //     console.log('message');
        //     obj = JSON.parse(e.data)


        //     if (obj.busline == '201') {
        //         for (var i = 0; i < mapmarkers1.length; i++) {
        //             mymap.removeLayer(mapmarkers1[i]);
        //         }
        //         markers1 = L.marker([obj.latitude, obj.longitude]).addTo(mymap)

        //         mapmarkers1.push(markers1)
        //     };

        //     if (obj.busline == '202') {
        //         for (var i = 0; i < mapmarkers2.length; i++) {
        //             mymap.removeLayer(mapmarkers2[i]);
        //         }
        //         markers2 = L.marker([obj.latitude, obj.longitude]).addTo(mymap)
        //         mapmarkers2.push(markers2)
        //     };

        //     if (obj.busline == '203') {
        //         for (var i = 0; i < mapmarkers3.length; i++) {
        //             mymap.removeLayer(mapmarkers3[i]);
        //         }
        //         markers3 = L.marker([obj.latitude, obj.longitude]).addTo(mymap)
        //         mapmarkers3.push(markers3)
        //     };
        // })
    });
    const useStyles = makeStyles((theme) => ({
        icon: {
            color: "#000",
            padding: 0
        },
    }));
    const classes = useStyles();
    return (
        <div className="Map">
            <div id="mapid" className="Map_container">
                <div className="Map_container_search">
                    <div className="Map_container_search_top">
                        <div className="Map_container_search_top_box">
                            <div className="Map_container_search_top_container">
                                <input id="searchBar" className="Map_container_search_top_container_searchbar" type="text" placeholder="Where to?" />
                                <div className="Map_container_search_top_container_btn_search">
                                    <DirectionsBus className={classes.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Map_container_search_bottom">
                        <div className="Map_container_search_bottom_autoComplete">
                            <div className="Map_container_search_bottom_autoComplete_box">
                                <div className="Map_container_search_bottom_autoComplete_box_item">
                                    <h2 className="Map_container_search_bottom_autoComplete_box_item_busline">
                                        201
                                    </h2>
                                    <div className="Map_container_search_bottom_autoComplete_box_item_location">
                                        Kicukiro(saint-joseph) - Down town
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapComponent
