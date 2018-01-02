#!/usr/bin/env node

const math = require('mathjs');
const _ = require('lodash');

function buildDeck() {
  //suit and rank iterators
  var suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
  var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  var deck = [];
  _.forEach(suits,function(suit){
    _.forEach(ranks,function(rank, index){
        //value from rank calculation
        var value = null;
        if (rank === 'Ace'){
          value = 11;
        }
        else if (rank === "Jack" || rank === "Queen" || rank === "King"){
          value = 10;
        }
        else{
          value = index + 1;
        }

        //card creation
        var card = new Object();
        card.rank = rank;
        card.suit = suit;
        card.value = value

        //card added to deck
        deck.push(card);
    })
  });

  return deck;
}

function buildDecks(numDecks = 6){
  var decks = [];

  //loop for number of decks
  for (var i = 0; i < numDecks; i++) {
      decks.push(buildDeck());
  }

  return _.flatten(decks);

}
