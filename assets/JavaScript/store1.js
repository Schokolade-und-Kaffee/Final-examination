var jsonData = [
    {
      "Name": "Clear 抗黃化透明防摔手機殼［透明］",
      "Text": "",
      "Price": 1020,
      "Image": "../../assets/image/plaincolor-transparencycase.png"
    },
    {
      "Name": "CrashGuard 邊框防摔手機殼［黑邊］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-blackborder.png"
    },
    {
      "Name": "CrashGuard 邊框防摔手機殼［白邊］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-whiteborder.png"
    },
    {
      "Name": "CrashGuard 邊框防摔手機殼［灰邊］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-greyborder.png"
    },
    {
      "Name": "CrashGuard 邊框防摔手機殼［紫邊］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-purpleborder.png"
    },
    {
      "Name": "CrashGuard 邊框防摔手機殼［黃邊］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-yellowborder.png"
    },
    {
      "Name": "DEVILCASE 惡魔防摔殼 AIR［黑］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-black.png"
    },
    {
      "Name": "DEVILCASE 惡魔防摔殼 AIR［藍］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-blue.png"
    },
    {
      "Name": "DEVILCASE 惡魔防摔殼 AIR［灰］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-grey.png"
    },
    {
      "Name": "DEVILCASE 惡魔防摔殼 AIR［烏龍奶］",
      "Text": "",
      "Price": 680,
      "Image": "../../assets/image/plaincolor-lightbrown.png"
    },
    {
      "Name": "MagSafe 鏡面手機殼［鏡面黑］",
      "Text": "",
      "Price": 880,
      "Image": "../../assets/image/plaincolor-mirroblack.png"
    },
    {
      "Name": "MagSafe 鏡面手機殼［鏡面金］",
      "Text": "",
      "Price": 880,
      "Image": "../../assets/image/plaincolor-mirrorgold.png"
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