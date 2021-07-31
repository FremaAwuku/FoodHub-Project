//window.document.addEventListener("load", async () => {

  const search = document.querySelector(".autocomplete")
  

  search.addEventListener("input", async(e) => {
    //return restaurants in json with get method
    //change to array and map for restaurant names
    //position search bar relative
    const restaurantsArr = []
    const res = await fetch('/restaurants/allrestaurants', {
      headers: {
        "Content-Type": "application/json",
        },
    });   
      if (res.status === 401) {
        window.location.href = "/";
        return;
      } 
        const { allRestaurants } = await res.json();
    
      for(let i= 0; i < allRestaurants.length; i++){
        let string = JSON.stringify(allRestaurants[i]);
        let parseRestaurant = JSON.parse(string)
        restaurantsArr.push([parseRestaurant.name, parseRestaurant.id] );
      }
      console.log(restaurantsArr);



    let searchDiv = document.getElementById('search-id')
    
    if (searchDiv) {
      searchDiv.remove()
    }

    searchDiv = document.createElement("div")
    searchDiv.setAttribute('id', 'search-id')

    search.appendChild(searchDiv)
    
    //iterate thru restaurant names
    const val = e.target.value
    searchDiv.innerHTML = ''
    for (let i = 0; i < restaurantsArr.length; i++) {
      const element = restaurantsArr[i][0];
      if (element.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        console.log(element)
        let foundResult = document.createElement("a")
        foundResult.setAttribute('href', `/restaurants/${restaurantsArr[i][1]}`)
        foundResult.setAttribute('class', 'input-res')
        foundResult.innerHTML = "<strong>" + element.substr(0, val.length) + "</strong>";
        foundResult.innerHTML += element.substr(val.length);
        //foundResult.innerHTML   += "<input type='hidden' value='" + element + "'>"
        searchDiv.appendChild(foundResult)
      }
    };
    //find a matching name using e.target.value
  
    //if found create a new div
      
    //fill html with restaurant name
    //append matching names to this div
 })
//});
