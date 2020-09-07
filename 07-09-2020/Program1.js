/**
 * This Function will accept details about Developers
 * and create an object for them.
 * @param {string} name The Developer's Full name
 * @param {number} age The Develper's age.
 * @param { boolean} isJavaDevloper wheather or not the JavaDeveloper
 */


function Devloper(name, age, isJavaDevloper)
{
    return{
        name:name,
        age:age,
        isJavaDeveloper:isJavaDeveloper
    }
}