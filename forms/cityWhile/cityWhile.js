let cities=[]
let finished=false

while (finished=false)
{newCities = prompt("Enter your city. If you have no more cities please put 'stop'").split(",")
cities.push(newCities)
}

while (i<cities.length) {
  console.log(cities[i].ToLowerCase())
i++
}