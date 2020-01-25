<?php
// Create database connection using config file
include_once("koneksi.php");

// Fetch all users data from database
$result = mysqli_query($mysqli, "SELECT * FROM product ,cashier ,category  ORDER BY id DESC");
?>

<html>

<head>
    <title>resto</title>
</head>

<body>


    <table width='80%' border=1>

        <tr>
            <th>Cashier</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
        <?php
        while ($user_data = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $user_data['name_ca'] . "</td>";
            echo "<td>" . $user_data['name'] . "</td>";
            echo "<td>" . $user_data['name_ct'] . "</td>";
            echo "<td>" . $user_data['price'] . "</td>";
        }
        ?>
    </table>
</body>

</html>