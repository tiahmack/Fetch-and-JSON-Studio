// TODO: add code here
window.addEventListener('load', function () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function (response) {
            return response.json();
        }).then(function (response) {

            //sort our stuff
           let sortedAstronauts = response.sort(function(a, b) {return a.hoursInSpace - b.hoursInSpace});

            //console.log(response);

            let myContainer = document.getElementById('container');
            let allMyHtml = "";
            let myCount = `
                <h3>Astronaut Count: ${sortedAstronauts.length}</h3>
            `
            allMyHtml += myCount;

            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                let myHtml = `
                <div class="astronaut">
                 <div class="bio">
                    <h3>${response[i].firstName} ${response[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${response[i].hoursInSpace}</li>
                        <li>Active: ${response[i].active}</li>
                        <li>Skills: ${response[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${response[i].picture}">
            </div>
            `;
            allMyHtml += myHtml;

            }
            myContainer.innerHTML =allMyHtml;
        })
});