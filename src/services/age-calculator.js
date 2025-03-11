
export function ageCalculator(yob) {

    const currentYear = new Date().getFullYear()

    const studentAge = currentYear - yob
    return studentAge

}