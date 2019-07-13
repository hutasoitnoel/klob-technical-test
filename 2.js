const clothes1 = [["JakartaJS"], ["AWSome Day", "Elixir"], ["GoJakarta", "Elixir"]]
const clothes2 = [["JakartaJS", "Elixir"], ["Elixir"], ["JakartaJS ", "Elixir"]]

function answer(clothes) {
    // Count list of clothing
    let clothesCount = {}

    for (let i = 0; i < clothes.length; i++) {
        for (let j = 0; j < clothes[i].length; j++) {

            // Add to object if not yet in list
            if (!clothesCount[clothes[i][j]]) clothesCount[clothes[i][j]] = 0

            // Count 1 for every clothing
            clothesCount[clothes[i][j]] += 1

            // Return false if number of same clothing equals number of employees
            if(clothesCount[clothes[i][j]] === clothes.length) return false
        }
    }

    // Return true if number of same clothing not equals number of employees
    return true
}

// Answer
console.log(answer(clothes1))
console.log(answer(clothes2))