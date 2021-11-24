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

var filterSliderCoreMax = document.getElementById("filterSliderCoreMaxValue");
var filterSliderCoreMinValue = document.getElementById("filterSliderCoreMinValue");
filterSliderCoreMinValue.innerHTML = document.getElementById("filterSliderCoreMin").value;
filterSliderCoreMax.innerHTML = document.getElementById("filterSliderCoreMax").value;

function filterCore(inputID)
{
  if (Number(document.getElementById("filterSliderCoreMax").value) < Number(document.getElementById("filterSliderCoreMin").value)){
      if (inputID.id == "filterSliderCoreMin")
      {
        document.getElementById("filterSliderCoreMax").value = document.getElementById("filterSliderCoreMin").value;
      }else
      {
        document.getElementById("filterSliderCoreMin").value = document.getElementById("filterSliderCoreMax").value;
      }
  }

  filterSliderCoreMinValue.innerHTML = document.getElementById("filterSliderCoreMin").value;
  filterSliderCoreMax.innerHTML = document.getElementById("filterSliderCoreMax").value;

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
