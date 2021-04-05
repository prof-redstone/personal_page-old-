console.log("bonjour")

var AutoTypeDiv = document.getElementsByClassName("autoType")

var autoType1 = new AutoType({
    parent: AutoTypeDiv[0],
    glitchEffect: true,
    arrayGlitchEffect: ["leet"]
})
.Write("salut !")
.Break()
.Write("mdr ")
.Write("tranquille ou quoi ?")
.Sleep(1000)
.Write("comment ça va ?")
.Delete(1000)
.Start()