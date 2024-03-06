//「変更理由」が変更されたとき、値が"その他"なら「その他_詳細」は編集可能。"その他"以外のときは「その他_詳細」は編集不可にする。
(() => {
'use strict';
kintone.events.on(['app.record.create.change.変更理由', 'app.record.edit.change.変更理由'], (event) => {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;

    const fields = event.record['所属組織変更管理'].value[lastRowIndex].value;

    if (lastRow.変更理由.value === 'その他') {
      fields.その他_詳細.disabled = false;
    } else {
      fields.その他_詳細.disabled = true; 
    }

    return event;
});
})();
  