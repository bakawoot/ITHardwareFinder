document.getElementById("Filters").style.visibility = "visible";

const rows = document.querySelectorAll("tbody tr");
//console.log(rows);

//1 input (checkbox)
function filterPackage(inputID)
{
  console.log(inputID);
  content = inputID;
  rows.forEach((row) => {
    if (row.querySelector("#prodTableProductAttributePackage").textContent != content.trim())
    {
      row.style.display = 'none';
    } else
      {
        row.style.display = 'table-row';
      }

 });
}

//2 input (text input)
function filterCore()
{
  var filterCoreMinValue = Number(document.getElementById("filterCoreMin").value);
  var filterCoreMaxValue = Number(document.getElementById("filterCoreMax").value);
  console.log(filterCoreMinValue);
  console.log(filterCoreMaxValue);
  console.log("lefut");
  rows.forEach((row) =>
  {
    if ((Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) >= filterCoreMinValue) && Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) <= filterCoreMaxValue)
    {
      row.style.display = 'table-row';
    }else {
      row.style.display = 'none';
    }
  });
}


function filter()
{
  inputFields = document.getElementById('Filters').getElementsByTagName('input');
  var arrayLength = inputFields.length;
  for (var i = 0; i < arrayLength; i++) {
    //console.log(inputFields)
      if (inputFields[i].type == 'text')
      {
        console.log(inputFields[i].value);
      }
      if (inputFields[i].type == 'checkbox')
      {
        //console.log(inputFields[i].parentElement.textContent);
        console.log(inputFields[i].checked)
      }
      //Do something
  }
}

filter();
