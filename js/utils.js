import elements from "./helpers.js";

//local storage'e ekleme yapan fonksiyon
const saveToLocalStorage = (cart) => {
  //dışarıdan verilen elemanı stringe çevir, local'e ekle
  localStorage.setItem("cart", JSON.stringify(cart));
};

// localden eleman çağıran fonksiyon
const getFromLocalStorage = () => {
  // cart keyindeki tüm elemanları localstoragedan al
  const strData = localStorage.getItem("cart");

  //eğer strData varsa bunu jsonparse ile dönüştür return et fakat yoksa boş dizi return et
  return strData ? JSON.parse(strData) : [];
};

// sepet toplamını hesaplayan fonksiyon

const calculateCartTotal = (cart) => {
  // carttaki ürünlerin miktar ve fiyatını çarparak toplamsonucu elde et

  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //  reduce ==> Bir dizi üzerindeki tüm elemanları dönerek bir işleme tabi tutar.Bu metot belirtilen işlevi gerçekleştirdikten sonra geriye toplu bir sonuç döndürür

  //  Bu metot diziAdı.reduce((1,2)=>{},3) şeklinde kullanılır Buradaki 1.değer toplam sonucun aktarılacağı bir değişkendir 2.değerse currentValue'ya karşılık gelir.Buda her dönülen elemanın değerini alır

  //  reduce'un 3. parametresi bir başlangıç değeri vardır. Bu değer, reduce'un başladığında dizi elemanları dönmek için ilk değerdir. Bu değer varsayılan olarak 0'dır.
};

const updateCartIcon = (cart) => {
  // sepetteki toplam ürün miktarını hesapla

  let totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  //sepetteki ürün miktarını dinamik şekilde render et
  elements.icon.setAttribute("data-quantity", totalQuantity);
  //setattribute'ü bir elemana özellik eklemek için kullanıyoruz
};

export {
  saveToLocalStorage,
  getFromLocalStorage,
  calculateCartTotal,
  updateCartIcon,
};
