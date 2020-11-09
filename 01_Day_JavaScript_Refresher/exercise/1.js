// https://github.com/morioprog/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md#-exercise

// 1. Declare an empty array
const arr_1 = Array()
console.log(arr_1)

// 2. Declare an array with more than 5 number of elements
const arr_2 = [1, 2, 3, 4, 5]
console.log(arr_2)

// 3. Find the length of your array
console.log(arr_2.length)

// 4. Get the first item, the middle item and the last item of the array
console.log(arr_2[0])
console.log(arr_2[arr_2.length >> 1])
console.log(arr_2[arr_2.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
//    The array size should be greater than 5
const mixedDataTypes = [1, '2', 3.0, [4], [[5]], [[['6']]]]
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length >> 1])
console.log(itCompanies[itCompanies.length - 1])

// 10. Print out each company
for (const company of itCompanies)
    console.log(company)

// 11. Change each company name to uppercase one by one and print them out
const upperItCompanies = Array()
for (const idx in itCompanies)
    upperItCompanies.push(itCompanies[idx].toUpperCase())
console.log(upperItCompanies)

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies[itCompanies.length - 1] + " are big IT companies.")

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function inItCompanies(company) {
    return itCompanies.includes(company)
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (const company of itCompanies)
    if (company.includes('o'))
        console.log(company)

// 15. Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

// 16. Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19. Slice out the middle IT company or companies from the array
const sz = itCompanies.length
if (sz % 2 == 0) {
    console.log(itCompanies.slice((sz >> 1) - 1, 2))
} else {
    console.log(itCompanies.slice(sz >> 1, (sz >> 1) + 1))
}

// 20. Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(sz >> 1, 1)
console.log(itCompanies)

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)
