const tname = document.getElementById('name')
const description = document.getElementById('description')
const sendbtn = document.querySelector('.btnSend')
const history = document.querySelector('.history')


class Message{
    constructor(sendingTime, teacherName, description){
        this.sendingTime = sendingTime;
        this.teacherName = teacherName;
        this.description = description;
    
    }
    toString(){
        return `${this.sendingTime} ${this.teacherName}: ${this.description}`
    }

    toHtml(){
      return  `<p>${this.sendingTime} ${this.teacherName}: ${this.description}</p></b>`
    }
}


function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Messenger extends Message{
    constructor(){
        super()
        this.messages = []
    }
    send(author, text){
        var message = new Message(gettime(), author,text);
        this.messages.push(message)

    }
    show_history(){
        history.innerHTML =''
        this.messages.forEach((el) =>{
          history.innerHTML += el.toHtml()
        })

    }
}


var newone = new Messenger()
sendbtn.addEventListener('click', function(event){
    newone.send(tname.value, description.value)
    tname.value=''
    description.value=''
    newone.show_history()
})