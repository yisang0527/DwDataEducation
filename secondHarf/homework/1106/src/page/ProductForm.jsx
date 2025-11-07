export default function ProductForm({ name, price, setName, setPrice, addCart, }) {
    return (
        <>
            <label htmlFor="name">상품명 : </label>
            <input
                type="text"
                id="name"
                value={name}
                placeholder="상품명 입력란"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <br />

            <label htmlFor="price">가격 : </label>
            <input
                type="number"
                id="price"
                value={price}
                placeholder="가격 입력란"
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
            />
            <br />

            <button onClick={addCart}>담기</button>
        </>
    );
}
