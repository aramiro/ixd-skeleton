<? php

		session_start();
		$_SESSION["loggedInUser"] = $username;
			try {
				// open connection to mongodb server
				$conn = new Mongo('localhost:27017')
			}

			$db = $conn->reminder;
			// access collection
			$collection = $db->items;
			$username = $_POST['username'];
			$password = $_POST['password'];
			$user = $db->$collection->findOne(array('username'=> $username, 'password'=> $password));

			foreach ($user as $obj) {
				echo 'Username' . $obj['username'];
				echo 'password: ' . $obj['password'];
				if($username == )
			}

			$conn->close();

?>