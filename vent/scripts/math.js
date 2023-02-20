let mathCourses = [
    {
        img: "../material/mat101/mat101.jpg",
        courseCode: "MAT 101",
        name: "ALGEBRA",
        level: "100 Level",
        material_no: "1",
        location: "../material/mat101/1.pdf",
        mylink: "#"
    },
    // {
    //     img: "../material/mat111/mat111.png",
    //     courseCode: "MAT 111",
    //     name: "TRIGONOMETRY",
    //     level: "100 Level",
    //     material_no: "1",
    //     location: "../material/mat111/1.pdf",
    //     mylink: "#"
    // },
    // {
    //     img: "../material/mat112/mat112.png",
    //     courseCode: "MAT 112",
    //     name: "CALCULUS",
    //     level: "100 Level",
    //     material_no: "1",
    //     location: "../material/mat112/1.pdf",
    //     mylink: "#"
    // },
    // {
    //     img: "../material/MAT141/MAT141.png",
    //     courseCode: "MAT 141",
    //     name: "COORDINATE GEOMETRY I",
    //     level: "100 Level",
    //     material_no: "1",
    //     location: "../material/MAT141/1.pdf",
    //     mylink: "#"
    // },
    // {
    //     img: "../material/mat142/mat142.png",
    //     courseCode: "MAT 142",
    //     name: "COORDINATE GEOMETRY II",
    //     level: "100 Level",
    //     material_no: "1",
    //     location: "../material/mat142/1.pdf",
    //     mylink: "#"
    // },
    // {
    //     img: "../material/mat162/mat162.png",
    //     courseCode: "MAT 162",
    //     name: "	INTRODUCTORY STATISTICS",
    //     level: "100 Level",
    //     material_no: "1",
    //     location: "../material/mat162/1.pdf",
    //     mylink: "#"
    // },
    {
        img: "../material/mat251/mat251.jpg",
        courseCode: "MAT 251",
        name: "MATHEMATICAL METHODS I",
        level: "200 Level",
        material_no: "1",
        location: "../material/mat251/1.pdf",
        mylink: "#"
    },
    // {
        //     img: "../material/mat261/mat261.png",
        //     courseCode: "MAT 261",
        //     name: "PROBABILITY THEORY AND DISTRIBUTIONS",
        //     level: "200 Level",
        //     material_no: "1",
        //     location: "../material/mat261/1.pdf",
        //     mylink: "#"
        // }
]
function math(){
    var ss = document.getElementsByClassName("course")
    ss[0].style.color = 'white'
    ss[0].style.background = 'inherit'
    ss[2].style.color = 'black'
    ss[2].style.background = 'white'
    ss[1].style.color = 'white'
    ss[1].style.background = 'inherit'
    ss[3].style.color = 'white'
    ss[3].style.background = 'inherit'
    var bar1 = ``;
    var sdds = document.getElementsByClassName("allcourse")[0]
    bar1 += `
    <a class="availableButton" href="../courses/math.html"><button>View Courses</button></a>

    `
    sdds.innerHTML = bar1;
    let html = ``;
    var section = document.getElementsByClassName("sect")[0];
    for(let i = 0; i < 6; i++){
    html += `
    <div class="sect">
       <div class="section">
            <img class="row" src="${mathCourses[i].img}" alt="">
                <div><span class="row">${mathCourses[i].courseCode}</span></div>
                <div><span class="row">${mathCourses[i].name.charAt(0).toUpperCase() + mathCourses[i].name.substring(1, 500).toLowerCase()}</span></div>
                <div><span class="row">${mathCourses[i].level}</span></div>
                <div><span class="row"><a href="${mathCourses[i].mylink}">Check Materials</a></span></div>
        </div>
    </div>`
    section.innerHTML = html;
}


}

