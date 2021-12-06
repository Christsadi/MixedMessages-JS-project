const coupleFriendFamily = {
    randomNum(num) {
        return Math.floor(Math.random() * num) 
    },
    friendships(){
        quote1 = 'show affectionate love to a friend.\nConverse in deep conversation.';
        quote2 = 'try reflect on a fond memory of a friend.';
        quote3 = 'We give some space and let focus on our environment,\nhow to better nurture your well-being.';
        let printQuote = '',
        friendshipQuote = [quote1,quote2,quote3]; // all the quote in an array
        friendshipQuoteIndex = this.randomNum(friendshipQuote.length);
        //console.log(friendshipQuoteIndex) //testing if randomNum() gives a random number between 0 - 2
        printQuote = 'Friendship is very important, so for this week, ' + friendshipQuote[friendshipQuoteIndex];
        //console.log(printQuote); //testing if printQuote will print to the console.
        return printQuote;
    },
    significantOthers(){
        quote1 = 'work together with your partner.';
        quote2 = 'set aside time for you & your partner.';
        quote3 = 'keep your love exciting with humor & flirting.';
        let printQuote = '',
        significantOtherQuote = [quote1,quote2,quote3];
        significantOtherQuoteIndex = this.randomNum(significantOtherQuote.length);
        //console.log(significantOtherQuoteIndex) //testing if randomNum() gives a random number between 0 - 2
        printQuote = 'If you have a significant one, ' + significantOtherQuote[significantOtherQuoteIndex] + '\nIf you do not have a partner it okay, skip this one.';
        //console.log(printQuote); //testing if printQuote will print to the console 
        return printQuote;
    },
    families(){
        
        quote1 = 'offer unconditional love & forgiveness to a family member.';
        quote2 = 'put your personal needs second and offer help to a family member.';
        quote3 = 'stay open & trust those close to you.';
        let printQuote = '',
        familyQuote = [quote1,quote2,quote3];
        familyQuoteIndex = this.randomNum(familyQuote.length);
        //console.log(familyQuoteIndex) //testing if randomNum() gives a random number between 0 - 2
        printQuote = 'Blood is thicker than water, ' + familyQuote[familyQuoteIndex];
        //console.log(printQuote); //testing if printQuote will print to the console 
        return printQuote;
    },
    output(){
    console.log(`Here are this weeks focus:\n\n${this.friendships()}\n${this.significantOthers()}\n${this.families()} `);
    },
};
//testing to see if methods are working
//return coupleFriendFamily.friendships();
//return coupleFriendFamily.significantOthers();
//return coupleFriendFamily.families();
//testing if file is still connected to github

return coupleFriendFamily.output();