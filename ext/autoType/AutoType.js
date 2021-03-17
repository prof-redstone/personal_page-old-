class AutoType{
    constructor (element, className){
        this.location = element;
        this.state = "";
        this.typeElement = "span";
        className.unshift("AutoTypeClass")
        this.CharClass = className;
        this.loop = true;
        this.writeSpeed = 50;
        this.deleteSpeed = 50;
        this.intervalTime;
        this.action = [] //-1:delete 0:pause 1:write
        this.start = false
    }

    Start(){
        this.start = true;
    }

    Update(){
        
    }

    UpdateWrite(){
        this.Reset()
        for (let i = 0; i < this.state.length; i++) {
            let p = document.createElement(this.typeElement);
            for (let i = 0; i < this.CharClass.length; i++) {
                p.classList.add(this.CharClass[i])
            }
            p.innerHTML = this.state[i]
            this.location.append(p)
        }
    }
    TypeElement(element){
        this.typeElement = element;
    }
    Reset(){
        this.location.innerHTML = '';
    }
    DeleteChar(){
        this.state = this.state.slice(0, -1)
        this.Update()
    }
    AddChar(char){
        this.state += char
        this.Update()
    }

    Write(str){
        this.action.push([1, str])
    }
    Pause(time){
        this.action.push([0, time])
    }
    Delete(nb){
        this.action.push([-1, nb])
    }
    
}