(function(root){

    'use strict';

    var signalsFactory = function(signals) {

        var SignalFactory = {};
        SignalFactory.prefix = 'signal';
        SignalFactory.count = 0;

        SignalFactory._getNextId = function() {

            SignalFactory.count ++;

            return SignalFactory.prefix + SignalFactory.count;

        };

        SignalFactory.getSignal = function(id) {

            if (id === undefined || id === null || (typeof id !== 'string') ) {
                id = SignalFactory._getNextId();
            }

            if (!SignalFactory[id]) {

                SignalFactory[id] = new signals.Signal();
                SignalFactory[id].id = id;

            }

            return SignalFactory[id];

        };

        SignalFactory.removeSignal = function(id) {

            try {
                SignalFactory[id].dispose();
            } catch (e) {}

            SignalFactory[id] = null;

        };

        SignalFactory.all = function() {

            var arr = [];
            for (var key in SignalFactory) {
                if (SignalFactory[key] instanceof signals.Signal) {
                    arr.push(SignalFactory[key]);
                }
            }
            return arr;

        };

        SignalFactory.clear = function() {

            var arr = SignalFactory.all();
            var count = arr.length;

            while (count) {
                count --;

                SignalFactory.removeSignal(arr[count].id);
            }

            SignalFactory.count = 0;

        };

        return SignalFactory;

    };

    //exports to multiple environments
    if(typeof define === 'function' && define.amd){ //AMD
        define(['signals'], signalsFactory);
    } else if (typeof module !== 'undefined' && module.exports){ //node
        module.exports = signalsFactory(require('signals'));
    } else { //browser
        root.SignalFactory = signalsFactory(root.signals);
    }

}(this));
