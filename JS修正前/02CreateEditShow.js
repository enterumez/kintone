//本部以外でログインしているときは、レコードの新規作成/編集画面を開いたとき、「自動送信設定_各支社」は操作できないようにする。
// 更新通知用フィールドは非表示にする。
(($) => {
    'use strict';
    kintone.events.on(["app.record.edit.show", "app.record.create.show"], (event) => {
    const record = event.record;
    console.log(event);
    return new kintone.Promise((resolve, reject) => {
    const user = kintone.getLoginUser();
    let username = user.name;
    console.log(username);

        if (username === "梅澤秀太") {
            resolve(event);
        } else {
            event.record.各アプリデータ更新.disabled = true;
            resolve(event);

    }});
});
})(jQuery);
