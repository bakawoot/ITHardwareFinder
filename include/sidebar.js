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

function filterCore(inputID)
{
  console.log(document.getElementById("filterSliderCoreMin").value);
  console.log(document.getElementById("filterSliderCoreMax").value);
  rows.forEach((row) =>
  {
    if (Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) < Number(inputID.value))
    {
      row.style.display = 'none';
    }else {
      row.style.display = '';
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
