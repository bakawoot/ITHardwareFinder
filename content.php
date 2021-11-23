
<div class="content">
    <h2><?php echo(count($rows));?> termék</h2>
    <table class="prodTable">

<?php
	if (count($rows) > 0){
		foreach ($rows as $value) {
			echo
				'<tr class="prodTableRow'.$value['id'].'">'.
				    '<td class="prodTablePicure">kép helye</td>'.
				    '<td id="prodTableProductName" class="prodTableProductName">'.$value["Model"].'</td>'.
				    '<td id="prodTableProductPrice" class="prodTableProductPrice">Ár</td>'.
				    '<td id="prodTableProductAttributeNumOfCores" class="prodTableProductAttribute">'.$value["# of CPU Cores"].'</td>'.
				    '<td id="prodTableProductAttributeBaseClockMaxBoostClock" class="prodTableProductAttribute">'.$value["Base Clock"].'</td>'.
				    '<td id="prodTableProductAttributePackage" class="prodTableProductAttribute">'.$value["Package"].'</td>'.
				    '<td id="prodTableProductAttributeL2Cache" class="prodTableProductAttribute">L2 cache mérete: '.$value["Total L2 Cache"].'</td>'.
				    '<td id="prodTableProductAttributeL3Cache" class="prodTableProductAttribute">L3 cache mérete: '.$value["Total L3 Cache"].'</td>'.
            '<td id="rodTableProductAttributeLaunchDate"class="prodTableProductAttribute">Kiadás: '.$value["Launch Date"].'</td>'.
				'</tr>';
		}
	}
?>
	</table>
</div>
