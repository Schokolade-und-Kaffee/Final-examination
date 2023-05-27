# Final-examination
For Final-examination.

## 首次加入編輯的行列的話，請從第一步做起。
### 指令中的角括弧（大小於）不用打。引號擇需要。

* 第一步：

    確認已經下載 Git 程式。

    可以先執行到第三步後，輸入 `git -v` 確認有無出現版本資訊。有的話，基本上就沒問題。

* 第二步：

    使用 VS code 開啟一個資料夾。（之後檔案會在此資料夾編輯。）

* 第三步：

    開啟終端機（Terminal），在左上角的工具列的右邊數來第二個。

    點開後，下方的區域也要記得選取終端機（Terminal）選項，預設畫面的可能會在除錯控制台（Debug Console）。

* 第四步：

    依序輸入以下指令可以完成第一次的載入與上傳：

    `git init`

        初始化。

    `git checkout -b <分支名稱>`

        將要上傳的檔案加入到電腦上 Git 程式的暫存區中。

        `-b` 是 branch 的縮寫，上述指令為 git branch 和 git checkout 的合體。

    `git remote add origin https://github.com/Schokolade-und-Kaffee/Final-examination.git`

        在電腦端的 Git 程式中，創建出與遠端儲存庫的連結。

    可以使用 `git remote -v` 來測試連接狀態。應該會顯示以下兩行：

    ```
    origin  https://github.com/Schokolade-und-Kaffee/Final-examination.git (fetch)
    origin  https://github.com/Schokolade-und-Kaffee/Final-examination.git (push) 
    ```

    ### 檔案出現後就可以開始編輯。
    
    可以透過 `git checkout <分支名稱>` 切換主機端的分支。或是你可以用滑鼠點左下角的分支選單切換已有的分支。

    
    然後上傳所需的指令為：

    `git config --global user.email "輸入你的電子郵件"`

        提供編輯者的電子郵件。

    `git config --global user.name "輸入你的暱稱"`

        提供編輯者名稱。

    `git add .`

        將要上傳的檔案加入到電腦上 Git 程式的暫存區中。

        若只有一個檔案要上傳的話，將 `.` 改成檔案名稱。

    `git commit -m "輸入更新註記"`

        加上註解。

    `git push origin <分支名稱>`

        推送剛剛暫存的檔案至遠端儲存庫的特定分支。

* 第五步：

    當別人也有更新遠端儲存庫時，應該比對一下各分支的版本差異。
    
    但這部分對初學者比較不直觀和習慣。所以直接到 Github 上看就好。記得與貢獻者交接一下內容和分支。

    ### 以下是如何從遠端讀取（pull）指定分支的資料到主機端：

    `git pull <remote> <branch>`

        <remote>：遠端儲存庫連結，https://github.com/Schokolade-und-Kaffee/Final-examination.git。

        <branch>；分支名稱，今要盡量皆以 main 分支做為載入的對象，然後載入或更新要通知大家。
        
        效果：會比較出有變更的檔案，然後取代。沒有動到的檔案皆保持不變。
        
    **注意：遠端的分支不等同於主機端的分支，即使同名，但不存在直接關係。載入時記得確定檔案完整、重要性和可有備份！**


    ### 以下是已經串好所有連接事項，只是簡單修修改改的推送（上傳）方式。

    `git init`

        初始化。

    `git add .`

        將要上傳的檔案加入到電腦上 Git 程式的暫存區中。

        若只有一個檔案要上傳的話，將 `.` 改成檔案名稱。

    `git commit -m "輸入更新註記"`

        加上註解。

    `git push origin <分支名稱>`

        推送剛剛暫存的檔案至遠端儲存庫的特定分支。

# 未完待續。
