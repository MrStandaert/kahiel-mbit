# De Bibberdraad

## Een nieuw project

We gaan een bibberdraad bouwen! Bij dit spel willen we met onze lus rond 
een draad bewegen, zonder die aan te raken. We willen op het einde geraken 
met zo weinig mogelijk fouten. Klik op ``|Volgende|`` om te beginnen.

## Signalen

Onze micro:bit moet *voelen* wanneer we de bibberdraad aanraken. 
Dat doen we met een **signaal**. Signalen laten de micro:bit toe
om te reageren op iets dat gebeurt in de wereld. Klik op ``|Volgende|`` om 
een eerste signaal te programmeren.

## Signaal als input

We zullen de bibberdraad verbinden met ``pin 0`` van de micro:bit. Zo voelt
de micro:bit wanneer de draad wordt geraakt.
Zet een blok ``||input:wanneer pin p0 wordt aangeraakt||`` bij de code. 

```blocks
input.onPinPressed(TouchPin.P0, function () {})
```

## Een kruisje als we de draad aanraken

Nu kunnen we code toevoegen om te reageren op een contact met de bibberdraad.
In de blok ``||input:wanneer pin p0 wordt aangeraakt||`` 
plaatsen we een blokje ``||basic: Toon pictogram `X`||``. 
Wis daarna het kruisje met ``||basic: Wis scherm ||``.

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

Verbind je bibberdraad met ``pin 0`` met een draad.
Verbind jouw lus met de ``GND``. Zo kan de micro:bit een 
signaal doorsturen als de draad geraakt wordt.


## Downloaden en spelen maar

Heb je alle kabels verbonden? Dan kan je ``|Downloaden|`` en spelen!

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
```

## Een beter spel!

Het zou veel leuker zijn als de micro:bit onze fouten telt. Zo kunnen we 
gemakkelijk onze score zien op het einde van het spel. We willen dan ook
een knop om een nieuw spel te kunnen starten.

Klik op ``|Volgende|`` om te beginnen.


## Druk op A om te starten

Wanneer we op A drukken starten we een nieuw spel. Voeg een 
``||input:wanneer knop A wordt ingedrukt||`` toe aan je programmeervak.


```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
})

```
## Toon dat we klaar zijn

We willen tonen dat we klaar zijn voor een nieuw spel, 
met een ``||basic: Toon pictogram||`` blokje. Kies zelf een leuk 
pictogram.

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})

```

## Een teller maken

De micro:bit kan voor ons **onthouden** hoevaak de draad werd geraakt
met een **variabele**. Bij ``||variables||`` maak je een variabele ``teller``. 

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})

```


## We beginnen bij 0

Telkens we een spel starten, zetten we de ``||variables:teller||`` op 0 met 
``||variables: stel teller in op 0||``. 

```blocks
let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    teller = 0
})
```


## Alle fouten tellen

Nu kunnen we de fouten tellen. Voeg een ``||variables: verander teller met 1||``
toe aan ``||input:wanneer pin p0 wordt aangeraakt||``.

```blocks
let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    teller += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    teller = 0
})
```

## Fouten tonen

Toon ook hoeveel fouten we al gemaakt hebben. Voeg een ``||basic: Toon nummer||`` 
toe aan ``||input:wanneer pin p0 wordt aangeraakt||``. Welk getal tonen we?
De ``||variables:teller||`` natuurlijk!

```blocks
let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    teller += 1
    basic.showNumber(teller)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    teller = 0
})
```


## Het eindresultaat

Test je code uit op de virtuele micro:bit. Als die goed werkt, dan ben je klaar.
``|Downloaden|`` en spelen maar!

```blocks
let teller = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    teller += 1
    basic.showNumber(teller)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    teller = 0
})
```
