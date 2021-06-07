async function fetchData () 
{
  const response = await fetch('js/FishEyeData.json')
  const data = await response.json();

  return data
}
