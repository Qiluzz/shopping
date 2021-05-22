import  React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../store/actions/cart.actions'


class Cart extends Component{

    componentDidMount(){
        const {loadCarts} = this.props
        loadCarts()
    }

    changeProductNumber(cid, event){
        const {
            changeServiceProductNumber
        } = this.props
        // 获取商品的最新数量
        const count = event.target.value
        //向服务器端发送请求
        changeServiceProductNumber({cid, count})

    }
    render(){
        const {
            carts,
            deleteCart,
            deleteProductFormCart,
            changeServiceProductNumber
        } = this.props
        return(
        <section className="container content-section">
            <h2 className="section-header">购物车</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">商品</span>
                <span className="cart-price cart-header cart-column">价格</span>
                <span className="cart-quantity cart-header cart-column">数量</span>
            </div>
           
            <div className="cart-items">
                {
                    carts && carts.map(cart =>(
                    <div className="cart-row" key={cart.id}>
                        <div className="cart-item cart-column">
                            < img className = "cart-item-image"
                            src = {
                                    `http://localhost:3005${cart.thumbnail}`} width="100" height="100" />
                            <span className="cart-item-title">{cart.title}</span>
                        </div>
                        <span className="cart-price cart-column">￥{cart.price}</span>
                        <div className="cart-quantity cart-column">
                            < input onChange = {
                                (e) => this.changeProductNumber(cart.id, e)
                            }
                            className = "cart-quantity-input"
                            value = {
                                cart.count
                            }
                            type = "number" / >
                            <button onClick={()=> deleteProductFormCart(cart.id)} className="btn btn-danger" type="button">删除</button>
                        </div>
                    </div>
                    ))
                }
               
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">总价</strong>
            <span className="cart-total-price">￥{
                carts.reduce((total,product)=>{
                    return total += product.count * product.price
                },0)
            }</span>
            </div>
        </section>
        )
    }
}
const mapStateToProps =state=>({
    carts:state.carts
})

const mapDispatchToProps = dispatch => bindActionCreators(cartActions,dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Cart)