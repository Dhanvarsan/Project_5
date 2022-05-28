    function cart() {
        let input = document.forms.myforms.qty.value
        let errmsg = document.getElementById("errmsg")
        if (input == "") {
            errmsg.innerHTML = "Enter Quantity of Product"
        } else if (input > 50) {
            errmsg.innerHTML = "Available stock is 50 give less than that"
            return false
        } else if (input <= 50) {
            alert(`${input} items Added To Cart`)
            errmsg.innerHTML = `RS. ${input*250}`
        }
    }

    let form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    function prom() {
        let input = document.forms.myforms.qty.value
        let input1 = document.forms.myforms1.promo.value
        let promoerr = document.getElementById("promoerr")
        if (input1 == "") {
            return true
        } else if (input1 == "offer20") {
            promoerr.innerHTML = `promocode applied ` + `${(input*250)-((input*250)*.2)}`
            return false
        } else if (input1 != "offer20") {
            promoerr.innerHTML = "Enter Valid Promocode"
            return false
        }
    }
    let form1 = document.getElementById('form1')
    form1.addEventListener('submit', (e) => {
        e.preventDefault()
    })