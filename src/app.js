import DataService from "./services/data-service.js";
import { ageCalculator } from "./services/age-calculator.js";

const service = new DataService();

const studentData = service.getStudentsData();

const container = document.getElementById('students-container');

for (let i = 0; i < studentData.length; i++) {
    const student = studentData[i];

    const studentContainer = document.createElement('div');

    studentContainer.classList.add('student-container');
    // creazione nome
    const nameContainer = document.createElement('h3');

    const nameNode = document.createTextNode(student.name + ' ' + student.surname)

    nameContainer.appendChild(nameNode);
    // creazione nazionalità
    const countryContainer = document.createElement('p');

    const countryNode = document.createTextNode('Nazionalità: ' + student.nationality)

    countryContainer.appendChild(countryNode);

    // creazione genere
    const genereContainer = document.createElement('p');

    const genereNode = document.createTextNode('Genere: ' + student.gender)

    genereContainer.appendChild(genereNode);

    // calcolo età

    const ageContainer = document.createElement('p');
    const currentStudentAge = ageCalculator(student.yob)
    const ageNode = document.createTextNode('Età: ' + currentStudentAge)

    ageContainer.appendChild(ageNode)


    // qui appendiamo i container creati

    studentContainer.appendChild(nameContainer);

    studentContainer.appendChild(genereContainer);

    studentContainer.appendChild(countryContainer);

    studentContainer.appendChild(ageContainer);


    container.appendChild(studentContainer);
}








////////////to do///////////
/// - aggiungere genere
/// - aggiungere età
/// - allineare le schede degli studenti a due a due
/// - rendere il sito molto bello
/// - ordinare gli studenti per ordine alfabetico di nome