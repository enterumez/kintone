
//本部以外でログインしているときは、レコードの詳細画面で、「更新通知用フィールド」「所属変更管理_更新通知」「自動送信設定_各支社」は非表示にする
(($) => {
    'use strict';
    kintone.events.on("app.record.detail.show", (event) => {
    const record = event.record;
    return new kintone.Promise((resolve, reject) => {
    const user = kintone.getLoginUser();
    let username = user.name;
    console.log(username);
    if (username === "梅澤秀太") {
    kintone.app.record.setFieldShown('各アプリデータ更新', true);
    kintone.app.record.setFieldShown('他アプリ同時更新用フィールド', true);
    resolve(event);
    } else {
    kintone.app.record.setFieldShown('各アプリデータ更新', false);
    kintone.app.record.setFieldShown('他アプリ同時更新用フィールド', false);
    resolve(event);
    }
    });
    });
    })(jQuery);
