(() => {
  'use strict';
  kintone.events.on(['app.record.create.change.申請状況', 'app.record.edit.change.申請状況'], (event) => {
    let record = event.record;
    console.log(event);
    const user = kintone.getLoginUser();
    let username = user.name;
    console.log(username);

    const tableData = record['所属組織変更管理'].value;
    const lastRowIndex = tableData.length - 1;
    const lastRow = tableData[lastRowIndex].value;

    if (username !== "梅澤秀太") {
      if (["承認済・処理中", "理事承認待ち", "処理完了", "棄却"].includes(lastRow['申請状況'].value)) {
        lastRow.申請状況.value = "申請中";
        alert("本部以外のユーザーは「申請中」以外には変更できません。");
      }
    }
    return event;
  });
})();
