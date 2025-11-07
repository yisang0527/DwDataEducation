export default function CartList({ cart, deleteCartItem }) {
    return (
        <>
            <h3>장바구니</h3>

            <ul>
                {cart.map(({ id, name, price }) => {
                    return (
                        <>
                            <li key={id}>
                                <strong>상품명: {name}, </strong>

                                <span>가격:{price}원</span>

                                <button onClick={() => deleteCartItem(id)}>삭제</button>
                            </li>
                        </>
                    );
                })}
            </ul>
        </>
    );
}
