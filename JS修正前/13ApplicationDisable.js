(() => {
  "use strict";
  kintone.events.on(['app.record.create.change.異動前_本社長', 'app.record.edit.change.異動前_本社長'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return event;
  });

  kintone.events.on(['app.record.create.change.異動後_本社長', 'app.record.edit.change.異動後_本社長'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;

    return event;
  });

  kintone.events.on(['app.record.create.change.異動前_本社', 'app.record.edit.change.異動前_本社'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;

    return event;
  });

  kintone.events.on(['app.record.create.change.異動後_本社', 'app.record.edit.change.異動後_本社'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;

    return event;
  });

  kintone.events.on(['app.record.create.change.異動前_支社', 'app.record.edit.change.異動前_支社'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return event;
  });

  kintone.events.on(['app.record.create.change.異動後_支社', 'app.record.edit.change.異動後_支社'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return event;
  });

kintone.events.on(['app.record.create.change.変更理由', 'app.record.edit.change.変更理由'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return(event);
});

kintone.events.on(['app.record.create.change.その他_詳細', 'app.record.edit.change.その他_詳細'], function(event) {
  const tableData = event.record['所属組織変更管理'].value;
  const lastRowIndex = tableData.length - 1;
  const lastRow = tableData[lastRowIndex].value;
  lastRow['処理完了日'].disabled = true;
  return(event);
});

kintone.events.on(['app.record.create.change.棄却理由', 'app.record.edit.change.棄却理由'], function(event) {
  const tableData = event.record['所属組織変更管理'].value;
  const lastRowIndex = tableData.length - 1;
  const lastRow = tableData[lastRowIndex].value;
  lastRow['処理完了日'].disabled = true;
  return(event);
});

kintone.events.on(['app.record.create.change.申請状況', 'app.record.edit.change.申請状況'], function(event) {
  const tableData = event.record['所属組織変更管理'].value;
  const lastRowIndex = tableData.length - 1;
  const lastRow = tableData[lastRowIndex].value;
  lastRow['処理完了日'].disabled = true;
  return(event);
});

kintone.events.on(['app.record.create.change.支部長_異動前', 'app.record.edit.change.支部長_異動前'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return(event);
  });

kintone.events.on(['app.record.create.change.支部長_異動後', 'app.record.edit.change.支部長_異動後'], function(event) {
    const tableData = event.record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;
    lastRow['処理完了日'].disabled = true;
    return(event);
});
})();
