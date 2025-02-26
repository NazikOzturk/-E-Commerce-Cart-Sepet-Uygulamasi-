import elements from "./helpers.js";

// ! Db.json'a istek atarak verileri alan fonksiyon

const fetchProducts = async () => {
  try {
    const res = await fetch("db.json");
    const data = await res.json();

    // eğer bir sıkıntı varsa fırlat
    if (!res.ok) {
      throw new Error("işlem sırasında bir hata oluştu");
    }
    // hata yoksa datayı dönder
    return data;
  } catch (err) {
    console.log(`HATA ${err}`);
    return [];
  }
};

// ürünleri render eden fonksiyon

const renderProducts = (products, addToCartCallBack) => {
  // Dışarıdan parametre olarak alınan products değerini dönerek bir html oluşturur bu html ise productList içerisine aktarır

  elements.productList.innerHTML = products
    .map(
      (product) => ` <div class="product">
          
          <img src="${product.image}" class="product-image" alt="product-image" />

          
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a  class="add-to-cart" data-id='${product.id}'>Add to cart</a>
          </div>
        </div>`
    )
    .join("");
  // elde edilen veri bir dizi olduğundan ve default olarak virgülle ayırdığından boşluğa göre ayırması için güncelledik

  //classı add-to-cart olan elemanı seç

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  // querySelectorAll metodu erişilen elemanları bir dizi şeklinde döndürdüğünden her bir elemana ayrı ayrı erişiyoruz çünkü diziye erişemeyiz

  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];

    //elde edilen tüm butonlara olay izleyicisi ekle
    addToCartButton.addEventListener("click", addToCartCallBack);
  }
};
export { fetchProducts, renderProducts };
