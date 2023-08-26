function captchainfo() {
    const wording = [
        "if you _method_ _1_ and _2_, what do you get?",
        "What's the result you get by _method_ing _1_ and _2_",
        "_method_ing _1_ and _2_ gives you?"
        ]
    const methodword = [
        "add",
        "subtract"
    ]
    const methodchar = [
        "+",
        "-"
    ]
    const firstnumber = Math.floor(Math.random() * 10);
    const secondnumber = Math.floor(Math.random() * 10);

    let chosenmethod = null
    let chosenmethodnumber = null

    const chosenwordingnumber = Math.floor(Math.random() * wording.length);
    const chosenwording = wording[chosenwordingnumber];

    if (chosenwording.includes("_char_") == true) {
        chosenmethodnumber = Math.floor(Math.random() * methodchar.length);
        chosenmethod = methodchar[chosenmethodnumber];
    } else {
        chosenmethodnumber = Math.floor(Math.random() * methodword.length);
        chosenmethod = methodword[chosenmethodnumber];
        }

    const result = chosenwording.replace("_1_", firstnumber).replace("_2_", secondnumber).replace("_method_", chosenmethod)
    let numberresult = null

    if (chosenmethodnumber == 0) {
         numberresult = firstnumber + secondnumber
    }
    if (chosenmethodnumber == 1) {
         numberresult = firstnumber - secondnumber
    }
    return {
        "result" : numberresult,
        "question" : result
     }
}
function generatecapthcas() {
    const times = 300;
    let captchas = {}
    for(let i = 0; i < times; i++){
        let generatedcapthca = captchainfo()
        captchas[i] = generatedcapthca
    }
    console.log(captchas)
}
generatecapthcas()
