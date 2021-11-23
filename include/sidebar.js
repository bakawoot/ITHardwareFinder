document.getElementById("sidebar").style.visibility = "visible";

const rows = document.querySelectorAll("tbody tr");
console.log(rows);

function filterProducts(inputID)
{
  content = inputID.parentElement.textContent;
  rows.forEach((row) => {
    if (row.querySelector("#prodTableProductAttributeNumOfCores").textContent != content.trim())
    {
      row.style.display = 'none';
    }
 });
}

var output2 = document.getElementById("demo2");
var output = document.getElementById("demo");
output.innerHTML = document.getElementById("filterSliderCoreMin").value;
output2.innerHTML = document.getElementById("filterSliderCoreMax").value;

function filterCore(inputID)
{
  //Number(document.getElementById("filterSliderCoreMax").value);
  output.innerHTML = document.getElementById("filterSliderCoreMin").value;
  output2.innerHTML = document.getElementById("filterSliderCoreMax").value;
  console.log(inputID.valueAsNumber);

  rows.forEach((row) =>
  {
    if ((Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) >= Number(document.getElementById("filterSliderCoreMin").value)) && (Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) <= document.getElementById("filterSliderCoreMax").value))
    {
      row.style.display = '';
    }else {
      row.style.display = 'none';
    }
 });
}

function filterCoreMax(inputID)
{
  console.log(inputID.value);
  rows.forEach((row) =>
  {
    if (Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) > Number(inputID.value))
    {
      row.style.display = 'none';
    }else {
      row.style.display = '';
    }
 });
}
