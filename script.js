document.getElementById('omikujiButton').addEventListener('click', function() {
  // 講演情報の配列を作成
  // ---公演情報ここから---

  // 省略

  // ---公演情報ここまで---

  // ボタンを読み込む
  const omikujiButton = document.getElementById("omikujiButton");
  const postToXButton = document.getElementById("postToXButton");

  // ボタンの初期設定
  omikujiButton.disabled = true; // おみくじボタンを無効化
  postToXButton.classList.add("hidden"); // ポストボタンを非表示にする

  // スピン処理に必要な変数を作成
  let index = 0; // 現在の公演情報を保持
  let count = 0; // 現在の回転数を保持
  let maxCount = 20; // 最大回転回数
  let speed = 50; // 初期回転速度

  // ---スピン処理ここから---
  function spin() {
    if (count < maxCount) {
      // おみくじの内容をランダムに変更
      index = Math.floor(Math.random() * items.length);

      // おみくじの内容を画面に表示
      document.getElementById("omikujiTitle").textContent = items[index].title;
      document.getElementById("omikujiDetails").textContent =
        `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

      count++;

      // 回転の速度を徐々に遅くする
      speed += 5;
      setTimeout(spin, speed); // 繰り返す
    } else {
      // 最終結果の公演情報を取得
      const finalItem = items[index];
      // 最終結果の表示
      document.getElementById("omikujiTitle").textContent = finalItem.title;
      document.getElementById("omikujiDetails").textContent =
        `${finalItem.time}, ${finalItem.company}, ホール: ${finalItem.hall}`;

      // ボタンを有効化/表示する設定
      omikujiButton.disabled = false; // おみくじボタンを有効化
      postToXButton.classList.remove("hidden"); // ポストボタンを表示
    }
  }
  // ---スピン処理ここまで---

  // スピン処理開始
  spin();
});
