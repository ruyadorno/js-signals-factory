js-signals-factory
==================

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

A small factory implementation for js-signals.


## Requirements

This is a simple wrapper to make it even easier to use [js-signals](http://millermedeiros.github.io/js-signals/).

As expected, you will need to have `signals` available in your application before using this script.


## Usage

The signals factory reduces your signal management to a single point where you can request and retrieve all your signals. Using a signal is as simple as:


### Get a simple signal

```js
    var completed = SignalFactory.getSignal();
    completed.add(function () {
        console.log('it is completed!');
    });
```


### Get named signals

```js
    // First register a callback function to your signal
    SignalFactory.getSignal('completed').add(function () {
        console.log('it is completed!');
    });

    SignalFactory.getSignal('completed').dispatch();
    // it is completed!

    // Remove reference by name
    SignalFactory.removeSignal('completed');
```


### Get an array with all signals

```js
    var all = SignalFactory.all();
```


### Remove all used signals

```js
    SignalFactory.clear();
    // All used signals are disposed and gone!
```


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
