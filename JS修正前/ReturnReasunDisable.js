(() => {
    'use strict';
    kintone.events.on(['app.record.create.change.棄却理由', 'app.record.edit.change.棄却理由'], (event) => {
      let record = event.record;
      console.log(event);
      const user = kintone.getLoginUser();
      let username = user.name;
      console.log(username);
  
      const tableData = record['所属組織変更管理'].value;
      const lastRowIndex = tableData.length - 1;
      const lastRow = tableData[lastRowIndex].value;
  
      if (username !== "梅澤秀太") {
          lastRow.棄却理由.value = "";
          lastRow.棄却理由.disabled = true;
          alert("本部以外編集不可です。");
      }
      return event;
    });
  })();
