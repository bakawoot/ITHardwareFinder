<?php

function Connect() {
include 'dbauth.php';
	$_conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
	if ($_conn->connect_error) {
		die("Connection failed: " . $_conn->connect_error);
	}
	else return $_conn;

}

function SelectCPUs($tableName) {
	$conn = Connect();
	$rows = array();
	//$row = array();
	$index = 0;
	$sql = "SELECT * FROM $tableName";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while($_row = $result->fetch_assoc()) {
			$row[$index] = $_row;
			$index++;
		}
	}
	else {
		echo "nincs eredmény";
	}
	$conn->close();
	//return $rows;
	return $row;
}

function getUniquesFromColumn($array, $columnName, $sort){
	$uniques = array_filter(array_unique(array_column($array, $columnName)));
		if ($sort == 'true'){
			sort ($uniques);
		}
	return $uniques;
}
?>
