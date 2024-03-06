//レコードの新規作成/編集画面で「変更理由」が"その他"以外のとき、「その他_詳細」を編集不可にする。(テーブルに1行以上データがあるとき)
(($) => {
    'use strict';
  
    kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event) => {
      const record = event.record;
      const table = record.所属組織変更管理;
      const rows = table.value;
      let isApproved = false;

      if (rows.length > 0) {
      // テーブル内の"その他"の行を判定する
      for (const row of rows) {
        if (row.value.変更理由.value === 'その他') {
          isApproved = true;
          break;
        }
      }
  
      // その他_詳細の編集可否を設定する
      for (const row of rows) {
        const fields = row.value;
  
        if (isApproved && fields.変更理由.value === 'その他') {
          fields.その他_詳細.disabled = false;
        } else {
          fields.その他_詳細.disabled = true; 
        }
      }}
      return event;
    });
  })(jQuery);
