var jsonData = [
    {
      "Name": "DEVILCASE AirPods 保護殼［純黑］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-black.png"
    },
    {
      "Name": "DEVILCASE AirPods 保護殼［深藍］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-darkblue.png"
    },
    {
      "Name": "DEVILCASE AirPods 保護殼［可可］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-brown.png"
    },
    {
      "Name": "DEVILCASE AirPods 保護殼［奶茶］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-milktea.png"
    },
    {
      "Name": "DEVILCASE AirPods 保護殼［天藍］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-skyblue.png"
    },
    {
      "Name": "DEVILCASE AirPods 保護殼［紫］",
      "Text": "",
      "Price": 450,
      "Image": "../../assets/image/airpods-purple.png"
    },
    {
      "Name": "【獨家設計】CO.ME PlanetAirPods 防摔保護套［微笑豆豆與大菲］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-dogsheep.png"
    },
    {
      "Name": "【獨家設計】CO.ME Planet Airpods 保護套［栗子微笑打包］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-chestnut.png"
    },
    {
      "Name": "【獨家設計】Airpods 防摔保護套［小恐龍軟糖］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-dinosaur.png"
    },
    {
      "Name": "【獨家設計】Am I ugly 霧面 Airpods 保護套［悠閒BABY］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-chill.png"
    },
    {
      "Name": "【獨家設計】Am I ugly 霧面 Airpods 保護套［耍廢BABY］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-vegout.png"
    },
    {
      "Name": "【獨家設計】霧面 Airpods 保護套［復古日系小恐龍］",
      "Text": "",
      "Price": 590,
      "Image": "../../assets/image/airpods-vintage.png"
    },
    {
      "Name": "【獨家設計】防摔行李箱 AirPods 保護套［Smilie淡彩笑臉文字］",
      "Text": "",
      "Price": 490,
      "Image": "../../assets/image/airpods-lightcolor.png"
    },
    {
      "Name": "【獨家設計】防摔行李箱 AirPods 保護套［Smilie笑臉水磨石］",
      "Text": "",
      "Price": 490,
      "Image": "../../assets/image/airpods-smile.png"
    },
    {
      "Name": "【獨家設計】防摔行李箱 AirPods 保護套［Smilie塗鴉笑臉］",
      "Text": "",
      "Price": 490,
      "Image": "../../assets/image/airpods-toyselect.png"
    },
  
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