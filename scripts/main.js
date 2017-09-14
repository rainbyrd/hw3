const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = ['https://twitter.com/mmart168', 'https://twitter.com/beyonce', 'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  document.querySelector('#freebie').innerHTML = 'Example Freebie!'
  console.log('modifying text')
  // YOUR CODE BELOW THIS LINE.
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  document.querySelector('#link2').innerHTML = beyonceTweet.name
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  console.log('changing link attribute')
  // YOUR CODE BELOW THIS LINE
  document.getElementById('link1').href = links[0]
  document.getElementById('link2').href = links[1]
  document.getElementById('beyonce').href = links[2]

}

const changeClassAttribute = () => {
  console.log('changing class attribute')
  // YOUR CODE BELOW THIS LINE
  document.getElementById('tweet').id = 'tweet-pink'

}

const appendElements = () => {
  console.log('appending element')
  // YOUR CODE BELOW THIS LINE
getElementById('tweet1').append('<div> <a href="https://f17.ebook.mmart.us/">Intro to JavaScript</a> </div>')
var newDiv = document.createElement(tagName[options])
}
