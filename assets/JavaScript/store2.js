var jsonData = [
    {
      "Name": "【獨家設計】太空寶寶旅行系列霧面防摔 iPhone 手機殼［太空旅行］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-spacetravel.png"
    },
    {
      "Name": "【獨家設計】太空寶寶旅行系列霧面防摔 iPhone 手機殼［太空月球］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-spacemoon.png"
    },
    {
      "Name": "【獨家設計】小小太空人月亮系列霧面防摔 iPhone 手機殼［太空星星］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-spacestar.png"
    },
    {
      "Name": "【獨家設計】蠟筆小恐龍系列全包 iPhone 手機殼［恐龍小花］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-flowerdinosaur.png"
    },
    {
      "Name": "【獨家設計】蠟筆小恐龍系列全包 iPhone 手機殼［恐龍生氣］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-maddinosaur.png"
    },
    {
      "Name": "【獨家設計】晚安小恐龍全包 iPhone 手機殼［恐龍晚安］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-goodnightdinosaur.png"
    },
    {
      "Name": "【獨家設計】Am I ugly 悠閒 BABY 系列全包 iPhone 手機殼［baby書本］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-babybook.png"
    },
    {
      "Name": "【獨家設計】Am I ugly 悠閒 BABY 系列全包 iPhone 手機殼［baby筆電］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-babynotebook.png"
    },
    {
      "Name": "【獨家設計】Am I ugly 悠閒 BABY 系列全包 iPhone 手機殼［baby熊］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-babybear.png"
    },
    {
      "Name": "【獨家設計】CO.ME Planet 社畜人蔘系列全氣囊防摔 iPhone 手機殼［社畜通勤］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-shachikucommuter.png"
    },
    {
      "Name": "【獨家設計】CO.ME Planet 社畜人蔘系列全氣囊防摔 iPhone 手機殼［社畜起床］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-shachikuwakeup.png"
    },
    {
      "Name": "【獨家設計】CO.ME Planet 社畜人蔘系列全氣囊防摔 iPhone 手機殼［社畜加班］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-shachikuovertime.png"
    },
    {
      "Name": "【獨家款】咖啡系系列霧面防摔 iPhone 手機殼［咖啡拿鐵］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-latte.png"
    },
    {
      "Name": "【獨家款】咖啡系系列霧面防摔 iPhone 手機殼［咖啡美式］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-americano.png"
    },
    {
      "Name": "【獨家款】不想上班極簡系列霧面防摔 iPhone 手機殼［倒數下班］",
      "Text": "",
      "Price": 690,
      "Image": "../../assets/image/design-offduty.png"
    }
  ];
  
  $(document).ready(function() {
    $(".productBox").click(function() {
      var index = $(this).data('index');
      var product = jsonData[index];
      
      // 更新詳情視窗中的內容
      $('#product-image').attr('src', product.Image);
      $('#product-name').text(product.Name);
      $('#product-text').text(product.Text);
      $('#product-price').text("＄" + product.Price + " TWD");
  
      // 顯示詳情視窗
      $('#product-modal').show();
    });
    
    // 點擊關閉按鈕時隱藏詳情視窗
    $('.close').click(function() {
      $('#product-modal').hide();
    });
  });