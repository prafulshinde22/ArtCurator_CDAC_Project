import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { PageNotFoundComponentComponent } from './components/shared/page-not-found-component/page-not-found-component.component';
import { ForgotPasswordComponent } from './components/shared/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/shared/change-password/change-password.component';
import { UpdatePasswordComponent } from './components/shared/update-password/update-password.component';
import { UpdateEmailComponent } from './components/shared/update-email/update-email.component';
import { ChangeAddressComponent } from './components/shared/change-address/change-address.component';
import { UpdatePhoneComponent } from './components/shared/update-phone/update-phone.component';
import { UserService } from './services/user.service';
import { AboutusComponent } from './components/shared/aboutus/aboutus.component';
import { ContactusComponent } from './components/shared/contactus/contactus.component';
import { AddMoneyComponent } from './components/user/add-money/add-money.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { NavUserComponent } from './components/user/nav-user/nav-user.component';
import { NavSellerComponent } from './components/seller/nav-seller/nav-seller.component';
import { SellerAddArtComponent } from './components/seller/seller-add-art/seller-add-art.component';
import { MyinfoComponent } from './components/shared/myinfo/myinfo.component';
import { ViewmoneyComponent } from './components/shared/viewmoney/viewmoney.component';
import { SellerhomeComponent } from './components/seller/sellerhome/sellerhome.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NewcarouselComponent } from './newcarousel/newcarousel.component';
import { AddressService } from './services/address.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { WalletService } from './services/wallet.service';
import { SellerRemoveArtComponent } from './components/seller/seller-remove-art/seller-remove-art.component';
import { GetCartComponent } from './components/shopping-cart/cart/get-cart/get-cart.component';
import { RemoveCartComponent } from './components/shopping-cart/cart/remove-cart/remove-cart.component';
import { BuyerWalletComponent } from './components/user/buyer-wallet/buyer-wallet.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GetOrdersComponent } from './components/user/get-orders/get-orders.component';
import { SoldArtsComponent } from './components/seller/sold-arts/sold-arts.component';
import { UnsoldArtsComponent } from './components/seller/unsold-arts/unsold-arts.component';
import { SellerWalletComponent } from './components/seller/seller-wallet/seller-wallet.component';
import { LogoutComponent } from './components/shared/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponentComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent,
    ChangeAddressComponent,
    UpdatePhoneComponent,
    AboutusComponent,
    ContactusComponent,
    AddMoneyComponent,
    CarouselComponent,
    NavUserComponent,
    NavSellerComponent,
    SellerAddArtComponent,
    MyinfoComponent,
    ViewmoneyComponent,
    SellerhomeComponent,
    UserhomeComponent,
    HomeComponent,
    NewcarouselComponent,
    SellerRemoveArtComponent,
    GetCartComponent,
    RemoveCartComponent,
    BuyerWalletComponent,
    CheckoutComponent,
    GetOrdersComponent,
    SoldArtsComponent,
    UnsoldArtsComponent,
    SellerWalletComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AddressService, WalletService, ProductService, CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
