class AutoType {
    constructor(param) {
        this.location = param.parent || "";
        this.state = param.state || "";
        this.typeElement = this.typeElement || "span";
        this.ClassArray = param.className || ["autoType"];
        this.loop = param.loop || true;
        this.writeSpeed = param.writeSpeed || 50;
        this.deleteSpeed = param.deleteSpeed || 40;
        this.glitchEffect = param.glitchEffect || false;
        this.arrayGlitchEffect = param.arrayGlitchEffect || ["leet"]
        this.actuUpdateSpeed = 0;
        this.intervalTime;
        this.action = [] //-1:delete 0:pause 1:write
        this.actionNumber = 0; //compteur des actions
        this.actionChar = 0; //compteur pour les caractères
        this.start = false;
        //different effect
        this.decrypt = param.decrypt || false

    }

    Start() {
        this.start = true;
        this.SetIntervalTime(this.writeSpeed)
        return this
    }

    Pause() {
        console.log("stop")
        this.start = false;
        this.SetIntervalTime(0)
    }

    SetIntervalTime(a) {
        if (a != this.actuUpdateSpeed) {
            clearInterval(this.intervalTime)
            if (a != 0) {
                this.intervalTime = setInterval(() => {
                    this.Update()
                }, a);
            }
            this.actuUpdateSpeed = a;
        }
    }

    Update() {
        if (this.action[this.actionNumber][0] == 1) { //write
            if (this.action[this.actionNumber][1].length > this.actionChar) {
                this.AddChar(this.action[this.actionNumber][1][this.actionChar])
                this.SetIntervalTime(this.writeSpeed)
                this.actionChar += 1
            } else {
                this.actionChar = 0
                this.actionNumber += 1
            }
        } else if (this.action[this.actionNumber][0] == -1) { // delete
            if (this.action[this.actionNumber][1] > this.actionChar) {
                this.DeleteChar()
                this.SetIntervalTime(this.deleteSpeed)
                this.actionChar += 1
                if (this.state == "") {
                    this.actionNumber += 1
                }
            } else {
                this.actionChar = 0
                this.actionNumber += 1
            }
        } else if (this.action[this.actionNumber][0] == 2) { //break 
            let br = document.createElement("br")
            this.location.append(br)
            this.state += " " //pour eviter bug quand delete

            this.actionNumber += 1
        } else if (this.action[this.actionNumber][0] == 0) { //pause
            this.SetIntervalTime(0)
            setTimeout(() => {
                if (this.start == true) {
                    this.SetIntervalTime(this.writeSpeed)
                }
            }, this.action[this.actionNumber][1]);
            this.actionNumber += 1
        } else if (this.action[this.actionNumber][0] == 3) { //state
            for (let i = this.state.length; i > 0; i--) {
                this.DeleteChar()
            }
            for (let i = 0; i < this.action[this.actionNumber][1].length; i++) {
                this.AddChar(this.action[this.actionNumber][1][i])
            }
            this.actionNumber += 1
        }


        if (this.loop == true) {
            if (this.actionNumber >= this.action.length) {
                this.actionNumber = 0
                this.actionChar = 0
            }
        }
    }

    DeleteChar() { //methode
        this.state = this.state.slice(0, -1)

        //DOM
        this.location.removeChild(this.location.lastElementChild)
    }
    AddChar(char) { //methode
        this.state += char

        //add to DOM
        let p = document.createElement(this.typeElement);
        for (let i = 0; i < this.ClassArray.length; i++) {
            p.classList.add(this.ClassArray[i])
        }
        if (this.glitchEffect == true) {
            let c = this.arrayGlitchEffect[nb_random(0, this.arrayGlitchEffect.length - 1)]
            p.classList.add(c)
        }
        p.innerHTML = char
        this.location.append(p)
    }

    TypeElement(element) { //user
        this.typeElement = element;
    }
    State(str) {
        this.action.push([3, str])
        return this
    }
    Write(str) { //user
        this.action.push([1, str])
        return this
    }
    Sleep(time) { //user
        this.action.push([0, time])
        return this
    }
    Delete(nb) { //user
        this.action.push([-1, nb])
        return this
    }
    Break() { //user
        this.action.push([2, "break"])
        return this
    }
}


function nb_random(min, max) { //fonction générant un nombre aléatoire entier min et max inclue [min;max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}