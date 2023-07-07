// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:

// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>

// Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3]) то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()

// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>
//     <ul>
//       <li>1.1</li>
//       <li>1.2</li>
//       <li>1.3</li>
//     </ul>
//   </li>
//   <li>3</li>
// </ul>

// 1, 2, 3, [4.1, 4,2, [4.3.1, 4.3.2]], 5

// start list id is id = 1
// start loop in range of array.length()
    // list id is id
    // get element
    // check whether element is array
        // if NOT add <li>with array[i] text</li>
        // if YES add empty <ul></ul> add id += 1 and reuse function
// at the end of loop id += -1

'use strict'

// str = [[[a, a], a], a, a, [a, a, [a, a, a]], a]
function generateList(arr) {
    console.log(arr.length)
    const lst = document.getElementById(ident);
    // console.log(lst, typeof(ident));
    for (let i = 0; i < arr.length; i++) {
        // console.log('arr[i]', arr[i]);
        if (!Array.isArray(arr[i])) {
            console.log(arr[i], 'is NOT array');
            const li = document.createElement('li');
            li.textContent = 'This is added element ' + arr[i];
            console.log(lst, li);
            lst.append(li);
        } else {
            console.log(arr[i], 'is array');
            const li = document.createElement('li');
            lst.append(li);
            const ul = document.createElement('ul');
            ident += 1;
            ul.textContent = 'This is added inner list ' + i;
            ul.setAttribute('id', ident);
            lst.append(ul);
            generateList(arr[i]);
        }
    }
    ident += -ident
}


const arr = null;
let ident = 0
while (arr === null) {
    let str = prompt('Please insert array to create the list structure', 'array like [x1, x2, [x3.1, [x3.2.1]], ...]')
    console.log(str);
    let arr = JSON.parse(str.replace(/'/g,"\"").replace(/a/g,"\"$&\""));
    console.log(Array.isArray(arr));
    // arr = arr[0];
    console.log(arr);
    if (Array.isArray(arr)) {
        generateList(arr)
        break
    } else {
        // console.log('We are here for some reason')
        alert('Wrong data, please try again');
        arr = null;
    }
}


// str = [[[a, a], a], a, a, [a, a, [a, a, a]], a]
// string_to_array(str) 

// function string_to_array (str) {
//     let count = (str.match(/\[/g) || []).length;
//     if (count > 1) {
//         for (let i = 0; i < count; i++) {

//         }
//     }
//     return count
// }


