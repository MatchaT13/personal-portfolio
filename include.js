function includeHTML(selector, file){
    fetch(file)
    .then(response => {
        if(!response.ok) throw new Error('Network respinse was not ok');
        return response.text();
    })
    .then(data => {
        document.querySelector(selector).innerHTML = data;
    })
    .catch(error => {
        console.error('Error loadig HTML file:', error);
    });
}

document.addEventListener("DOMContentLoaded", function(){
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
});