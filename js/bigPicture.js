fetch('/js/FishEyeData.json')
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    } else {alert ("test")}
  })


  .then(function(value) {}

 
  .catch(function(err) {
    
    
});