var assert = require('assert');
var signals = require('signals');
var SignalFactory = require('../SignalFactory');

describe('SignalFactory', function() {

    'use strict';


    describe('#getSignal', function() {

        it('should be able to get a new signal', function() {
            assert(SignalFactory.getSignal() instanceof signals.Signal);
        });

        it('should be able to retrieve other signals', function() {
            var s = SignalFactory.getSignal();
            // Use only string id to retrieve signal
            assert.equal(SignalFactory.getSignal(s.id), s);
        });

    });


    describe('#_getNextId', function() {

        it('should increase count value each time is called', function() {
            var count = SignalFactory.count;
            SignalFactory._getNextId();
            assert.equal(SignalFactory.count, count+1);
        });

        it('should return a valid signal id', function() {
            assert.equal(
                SignalFactory._getNextId(),
                SignalFactory.prefix+SignalFactory.count
            );
        });

    });


    describe('#all', function() {

        it('should be able to retrieve all signals', function() {
            var all = SignalFactory.all();
            var i = all.length;
            while (i > 0) {
                i --;
                assert(all[i] instanceof signals.Signal);
            }

        });

    });


    describe('#removeSignal', function() {

        it('should completely remove a signal reference', function() {
            var s = SignalFactory.getSignal();
            var id = s.id;
            SignalFactory.removeSignal(id);
            assert.equal(SignalFactory[id], null);
        });

    });


    describe('#clear', function() {

        it('should get rid of all created signals', function() {

            SignalFactory.getSignal();

            SignalFactory.clear();
            assert.equal(SignalFactory.all().length, 0);
            assert.equal(SignalFactory.count, 0);
        });

    });


});
