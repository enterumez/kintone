//レコードの新規作成/編集画面を開いたとき、「所属変更管理_更新通知」「自動送信設定_各支社」のチェックボックスを空にする(誤送信防止)
(($) => {
    'use strict';
    kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event) => {
        let record = event.record;
        let checkbox3 = '各アプリデータ更新'
        record[checkbox3].value = [];
        return event;
    })
})(jQuery);