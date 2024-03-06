//所属組織変更管理テーブルの行が追加されたとき、[「申請状況」が"申請中"または空欄且つ「変更理由」がその他]以外のとき、当該行のその他_詳細を編集不可にする。
(() => {
    "use strict";

    kintone.events.on(['app.record.create.change.所属組織変更管理', 'app.record.edit.change.所属組織変更管理'], function(event) {
        const record = event.record;
        const table = record.所属組織変更管理;
        const rows = table.value;
        let isApproved = false;
    
        for (const row of rows) {
          if (row.value.変更理由.value === 'その他' ) {
            isApproved = true;
            break;
          }
        }
    
        for (const row of rows) {
          const fields = row.value;
    
          if (fields.変更理由.value === 'その他' && fields.申請状況.value === '申請中' || fields.申請状況.value ==='') {
            fields.その他_詳細.disabled = false;
          } else {
            fields.その他_詳細.disabled = true; 
          }
        }
        return event;
      });
    })();