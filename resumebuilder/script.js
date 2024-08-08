function addEducation() {
    const educontainer = document.querySelector('.edu-container');
    const neweduDetails = document.createElement('div');
    neweduDetails.classList.add('edu-details');
    neweduDetails.innerHTML = `
        <label for="course">Course/Degree :</label>
        <input type="text" name="course" required>
        <label for="uni">University/School:</label>
        <input type="text" name="uni" required>
        <label for="grade">Grade :</label>
        <input type="text" name="grade" required>
        <label for="syear">Starting Year :</label>
        <input type="number" min="2015" max="2023" name="syear" required>
        <label for="eyear">Passing Year :</label>
        <input type="number" min="2015" max="2030" name="eyear" required>
        <div class="but-container">
            <button type="button" class="remove" onclick="removeEducation(this)">Delete</button>
        </div>
    `;
    educontainer.appendChild(neweduDetails);
}

function addSkill(){
    const skillContainer = document.querySelector('.skill-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('skill');

    newEntry.innerHTML = `
    <input name="skill" required>
    <div class="but-container">
    <button type="button" onclick="removeSkill(this)"> Delete</button>
    </div>
    `;

    skillContainer.appendChild(newEntry);

}
function removeSkill(button){
    const skillEntry = button.closest('.skill');
    if(skillEntry){
        skillEntry.remove();
}
}
function addLang(){
    const langContainer = document.querySelector('.lang-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('lang');

    newEntry.innerHTML=`

        <input name="lang" required>
            <div class="but-container">
            <button type="button" class="remove" onclick="removeLang(this)"> Delete </button>
            </div>
        `;
        langContainer.appendChild(newEntry);

}
function removeLang(button){
    const langEntry = button.closest('.lang');
    if(langEntry){
        langEntry.remove();
    }
}
function addProj(){
    const ProjContainer = document.querySelector('.proj-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('project');

    newEntry.innerHTML = `
    <div class="pro-title">
    <label for="pro-title">Project Title : </label> 
    <input name ="pro-title" type="text">
    </div>
    <div class="pro-desc">
    <label for="pro-desc">Description : </label>
    <textarea name="pro-desc"></textarea>
    </div>
    <div class="but-container">
    <button type="button" class="remove" onclick="removeLang(this)"> Delete </button>
    </div>
    <div class="but-container">
    <button type="button" class="add" onclick="addProj()"> Add </button>
    </div>`;

    ProjContainer.appendChild(newEntry);

}
function removeProj(button){
    const ProjEntry = button.closest('.pro-container');
    if(ProjEntry){
        ProjEntry.remove();
    }
}
function addCert(){
    const certcontainer = document.querySelector('.certification-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('certification');

    newEntry.innerHTML =`
    
                <input name="certi-name" type="text">        
                <div class="but-container">
                <button type="button" class="remove" onclick="removeCert(this)"> Delete </button>
                </div>
                `;

    certcontainer.appendChild(newEntry);
}

function removeCert(button){
    const certEntry = button.closest('.certification');
    if(certEntry){
        certEntry.remove();
    }
}
function addAch(){
    const Achcontainer = document.querySelector('.achie-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('Achievement');

    newEntry.innerHTML = `
    
                <input name="achie" type="text">
                <div class="but-container">
                <button type="button" class="remove" onclick="removeAch(this)"> Delete </button>
                </div>
                `;

    Achcontainer.appendChild(newEntry);
}

function removeAch(button){
    const achEntry = button.closest('.achievement');
    if(achEntry){
        achEntry.remove();
    }
}
function addExtra(){
    const Excontainer = document.querySelector('.extra-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('extra');

    newEntry.innerHTML = `
                <input name="extra" type="text">
                <div class="but-container">
                    <button type="button" class="remove" onclick="removeEx(this)"> Delete </button>
                </div>
                `;

    Excontainer.appendChild(newEntry);
}
function removeEx(button){
    const ExEntry = button.closest('.extra');
    if(ExEntry){
        ExEntry.remove();
    }
}

function generateResume(){
    const fullname = document.querySelector('.full-name');

    fullname.innerHTML = '';

    const name = document.querySelector('input[name="name"]').value;

    fullname.innerHTML += `
    <h1>${name}</h1>
    
    `;

    
    const left = document.querySelector('.main .left');

    left.innerHTML = '';

    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="number"]').value;

    left.innerHTML += `
    <h3>Contact</h3>
    <p>${email}</p>
    <p>${phone}</p>
    `

    const right = document.querySelector('.main .right');
    right.innerHTML = '';
    

    const obj = document.querySelector('textarea[name="obj"]').value;
    right.innerHTML += `
    <h3>Objective</h3>
    <p>${obj}</p>
    `

    const skills = document.querySelectorAll('input[name="skill"');
    let skilist = ''

    skills.forEach(skill => {
        if (skill.value) {
            skilist += `<li>${skill.value}</li>`;
        }
    });

    if(skilist){
        left.innerHTML += `
        <h3>Skills</h3>
        <ul>${skilist}</ul>`
    }

    const educations = document.querySelectorAll('.edu-details');
    left.innerHTML += `<h3>Education</h3>`
    educations.forEach(edu => {
        const course = edu.querySelector('input[name="course"]').value;
        const uni = edu.querySelector('input[name="uni"]').value;
        const grade = edu.querySelector('input[name="grade"]').value;
        const syear = edu.querySelector('input[name="syear"]').value;
        const eyear = edu.querySelector('input[name="eyear"]').value;

        

        if (course && uni && grade && syear && eyear) {
            left.innerHTML += `
            <div>
                <p><strong>${course}</strong></p>
                <p>${uni}</p>
                <p>${grade}</p>
                <p>${syear} - ${eyear}</p>
            </div>`;
        }
    });

    const langs = document.querySelectorAll('input[name="lang"]');
    let langlist = ''

    langs.forEach(lang => {
        if (lang.value) {
            langlist += `<li>${lang.value}</li>`;
        }
    });

    if(langlist){
        left.innerHTML += `
        <h3>Languages</h3>
        <ul>${langlist}</ul>`
        
    }

    const projects = document.querySelectorAll('.project');
    let projectAdded = false;
    projects.forEach(proj => {
        const title = proj.querySelector('input[name="pro-title"]').value;
        const desc = proj.querySelector('textarea[name="pro-desc"]').value;

        if (title && desc) {
            if (!projectAdded) {
                right.innerHTML += `<h3>Projects</h3>`;
                projectAdded = true;
            }
            right.innerHTML += `
            <div>
                <p><strong>${title}</strong></p>
                <p>${desc}</p>
            </div>`;
        }
    });
    

    const cert = document.querySelectorAll('input[name="certi-name"]');
    let certlist = ''

    cert.forEach(certi => {
        if (certi.value) {
            certlist += `<li>${certi.value}</li>`;
        }
    });

    if(certlist){
        right.innerHTML += `
        <h3>Certifications</h3>
        <ul>${certlist}</ul>`
        
    }

    const achieve = document.querySelectorAll('input[name="achie"]');
    let achlist = ''
    achieve.forEach(ach => {
        if (ach.value) {
            achlist += `<li>${ach.value}</li>`;
        }
    });

    if(achlist){
        right.innerHTML += `
        <h3>Achievements</h3>
        <ul>${achlist}</ul>`
        
    }

    const ex = document.querySelectorAll('input[name="extra"]');
    let exlist = ''

    ex.forEach(extr => {
        if (extr.value) {
            exlist += `<li>${extr.value}</li>`;
        }
    });

    if(exlist){
        right.innerHTML += `
        <h3>Extracurricular Activities</h3>
        <ul>${exlist}</ul>`
        
    }


}
function downloadPDF(){
    const ele = document.getElementById('resume-preview');

    const opt = {
        margin: [0, 0, 0,  0.5],
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(ele).save();
}


