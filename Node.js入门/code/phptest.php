<?php
  print('兆鹏');

  sleep(5);

  print('在分享');

  print('知识');
?>

<?php
  $array = array('兆鹏', '嘉琪');

  function returnNames() {
    $html = '<p>' . join($array, '</p><br><p>') . '</p>';
    // 我把array置空了！
    $array = array();

    return $html;
  }
?>