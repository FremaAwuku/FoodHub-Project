
const search = document.getElementById('search-field')

search.addEventListener('change', (e) => {
  //return restaurants in json with get method
  //change to array and map for restaurant names
    //position search bar relative
  //
  const fakerArr = ['test2', 'test3', 'test1']
  const searchDiv = document.createElement('search-div')

  //iterate thru restaurant names
  const val = e.target.value
  
    fakerArr.forEach(element => {
      if (element.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        const foundResult = document.createElement('div')
        foundResult.innerHTML = element
        searchDiv.appendChild(foundResult)
        search.append(searchDiv)
      }
    });
    //find a matching name using e.target.value
  
  //if found create a new div
      
    //fill html with restaurant name
  //append matching names to this div

  

  
})
