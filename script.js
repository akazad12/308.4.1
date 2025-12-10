
//----------- Refactoring Old Code ---------------
// let csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;


// let cells = ['','','','']; //refactored cell strings to be in a array
// let commas = 0;
// let output = [] //Holds all the cells



// for (let i = 0; i < csvString.length; i++) {
//     let current = csvString[i];
//     if (current == ','){
//         commas++;
//     }
//     else if(current =='\n'){
//         output.push(cells)
//         cells = ['','','',''];
//         commas = 0;
//     }
//     else{
//         cells[commas]+=current
//     }

// }
// console.log(cells)

//-------------- Expanding Functionality ----------
let csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cells = [''];
let commas = 0;
let output = [];

counter = 0

let columns = 1;

for (let i = 0; i < csvString.length; i++) {
    let current = csvString[i];
    if (current == ',') {

        commas++;
        cells.push('')
        if (counter == 0) {
            columns += 1;

        }
    }
    else if (current == '\n') {
        counter += 1
        output.push(cells)
        cells = [''];
        commas = 0;
    }
    else {
        cells[commas] += current
        if (i == csvString.length - 1) {
            // cells[commas] += current
            output.push(cells)
        }
    }
}
// console.log(output)

//-------------- Transforming Data ----------

keys = output[0];
keys = keys.map(keys=>keys.toLowerCase());

finalOutput = []
counter = 0;

for(let i = 1;i<output.length;i++){
    obj= {}
    for (let j = 0;j<keys.length;j++){

        obj[keys[j]]=output[i][j];
    }
    finalOutput.push(obj);
}

// console.log(finalOutput)

//-------------- Sorting and Manipulating Data ----------

// Remove the last element from the sorted array.
finalOutput.pop()
//  console.log(finalOutput)

//Insert the following object at index 1:
finalOutput.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
//  console.log(finalOutput)

//Add the following object to the end of the array:'
finalOutput.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
//  console.log(finalOutput)



// //Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group
totAge = 0

for (let i =0;i<finalOutput.length;i++){
    totAge+=Number(finalOutput[i]['age'])
}
avgAge = totAge/finalOutput.length

// console.log(`Average age of the group is ${avgAge}`)


//--------------- Transform the final set of data back into CSV format -------------
newCsv =[]

for (let i=0;i<finalOutput.length;i++ ){
    if (i==0){
        //Creates the header Values
        column = Object.keys(finalOutput[i])
        //pushes the 
        newCsv.push(column+'\n')

    }
    //
    row = Object.values(finalOutput[i])
    newCsv.push(row+'\n')

    }

//replaces commas with spaces in final array
newCsv =newCsv.join('')

console.log(newCsv)
// console.log(csvString)
