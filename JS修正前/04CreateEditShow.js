//レコードの新規作成/編集画面で「申請状況」が"理事承認待ち"・"承認済・処理中"・"処理完了"のとき、当該行を編集不可にする。(テーブルに1行以上データがあるとき)
(($) => {
    'use strict';
    kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event) => {
      const record = event.record;
      const table = record.所属組織変更管理;
      const rows = table.value;
      let isApproved = false;
  
      if (rows.length > 0) {
        // テーブル内の"理事承認待ち"・"承認済・処理中"・"処理完了"の行を判定する
      for (const row of rows) {
        if (row.value.申請状況.value === '承認済・処理中') {
          isApproved = true;
          break;
        }
      }
  
      // テーブル全体の編集可否を設定する
      for (const row of rows) {
        const fields = row.value;
  
        // 承認済行は編集不可にする
        if (isApproved && fields.申請状況.value === '承認済・処理中' || row.value.申請状況.value === '理事承認待ち' || row.value.申請状況.value === '処理完了' || row.value.申請状況.value === '棄却') {
          fields.異動前_支社.disabled = true;
          fields.異動後_支社.disabled = true;
          fields.変更理由.disabled = true;
          fields.その他_詳細.disabled = true;
          fields.支部長_異動後.disabled = true;
          fields.支部長_異動前.disabled = true;
          fields.処理完了日.disabled = true;
          fields.棄却理由.disabled = true;
        } else {
          fields.異動前_支社.disabled = false;
          fields.異動後_支社.disabled = false;
          fields.変更理由.disabled = false;
          fields.支部長_異動後.disabled = false;
          fields.支部長_異動前.disabled = false;
          fields.処理完了日.disabled = false;
          fields.棄却理由.disabled = false;
        }
      }}
      return event;
    });
  })(jQuery);
  