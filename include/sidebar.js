document.getElementById("Filters").style.visibility = "visible";
document.getElementById("content").style.visibility = "visible";

const productTableRows = document.querySelectorAll("tbody tr");
const inputFields = document.getElementById('Filters').getElementsByTagName('input');
const arrayLength = inputFields.length;
//console.log(rows);

var numOfVisibleRows;

function filter(inputID)
{
  console.log('Function is called');
  inputID = inputID;
  toggleCheckboxes(inputID);

  //show every row
  //needed to refresh the filter
  productTableRows.forEach((row) =>
  {
    row.style.display = 'table-row';
  });

  for (var i = 0; i < arrayLength; i++)
  {

    //text input
    if (inputFields[i].type == 'text')
    {
      var filterCoreMinValue = Number(document.getElementById("filterCoreMin").value);
      var filterCoreMaxValue = Number(document.getElementById("filterCoreMax").value);

      productTableRows.forEach((row) =>
      {
        if (row.style.display == 'table-row'){
          if ((Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) >= filterCoreMinValue) && Number(row.querySelector("#prodTableProductAttributeNumOfCores").textContent) <= filterCoreMaxValue)
          {
            row.style.display = 'table-row';
          } else
          {
            row.style.display = 'none';
          }
        }
      });
    }

    //checkbox input
    numOfItems = 0;
    if (inputFields[i].type == 'checkbox')
    {
      if (String(inputFields[i].checked) == 'true')
      {

        //console.log('Checkbox is checked');
        productTableRows.forEach((row) =>
        {
          if (row.style.display == 'table-row')
          {
            if (row.querySelector("#prodTableProductAttributePackage").textContent == (inputFields[i].parentElement.firstChild.nextElementSibling.textContent).trim())
            {
              row.style.display = 'table-row';
              numOfItems++;
            }
          }
        });
      }else
      {

        //console.log('Checkbox is not checked');
        productTableRows.forEach((row) =>
        {
          if (String(row.querySelector("#prodTableProductAttributePackage").textContent) == inputFields[i].parentElement.firstChild.nextElementSibling.textContent.trim())
          {
            row.style.display = 'none';
            numOfItems++;
          }
        });
      }
      if (inputFields[i].id != 'togglePackageCheckboxes')
      {
        inputFields[i].parentElement.lastChild.textContent = " (" + numOfItems  + ")";
      }
    }

  }
  numOfVisibleRows = 0;

  productTableRows.forEach((row) =>
  {
    if (row.style.display == 'table-row')
    {
      numOfVisibleRows++;
    }
  });
  document.getElementById("numOfItems").textContent = String(numOfVisibleRows);

  console.log('---');
}

filter();

function toggleCheckboxes(inputID)
{
  numOfChecked = 0;
  numOfFilterPackageInputs = 0;
  for (var i = 0; i < arrayLength; i++)
  {
    if (inputFields[i].id == 'filterPackage' && inputFields[i].checked == '')
    {
      numOfChecked++;
    }
    if (inputFields[i].id == 'filterPackage')
    {
      numOfFilterPackageInputs++;
    }
  }
  if (numOfChecked == numOfFilterPackageInputs)
  {
    for (var i = 0; i < arrayLength; i++)
    {
      if (inputFields[i].id == 'filterPackageAll')
      {
        inputFields[i].checked = 'true';
        inputFields[i].disabled = 'true';
      }
    }
  }

  switch (inputID.id){
    case 'filterPackageAll':
    {
      if (String(inputID.checked) == 'true')
      {
        inputID.disabled = 'true';
        for (var i = 0; i < arrayLength; i++)
        {
          if (inputFields[i].id == 'filterPackage')
          {
            inputFields[i].checked = '';
          }
        }
      } else
      {
        inputID.disabled = '';
      }
      break;
    }case 'filterPackage':
    {
      if (String(inputID.checked) == 'true')
      {
        for (var i = 0; i < arrayLength; i++)
        {
          if (inputFields[i].id == 'filterPackageAll')
          {
            inputFields[i].checked = '';
            inputFields[i].disabled = '';
          }
        }
      }
      break;
    }
  }
}
