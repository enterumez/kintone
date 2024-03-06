//本部以外でログインしているときは、レコードの新規作成/編集画面で、「申請状況」を編集不可にする。(テーブルに1行以上データがあるとき)
(($) => {
    'use strict';
    kintone.events.on(["app.record.edit.show", "app.record.create.show"], (event) => {
        let record = event.record;
        console.log(event);
        const user = kintone.getLoginUser();
        let username = user.name;
        console.log(username);
        const table = record.所属組織変更管理;
        const rows = table.value;

        if (rows.length > 0) {
            for (const row of rows) {
                const fields = row.value;

                if (username !== "梅澤秀太") {
                    fields.処理完了日.disabled = true;
                    fields.棄却理由.disabled = true;
                }
            }
        }
        return event;
    });
})(jQuery);
