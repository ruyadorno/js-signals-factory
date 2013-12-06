# SignalFactory


## SignalFactory.getSignal([id]):Signal

Returns a new signal using an optional *id* string reference, if no argument is provided an internal id will be assigned.

The returning signal will also contain an id property.

### Example

```js
    var started = SignalFactory.getSignal();
    console.log(started.id);
    // signal1

    var completed = SignalFactory.getSignal('completed');
    console.log(completed.id);
    // completed

    completed instanceof signals.Signal
    // true
```


## SignalFactory.removeSignal(id)

Removes a signal from the factory and disposes it, using the given *id* reference.

### Example

```js
    var completed = SignalFactory.getSignal('completed');

    // Disposes signal and remove factory reference
    SignalFactory.removeSignal('completed');

    // Clean up local variable reference
    completed = null;
```


## SignalFactory.all():Array

Returns an array containing created signals.

### Example

```js
    SignalFactory.getSignal('started');
    SignalFactory.getSignal('completed');

    var all = SignalFactory.all();

    all.forEach(function (item) {
        console.log(item.id);
    });

    // started
    // completed
```


## SignalFactory.clear()

Dispose all created signals and clear all references from factory.

```js
    SignalFactory.getSignal('started');
    SignalFactory.getSignal('completed');

    console.log(SignalFactory.all().length);
    // 2

    SignalFactory.clear();
    console.log(SignalFactory.all().length);
    // 0
```
