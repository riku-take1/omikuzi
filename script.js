// omikujiButtonがクリックされたとき
document.getElementById("omikujiButton").addEventListener("click", function () {
  // omikujiTitleをサンプルテキスト1に変更、omikujiDetailsをサンプルテキスト2に変更する
  document.getElementById("omikujiTitle").textContent = "サンプルテキスト1";
  document.getElementById("omikujiDetails").textContent = "サンプルテキスト2";

  // postToXButtonボタンのhiddenを削除し、画面に表示させる
  document.getElementById("postToXButton").classList.remove("hidden");
});

document.getElementById('omikujiButton').addEventListener('click', function() {
  // 講演情報の配列を作成
  // ---公演情報ここから---
  const items = [
    {
      title: "ひろゆきと10人の学生エンジニア〜論破するのか、されるのか〜",
      time: "9月22日 17:15",
      company: "ひろゆき",
      hall: "A",
    },
    {
      title:
        "ビジネスに必要な全てを担い、自分の専門性を見つけ出すフルサイクル開発者のあり方",
      time: "9月22日 16:20",
      company: "株式会社CARTA HOLDINGS",
      hall: "A",
    }
  ];
  // ---公演情報ここまで---

  // おみくじの内容をランダムに変更
  const index = Math.floor(Math.random() * items.length);
  // おみくじの内容を画面に表示
  document.getElementById("omikujiTitle").textContent = items[index].title;
  document.getElementById("omikujiDetails").textContent =
    `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

  document.getElementById("postToXButton").classList.remove("hidden");
});
