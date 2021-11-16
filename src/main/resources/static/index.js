var oliApp = angular.module('oliApp', []);

oliApp.controller('IndexController', function IndexController($scope, $http) {
    const index = this;
    index.start = function() {
        var ac = new AudioContext();
        var buf=[ac.createBuffer(1, 800, 8000),ac.createBuffer(1, 800, 8000)];

        // 400 Hz @ 8000 samples/s = 20 samples per sine --> 40 complete sines in a buffer
        // whit this 'perfect match' we 'hear' that this toggled-playback of the two buffers sound fine
        var freq=400;
        var load=function(idx, whenMillis) {
            $http.get("samples?freq="+freq).then(resp=>{
                var samples = resp.data;
                buf[idx].copyToChannel(new Float32Array(samples), 0);
            });
//            freq*=1.002;

            // schedule playback of this buffer
            var source=ac.createBufferSource();
            source.connect(ac.destination);
            source.buffer = buf[idx];
            source.onended = function() {  // when buffer finished...
                load(idx, whenMillis+200); // ... then preload and schedule-for-playback this buffer again
            }
            source.start(whenMillis/1000);
        }
        load(0,100); // load buffer0 and start @100ms
        load(1,200); // load buffer1 and start @200ms
    }
});
