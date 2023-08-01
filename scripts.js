// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort')
    const flightStatus = document.getElementById('fightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleheight = document.getElementById('spaceShuttleheight');
    const rocket = document.getElementById('rocket');

    let rocketPositionX = 0;
    let rocketPositionY = 0;
    let altitude = 0;
    
    takeoffButton.addEventListener("click", function () {
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeOff) (
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000
            spaceShuttleheight.innerHTML = altitude;
        );
    });

    landButton.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0
        spaceShuttleheight.innerHTML = altitude;
    });

    abortButton.addEventListener("click", function () {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");
        if (shouldAbort) (
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            altitude = 0
            spaceShuttleheight.innerHTML = altitude;
        );
    });

    document.addEventListener("click", function (event) {
        altitude = 0
        if (event.target.id === "left") {
            rocketPositionX -= 10
            rocket.style.marginLeft = rocketPositionX + 'px';
        }
        if (event.target.id === "right") {
            rocketPositionX += 10
            rocket.style.marginLeft = rocketPositionX + 'px';
        }
        if (event.target.id === "up") {
            rocketPositionY += 10
            rocket.style.marginBottom = rocketPositionY + 'px';
            altitude += 10000
        }
        if (event.target.id === "down") {
            rocketPositionY -= 10
            rocket.style.marginBottom = rocketPositionY + 'px';
            altitude -= 10000
        }
    });







  );
