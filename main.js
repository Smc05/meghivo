//Részletek
document.querySelector('.details_button').addEventListener('click', () => {
    document.querySelector('.details').style.display = 'block';
});
//************************ */
//kódok tömbje
const codes = [
{code: '4k3b3R', name: 'Rebeka'}, {code: '17t4M', name: 'Matyi'}, {code: '1n38', name: 'Beni'},
{code: 'g411isC', name: 'Csillag'}, {code: '4rt3P', name: 'Petra'}, {code: '1nr48', name: 'Barni'},
{code: '501r1L', name: 'Anna'}, {code: '4dn1l3M', name: 'Melinda'} // ez az utolsó Anya miatt került be :)
]
//************************ */

//data első indexe az azonositás a második meg hogy kivánt e már szülinapot
data = JSON.parse(localStorage.getItem('data')) || [];
localStorage.setItem('data', JSON.stringify(data));
//************************ */

//érzékeli a regisztrálást/hogy regisztrálva van e már és 
function registercheck() {
    if (data[0] == undefined) {
        document.querySelector('.meghivo').style.display = 'none';
    }
    else {
        document.querySelector('.register').style.display = 'none';
        document.querySelector('.meghivo').style.display = 'block';
        document.querySelector('.welcome').innerHTML = `Kedves ${data[0]}!`
    }
}
registercheck();
//************************ */
//Regisztrálásnál kikeresse a code tömbből a megfelelő adatot
const input = document.querySelector('form input[type="text"]');
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    findCode = codes.filter(c => c.code == input.value) //megkeresi a kódot de ha nem talál akkor nem enged tovább a meghívófelületre
    if (findCode.length > 0) {
        data[0] = findCode[0].name
        localStorage.setItem('data', JSON.stringify(data));
        registercheck()
    }
    else {
        input.classList.add('incorrect');
        setTimeout(() => {
            input.classList.remove('incorrect');
        }, 500)
    }
});
//************************ */
//ellenőrzi hogy kivánt már szülinapot
if (data[1]) {
    document.querySelector('.wish').style.display = 'none';
    document.querySelector('.danke').style.display = 'block';
}
document.querySelector('.wish').addEventListener('click', () => {
    document.querySelector('.danke').style.display = 'block';
    document.querySelector('.wish').style.display = 'none';
    data[1] = true;
    localStorage.setItem('data', JSON.stringify(data));
});
//************************ */
