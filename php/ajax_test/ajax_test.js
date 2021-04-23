$(function() {
    function getAllData() {
        $.ajax({
            // 通信先ファイル名
            url: "ajax_test_show_all.php",
            // 通信が成功した時
            success: function(data) {
                // 取得したレコードをeachで順次取り出す
                $.each(data, function(key, value) {
                    // #all_show_result内にappendで追記していく
                    $('#all_show_result').append("<tr><td>" + value.id + "</td><td>" + value.name + "</td><td>" + value.price + "</td></tr>");
                });
                console.log("通信成功");
                console.log(data);
            },
            // 通信が失敗した時
            error: function() {
                console.log("通信失敗");
                // console.log(data);
            }
        });
    }

    getAllData();

    // #ajax_showがクリックされた時の処理
    // 指定したidのレコードを取得する
    $('#ajax_show').on('click', function() {
        $.ajax({
            // リクエスト方法
            type: "GET",
            // 送信先ファイル名
            url: "ajax_test_show.php",
            // 受け取りデータの種類
            datatype: "json",
            // 送信データ
            data: {
                // #id_numberのvalueをセット
                "id": $('#id_number').val()
            },
            // 通信が成功した時
            success: function(data) {
                // 取得件数が1件のため、取得した情報を#result内にそのまま追加する
                $('#result').html("<p>ID番号" + data[0].id + "は「" + data[0].name + "」です。<br>価格は「" + data[0].price + "円」です。</p>");

                console.log("通信成功");
                // console.log(data);
            },
            // 通信が失敗した時
            error: function(data) {
                console.log("通信失敗");
                // console.log(data);
            }
        });
        return false;
    });

    // #ajax_addがクリックされた時の処理
    $('#ajax_add').on('click', function() {
        // 確認メッセージを表示
        // OKならtrue, キャンセルならfalseが代入される
        var confirmResult = window.confirm("登録してもよろしいですか？");

        if(confirmResult) {
            $.ajax({
                // リクエスト方法
                type: "POST",
                // 送信先ファイル名
                url: "ajax_test_add.php",
                // 受け取りデータの種類
                datatype: "json",
                // 送信データ
                data: {
                    // #nameと#priceのvalueをセット
                    "name": $('#name').val(),
                    "price": $('#price').val()
                },
                // 通信が成功した時
                success: function(data) {
                    $('#add_result').html("<p>" + data[0].name + "が" + data[0].price + "円のデータを登録しました。</p>");

                    console.log("通信成功");
                    // console.log(data);

                    // 一覧に追加したレコードを追記
                    $.each(data, function(key, value) {
                        $('#all_show_result').append("<tr><td>" + value.id + "</td><td>" + value.name + "</td><td>" + value.price + "</td></tr>");
                    });
                },

                // 通信が失敗した時
                error: function(data) {
                    console.log("通信失敗");
                    // console.log(data);
                }
            });
        }
        return false;
    });
});