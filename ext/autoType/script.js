console.log("bonjour")

var AutoTypeDiv = document.getElementsByClassName("autoType")

var autoType1 = new AutoType(AutoTypeDiv[0], ["bonjour", "salut", "oui"])
autoType1.Write("salut !")
autoType1.Write("mdr")
autoType1.Pause(5000)
autoType1.Delete(2)