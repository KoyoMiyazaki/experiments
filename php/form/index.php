<?php
require_once 'db_connect.php';

$stmt = $pdo->query("SELECT * FROM datas WHERE round = 1");
$result = $stmt->fetchall();
?>

<table cellspacing="30">
    <thead>
        <tr>
            <th>user</th>
            <th>text</th>
            <th>remarks</th>
        </tr>
    </thead>
    <tbody>
<?php
        
foreach ($result as $row) {
    echo '<form action="update.php" method="post">';
    echo '<tr>';
    echo '<input type="hidden" name="id" value="' . $row['id'] . '">';
    echo '<td><input type="text" name="user" value="' . $row['user'] . '" readonly></td>';
    echo '<td><input type="text" name="text" value="' . $row['text'] . '"></td>';
    echo '<td><input type="text" name="remarks" value="' . $row['remarks'] . '"></td>';
    echo '<input type="hidden" name="round" value="' . $row['round'] . '">';
    echo '<td><input type="submit" value="編集"></td>';
    echo '</tr>';
    echo '</form>';
}
?>
    </tbody>
</table>
