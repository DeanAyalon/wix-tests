import wixLocation from 'wix-location-frontend'
import {cart} from 'wix-stores-frontend'

// https://forum.wixstudio.com/t/create-a-direct-link-that-already-contains-the-discount-code/61202
const couponQuery = wixLocation.query.coupon
console.log({couponQuery})
if (couponQuery) cart.applyCoupon(couponQuery).then(console.log, console.error)
// Got coupon `TESTCOUPON` made, giving 10% off
// This is not working, for some reason resulting in an INVALID_FILTER error