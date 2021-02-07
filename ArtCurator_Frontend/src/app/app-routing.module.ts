
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SellerhomeComponent } from "./components/seller/sellerhome/sellerhome.component"
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/shared/login/login.component'
import { RegisterComponent } from './components/shared/register/register.component'
import { PageNotFoundComponentComponent } from './components/shared/page-not-found-component/page-not-found-component.component'
import { ForgotPasswordComponent } from "./components/shared/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./components/shared/change-password/change-password.component";
import { UpdatePasswordComponent } from "./components/shared/update-password/update-password.component";
import { ChangeAddressComponent } from "./components/shared/change-address/change-address.component";
import { UpdateEmailComponent } from "./components/shared/update-email/update-email.component";
import { UpdatePhoneComponent } from "./components/shared/update-phone/update-phone.component";
import { ContactusComponent } from "./components/shared/contactus/contactus.component";
import { AboutusComponent } from "./components/shared/aboutus/aboutus.component";
import { AddMoneyComponent } from "./components/user/add-money/add-money.component";
import { ViewmoneyComponent } from "./components/shared/viewmoney/viewmoney.component";
import { MyinfoComponent } from "./components/shared/myinfo/myinfo.component";
import { SellerAddArtComponent } from "./components/seller/seller-add-art/seller-add-art.component";
import { SellerRemoveArtComponent } from './components/seller/seller-remove-art/seller-remove-art.component'
import { UserhomeComponent } from './components/user/userhome/userhome.component'
import { CartComponent } from './components/shopping-cart/cart/cart.component'
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component'
import { GetCartComponent } from './components/shopping-cart/cart/get-cart/get-cart.component'
import { RemoveCartComponent } from './components/shopping-cart/cart/remove-cart/remove-cart.component'
import { BuyerWalletComponent } from './components/user/buyer-wallet/buyer-wallet.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { HomeComponent } from './components/shared/home/home.component'
import { GetOrdersComponent } from './components/user/get-orders/get-orders.component'
import { SoldArtsComponent } from './components/seller/sold-arts/sold-arts.component'
import { UnsoldArtsComponent } from './components/seller/unsold-arts/unsold-arts.component'
import { SellerWalletComponent } from './components/seller/seller-wallet/seller-wallet.component'
import { LogoutComponent } from './components/shared/logout/logout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'updatePassword', component: UpdatePasswordComponent},
  { path: 'changeAddress', component: ChangeAddressComponent},
  { path: 'updateEmail', component: UpdateEmailComponent},
  { path: 'updatePhone', component: UpdatePhoneComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'addmoney', component: AddMoneyComponent },
  { path: 'bwallet', component: BuyerWalletComponent },
  { path: 'swallet', component: SellerWalletComponent },
  { path: 'myinfo', component: MyinfoComponent },
  { path: 'selleraddart', component: SellerAddArtComponent },
  { path: 'sellerhome', component: SellerhomeComponent },
  { path: 'removeart', component: SellerRemoveArtComponent },
  { path: 'buyerhome', component: UserhomeComponent },
  { path: 'cart', component: GetCartComponent},
  { path: 'removefromcart', component:RemoveCartComponent},
  { path: 'order', component:CheckoutComponent},
  { path: 'home', component:HomeComponent},
  { path: 'myorders', component:GetOrdersComponent},
  { path: 'soldarts', component:SoldArtsComponent},
  { path: 'unsoldarts', component:UnsoldArtsComponent},
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponentComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
