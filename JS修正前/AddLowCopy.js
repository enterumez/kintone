(function() {
    "use strict";
    // 行が追加されたとき、上のフィールドの「異動後_本社」「異動後_支社」「異動後_支社長」フィールドをコピー
    kintone.events.on(['app.record.create.change.所属組織変更管理', 'app.record.edit.change.所属組織変更管理'], function(event) {
      var record = event.record;
      var Table = record.所属組織変更管理.value;
      
      for (var i = 0; i < Table.length; i++) {
        // 異動先の行が2つ以上ある場合、一つ上の行の値をコピーする
        if (i > 0) {
          var prevRow = Table[i - 1].value;
          var currentRow = Table[i].value;
          
          currentRow.異動前_支社.value = prevRow.異動後_支社.value;
          currentRow.異動前_支社.lookup = true;
          currentRow.支部長_異動前.value = prevRow.支部長_異動後.value;
        }
      }
      
      return event;
    });
  })();