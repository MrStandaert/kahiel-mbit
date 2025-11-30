# De Bibberdraad

## Inleiding @showhint

Welkom bij de les techniek van het Koninklijk Atheneum Emanuel Hiel! Hier bouwen we een bibberdraad met een micro:bit!
Klik op de pijl om te beginnen.

## Signalen

Onze micro:bit kan zien wanneer we de bibberdraad raken met **een input signaal!**
Zet een blok ``||input:wanneer pin p0 wordt aangeraakt||`` bij de code.

```blocks
input.onPinPressed(TouchPin.P0, function () {})
```

## Een kruisje als we de draad aanraken

In de blok ``||input:wanneer pin p0 wordt aangeraakt||`` plaatsen we een blokje ``||basic: Toon pictogram `X`||``. Wis daarna het kruisje met ``||basic: Wis scherm ||``.

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
```


## Testen

Klik op **pin 0** in de *virtuele micro:bit*. Als je eventjes een kruisje ziet, dan is jouw programma klaar!

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
```


## Verbinden

Verbind je bibberdraad met **pin 0** met een draad. Verbind dan jouw lus met de **GND**. Zo kan de micro:bit een signaal doorsturen als de draad geraakt wordt.





## Downloaden en spelen maar

Heb je alle kabels verbonden? Dan kan je `|Downloaden|`` en spelen!

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
```

