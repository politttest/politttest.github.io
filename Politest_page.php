<?php
require_once "includes.php";
$charset="utf8";
$conn = mysqli_connect(
	$config['db']['server'],
	$config['db']['username'],
	$config['db']['password'],
	$config['db']['name']
);
if ($conn == false){
	echo "Не удалось подключиться к базе данных <br>";
	echo mysqli_connect_error();
	exit();
}
if (!$conn->set_charset($charset)){
	print("Kodirovka");
}
?>
<!DOCTYPE html>
<html lang="uk">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo($config['title']);?></title>
	<link rel="stylesheet" href="style_page.css">
	<link rel="SHORTCUT ICON" href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%93%D0%B5%D1%80%D0%B1_%D0%BB%D1%96%D1%86%D0%B5%D1%8E_%C2%AB%D0%9F%D0%BE%D0%BB%D1%96%D1%82%C2%BB.png/450px-%D0%93%D0%B5%D1%80%D0%B1_%D0%BB%D1%96%D1%86%D0%B5%D1%8E_%C2%AB%D0%9F%D0%BE%D0%BB%D1%96%D1%82%C2%BB.png" type="image/x-icon">
</head>
<body>
	<div class="header">
				<img src="img/gerb.png" alt="" class="gerb">
				<a href="Politest_index.html" class="politest">Politest</a>
		<div class="to_header" style="">
			<a href="#">
				<p class="way_to_header">&#5169;</p>
			</a>
		</div>
		<div class="search_in_page">
			<form method="post" action="index.php">
				 <input id="number" type="number" max="11" min="8" placeholder="Клас" name="input1">
				 <input type="search" class="" placeholder="Поиск по разделу" name="input2">
				 <button type="submit" value="Найти">Пошук</button>
				 <button method="post"><a href="" style="color: black;">Видалити фільтри</a></button>
			</form>
		</div>
		</div>
	</div>
	<div class="wrapper">
	<?php  
	$filter_one = $_POST['input1'];
	$filter_second = $_POST['input2'];
	if ($filter_one=="" and $filter_second==""){
		$query = mysqli_query($conn, "SELECT * FROM tester");
	}
	elseif($filter_one!="" and $filter_second==""){
		$query = mysqli_query($conn, "SELECT * FROM tester WHERE `class` = '$filter_one'");
	}
	elseif($filter_one=="" and $filter_second!=""){
		$query = mysqli_query($conn, "SELECT * FROM tester WHERE  `caption` = '$filter_second'");
	}
	elseif($filter_one!="" and $filter_second!=""){
		$query = mysqli_query($conn, "SELECT * FROM tester WHERE `class` = '$filter_one' and `caption` = '$filter_second'");
	}
	if(mysqli_num_rows($query)==0){
		echo('<p class="label_error">'."По Вашому запиту нічого не знайдено. Спробуйте змінити фільтри".'</p>');
	}



	for($k=0;$k<mysqli_num_rows($query);$k++){
		$row = mysqli_fetch_row($query);
		for($j=0;$j<count($row);$j++){
			$array[]=$row[$j];
		}
		// print_r($array);
	}


	for($i = 0; $i<mysqli_num_rows($query);$i++)
	{
	?>
	<div class="card">
		<div class="name_card">
			<a class="text_name_card" data-name="Название теста:" href="button_google.html"><?php echo($array[1+$i*6]);?></a>
		</div>
		<div class="content">
			<p class="class_for_test"><?php echo($array[5+$i*6]);?>-й клас.</p>
			<p class="time_for_test">
				<?php if ($array[3+$i*6] == null) {
				echo('');
			}
			else{
				echo('Час проходження теста ');
				echo($array[3+$i*6]);
				echo(' хвилин');
				}
			?>
			</p>
		</div>
	</div>
	<?php  
	}
	?>
	</div>
	<p id="demo" style="font-weight: 600; font-size: 30px;"></p>

	<script >
	var ref = firebase.database().ref();
	ref.child("class").once("value").then(function(snapshot) {
	    var test = snapshot.val(); 
	    console.log(test);
	});
	document.getElementById("demo").innerHTML = function(snapshoth) ;
	</script>

</body>
</html>