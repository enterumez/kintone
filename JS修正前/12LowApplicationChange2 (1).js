(() => {
    'use strict';
    kintone.events.on(['app.record.create.change.申請状況', 'app.record.edit.change.申請状況'], (event) => {
      // 「所属組織変更管理」フィールドに入力された最終行のデータを取得
      const tableData = event.record['所属組織変更管理'].value;
      const lastRowIndex = tableData.length - 1;
      const lastRow = tableData[lastRowIndex].value;
      let record = event.record;
      let checkbox3 = '各アプリデータ更新'
  
      if (!["承認済・処理中", "理事承認待ち", "処理完了", "棄却"].includes(lastRow['申請状況'].value) && lastRow['変更理由'].value === 'その他') {
        lastRow.異動前_支社.disabled = false;
        lastRow.異動後_支社.disabled = false;
        lastRow.変更理由.disabled = false;
        lastRow.その他_詳細.disabled = false;
        lastRow.支部長_異動後.disabled = false;
        lastRow.支部長_異動前.disabled = false;
        lastRow.処理完了日.value= "";
        lastRow.棄却理由.disabled = true;     
      } else if(!["承認済・処理中", "理事承認待ち", "処理完了", "棄却"].includes(lastRow['申請状況'].value) && lastRow['変更理由'].value !== 'その他'){
        lastRow.異動前_支社.disabled = false;
        lastRow.異動後_支社.disabled = false;
        lastRow.変更理由.disabled = false;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = false;
        lastRow.支部長_異動前.disabled = false;
        lastRow.処理完了日.value= "";
        lastRow.棄却理由.disabled = true;
      } else if(lastRow['申請状況'].value === '理事承認待ち'){
        lastRow.異動前_支社.disabled = true;
        lastRow.異動後_支社.disabled = true;
        lastRow.変更理由.disabled = true;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = true;
        lastRow.支部長_異動前.disabled = true;
        lastRow.処理完了日.value= "";
        lastRow.棄却理由.disabled = true;
      } else if(lastRow['申請状況'].value === '棄却'){
        const hiduke = new Date();
        var year = hiduke.getFullYear();
        var month = hiduke.getMonth()+1;
        var day = hiduke.getDate();
        const todayhiduke = (year+"-"+month+"-"+day);
        lastRow.異動前_支社.disabled = true;
        lastRow.異動後_支社.disabled = true;
        lastRow.変更理由.disabled = true;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = true;
        lastRow.支部長_異動前.disabled = true;
        lastRow.棄却理由.disabled = false;
        lastRow.処理完了日.value= todayhiduke;
      } else if(lastRow['申請状況'].value === '承認済・処理中' && lastRow['異動後_本社'].value !== '' && lastRow['異動後_支社'].value !== '' && lastRow['支部長_異動後'].value !== '') {
        record[checkbox3].value[0] = '保存後、各アプリのデータを更新する';
        alert("各アプリデータ更新がオンになりました。保存後、会員番号をキーに各アプリのデータが更新されます。データを更新しない場合は、チェックをオフにしてから保存してください。")
        event.record['Branch'].value = lastRow.異動後_支社.value;
          event.record['組織選択'].value = lastRow.閲覧可能組織_支社.value;
          event.record['ドロップダウン_5'].value = lastRow.異動後_本社.value;
          event.record['文字列__1行__39'].value = lastRow.支部長_異動後.value;
          event.record['閲覧可能組織支社_他アプリ更新用'].value = lastRow.異動後_支社.value;
          record['閲覧可能組織支社_他アプリ更新用'].lookup = true; 
          lastRow.異動前_支社.disabled = true;
          lastRow.異動後_支社.disabled = true;
          lastRow.変更理由.disabled = true;
          lastRow.その他_詳細.disabled = true;
          lastRow.支部長_異動後.disabled = true;
          lastRow.支部長_異動前.disabled = true;
          lastRow.処理完了日.value= "";
          lastRow.棄却理由.disabled = true;
      }　else if(lastRow['申請状況'].value === '承認済・処理中' && lastRow['異動後_本社'].value !== '' && lastRow['異動後_支社'].value !== '' && lastRow['支部長_異動後'].value === '') {
        record[checkbox3].value[0] = '保存後、各アプリのデータを更新する';
        alert("各アプリデータ更新がオンになりました。保存後、会員番号をキーに各アプリのデータが更新されます。データを更新しない場合は、チェックをオフにしてから保存してください。")
        event.record['Branch'].value = lastRow.異動後_支社.value;
        event.record['組織選択'].value = lastRow.閲覧可能組織_支社.value;
        event.record['ドロップダウン_5'].value = lastRow.異動後_本社.value;
        event.record['閲覧可能組織支社_他アプリ更新用'].value = lastRow.異動後_支社.value;
        record['閲覧可能組織支社_他アプリ更新用'].lookup = true; 
        lastRow.異動前_支社.disabled = true;
        lastRow.異動後_支社.disabled = true;
        lastRow.変更理由.disabled = true;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = true;
        lastRow.支部長_異動前.disabled = true;
        lastRow.処理完了日.value= "";
        lastRow.棄却理由.disabled = true;
    　}　else if(lastRow['申請状況'].value === '承認済・処理中' && lastRow['異動後_本社'].value !== '' && lastRow['異動後_支社'].value === '' && lastRow['支部長_異動後'].value === '') {
        record[checkbox3].value[0] = '保存後、各アプリのデータを更新する';
        alert("各アプリデータ更新がオンになりました。保存後、会員番号をキーに各アプリのデータが更新されます。データを更新しない場合は、チェックをオフにしてから保存してください。")
        event.record['ドロップダウン_5'].value = lastRow.異動後_本社.value;
        lastRow.異動前_支社.disabled = true;
        lastRow.異動後_支社.disabled = true;
        lastRow.変更理由.disabled = true;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = true;
        lastRow.支部長_異動前.disabled = true;
        lastRow.処理完了日.value= "";
        lastRow.棄却理由.disabled = true;
      } else if(lastRow['申請状況'].value === '処理完了'){
        const hiduke = new Date();
        var year = hiduke.getFullYear();
        var month = hiduke.getMonth()+1;
        var day = hiduke.getDate();
        const todayhiduke = (year+"-"+month+"-"+day);
        lastRow.異動前_支社.disabled = true;
        lastRow.異動後_支社.disabled = true;
        lastRow.変更理由.disabled = true;
        lastRow.その他_詳細.disabled = true;
        lastRow.支部長_異動後.disabled = true;
        lastRow.支部長_異動前.disabled = true;
        lastRow.処理完了日.value= todayhiduke;
        lastRow.棄却理由.disabled = true;
      }
  return event;
  　});
  })();