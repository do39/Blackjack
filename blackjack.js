{\rtf1\ansi\ansicpg1252\cocoartf1138\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural

\f0\fs24 \cf0 // Our deal function will return a random card\
var deal = function() \{\
  card = Math.floor(Math.random()*52+1);\
  return card;\
\};\
\
// Deal out our first hand\
var card1 = deal();\
var card2 = deal();\
\
// This function takes a card as a parameter and returns the value\
// of that card\
var getValue = function(card) \
\{\
\
 if( card%13===0||card%13===11||card%13===12) \{\
        card = 10\
        return card;\
    \}\
  \
else if(card%13===1)\
\{\
            card= 11;\
            return card;\
\}\
  // Otherwise, we just want its number value\
  else\
  \{\
   return card%13;    \
  \}\
\}\
  \
        \
// Score the hand\
function score() \{\
  return getValue(card1) + getValue(card2);\
\}\
\
console.log("You have cards " + card1 + " and " + card2 +\
        " for a score of " + score(card1, card2));}