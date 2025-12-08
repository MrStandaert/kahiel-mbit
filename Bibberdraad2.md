# De Bibberdraad

## De Bibberdraad

Welkom op de hospiteerdag van Emanuel Hiel! We bouwen een bibberdraad. 
Daar beweeg je **een lus** rond **de bibberdraad** zonder die aan te raken. 
Klik op ``|Volgende|`` om naar de volgende stap te gaan.

```template
input.onPinPressed(TouchPin.P0, function () {
})
input.onButtonPressed(Button.A, function () {
})
```

## Start met een hart!

Met **knop A** starten we het spel met 1 leven: *een hartje*. Zet een blok 
``||basic: toon pictogram: hartje||`` bij ``||input:wanneer knop A wordt ingedrukt||``. 
Je mag dit ``|Downloaden|`` en testen! Druk op de A-knop.


```blocks
input.onPinPressed(TouchPin.P0, function () {
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
	
})

```

## Een kruisje als we de draad aanraken

Als we de draad aanraken, dan toont de micro:bit een kruisje. Zet een blok
``||basic: toon pictogram: hartje||`` bij ``||input:wanneer pin p0 wordt aangeraakt||``.
Verander de tekening naar een *kruisje*. Zet daaronder een ``||basic: Wis scherm||`` blok.

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
```

## Verbinden en spelen!

Verbind je bibberdraad met ``pin 0`` met een draad. 
Verbind jouw lus met de ``GND``. Zo kan de micro:bit voelen wanneer je de draad raakt.
Heb je alle kabels verbonden? Dan kan je ``|Downloaden|`` en spelen!

```

```
![](https://raw.githubusercontent.com/MrStandaert/kahiel-mbit/refs/heads/master/assets/Bibberdraad-schema.png)


## 3 levens met een *variabele*

Het zou leuk zijn om te spelen met 3 levens. Dat doen we met een **variabele**.
Bij ``|variabelen|`` maak je een variabele ``||variables: levens||``. Daarna zet je 
``||variables: stel levens in op 3||``
bij ``||input:wanneer knop A wordt ingedrukt||``


```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```

## Voorwaarde: als ... dan.

We bouwen een **voorwaarde**.  Zet ``||logic: als '<waar>' dan||`` als eerste 
blokje bij ``||input:wanneer pin p0 wordt aangeraakt||``.  **Als** iets waar is,
**dan** zal de code in dit blokje uitgevoerd worden. 
Zet de ``||basic: toon pictogram: 'X'||`` en ``||basic: Wis scherm||`` in dit blokje.


```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(true){
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```

## Als we meer dan 0 levens hebben

We willen de code in ``||logic: als '<waar>' dan||`` enkel uitvoeren 
**als** we nog levens hebben. Vervang ``||logic: <waar>||`` door 
``||logic: levens > 0||``. Klik op het lampje hieronder om jouw code te vergelijken.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 0){
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```


## Levens verliezen en tonen

Om een leven te verliezen, zet je ``||variables: verander levens met -1 ||`` 
onder ``||basic: Wis scherm||``. Zet daaronder ook ``||basic: toon nummer||`` met daarin 
``||variables: levens||`` zodat we zien hoeveel levens we nog hebben. 
Je bent klaar! ``|Downloaden|`` en spelen maar.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 0){
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        levens += -1
        basic.showNumber(levens)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```


## Game Over!

Misschien wil je een game over beeld? 
**Als** je geen levens meer hebt, **dan** toon je een doodskop.
Bouw ``||logic: als 'levens = 0' dan||`` met ``||basic: toon pictogram 'skull'||``
onder ``||basic: toon nummer: levens||``.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 0){
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        levens += -1
        basic.showNumber(levens)
        if(levens == 0){
            basic.showIcon(IconNames.Skull)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```


## Nu is het aan jou!

Bedenk eens hoe je het spel leuker kan maken. Misschien
wil je een een geluidje toevoegen bij de Game Over, zoals 
``||music: Speel 'droevig'||``? Of een bliepje wanneer 
de draad geraakt wordt? Laat je creativiteit maar los!

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 0){
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        levens += -1
        basic.showNumber(levens)
        if(levens == 0){
            basic.showIcon(IconNames.Skull)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```