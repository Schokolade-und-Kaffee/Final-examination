# Final-examination
For Final-examination.

首次加入編輯的行列的話，請從第一步做起。

第一步：
　　確認已經下載 Git 程式。
  　可以先執行到第三步後，輸入 `git -v` 確認有無出現版本資訊。有的話，基本上就沒問題。

第二步：
　　使用 VS code 開啟一個資料夾。（之後檔案會在此資料夾編輯。）

第三步：
　　開啟終端機（Terminal），在左上角的工具列的右邊數來第二個。
　　點開後，下方的區域也要記得選取終端機（Terminal）選項，預設畫面的可能會在除錯控制台（Debug Console）。

第四步：
　　依序輸入以下指令可以完成第一次的載入與上傳：
  ```
  　　　git init
  　　　git branch -m master main
  　　　git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
```
　　檔案出現後就可以開始編輯，然後上傳所需的指令為：
  ```
  　　　git config --global user.email "輸入你的電子郵件"
　　　　git config --global user.name "輸入你的暱稱"
　　　　git add .
　　　　git commit -m "輸入更新註記"
　　　　git push origin main
    ```
第五步：
　　未完待續。
