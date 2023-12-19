const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const storeitems = document.getElementById("faq-box")
    const product = document.querySelectorAll(".faq-wrapper")
    const pname = storeitems.getElementsByTagName("label")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('label')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

// send email //
function sendMail(){
    (function(){
        emailjs.init("McXZgfLFJqdnpVWSB"); // Accoint Public key
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        subject: document.querySelector("#subject").value,
        replyto: document.querySelector("#replyto").value,
        message: document.querySelector("#pesan").value,
    };

    var serviceID = "service_o73k35p"; // Email Service ID
    var templateID = "template_9hup6qg"; //  Email template ID

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("email sent succesfully!");
    })
    .catch();
}