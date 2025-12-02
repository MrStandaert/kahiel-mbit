# De Bibberdraad

## De Bibberdraad

Welkom op de hospiteerdag van Emanuel Hiel! We bouwen een bibberdraad. 
Daar beweeg je **een lus** rond **de bibberdraad** zonder die aan te raken. 
Klik op ``|Volgende|`` om naar de volgende stap te gaan.

```blocks
input.onPinPressed(TouchPin.P0, function () {
})
input.onButtonPressed(Button.A, function () {
})
```

## A om te starten, met een hart

Met **knop A** starten we het spel met 1 leven: *een hartje*. Zet een blok 
``||basic: Toon pictogram: hartje||`` bij ``||input:wanneer knop A wordt ingedrukt||``. 
Je mag dit ``|Downloaden|`` en testen!


```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
	
})
input.onPinPressed(TouchPin.P0, function () {
})

```

## Een kruisje als we de draad aanraken

Als we de draad aanraken, dan is het spel voorbij. Zet een blok
``||basic: Toon pictogram: 'X'||`` bij ``||input:wanneer pin p0 wordt aangeraakt||`` 

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
	
})
```

## Verbinden

Verbind je bibberdraad met ``pin 0`` met een draad. 
Verbind jouw lus met de ``GND``. Zo kan de micro:bit voelen wanneer je de draad raakt.

```

```
![](https://raw.githubusercontent.com/MrStandaert/kahiel-mbit/refs/heads/master/assets/Bibberdraad-schema.png)

## Downloaden en spelen maar

Heb je alle kabels verbonden? Dan kan je ``|Downloaden|`` en spelen!


```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
	
})
```

## 3 levens met een *variabele*

De micro:bit kan onthouden hoeveel levens we hebben. Dat doen we met een **variabele**.
Bij ``||variables||`` maak je een variabele ``||variables: levens||``. Daarna zet je 
``||variables: stel levens in op 3||``
bij ``||input:wanneer knop A wordt ingedrukt||``


```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```

## Als we nog levens hebben, dan reageert het spel

Wanneer we de draad raken moet de micro:bit rekenen. **Als** we méér dan 0 levens hebben, 
**dan** verliezen we een leven. Bouw ``||logic: als 'levens > 0' dan||`` 
als eerste blokje bij ``||input:wanneer pin p0 wordt aangeraakt||``. Zet het ``||basic: Toon pictogram: 'X'||``
daarin.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 3){
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    levens = 3
})
```

## Levens verliezen en tonen

Om een leven te verliezen, zet je ``||variables: verander levens met -1 ||`` bij de logica.
Om te tonen hoeveel levens we nog hebben, zetten we ``||basic: Toon nummer||`` met daarin 
``||variables: levens||``. 
Je bent klaar! ``|Downloaden|`` en spelen maar.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 3){
        basic.showIcon(IconNames.No)
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
Bouw ``||logic: als 'levens = 0' dan||`` met ``||basic: Toon pictogram 'skull'||``
op het einde van de logica.

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 3){
        basic.showIcon(IconNames.No)
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

Bedenk zelf maar wat leuke ideeën om het spel leuker te maken. Misschien
wil je een ``||music: Speel 'droevig' 'tot het klaar is'||`` geluidje toevoegen 
na het tonen van de doodskop? Of een bliepje wanneer de draad geraakt wordt?
Laat uw creativiteit maar los!

```blocks
let levens = 0
input.onPinPressed(TouchPin.P0, function () {
	if(levens > 3){
        basic.showIcon(IconNames.No)
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