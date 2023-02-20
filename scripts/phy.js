let physicsCourses = [
    {
        img: "../material/phy101/phy101.png",
        courseCode: "PHY 101",
        name: "GENERAL PHYSICS I",
        level: "100 Level",
        material_no: "1",
        location: "../material/Phy101/1.pdf",
        mylink: "#"
    },
    {
        img: "../material/phy103/phy103.jpg",
        courseCode: "PHY 103",
        name: "BASIC HEAT",
        level: "100 Level",
        material_no: "1",
        location: "../material/phy103/1.ppt",
        mylink: "#"
    },
    {
        img: "../material/phy105/phy105.png",
        courseCode: "PHY 105",
        name: "EXPERIMENTAL PHYSICS I",
        level: "100 Level",
        material_no: "1",
        location: "../material/phy105/1.pdf",
        mylink: "#"
    }
]
function physics(){    
    var ss = document.getElementsByClassName("course")
    ss[0].style.color = 'white'
    ss[0].style.background = 'inherit'
    ss[3].style.color = 'black'
    ss[3].style.background = 'white'
    ss[1].style.color = 'white'
    ss[1].style.background = 'inherit'
    ss[2].style.color = 'white'
    ss[2].style.background = 'inherit'
    var bar1 = ``;
    var sdds = document.getElementsByClassName("allcourse")[0]
    bar1 += `
    <a class="availableButton" href="../courses/phy.html"><button>View Courses</button></a>

    `
    sdds.innerHTML = bar1;
    var section = document.getElementsByClassName("sect")[0];

    
    let html = ``;
    for(let i = 0; i < physicsCourses.length; i++){
    html += `
    <div class="sect">
       <div class="section">
            <img class="row" src="${physicsCourses[i].img}" alt="">
                <div><span class="row">${physicsCourses[i].courseCode}</span></div>
                <div><span class="row">${physicsCourses[i].name.charAt(0).toUpperCase() + physicsCourses[i].name.substring(1, 500).toLowerCase()}</span></div>
                <div><span class="row">${physicsCourses[i].level}</span></div>
                <div><span class="row"><a href="${physicsCourses[i].mylink}">Check Materials</a></span></div>
        </div>
    </div>`
    section.innerHTML = html

}

}