{\rtf1\ansi\ansicpg1252\cocoartf1138\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural

\f0\fs24 \cf0 // Make your card constructor again here, but make sure to use private\
// variables!\
function Card(s,n)\
\{\
    var suit = s;\
    var number = n;\
    this.getSuit = function()\{\
        return suit;\
    \
    \};\
    this.getNumber = function()\
    \{\
        return number;\
    \};\
this.getValue = function() \{\
                    if (number === 11 || number === 12 || number ===13 )\{\
                        return 10;\
                    \}\
                    else if (number === 1)\{\
                        return 11;\
                    \}\
                    else \{\
                        return number;\
                    \}\
                \};\
\};\
\
// Make a deal function here.  It should return a new card with a suit\
// that is a random number from 1 to 4, and a number that is a random\
// number between 1 and 13\
var deal = function ()\{\
  var suit = Math.floor(Math.random()*4+1);\
var number = Math.floor(Math.random()*13+1);\
return new Card(suit,number);\
\};\
\
// examples of the deal function in action\
var card1 = deal();\
var card2 = deal();\
\
function Hand()\
\{\
    this.card1 = deal();\
    this.card2 = deal();\
    this.score = function()\{\
        var score1 = this.card1.getValue(); \
        var score2 = this.card2.getValue(); \
        return score1+score2;\
    \}\
\}\
\
var myHand = new Hand(); var yourHand = new Hand();\
\
console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());\
\
if(yourHand.score() > myHand.score()) console.log("you win!"); else if(yourHand.score() < myHand.score()) console.log("I win!"); else console.log("We tied!");}