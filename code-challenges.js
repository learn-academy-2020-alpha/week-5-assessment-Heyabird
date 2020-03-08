// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

const coder = (string) => {
    arr1 = string.split("")
    arr2 = arr1.map(value =>  {
        if (value=='a') {
            return 4
        } else if (value=='e') {
            return 3
        } else if (value=='i') {
            return 1
        } else if (value=='o') {
            return 0
        } else {
            return value
        }
    }
    )
    return arr2.join("")
}



var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//TESTING
console.log(coder(secretCodeWord1))
console.log(coder(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

const ayo = (array) => {
    newArr = array.filter(value => value.includes("a") || value.includes("A"))
    return newArr.join(" ")
}



var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

console.log(ayo(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

fullHouse = (array) => {
    //make count variables
    count0=0
    count1=0
    //find out the unique values
    uniqueNum = [...new Set(array)]
    // console.log(uniqueNum)
    if (uniqueNum.length == 2) {
        //count how many times uniqueNum[0] and uniqueNum[1] appear in the OG array 
        for(let i=0; i<array.length; i++) {
            if (array[i] === uniqueNum[0]) {
                count0+=1
            } else if (array[i] === uniqueNum[1]) {
                count1+=1
            }
        }
        //check if the count values are 2 and 3 -- if so, return true
        if (count0==2 && count1==3 || count0==3 && count1==2) {
        return true
        }
    //otherwise, return false
    } else {
        return false
    }
    }



var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

console.log("hand1:", fullHouse(hand1))
console.log("hand2:", fullHouse(hand2))