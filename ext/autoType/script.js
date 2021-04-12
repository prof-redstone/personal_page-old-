
var AutoTypeDiv = document.getElementsByClassName("autoType")
var autoType1 = new AutoType({
    parent: AutoTypeDiv[0],
    glitchEffect: true,
    arrayGlitchEffect: ["leet"],
    writeSpeed: 50,
    decrypt: true,
})
.State("Hey, ")
.Write("salut ! ")
.Break()
.Write("mdr ")
.State(" uuuuuuuuu ")
.Write("tranquille ou quoi ? ")
.Sleep(1000)
.Write("comment ça va ? ")
.Delete(1000)
.Start()

