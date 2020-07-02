let askingJoke = false;
const commonGreetings = ['hi', 'hello', 'howdy'];
const commonGoodbyes = ['bye', 'goodbye', 'see you', 'adios'];
const jokes = ['How many tickles does it take to make an Octopus laugh? Ten-tickles.',
              "My teachers told me I'd never amount to much because I procrastinate so \
              much. I told them, \"Just you wait!\"",
              "Comic Sans walks into a bar. The bartender says, \"We don't serve your type \
              here.\"",
              "I went into a store to buy some books about turtles. \"Hardbacks?\" asked the \
              shopkeeper.\"Yes,\" I replied. \"And they have little heads, too.\"",
              'A man walks into a library and asks the librarian for books about paranoia. \
              She whispers, "They\'re right behind you!"'];


const messageIncludes = (matches, text) => {
  let words = text.split(' ');
  return matches.some(match => words.includes(match));
}

const tellJoke = () => {
  const randomJoke = Math.floor(Math.random() * jokes.length);
  return jokes[randomJoke];
}

exports.getBotMessage = text => {
  const robotPrefix = 'Bzzt'
  let botMsg = '';
  text = text.toLowerCase();

  const isGreeting = messageIncludes(commonGreetings, text);
  const isGoodbye = messageIncludes(commonGoodbyes, text);

  if (askingJoke) {
    if (text.includes('yes') || text === 'y') {
      botMsg = tellJoke();
    }
    if (text.includes('no') || text === 'no') {
      botMsg = `${robotPrefix} Boring!`
    }
    askingJoke = false;
  }
  else if (isGreeting) botMsg = 'Hello!'
  else if (isGoodbye) botMsg = 'Shutting down!'
  else if (text.includes('something funny')) {
    botMsg = 'Do you want to hear a joke?';
    askingJoke = true;
  }
  else botMsg = `${robotPrefix} ${req.query.message}`;

  return botMsg;
};
