import { Login, Register, SetPassword, ForgotPassword, ChooseAccount, Home } from '../screens'
import navigationStrings from '../constant/navigationStrings';

export default [{ name: navigationStrings.Login, component: Login },
{ name: navigationStrings.ChooseAccount, component: ChooseAccount },
{ name: navigationStrings.ForgotPassword, component: ForgotPassword },
{ name: navigationStrings.Register, component: Register },
{ name: navigationStrings.SetPassword, component: SetPassword },
{ name: navigationStrings.Home, component: Home }]