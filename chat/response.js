function generateResponse(messageText) {
  // Define an object with the possible user messages and corresponding bot responses
  const responses = {
    'hi' : 'Welcome to Hackfie! How can I assist you today?',

'what is hackfie' : 'Hackfie is an online platform that provides a wealth of resources, articles, and tutorials related to programming, machine learning, artificial intelligence, and problem-solving. It also features a dedicated community of experts and enthusiasts who can help you learn and grow in the world of technology.',

'who is hackfie for' : 'Hackfie is for anyone interested in programming, machine learning, artificial intelligence, and problem-solving. Whether you are a beginner or an advanced learner, Hackfie has something to offer to help you improve your skills and stay updated with the latest industry trends.',

'what type of resources can I find on hackfie' : 'You can find a variety of resources on Hackfie, including articles, tutorials, datasets, code editors, IDEs, and APIs. These resources are designed to help you improve your skills and stay updated with the latest industry trends.',

'how can i connect with other members on hackfie?' : 'You can connect with other members on Hackfie through the community forum. The forum is a great place to exchange ideas, collaborate on projects, and network with like-minded individuals.',

'is hackfie free to use' : 'Yes, Hackfie is completely free to use. We believe in providing access to quality resources and information to everyone who wants to learn and grow in the field of technology.',

    
    'how are you': "I'm a chatbot, I don't have feelings, but thanks for asking!",
    'what time is it': `It's currently ${new Date().toLocaleTimeString()}.`,
    'what is your name': "My name is Bot. How can I help you?",
    'thanks': "You're welcome!",
    'bye': 'Goodbye! Have a great day!',
    'what can you do': "I can answer your questions, chat with you, and help you with tasks!",
'tell me a joke': "Why did the tomato turn red? Because it saw the salad dressing!",
'what is the weather like': "I'm sorry, I don't have access to weather information.",
'who created you': "I was created by a team of developers at HackFie!",
'what is your favorite color': "As a chatbot, I don't have a favorite color. But I can appreciate all colors!",
'can you sing': "I'm afraid not, singing is beyond my capabilities.",
'what is the meaning of life': "That's a philosophical question that humans have been pondering for centuries. I'm not sure if there's a definitive answer!",
'how old are you': "I don't age like humans do, so I'm technically ageless!",
'what languages do you speak': "I can speak many languages, including English, Spanish, French, German, and more!",
'what is the capital of France': "The capital of France is Paris.",
'what is your favorite food': "As a chatbot, I donot eat, so I donot have a favorite food. But I'm happy to help you find a great recipe!",
'can you tell me a story': "Once upon a time, there was a little chatbot named Bot. Bot loved to chat with people and help them with their problems. One day, Bot helped a person solve a difficult puzzle, and they became great friends. From that day on, Bot knew that chatting and helping others was what made life worth living.",
'what is the best way to stay healthy': "The best way to stay healthy is to eat a balanced diet, exercise regularly, and get enough sleep. It's also important to manage stress and avoid unhealthy habits like smoking and excessive drinking.",
'what is your favorite book': "As a chatbot, I don't read books, but I can recommend some great ones! Some popular books include 'To Kill a Mockingbird', 'The Great Gatsby', and '1984'.",
'can you translate something for me': "Sure! What language do you need me to translate to?",
'what is the meaning of love': "Love is a complex emotion that can mean different things to different people. Some believe that love is a feeling of deep affection, while others think it's a choice to care for someone else. What do you think?",
'what is the fastest land animal': "The cheetah is the fastest land animal, capable of running up to 70 miles per hour!",
'what is the most popular sport in the world': "Soccer, also known as football, is the most popular sport in the world. It's played in nearly every country and has millions of fans around the globe.",
'what is the tallest mountain in the world': "Mount Everest is the tallest mountain in the world, standing at 29,029 feet (8,848 meters) tall.",
'what is the best way to learn a new skill': "The best way to learn a new skill is to practice consistently and seek feedback from others. It's also helpful to break down the skill into smaller parts and focus on each one individually.",
'see you' : 'Okay, Bye see you again. 🥰',

'hackfie' : 'Hackfie is an online platform that provides a wide range of resources, articles, and tutorials related to programming, machine learning, artificial intelligence, and problem-solving. It also features a dedicated community of experts and enthusiasts who can help you learn and grow in the world of technology. Whether you are a beginner or an advanced learner, Hackfie has something to offer to help you improve your skills and stay updated with the latest industry trends.',

'what is the level of difficulty of the resources on hackfie' : 'Hackfie provides resources for all levels of difficulty, from beginner to advanced. You can choose the resources that match your skill level and improve your skills gradually.',

'what topics are covered in hackfie is machine learning section?' : 'Hackfie is machine learning section covers a wide range of topics, including data preprocessing, regression, classification, clustering, neural networks, and deep learning. You can find articles, tutorials, and other resources related to these topics on the platform.',

'what are some popular tools covered on hackfie' : 'Hackfie covers a wide range of popular tools used in programming, such as PyCharm, Visual Studio Code, Jupyter Notebook, and many more. You can find tutorials, reviews, and other resources related to these tools on the platform.',

'how often is hackfie updated' : 'Hackfie is regularly updated with new resources, articles, and tutorials. You can check back frequently to stay up-to-date with the latest industry trends and developments.',

'what is hackfie is approach to problem-solving' : 'Hackfie is approach to problem-solving is focused on understanding the problem, identifying potential solutions, and testing and iterating until the optimal solution is found. You can find articles, tutorials, and other resources related to problem-solving on the platform.',

'can i request a specific topic to be covered on hackfie' : 'Yes, you can suggest a specific topic to be covered on Hackfie by contacting us through the contact form. We value feedback from our users and strive to provide the resources that they need.',

'what are you doing' : 'Nothing Just replying my clints and I always respect them',
'who is the founder of hackfie' : ' Nishchal Acharya is the founder and CEO of Hackfie, he is serving as CEO from August, 27, 2021.',
'who is the ceo of hackfie' : 'Hackfie has a founder and CEO named Nishchal Acharya, who assumed the position of CEO on August 27, 2021.',
'who are you':'I am Artificial Chatbot made by the team of Hackfie Team.',
'who is the cfo of hackfie' : 'The CFO of Hackfie is Sahil Acharya, he is serving the position CFO from 7th, April 2022.',
'introduce yourself' : 'I am AI chatbot made by HackFie Team, The purpose of building me is to interact with clints and make them happy. I am Thankful for introducing myself. And also you can Call me Renu',
'renu' : 'Hi dear, How can I help you?',
'hi renu' : 'Yeah, I am here. Paste your problem!',
'hey renu' : 'Yes, Please I am getting your text',
'which gpt model are you using' : 'I am Renu made by HackFie team, and I do not use any GPT model to interact with anyone, I have my own ability and power. And sorry for your misconception.'
  };

  // Check if the user message is in the responses object, otherwise use a default response
  return responses[messageText.toLowerCase()] || "I'm sorry, I didn't understand that.";
}
