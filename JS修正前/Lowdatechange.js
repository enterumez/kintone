(() => {
    'use strict';
    kintone.events.on(['app.record.create.change.処理完了日', 'app.record.edit.change.処理完了日'], (event) => {
      let record = event.record;
      console.log(event);
      const user = kintone.getLoginUser();
      let username = user.name;
      console.log(username);
  
      const tableData = record['所属組織変更管理'].value;
      const lastRowIndex = tableData.length - 1;
      const lastRow = tableData[lastRowIndex].value;
  
      if (username !== "梅澤秀太" && username !== "山内　彩香" && username !== "濱田愛") {
          lastRow.処理完了日.value = "";
          lastRow.処理完了日.disabled = true;
          alert("本部以外編集不可です。");
      }
      return event;
    });
  })();
  