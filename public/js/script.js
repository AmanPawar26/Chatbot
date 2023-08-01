
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatConatiner = document.getElementById('chatContainer');

var user = {message:""};


var arrayOfPossibleMessage = [
    {message:"hi", response:"hello"},
    {message:"how are you", response:"I'm good"},
    {message:"what is your name?", response:"I'm a chatbot!"},
    {message:"how old are you?", response:"I'm ageless"},
    {message:"do you have kids", response:"No i don't!!"},
    {message:"do you sleep early?", response:"I'm always awake"},
    {message:"can you dance", response:"yes,tango.."},
    {message:"what is your fav food?", response:"Burger"},
    {message:"do you have a job?", response:"yes"},
    {message:"is gpt your cousin?", response:"you're right!"},
    {message:"where were you born", response:"on mars"},
    {message:"are'nt you tired", response:"A lot!"},
    {message:"do you have siblings", response:"Yes, i have got 4"},
   
    
]


function sendMessage(userMessage){
    
     var messageElement = document.createElement('div');
     messageElement.style.textAlign = "right";
     messageElement.style.margin = "10px";

     messageElement.innerHTML = "<span> You: </span>"+
                                "<span>" +userMessage+ "</span>";
     chatConatiner.appendChild(messageElement);


}


function chatbotResponse(userMessage){
 
   var chatbotmessage = "";

   if (userMessage.length > 5 || userMessage == "hi"){
     var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

     if(result.length > 0){
        var response = result[0].response;
        chatbotmessage = response;
     }else{
        chatbotmessage = "please send another message";
     }
   }else{
    chatbotmessage = "please send a different message"
   }
   
   
   
   
   var messageElement = document.createElement('div');

   messageElement.innerHTML = "<span>Chatbot: </span>"+
                              "<span>"+chatbotmessage+"</span>";
    
    
    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
        chatConatiner.appendChild(messageElement);
        chatConatiner.scrollTop = chatConatiner.scrollHeight;

    },1000)
    

c


}





sendBtn.addEventListener('click', function(e) {
    
    var userMessage = textbox.value;
    
    if(userMessage == ""){
        alert('Please type in a message');
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
    
})
